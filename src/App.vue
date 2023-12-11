<template>
  <header v-if="isAuthenticated">
    <div class="container mx-auto">
      <HeaderTop></HeaderTop>
    </div>
  </header>
<Suspense>
  <RouterView />
  <template #fallback>
    Store are downloading...
  </template>
</Suspense>
  
  <footer v-if="isAuthenticated">
    <div class="container mx-auto">
      
    </div>    
  </footer>
  
</template>

<style scoped lang="scss" >

</style>
<script setup lang="ts">
import HeaderTop from './components/Header.vue'

import { isAuthenticated } from '@/composition/auth';
</script>