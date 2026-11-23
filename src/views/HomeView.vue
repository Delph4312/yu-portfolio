<script setup>
import WorkBlock from '../components/WorkBlock.vue'
import { works } from '../data/works'

const game = works.find((work) => work.category === '游戏')
const chengyi = works.find((work) => work.id === 'chengyi-pavilion')
</script>

<template>
  <div class="home-page">
    <section class="hero">
      <h1 class="hero-title hero-title--stacked">
        <span>作品</span>
        <span>集</span>
      </h1>
    </section>

    <main class="content">
      <div class="section-divider">
        <router-link :to="{ name: 'category', query: { cat: '游戏' } }" title="查看游戏分类">游戏</router-link>
      </div>
      <WorkBlock :work="game" />

      <div class="section-divider">
        <router-link :to="{ name: 'category', query: { cat: '网站' } }" title="查看网站分类">网站</router-link>
      </div>
      <WorkBlock :work="chengyi" />
    </main>
  </div>
</template>
