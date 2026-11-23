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

    <a :href="work.links[0].url" target="_blank" rel="noopener noreferrer" class="work-cover-link">
      <img :src="work.cover" :alt="work.title + ' 页面截图'" class="work-cover" />
    </a>

    <div class="work-body">
      <p v-for="(paragraph, index) in work.paragraphs" :key="index">{{ paragraph }}</p>
      <p v-if="work.tech">{{ work.tech }}</p>
    </div>

    <div v-if="showGallery && work.gallery" class="work-gallery">
      <a
        v-for="(image, index) in work.gallery"
        :key="image"
        :href="work.links[0].url"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="image" :alt="`${work.title} 页面截图 ${index + 1}`" />
      </a>
    </div>

    <div class="work-tags">
      <span v-for="tag in work.tags" :key="tag" class="tag">{{ tag }}</span>
      <a :href="work.links[0].url" target="_blank" rel="noopener noreferrer" class="view-link">访问网站 →</a>
    </div>
  </article>
</template>
