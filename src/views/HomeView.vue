<template>
  <main>
    <div class="container mx-auto">
      <div class="grid grid-cols-3 gap-10 list-store">
        <div class="item-store" v-if="tableData" v-for="(store, index) in tableData" :key="index">
          <div class="name-store">
            <AppLink
                name="listTable"
                :params="{id: store.id}"
              >{{ store.title }}
            </AppLink>
          </div>
          <div class="flex justify-between show-detail-store">
            <p class="flex items-center"><IconWrapper class="mr-1.5" /><span>{{ store.total_use }}/{{ store.store_floor_desk.length }}</span> bàn đang dùng</p>
            <AppLink
                name="listTable"
                :params="{id: store.id}"
                class="flex items-center detail-store"
              >Tiếp <IconArrowRightWhite />
            </AppLink>
          </div>
        </div>    
      </div>
    </div>
  </main>
</template>
<style scoped lang="scss">
  .list-store{
    .item-store{
      padding: 24px;
      border-radius: 8px;
      border: 1px solid #F3D792;
      backdrop-filter: blur(4px);
      .name-store{
        margin-bottom: 15px;
        a{
          font-size: 16px;
          font-style: normal;
          font-weight: 700;
          line-height: 140%; 
          font-family: GoogleSans-Bold;
        }
      }
      .show-detail-store{
        span{
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 140%;
        margin-right: 5px;
        font-family: GoogleSans-Bold;
        }
        .detail-store{
          border-radius: 8px;
          background: var(--primary-primary-500, #E91A22);
          padding: 9px 20px;
          color: #fff;
        }
      }
      &:hover{
        background-color: #F3D792;
      }
    }
  }
</style>

<script setup lang="ts">
  import IconWrapper from '../components/icons/IconWrapper.vue'
  import IconArrowRightWhite from '../components/icons/IconArrowRightWhite.vue'
  import AppLink from '../components/AppLink.vue'
  import Echo from "laravel-echo"

  import { ref, onMounted } from 'vue';
  import { get, post } from '../services/api';
  const echoInstance = ref<any>(null);

  const userInfoString = localStorage.getItem('userInfo'); 
  const tableData = ref<Array<{ id: string; title: string; total_use: number, store_floor_desk: [] }>>([]);
  const list_messages = ref([]);

  const fetchTableData = async () => {
    try {
      if (userInfoString) {
          const userInfo = JSON.parse(userInfoString);
          const data = {
              stores_id: userInfo._value.stores
          }
          const response = await post('/danh-sach-cua-hang',data);
          tableData.value = response.data; 
      }
    } catch (error) {
      console.error('Error fetching table data:', error);
    }
  };

  onMounted(() => {
    // echoInstance.value = new Echo({
    //   broadcaster: 'socket.io',
    //   host: 'http://localhost:6001',
    // });

    // echoInstance.value.channel('laravel_database_chatroom')
    //   .listen('.chatroom.shipped', (data: any) => {
    //     console.log((data.message.active));
    //     playNotificationSound();

    //   });
  });

  const playNotificationSound = () => {
    const audio = new Audio('/sounds/notification.mp3');
    audio.play();
  };


  // connect pusher
  // var pusher = new Pusher('501c68189750b6521f15', {
  //   cluster: 'ap1'
  // });

  // var channel = pusher.subscribe('chatroom');
  // channel.bind('.chatroom.shipped', function(data) {
  //   console.log(data);
  //   app.messages.push(JSON.stringify(data));
  // });

onMounted(fetchTableData);
</script>