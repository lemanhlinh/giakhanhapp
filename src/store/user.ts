import { ref } from 'vue';
import type { Ref } from 'vue';

interface UserInfo {
  email: Ref<string>;
  name: Ref<string>;
}

const userInfo: UserInfo = {
  email: ref(''),
  name: ref(''),
};

const setUserInfo = (email: string, name: string) => {
  userInfo.email.value = email;
  userInfo.name.value = name;
};

export { userInfo, setUserInfo };