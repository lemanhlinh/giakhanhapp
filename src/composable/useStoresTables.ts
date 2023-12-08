import { ref } from 'vue'
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
  }

  return {
    fetchStoreTables,
    storeTable,
  }
}
