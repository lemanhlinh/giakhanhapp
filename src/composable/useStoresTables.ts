import { ref, onMounted } from 'vue'
import { api } from '../services'
import { useRoute } from 'vue-router';
import type { StoreTable } from 'src/services/api'



export function useStoreTable () {
  const storeTable = ref<StoreTable[]>([])

  const route = useRoute()
const id = route.params.id as number;

  async function fetchStoreTables (): Promise<void> {
    storeTable.value = []
    storeTable.value = await api.stores.getStoreTables(id).then(({ data }) => data)

    Echo.channel('laravel_database_chatroom')
    .listen('MessagePosted', (data) => {
      storeTable.value = data
    })

  }

  return {
    fetchStoreTables,
    storeTable,
  }
}
