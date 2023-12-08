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
                <UserIcon /> {{ userStore.user.name }} <BorderIcon /> <a href="" @click="onLogout">Đăng xuất</a>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    import UserIcon from './icons/IconUser.vue'
    import BorderIcon from './icons/IconBorder.vue'
    import { routerPush } from '../router'
    import { useUserStore } from '../store/user'

    const userStore = useUserStore()

    const onLogout = async () => {
    userStore.updateUser(null)
     await routerPush('login')
}
</script>