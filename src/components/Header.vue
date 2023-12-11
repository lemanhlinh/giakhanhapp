<template>
    <div class="header-top">
        <div class="flex justify-between">
            <div class="left-logo flex items-center">
                <AppLink name="home">
                    <img alt="Lẩu nấm gia khánh" class="logo" src="@/assets/images/logo.png" width="125" height="125" />
                </AppLink>
                <p class="ml-6 title-main">
                    Chọn cửa hàng
                    <span class="title-sub">Cơ sở: 161 Nguyễn Văn Lộc, Mỗ Lao, Hà Đông</span>
                </p>
            </div>
            <div class="flex items-center right-login">
                <UserIcon /> {{ user?.name }} <BorderIcon /> <a href="" @click="handleLogout">Đăng xuất</a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import UserIcon from './icons/IconUser.vue'
    import BorderIcon from './icons/IconBorder.vue'
    import { logout as performLogout } from '@/composition/auth'
    import AppLink from '../components/AppLink.vue'
    import { useRouter } from 'vue-router'
    import { ref, onMounted } from 'vue'

    const router = useRouter();

    const handleLogout = () => {
        performLogout();
        router.push({ name: 'userInfo' });
    };

    const userInfoString = localStorage.getItem('userInfo'); 

    const user = ref({});

    if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        user.value = userInfo._value;
    }

</script>