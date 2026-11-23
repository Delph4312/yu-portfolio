<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { works } from '../data/works'

const route = useRoute()
const router = useRouter()
const keyword = ref('')
const focused = ref(false)
const searchRoot = ref(null)

const results = computed(() => {
  const q = keyword.value.trim().toLowerCase()
  if (!q) return []
  return works.filter((work) =>
    [work.title, work.category, ...work.tags, ...work.paragraphs]
      .join(' ')
      .toLowerCase()
      .includes(q),
  )
})

function submit() {
  const q = keyword.value.trim()
  focused.value = false
  router.push({ name: 'category', query: q ? { q } : {} })
}

function closeOnOutside(event) {
  if (searchRoot.value && !searchRoot.value.contains(event.target)) {
    focused.value = false
  }
}

onMounted(() => document.addEventListener('click', closeOnOutside))
onBeforeUnmount(() => document.removeEventListener('click', closeOnOutside))
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <router-link to="/" class="logo" aria-label="屿。首页">
        <span class="logo-text">屿。</span>
      </router-link>

      <nav class="main-nav" aria-label="主导航">
        <router-link to="/" :class="{ active: route.name === 'home' }">首页</router-link>
        <router-link to="/category" :class="{ active: route.name === 'category' }">分类</router-link>
        <router-link to="/about" :class="{ active: route.name === 'about' }">关于</router-link>
      </nav>

      <div class="search-wrap" ref="searchRoot">
        <form class="search-box" @submit.prevent="submit" role="search">
          <input
            v-model="keyword"
            type="search"
            placeholder="搜索"
            aria-label="搜索作品"
            @focus="focused = true"
          />
          <button type="submit" aria-label="搜索">
            <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
              <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="2" />
              <line x1="15.5" y1="15.5" x2="21" y2="21" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
        </form>
        <div v-if="focused && keyword.trim()" class="search-results">
          <p v-if="!results.length" class="search-empty">没有找到相关作品</p>
          <template v-else>
            <a
              v-for="work in results"
              :key="work.id"
              :href="work.links[0].url"
              target="_blank"
              rel="noopener noreferrer"
              class="search-result"
            >
              <span>{{ work.title }}</span>
              <small>{{ work.category }} · {{ work.date }}</small>
            </a>
            <button type="button" class="search-all" @click="submit">查看分类页全部结果 →</button>
          </template>
        </div>
      </div>
    </div>
  </header>
</template>
