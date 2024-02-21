import { ref } from 'vue';
import type { Ref } from 'vue';

interface UserInfo {
  email: Ref<string>;
  name: Ref<string>;
  stores: Ref<string>;
}

const userInfo = ref<UserInfo>({
  email: ref(''),
  name: ref(''),
  stores: ref(''),
}) ;

const setUserInfo = (email: string, name: string, stores: string) => {
  userInfo.value = { email, name, stores };
  localStorage.setItem('userInfo', JSON.stringify(userInfo))
};

export { userInfo, setUserInfo };