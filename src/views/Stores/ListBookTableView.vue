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
        <div class="table-list-book-table">
            <table class="table-auto list-customer mb-5">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Người đặt</th>
                        <th>Số điện thoại</th>
                        <th>Ngày/ giờ đến</th>
                        <th>Khách đến</th>
                        <th>Xóa đặt</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="listOrder" v-for="(item, key) in listOrder" :key="key">
                        <td>{{ key }}</td>
                        <td>{{ item.full_name }}</td>
                        <td>{{ item.phone }}</td>
                        <td>{{ item.book_hour }} ngày {{ item.book_time }}</td>
                        <td>
                            <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer" @click="handleClickChangeCome(item.id)" :checked="item.is_come == 1">
                                <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-red-600"></div>
                            </label>
                        </td>
                        <td>
                            <p class="flex items-center justify-center">
                                <IconDeleteBookNone class="mr-1.5" v-if="!isHovered" @mouseover="isHovered = true" />
                                <IconDeleteBook class="mr-1.5" v-else @mouseout="isHovered = false" />
                                Xóa
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <AppLink name="bookTable" class="flex items-center add-customer">
                <IconAddBook class="mr-1.5" />Thêm mới
            </AppLink>
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
    .table-list-book-table{
        .list-customer{
            width: 100%;
            th{
                border-bottom: 1px solid var(--neutral-neutral-5, #DBD9D9);
                background: var(--neutral-100, #F9FAFB);
                color: var(--neutral-neutral-11, #2B2020);
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 24px;
                font-family: GoogleSans-Bold;
                height: 49px;
            }
            tbody{
                tr{
                    border-bottom: 1px solid var(--neutral-200, #EAECF0);
                    height: 57px;
                    text-align: center;
                    &:nth-child(even) {
                        background-color: #f2f2f2;
                    }
                }
            }
        }
        .add-customer{
            border-radius: 8px;
            background: var(--primary-primary-500, #E91A22);
            display: flex;
            height: 40px;
            padding: 16px;
            justify-content: center;
            align-items: center;
            width: 140px;
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
  import { ref, onMounted } from 'vue'
  import { post } from '../../services/api'
  import { useRoute,useRouter } from 'vue-router'

const { storeId, tableId } = useRoute().params;

    const listOrder = ref([]);
    const isHovered = ref(false)
    const router = useRouter();

    const fetchTableData = async () => {
        try {
            const data = {
                store_id: storeId,
                table_id: tableId,
                status: 2,
            }
            const response = await post(`/danh-sach-dat-ban`, data);
            listOrder.value = response.data; 
        } catch (error) {
            console.error('Error fetching table data:', error);
        }
    };

    const handleClickChangeCome = async (id) => {
        try {
            const data = {
                store_id: storeId,
                table_id: tableId,
                status: 3,
                book_id: id
            }
            const response = await post(`/khach-den`, data);
            if(response.data){
                router.push({ name: 'tableDetail', params: {storeId,tableId} });
            }
        } catch (error) {
            console.error('Error fetching table data:', error);
        }
    };

    onMounted(() => {
        fetchTableData();
    });
</script>