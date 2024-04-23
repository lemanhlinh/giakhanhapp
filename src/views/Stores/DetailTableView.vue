<template>
    <div class="detail-table mb-20">
      <div class="container mx-auto">
        <div class="flex justify-between items-start menu-table">
            <ul class="flex items-center">
                <li>
                    <AppLink name="tableDetail" :params="{storeId: storeId, floorId: floorId ,tableId: tableId}" class="active">
                    Bàn đang sử dụng
                    </AppLink>
                </li>
                <li>
                    <AppLink name="listBookTable" >
                    Bàn đặt trước
                    </AppLink>
                </li>
                <li>
                    <AppLink name="historyBook" >
                    Lịch sử đặt bàn
                    </AppLink>
                </li>
            </ul>
            <AppLink name="listTable" :params="{id: storeId}" class="flex justify-between back-to-list-table">
                <IconBackTable class="mr-1.5" />Quay lại danh sách bàn
            </AppLink>
        </div>
        <div v-if="dataTable.store_customer_use">
            <div class="grid grid-cols-2 gap-10">
                <div class="bg-order list-ordered">
                    <div class="flex items-center title-menu"><IconOrder class=" mr-2" />Thực đơn dùng</div>
                    <p class="time-into-table" v-if="dataTable.store_customer_use">
                        <b>Bắt đầu:</b> {{ dataTable.store_customer_use.book_hour }} ngày {{ dataTable.store_customer_use.book_time }}
                    </p>
                    <ul class="list-order">
                        <li
                            class="flex justify-between items-center item-order" v-if="orderList"
                            v-for="(orderItem, index) in orderList"
                            :key="index"
                        >
                            <div class="flex items-center left-food">
                                <div class="image-food mr-2">
                                    <img :src="`${URL_IMAGE}${orderItem.image}`" alt="" class="object-contain">
                                </div>
                                <div class="name-price">
                                    <p>{{  orderItem.title }}</p>
                                    <p>Đơn giá: {{ formatNumber(orderItem?.price) }}đ</p>
                                </div>
                            </div>
                            <div class="flex items-center right-food">
                                <span>SL</span>
                                <input type="text" min="1" v-model="orderItem.quantity" class="input-ordered" @input="updateQuantity(orderItem)">
                                <a href="" @click.prevent="removeFromOrderList(index, orderItem?.product_id)">
                                    <IconDeleteFood />
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div class="total-price">
                        <b>Tạm tính: <span>{{ formatNumber(totalPrice) }}đ</span></b>
                    </div>
                    <p class="grid grid-cols-4">
                        <AppLink
                                name="payTable"
                                :params="{storeId: storeId, floorId: floorId, tableId: tableId}"
                                class="flex items-center detail-store"
                            >
                        Thanh toán <IconArrowRightWhite />
                        </AppLink>
                    </p>
                </div>
                <div class="bg-order list-order-more">
                    <div class="flex items-center title-menu"><IconAddFood class=" mr-2" />Thêm món</div>
                    <div class="relative mb-4 group-search-food">
                        <input type="text" placeholder="Tìm món" v-model="searchTerm" class="search-food-now">
                        <IconSearch class="absolute right-1.5 top-2" />
                    </div>
                    <ul class="list-order">
                        <li class="flex justify-between items-center item-order" v-if="filteredDishes" v-for="(food, index) in filteredDishes" :key="index">
                            <div class="flex items-center left-food">
                                <div class="image-food mr-2">
                                    <IconAddMoreFood/>
                                </div>
                                <div class="name-price" >
                                    <p>{{ food?.title }}</p>
                                    <p>Đơn giá: {{ food.price?formatNumber(food.price):0 }}đ</p>
                                </div>
                                <div class="name-price hidden"  @click="addToOrderList(food, index)">
                                    <p>{{ food?.title }}</p>
                                    <p>Đơn giá: {{ food.price?formatNumber(food.price):0 }}đ</p>
                                </div>
                            </div>
                            <div class="flex items-center right-food">
                                <a href="" class="mr-2 hidden" @click.prevent="decreaseQuantity(index)">
                                    <IconMinusFood />
                                </a>
                                <input type="text" v-model="food.quantity" class="input-quantity hidden">
                                <a href="" @click.prevent="increaseQuantity(index)" class="hidden">
                                    <IconPlusFood />
                                </a>
                                <div class="add-order"  @click="addToOrderList(food, index)">
                                    <IconPlusFood />
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="grid text-center place-content-center">
                <IconTableNullImage />
                <p class="text-h">Hiện tại bàn đang trống</p>
                <button
                        @click="handleClickChangeStatus()"
                        class="text-center detail-store"
                    >
                Sử dụng bàn <IconArrowRightWhite />
                </button>
            </div>
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
    .bg-order{
        padding: 24px;
        background-color: #F5F5F5;
        border-radius: 8px;
        .title-menu{
            color: var(--neutral-neutral-13, #0E0202);
            font-family: GoogleSans-Bold;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
            margin-bottom: 20px;
        }
        .time-into-table{
            margin-bottom: 16px;
        }
        .group-search-food{
            .search-food-now{
                width: 100%;
                padding: 10px;
                border-radius: 5px;
            }
        }
        .list-order{
            max-height: 370px;
            overflow-x: hidden;
            .item-order{
                padding: 16px;
                &:nth-child(odd) {
                    background: #fff;
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
                    .input-ordered,.input-quantity{
                        width: 48px;
                        height: 38px;
                        flex-shrink: 0;
                        border-radius: 5px;
                        border: 1px solid var(--neutral-neutral-5, #DBD9D9);
                        background: #FFF;
                        text-align: center;
                        margin-right: 10px;
                    }
                }
            }
        }
        .total-price{
            margin: 24px 0;
            span{
                color: #D4181F;
            }
        }
        .detail-store{
            border-radius: 8px;
            background: #E91A22;
            padding: 9px 20px;
            color: #fff;
            font-family: GoogleSans-Bold;
            font-weight: 700;
        }
    }
    .place-content-center{
        .text-h{
            margin: 24px 0 12px 0;
            font-size: 16px;
                font-style: normal;
                font-weight: 500;
        }
        .detail-store{
            border-radius: 8px;
            background: #E91A22;
            padding: 9px 20px;
            color: #fff;
            font-family: GoogleSans-Bold;
            font-weight: 700;
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            margin: 10px 30px;
        }
    }
}
</style>
<script setup lang="ts">
  import IconBackTable from '../../components/icons/IconBackTable.vue'
  import IconOrder from '../../components/icons/IconOrder.vue'
  import IconAddFood from '../../components/icons/IconAddFood.vue'
  import IconDeleteFood from '../../components/icons/IconDeleteFood.vue'
  import IconAddMoreFood from '../../components/icons/IconAddMoreFood.vue'
  import IconMinusFood from '../../components/icons/IconMinusFood.vue'
  import IconPlusFood from '../../components/icons/IconPlusFood.vue'
  import IconSearch from '../../components/icons/IconSearch.vue'
  import IconArrowRightWhite from '../../components/icons/IconArrowRightWhite.vue'
  import IconTableNullImage from '../../components/icons/IconTableNullImage.vue'
  import AppLink from '../../components/AppLink.vue'
  import { formatNumber } from '../../helpers';

  import { ref, onMounted, computed } from 'vue';
    import { get, post } from '../../services/api';
    import { useRoute, useRouter } from 'vue-router';

    interface Products {
        image: string,
        title: string,
        price: number,
        quantity: number,
        id: number,
    }
    interface OrderProduct {
        customer_id: number,
        product_id: number,
        image: string,
        title: string,
        price: number,
        quantity: number
    }

    interface StoreCustomerUse {
    id: number;
    book_hour: string;
    book_time: string;
    store_desk_order: [];
    }

    const router = useRouter();

    const { storeId, tableId, floorId } = useRoute().params;
    
    const listFood = ref<Array<Products>>([]);
    const dataTable = ref({
        store_customer_use: {
            id: 0,
            book_hour: '...',
            book_time: '...',
            store_desk_order: [] as any[], 
        } as StoreCustomerUse,
        });

    const orderList = ref<Array<OrderProduct>>([]);
    const totalPrice = ref(0);
    const URL_IMAGE = import.meta.env.VITE_API_BASE_URL;
    const searchTerm = ref('');

    const filteredDishes = computed(() =>
        listFood.value.filter(food => food.title.toLowerCase().includes(searchTerm.value.toLowerCase()))
    );

    const detailTable = async () => {
        try {
            const response = await get(`/chi-tiet-ban/${storeId}/${floorId}/${tableId}`);
            dataTable.value = response.data.result;

            if(dataTable.value.store_customer_use){
                let products = dataTable.value.store_customer_use.store_desk_order;
                orderList.value = products;
                totalPrice.value = response.data.total_price;
            }
        } catch (error) {
            console.error('Error fetching table data:', error);
        }
    };

    const listFoods = async () => {
        try {
            const response = await get(`/danh-sach-mon/${storeId}`);
            listFood.value = response.data.map((food: Products) => ({ ...food, quantity: 1 }));
        } catch (error) {
            console.error('Error fetching table data:', error);
        }
    };

    const handleClickChangeStatus = async () => {
        try {
            const data = {
                store_id: storeId,
                table_id: tableId,
                floor_id: floorId,
                status: 3,
            }
            const response = await post(`/su-dung-ban`, data);
            if(response.data){
                window.location.reload();
            }
        } catch (error) {
            console.error('Error fetching table data:', error);
        }
    };

    const decreaseQuantity = (index: number) => {
        if (listFood.value[index].quantity > 1) {
            listFood.value[index].quantity--;
        }
    };

    const increaseQuantity = (index: number) => {
        listFood.value[index].quantity++;
    };

    const addToOrderList = async (food: Products, index:number ) => {
        const currentOrderList = orderList.value;
        const quantityToAdd = listFood.value[index].quantity;

        // Kiểm tra xem món ăn đã tồn tại trong danh sách đặt hàng chưa
        const existingItemIndex = currentOrderList.findIndex((item) => item.product_id == food.id);

        const storeDeskOrder = {
            customer_id: dataTable.value.store_customer_use.id,
            product_id: food.id,
            image: food.image,
            title: food.title,
            price: food.price,
            quantity: quantityToAdd
        }
        if (existingItemIndex == -1) {
            currentOrderList.push({ ...storeDeskOrder });
        } else {
            currentOrderList[existingItemIndex].quantity = currentOrderList[existingItemIndex].quantity + quantityToAdd;
        }
        orderList.value = currentOrderList;
        const data = {
            store_id: storeId,
            table_id: tableId,
            customer_id: dataTable.value.store_customer_use.id,
            order_list: orderList.value
        }
        const response = await post(`/them-mon-dang-dung`, data);
        totalPrice.value = response.data.total_price;
    };

    const removeFromOrderList = async (index: number, product_id: number) => {
        orderList.value.splice(index, 1);
        const data = {
            store_id: storeId,
            table_id: tableId,
            customer_id: dataTable.value.store_customer_use.id,
            product_id: product_id
        }
        const response = await post(`/xoa-mon-dang-dung`, data);
        totalPrice.value = response.data.total_price;
    };

    const updateQuantity = async (orderItem: OrderProduct) => {
        try {
            const data = {
                store_id: storeId,
                table_id: tableId,
                customer_id: dataTable.value.store_customer_use.id,
                product:orderItem
            }
            const response = await post(`/update-mon-dang-dung`, data);
            totalPrice.value = response.data.total_price;
        } catch (error) {
            console.error('Error updating quantity:', error);
        }
    };

    onMounted(() => {
        detailTable(),
        listFoods()
    });

    // import Echo from "laravel-echo"
    // const echoInstance = ref<any>(null);

    // onMounted(() => {
    //     echoInstance.value = new Echo({
    //     broadcaster: 'socket.io',
    //     host: 'http://localhost:6001',
    //     });

    //     echoInstance.value.channel('laravel_database_order-food')
    //     .listen('.order.food', (data: any) => {
    //         console.log((data));
    //         if(data.message.store_id == storeId && data.message.floor_id == floorId && data.message.table_id == tableId){
    //             const currentOrderList = orderList.value;

    //             const listProduct = data.message.order_list;

    //             listFood.value = listProduct.map((food: Products) => ({ ...food }));

    //             // const quantityToAdd = data.message.order_list.quantity;

    //             // const existingItemIndex = currentOrderList.findIndex((item) => item.product_id == data.message.order_list.id);

    //             // const storeDeskOrder = {
    //             //     customer_id: dataTable.value.store_customer_use.id,
    //             //     product_id: food.id,
    //             //     image: food.image,
    //             //     title: food.title,
    //             //     price: food.price,
    //             //     quantity: quantityToAdd
    //             // }
    //             // if (existingItemIndex == -1) {
    //             //     currentOrderList.push({ ...storeDeskOrder });
    //             // } else {
    //             //     currentOrderList[existingItemIndex].quantity = currentOrderList[existingItemIndex].quantity + quantityToAdd;
    //             // }
    //             // orderList.value = currentOrderList;
    //         }
    //         // playNotificationSound();

    //     });
    // });

    const playNotificationSound = () => {
        const audio = new Audio('/sounds/notification.mp3');
        audio.play();
    };

</script>