import { ref } from 'vue';
import type { Ref } from 'vue';

interface UserInfo {
  email: Ref<string>;
  name: Ref<string>;
}

const userInfo = ref<UserInfo>({
  email: ref(''),
  name: ref(''),
}) ;

const setUserInfo = (email: string, name: string) => {
  userInfo.value = { email, name };
  localStorage.setItem('userInfo', JSON.stringify(userInfo))
};

export { userInfo, setUserInfo };