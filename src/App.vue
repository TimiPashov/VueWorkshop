<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import CatalogPageVue from './views/Catalog-page.vue'
// import ProfilePage from './components/ProfilePage.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Hello world!</h1>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/catalog">Catalog</RouterLink>
        <RouterLink to="/profile">Profile</RouterLink>
      </nav>
    </div>
  </header>
  <!-- <CatalogPageVue />
  <ProfilePage /> -->
  <Suspense>
    <RouterView />
  </Suspense>
</template>

<style scoped></style>
