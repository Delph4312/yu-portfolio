<template>
  <div class="app-shell">
    <SiteHeader />
    <div class="page-body">
      <router-view />
    </div>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
