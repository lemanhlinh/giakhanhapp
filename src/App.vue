<template>
  <header v-if="userStore.isAuthorized">
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
  
  <footer v-if="userStore.isAuthorized">
    <div class="container mx-auto">
      
    </div>    
  </footer>
  
</template>

<style scoped lang="scss" >

</style>
<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { routerPush } from './router'
import type { UpdateUser } from './services/api'
import HeaderTop from './components/Header.vue'
import { useUserStore } from './store/user'

const form: UpdateUser = reactive({})
const userStore = useUserStore()
onMounted(async () => {
  if (!userStore.isAuthorized) return await routerPush('login')

  form.name = userStore.user?.name
  form.email = userStore.user?.email
})
</script>