<script setup>
defineProps({
  work: { type: Object, required: true },
  showGallery: { type: Boolean, default: false },
})
</script>

<template>
  <article class="work-block">
    <h2 class="work-title">{{ work.title }}</h2>
    <div class="work-meta">
      <div class="work-links">
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
      <time class="work-date">{{ work.date }}</time>
    </div>

    <img :src="work.cover" :alt="work.title + ' 页面截图'" class="work-cover" />

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
