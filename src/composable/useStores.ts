import { ref } from 'vue'
import { api } from '../services'
import type { Store } from 'src/services/api'

export function useStores () {
  const stores = ref<Store[]>([])

  async function fetchStores (): Promise<void> {
    stores.value = []
    stores.value = await api.stores.getStores().then(({ data }) => data)
  }

  return {
    fetchStores,
    stores,
  }
}
