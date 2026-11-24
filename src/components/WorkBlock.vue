<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  work: { type: Object, required: true },
  showGallery: { type: Boolean, default: false },
})

const videoEl = ref(null)
let hlsInstance = null
let observer = null
let fallbackDone = false
let networkRetries = 0

const resolve = (path) => new URL(path, document.baseURI).href

// HLS 不可用时退回单文件 MP4（画质更高，但缓冲更久）
function fallbackToMp4() {
  if (fallbackDone) return
  fallbackDone = true
  const el = videoEl.value
  if (!el) return
  if (hlsInstance) {
    try {
      hlsInstance.destroy()
    } catch (e) {
      /* noop */
    }
    hlsInstance = null
  }
  if (props.work.videoSrc) {
    el.src = resolve(props.work.videoSrc)
    el.load()
  }
}

async function setupPlayer() {
  const el = videoEl.value
  if (!el) return

  if (!props.work.hlsSrc) {
    if (props.work.videoSrc) el.src = resolve(props.work.videoSrc)
    return
  }

  const src = resolve(props.work.hlsSrc)
  try {
    const { default: Hls } = await import('hls.js/light')
    if (Hls.isSupported()) {
      hlsInstance = new Hls({
        maxBufferLength: 15,
        maxMaxBufferLength: 30,
        backBufferLength: 15,
        enableWorker: true,
        lowLatencyMode: false,
      })
      hlsInstance.on(Hls.Events.ERROR, (_event, data) => {
        if (!data.fatal) return
        if (data.type === Hls.ErrorTypes.NETWORK_ERROR && networkRetries < 2) {
          networkRetries += 1
          hlsInstance?.startLoad()
        } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
          try {
            hlsInstance?.recoverMediaError()
          } catch (e) {
            fallbackToMp4()
          }
        } else {
          fallbackToMp4()
        }
      })
      hlsInstance.loadSource(src)
      hlsInstance.attachMedia(el)
    } else if (el.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari 原生 HLS
      el.addEventListener('error', fallbackToMp4, { once: true })
      el.src = src
    } else {
      fallbackToMp4()
    }
  } catch (e) {
    fallbackToMp4()
  }
}

// 视频滚到附近才开始加载，避免首屏一次性拉取所有切片
onMounted(() => {
  if (!videoEl.value) return
  if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer?.disconnect()
          observer = null
          setupPlayer()
        }
      },
      { rootMargin: '300px' },
    )
    observer.observe(videoEl.value)
  } else {
    setupPlayer()
  }
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
  if (hlsInstance) {
    try {
      hlsInstance.destroy()
    } catch (e) {
      /* noop */
    }
    hlsInstance = null
  }
})
</script>

<template>
  <article class="work-block">
    <h2 class="work-title">{{ work.title }}</h2>
    <div v-if="(work.links && work.links.length) || work.date" class="work-meta">
      <div v-if="work.links && work.links.length" class="work-links">
        <a
          v-for="link in work.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="work-link"
        >
          {{ link.label }}
        </a>
      </div>
      <time v-if="work.date" class="work-date">{{ work.date }}</time>
    </div>

    <video
      v-if="work.videoSrc"
      ref="videoEl"
      :poster="work.cover"
      :aria-label="work.title + ' 视频'"
      class="work-cover work-video"
      controls
      preload="none"
      playsinline
      webkit-playsinline
    ></video>
    <img
      v-else
      :src="work.cover"
      :alt="work.title + ' 作品预览'"
      :class="['work-cover', { 'work-cover--tall': work.tallCover }]"
    />

    <div class="work-body">
      <p v-for="(paragraph, index) in work.paragraphs" :key="index">{{ paragraph }}</p>
      <p v-if="work.tech">{{ work.tech }}</p>
    </div>

    <div v-if="showGallery && work.gallery" class="work-gallery">
      <img
        v-for="(image, index) in work.gallery"
        :key="index"
        :src="image"
        :alt="`${work.title} 页面截图 ${index + 1}`"
      />
    </div>

    <div class="work-tags">
      <span v-for="tag in work.tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </article>
</template>
