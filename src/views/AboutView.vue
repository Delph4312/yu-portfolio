<script setup>
import { projects } from '../data/works'
</script>

<template>
  <div class="about-page">
    <section class="hero">
      <h1 class="hero-title">关于</h1>
    </section>

    <main class="content about-content">
      <p class="about-lead">你好，这里是屿。</p>
      <p>
        一个记录学习与创作过程的小站。这里收录了网页解谜游戏、网站前端设计、平面设计与视频作品，从 UI 原型、视觉稿到页面搭建与动态影像，完整呈现每个项目从想法到成品的过程。
      </p>
      <p>
        常用工具与技能包括 Figma、Adobe Illustrator、剪映、AE、AU、VS Code、Vue 3、Vite、Vue Router、HTML5、CSS3 与 JavaScript。网页项目源码均托管于 GitHub，点击下面的链接可以访问在线演示或查看仓库。
      </p>

      <div class="section-divider"><span>技能</span></div>
      <div class="skill-list">
        <span>UI 设计 / Figma</span>
        <span>Vue 3 / Vite</span>
        <span>Vue Router</span>
        <span>HTML5 / CSS3</span>
        <span>JavaScript</span>
        <span>响应式布局</span>
        <span>Adobe Illustrator</span>
        <span>剪映 / AE / AU</span>
      </div>

      <div class="section-divider"><span>项目</span></div>
      <ul class="project-list">
        <li v-for="project in projects" :key="project.name">
          <strong>{{ project.name }}</strong>
          <span>
            <a :href="project.demo" target="_blank" rel="noopener noreferrer">在线演示</a>
            <a :href="project.url" target="_blank" rel="noopener noreferrer">GitHub 源码</a>
          </span>
        </li>
      </ul>

      <p class="about-contact">
        欢迎通过 <a href="https://github.com/Delph4312" target="_blank" rel="noopener noreferrer">GitHub</a> 交流。
      </p>
    </main>
  </div>
</template>
