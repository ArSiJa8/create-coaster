<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
  <div>
    <main>
      <NuxtPage />
    </main>
    <div class="fan-disclaimer">
      This is a fan website
    </div>
  </div>
</template>

<style>
.fan-disclaimer {
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-family: 'minecraftia', sans-serif;
  color: var(--neutral-400);
  font-size: 12px;
  z-index: 100;
  pointer-events: none;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .fan-disclaimer {
    bottom: 10px;
    right: 10px;
    font-size: 10px;
  }
}
</style>
