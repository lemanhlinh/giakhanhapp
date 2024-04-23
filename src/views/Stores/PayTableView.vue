<template>
    <div class="detail-table mb-20">
      <div class="container mx-auto">
        <div class="flex justify-between items-start menu-table">
            <ul class="flex items-center">
                <li>
                    <AppLink name="tableDetail" class="active">Bàn đang sử dụng</AppLink>
                </li>
                <li>
                    <AppLink name="listBookTable" >Bàn đặt trước</AppLink>
                </li>
                <li>
                    <AppLink name="historyBook" >Lịch sử đặt bàn</AppLink>
                </li>
            </ul>
            <AppLink name="listTable" :params="{id: storeId}" class="flex justify-between back-to-list-table">
                <IconBackTable class="mr-1.5" />Quay lại danh sách bàn
            </AppLink>
        </div>
        <div class="grid grid-cols-2 gap-10">
            <div class="bg-order list-ordered">
                <div class="flex items-center title-form-pay">Thanh toán bàn B2.1</div>
                <div class="form-info-customer">
                    <form ref="formRef"
                        aria-label="Payment table form"
                        @submit.prevent="handlePayment">
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Bắt đầu</label>
                            <span class="text-right col-span-3" v-if="dataTable.store_customer_use">{{ dataTable.store_customer_use.book_hour }} ngày {{ dataTable.store_customer_use.book_time }}</span>
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Số tiền</label>
                            <span class="text-right col-span-3"><b>{{ formatNumber(totalPrice) }}đ</b></span>
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Giảm giá</label>
                            <input type="text" class="text-right col-span-3" v-model="voucher">
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Số tiền thanh toán</label>
                            <span class="text-right col-span-3 total-price-pay">{{ formatNumber(totalPrice) }}đ</span>
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Tên khách</label>
                            <input type="text" class="text-right col-span-3" v-model="name">
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Số điện thoại</label>
                            <input type="text" class="text-right col-span-3" v-model="phone">
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">QR cửa hàng</label>
                            <img v-if="dataTable.store.image_qr"  :src="`${URL_IMAGE}${dataTable.store.image_qr}`" alt="">
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <div class="col-span-2">
                                <a @click="printMenu" class="flex items-center back-order w-2/3">In Hóa Đơn</a>
                            </div>
                            <div class="flex justify-between grap-3 col-span-3">
                                <a href="" class="flex items-center back-order"><IconBackTable class="mr-1.5" /> Quay lại</a>
                                <button class="flex items-center end-order">Kết thúc đặt bàn <IconArrowRightWhite class="ml-1.5" /></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="bg-order list-order-more">
                <div class="flex items-center title-menu">Thực đơn dùng:</div>
                <ul class="list-order">
                    <li class="flex justify-between items-center item-order" v-for="(orderItem, index) in orderList" :key="index">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <img :src="`${URL_IMAGE}${orderItem.image}`" alt="" class="object-contain">
                            </div>
                            <div class="name-price">
                                <p>{{ orderItem.title }}</p>
                                <p>Đơn giá: {{ formatNumber(orderItem?.price) }}đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <span>Số lượng: {{ orderItem.quantity }}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </template>
<style scoped lang="scss">
@media print {
  body * {
    display: none;
  }

  .print-only {
    display: block !important;
  }
}
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
    .list-ordered{
        .title-form-pay{
            color: var(--neutral-neutral-13, #0E0202);
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%; /* 25.2px */
            text-transform: uppercase;
            margin-bottom: 32px;
            font-family: GoogleSans-Bold;
        }
        .form-info-customer{
            input{
                width: 100%;
                padding: 10px;
                font-size: 15px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
                border-radius: 5px;
                border: 1px solid var(--neutral-neutral-6, #C3C0C0);
            }
            label{
                font-family: GoogleSans-Bold;
            }
            .total-price-pay{
                color: var(--primary-primary-600, #D4181F);
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 140%; /* 22.4px */
            }
            .back-order{
                border-radius: 8px;
                background: var(--secondary-secondary-500, #E4A812);
                display: flex;
                height: 40px;
                padding: 16px;
                justify-content: center;
                align-items: center;
                color: var(--primary-primary-900, #620B0E);
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 100%; /* 16px */
                font-family: GoogleSans-Bold;
            }
            .end-order{
                border-radius: 8px;
                background: var(--primary-primary-500, #E91A22);
                display: flex;
                height: 40px;
                padding: 16px;
                justify-content: center;
                align-items: center;
                color: var(--neutral-neutral-1, #FFF);
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 100%; /* 16px */
                font-family: GoogleSans-Bold;
            }
        }
    }
    .bg-order{
        .title-menu{
            color: var(--neutral-neutral-13, #0E0202);
            font-family: GoogleSans-Bold;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
            margin-bottom: 20px;
        }
        .list-order{
            max-height: 370px;
            overflow-x: hidden;
            .item-order{
                padding: 16px;
                &:nth-child(odd) {
                    background: #F5F5F5;
                }
                .left-food{
                    .image-food{
                        width: 38px;
                    height: 38px;
                    border-radius: 5px;
                    background: url(<path-to-image>), lightgray 50% / cover no-repeat;
                        overflow: hidden;
                    }
                    .name-price{
                        color: var(--neutral-neutral-13, #0E0202);
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%; /* 21px */
                    }
                }
                .right-food{
                    span{
                        color: var(--neutral-neutral-13, #0E0202);
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%; /* 21px */
                        margin-right: 10px;
                    }
                }
            }
        }
    }
}
</style>
<script setup lang="ts">
  import IconBackTable from '../../components/icons/IconBackTable.vue'
  import IconArrowRightWhite from '../../components/icons/IconArrowRightWhite.vue'
  import AppLink from '../../components/AppLink.vue'

  import { ref, onMounted, watchEffect } from 'vue';
    import { get, post } from '../../services/api';
    import { useRoute, useRouter } from 'vue-router';
    import { formatNumber } from '../../helpers';
    const router = useRouter();

    const { storeId, tableId, floorId } = useRoute().params;

    interface StoreCustomerUse {
        id: number;
        book_hour: string;
        book_time: string;
        full_name: string;
        phone: string;
        store_desk_order: [];
    }

    const dataTable = ref({
        store_customer_use: {
            id: 0,
            book_hour: '...',
            book_time: '...',
            full_name: '...',
            phone: '...',
            store_desk_order: [] as any[], 
        } as StoreCustomerUse,
        store: {
            id: 0,
            image_qr: null
        }
    });
    const orderList = ref<Array<{image: string,price: number,title:string, quantity: number }>>([]);
    const totalPrice = ref(0);
    const URL_IMAGE = import.meta.env.VITE_API_BASE_URL;

    const phone = ref('');
    const voucher = ref('');
    const name = ref('');
    const total_price = ref('');

    const detailTable = async () => {
        try {
            const response = await get(`/chi-tiet-ban/${storeId}/${floorId}/${tableId}`);
            dataTable.value = response.data.result;
            phone.value = dataTable.value.store_customer_use.phone;
            name.value = dataTable.value.store_customer_use.full_name;
            if(dataTable.value.store_customer_use){
                let products = dataTable.value.store_customer_use.store_desk_order;
                orderList.value = products;
                totalPrice.value = response.data.total_price;
            }
        } catch (error) {
            console.error('Error fetching table data:', error);
        }
    };

//   const listFoodUse = async () => {
//         try {
//             const data = {
//                 store_id: storeId,
//                 table_id: tableId,
//                 book_table_id: dataTable.value.id,
//             }
//             const response = await post(`/danh-sach-mon-dang-dung`, data);
//             if(response.data){
//                 orderList.value = response.data.products.map((food) => ({ ...food }));
//                 totalPrice.value = response.data.total_price;
//             }
//         } catch (error) {
//             console.error('Error fetching table data:', error);
//         }
//     };

    // watchEffect(() => {
    //     listFoodUse();
    // });

    onMounted(() => {
        detailTable()
    });

    const handlePayment = async () => {
        try {
            const data = {
                full_name: name.value,
                phone: phone.value,
                voucher: voucher.value,
                store_id: storeId,
                table_id: tableId,
                customer_id: dataTable.value.store_customer_use.id,
                total_price: totalPrice.value,
            }
            const response = await post(`/thanh-toan`,data);
            if(response.data){
                router.push({ name: 'listBookTable' });
            }
        } catch (error) {
            // alert('Sai tên đăng nhập hoặc mật khẩu');
            console.error('Login error:', error);
        }
    };

    const printMenu = () => {
        const printWindow = window.open('', '_blank');
        
        let content = `
            <div>
            <div>Thời gian phục vụ: 10:00 - 22:00</div>
            <div>Các món ăn</div>
            </div>
        `;
        orderList.value.forEach((item) => {
            content += `
                <div>Món: ${item.title}</div>
                <div>Giá: ${formatNumber(item.price)}</div>
                <div>Số lượng: ${item.quantity}</div>
            `;
        });

        content += `<div>Tổng tiền: ${formatNumber(totalPrice.value)}</div>`;
        content += `<div><img src="${URL_IMAGE}${dataTable.value.store.image_qr}" /></div>`;

        content += `</div>`;

        printWindow?.document.write(content);

        printWindow?.print();

        printWindow?.addEventListener('beforeunload', () => {
            printWindow?.close();
        });
    };
</script>