
<template>
    <div class="detail-table mb-20">
      <div class="container mx-auto">
        <div class="flex justify-between items-start menu-table">
            <ul class="flex items-center">
                <li>
                    <AppLink name="tableDetail" :params="{storeId: storeId, tableId: tableId}" >Bàn đang sử dụng</AppLink>
                </li>
                <li>
                    <AppLink name="listBookTable" class="active">Bàn đặt trước</AppLink>
                </li>
                <li>
                    <AppLink name="historyBook" >Lịch sử đặt bàn</AppLink>
                </li>
            </ul>
        <a href="" class="flex justify-between back-to-list-table"><IconBackTable class="mr-1.5" />Quay lại danh sách đặt bàn</a>
        </div>
        <div class="table-book-table">
            <form ref="formRef"
              aria-label="Book table form"
              @submit.prevent="handleBookTable">
                <div class="grid grid-cols-2 gap-10">
                    <div class="">
                        <label for="">Tên khách hàng</label>
                        <input type="text" name="name" v-model="name" placeholder="Tên khách hàng" class="" required>
                    </div>
                    <div>
                        <label for="">Số điện thoại</label>
                        <input type="text" name="phone" v-model="phone" placeholder="Số điện thoại" required>
                    </div>
                    <div>
                        <label for="">Chọn ngày</label>
                        <input type="date" name="date" v-model="date" placeholder="Chọn ngày" required>
                    </div>
                    <div>
                        <label for="">Chọn giờ</label>
                        <input type="text" name="time" v-model="time" placeholder="Chọn giờ" required>
                    </div>
                </div>        
                <button class="flex items-center add-customer" :disabled="!name || !phone || !date || !time"><IconAddBook class="mr-1.5" />Đặt bàn trước</button>      
            </form>
            
        </div>
      </div>
    </div>
  </template>
<style scoped lang="scss">
.detail-table{
    .menu-table{
        border-bottom: 1px solid #F1F0F0;
        margin-bottom: 30px;
        ul{
            li{
                margin-right: 40px;
                a{
                    font-family: SVN-SVN-A-Love-Of-Thunder;
                    color: var(--neutral-neutral-8, #625B5B);
                    text-align: center;
                    font-size: 22px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    display: block;
                    padding-bottom: 15px;
                    &.active{
                        color: #D4181F;
                        border-bottom: 1px solid #D4181F;
                    }
                }
            }
        }
        .back-to-list-table{
            border-radius: 8px;
            background: var(--surface-normal-hover, #F9ECCB);
            height: 40px;
            padding: 16px;
            justify-content: center;
            align-items: center;
            gap: 8px;
            color: #620B0E;
            font-family: GoogleSans-Bold;
        }
    }
    .table-book-table{
        label, input{
            width: 100%;
        }
        label{
            color: #0E0202;
            font-family: GoogleSans-Bold;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
            margin-bottom: 15px;
            display: block;
        }
        input{
            border-radius: 5px;
            border: 1px solid var(--neutral-neutral-7, #938D8D);
            padding: 10px 15px;
        }
        .add-customer{
            border-radius: 8px;
            background: var(--primary-primary-500, #E91A22);
            display: flex;
            margin-top: 20px;
            height: 40px;
            padding: 16px;
            justify-content: center;
            align-items: center;
            width: 170px;
            color: var(--neutral-neutral-1, #FFF);
            font-family: GoogleSans-Bold;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 16px */
        }
    }
    
}
</style>
<script setup lang="ts">
  import IconBackTable from '../../components/icons/IconBackTable.vue'
  import IconAddBook from '../../components/icons/IconAddBook.vue'
  import IconDeleteBook from '../../components/icons/IconDeleteBook.vue'
  import IconDeleteBookNone from '../../components/icons/IconDeleteBookNone.vue'
  import AppLink from '../../components/AppLink.vue'

  import { ref } from 'vue';
  import { post } from '../../services/api';
    import { useRouter } from 'vue-router';
    import { useRoute } from 'vue-router';

const { storeId, tableId } = useRoute().params;

    const phone = ref('');
    const date = ref('');
    const name = ref('');
    const time = ref('');
    const router = useRouter();

    const handleBookTable = async () => {
    try {
        const data = {
            full_name: name.value,
            book_time: date.value,
            phone: phone.value,
            book_hour: time.value,
            store_id: storeId,
            table_id: tableId,
            status: 2,
        }
        const response = await post(`/them-dat-ban`,data);
        router.push({ name: 'listBookTable' });
    } catch (error) {
        // alert('Sai tên đăng nhập hoặc mật khẩu');
        console.error('Login error:', error);
    }
    };
</script>