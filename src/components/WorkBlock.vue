<script setup>
defineProps({
  work: { type: Object, required: true },
  showGallery: { type: Boolean, default: false },
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
      :src="work.videoSrc"
      :poster="work.cover"
      :aria-label="work.title + ' 视频'"
      class="work-cover work-video"
      controls
      preload="none"
      playsinline
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
