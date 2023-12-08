<template>
    <div class="about">
      <div class="container mx-auto">
        <div class="flex flex-col justify-center items-center max-h-full">
          <div class="form-login text-center p-12">
            <img src="@/assets/images/logo.png" alt="Lẩu nấm gia khánh" class="h-auto max-w-full block text-center m-auto img-logo">
            <h1 class="title-login">Đăng nhập</h1>
            <p class="sub-title-login">Hệ thống quản lý bán hàng</p>
            <form 
              ref="formRef"
              aria-label="Login form"
              @submit.prevent="login"
            >
              <input type="email" placeholder="Tên đăng nhập" class="" v-model="form.email" required>
              <input type="password" placeholder="Mật khẩu" v-model="form.password" required>
              <button type="submit" class="submit-form-login" :disabled="!form.email || !form.password">Đăng nhập</button>
            </form>
        </div>
        </div>        
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
    .about{
      background: url('../assets/images/bg-login.jpg') no-repeat center;
      min-height: 100vh;
      width: 100%;
      .form-login{
          background: #FCF6E7;
          width: 480px;
          height: 548px;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 10%;
          .img-logo{
            margin-bottom: 20px;
          }
          .title-login{
            font-family: SVN-SVN-A-Love-Of-Thunder;
            font-size: 48px;
            line-height: normal;
            text-transform: uppercase;
            color: #D4181F;
            margin-bottom: 20px;
          }
          .sub-title-login{
            color: #CF9910;
            text-align: center;
            font-family: SVN-SVN-A-Love-Of-Thunder;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-bottom: 40px;
          }
          form{
            input{
              width: 100%;
              padding: 12px;
              font-size: 16px;
              margin-bottom: 16px;
            }
            .submit-form-login{
              width: 100%;
              border-radius: 8px;
              background: #E91A22;
              box-shadow: 24px 24px 64px 0px rgba(233, 26, 34, 0.32);
              color: #fff;
              font-size: 16px;
              font-style: normal;
              font-weight: 700;
              line-height: 100%; /* 16px */
              text-transform: uppercase;
              padding: 12px;
              margin: 20px 0;
            }
          }
      }
    }
    @media (min-width: 1024px) {
      .about {
        
      }
    }
  </style>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { routerPush } from '../router'
import { api, isFetchError } from '../services'
import type { LoginUser } from '../services/api'
import { useUserStore } from '../store/user'

const formRef = ref<HTMLFormElement | null>(null)
const form: LoginUser = reactive({
  email: '',
  password: '',
})

const { updateUser } = useUserStore()

const errors = ref()

const login = async () => {
  errors.value = {}

  if (!formRef.value?.checkValidity()) return

  try {
    const result = await api.users.login({ user: form })
    updateUser(result.data)
    await routerPush('home')
  } catch (error) {
    if (isFetchError(error)) {
      errors.value = error.error?.errors
      return
    }
    console.error(error)
  }
}

</script>
