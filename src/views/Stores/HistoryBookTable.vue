<template>
    <div class="detail-table mb-20">
      <div class="container mx-auto">
        <div class="flex justify-between items-start menu-table">
            <ul class="flex items-center">
                <li>
                    <AppLink name="tableDetail" :params="{storeId: storeId,floorId:floorId, tableId: tableId}" >Bàn đang sử dụng</AppLink>
                </li>
                <li>
                    <AppLink name="listBookTable">Bàn đặt trước</AppLink>
                </li>
                <li>
                    <AppLink name="historyBook" class="active">Lịch sử đặt bàn</AppLink>
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
                        <th style="width: 500px;">Thực đơn sử dụng</th>
                        <th>Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="listCustomerHistory" v-for="customer in listCustomerHistory" :key="customer.id">
                        <td>{{ customer.id }}</td>
                        <td>{{ customer.full_name }}</td>
                        <td>{{ customer.phone }}</td>
                        <td>{{ customer.book_hour }} ngày {{ customer.book_time }}</td>
                        <td>
                            <span v-if="customer.store_desk_order" v-for="food in customer.store_desk_order">
                                {{ food.title }}({{ food.quantity }}),
                            </span>
                        </td>
                        <td>
                            <p class="price-order">
                                {{ customer.total_price }}đ
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
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
                    .price-order{
                        color: var(--primary-primary-600, #D4181F);
                        font-family: GoogleSans-Bold;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 140%; /* 22.4px */   
                    }
                }
            }
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
  import { useRoute } from 'vue-router';
  import { get, post } from '../../services/api';
  import { ref, onMounted } from 'vue';

    const { storeId, tableId, floorId } = useRoute().params;

    const historyTable = ref([]);
    const listCustomerHistory = ref([]);

    const detailTable = async () => {
        try {
            const response = await get(`/lich-su-dat-ban/${storeId}/${floorId}/${tableId}`);
            if(response.data && response.data.result){
                historyTable.value = response.data.result;
                if(historyTable.value && historyTable.value.store_customer_history){
                    listCustomerHistory.value = historyTable.value.store_customer_history
                }
            }            
        } catch (error) {
            console.error('Error fetching table data:', error);
        }
    };
    
    onMounted(() => {
        detailTable()
    });

</script>