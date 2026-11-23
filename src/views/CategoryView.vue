<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import WorkBlock from '../components/WorkBlock.vue'
import { works } from '../data/works'

const route = useRoute()
const router = useRouter()
const tabs = ['网站', '游戏', '全部']
const activeTab = ref('网站')

const query = computed(() => String(route.query.q || '').trim().toLowerCase())

watch(
  query,
  (value) => {
    if (value) activeTab.value = '全部'
  },
  { immediate: true },
)

const filteredWorks = computed(() => {
  let list = works
  if (activeTab.value !== '全部') {
    list = list.filter((work) => work.category === activeTab.value)
  }
  if (query.value) {
    list = list.filter((work) =>
      [work.title, work.category, ...work.tags, ...work.paragraphs]
        .join(' ')
        .toLowerCase()
        .includes(query.value),
    )
  }
  return list
})

const heroTitle = computed(() =>
  activeTab.value === '全部' ? '作品' : activeTab.value,
)

function clearSearch() {
  router.push({ name: 'category' })
}
</script>

<template>
  <div class="category-page">
    <section class="hero">
      <h1 class="hero-title">{{ heroTitle }}</h1>
    </section>

    <main class="content">
      <div class="category-tabs" role="tablist" aria-label="作品分类">
        <button
          v-for="tab in tabs"
          :key="tab"
          type="button"
          role="tab"
          :aria-selected="activeTab === tab"
          :class="{ active: activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </button>
      </div>

      <p v-if="query" class="search-hint">
        搜索“{{ route.query.q }}”的结果
        <button type="button" @click="clearSearch">清除</button>
      </p>

      <p v-if="!filteredWorks.length" class="empty-hint">没有找到相关作品，试试其他关键词。</p>

      <WorkBlock
        v-for="work in filteredWorks"
        :key="work.id"
        :work="work"
        :show-gallery="work.id === 'chengyi-pavilion'"
      />
    </main>
  </div>
</template>
