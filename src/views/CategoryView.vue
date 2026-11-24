<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import WorkBlock from '../components/WorkBlock.vue'
import { works } from '../data/works'

const route = useRoute()
const router = useRouter()
const tabs = ['全部', '游戏', '网站', '平面', '视频']
const defaultTab = '网站'
const activeTab = ref(defaultTab)

const catQuery = computed(() => String(route.query.cat || '').trim())
const query = computed(() => String(route.query.q || '').trim().toLowerCase())

watch(
  [catQuery, query],
  ([cat, q]) => {
    if (q) activeTab.value = '全部'
    else if (tabs.includes(cat)) activeTab.value = cat
    else activeTab.value = defaultTab
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

function selectTab(tab) {
  activeTab.value = tab
  router.replace({ name: 'category', query: { cat: tab } })
}

function clearSearch() {
  router.push({ name: 'category', query: { cat: activeTab.value } })
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
          @click="selectTab(tab)"
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
        :show-gallery="Boolean(work.gallery)"
      />
    </main>
  </div>
</template>
