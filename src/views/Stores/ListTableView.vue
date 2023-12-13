<template>
    <div class="list-table">
        <ul>
            <li v-for="message in messages" :key="message">{{ message }}</li>
        </ul>
        <div class="container mx-auto">
            <div class="box-floor" v-if="storeTable" v-for="(floor, index) in storeTable" :key="index">
                <h2 class="title-floor text-center">{{  floor.name }}</h2>
                <div class="grid grid-cols-12 gap-10 list-table">
                    <div class="item-table" v-if="floor.floor_desk" v-for="(table, index) in floor.floor_desk" :key="index" :class="{'table-null': table.status == 1, 'table-book': table.status == 2, 'col-span-6': table.type == 1, 'col-span-4': table.type == 0}" >
                        <div :class="{'flex': table.type == 1}">
                            <IconTableVip v-if="table.type == 1" class=" mr-5" />
                            <div class="w-full">
                                <div class="name-table">
                                    <AppLink
                                        :name="table.status === 2 ? 'listBookTable' : 'tableDetail'"
                                        :params="{storeId: id, tableId: table.id}"
                                        class="flex items-center"
                                    >
                                    <IconTableNull v-if="table.status == 1" class=" mr-2" />
                                    <IconTableBook v-else-if="table.status == 2" class=" mr-2" />
                                    <IconOrder v-else class="mr-2" />
                                    {{ table.name }}: 
                                    <span v-if="table.status == 1" class="ml-2" >Đang trống</span>
                                    <span v-else-if="table.status == 2" class="ml-2">Đã có khách đặt</span>
                                    <span v-else class="ml-2">Đã có khách ngồi</span>
                                    </AppLink>
                                </div>
                                <div class="flex justify-between items-center show-detail-table">
                                    <p class="flex flex-col" v-if="table.status == 1">
                                        <span>Hiện chưa có khách đặt bàn</span>
                                    </p>
                                    <p class="flex flex-col" v-else-if="table.status == 2" v-if="table.book_table[0]">
                                        <span>{{ table.book_table[0].full_name }}</span>
                                        <span>Đến lúc {{ table.book_table[0].book_hour }} ngày {{ table.book_table[0].book_time }}</span>
                                    </p>
                                    <p class="flex flex-col" v-else v-if="table.book_table[0]">
                                        <span>{{ table.book_table[0].full_name }}</span>
                                        <span>Đến lúc {{ table.book_table[0].book_hour }} ngày {{ table.book_table[0].book_time }}</span>
                                    </p>
                                    <AppLink
                                        :name="table.status === 2 ? 'listBookTable' : 'tableDetail'"
                                        :params="{storeId: id, tableId: table.id}"
                                        class="flex items-center detail-store"
                                        >Chi tiết <IconArrowRightWhite v-if="table.status == 1" />
                                        <IconArrowRightBrown v-else-if="table.status == 2" />
                                        <IconArrowRightBrown v-else />
                                    </AppLink>
                                </div>
                            </div>
                        </div>                        
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
.list-table{
    .box-floor{
        margin-bottom: 45px;
        .title-floor{
            color: var(--neutral-neutral-13, #0E0202);
            text-align: center;
            font-family: SVN-SVN-A-Love-Of-Thunder;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            margin-bottom: 30px;
        }
        .list-table{
            .item-table{
            padding: 24px;
            border-radius: 8px;
            background-color: #FCF6E7;
            backdrop-filter: blur(4px);
            .name-table{
                margin-bottom: 15px;
                a{
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 140%; 
                font-family: GoogleSans-Bold;
                }
            }
            .show-detail-table{
                .detail-store{
                border-radius: 8px;
                background: #E4A812;
                padding: 9px 20px;
                color: #620B0E;
                font-family: GoogleSans-Bold;
                font-weight: 700;
                width: 106px;
                }
            }
            &:hover{
                background-color: #F3D792;
            }
            }
            .table-null{
                background-color: #FDE8E9;
                .show-detail-table{
                    .detail-store{
                        background: #E91A22;
                        color: #fff;
                    }
                }
            }
            .table-book{
                background-color: #F5F5F5;
            }
        }
    }
}
</style>
<script setup lang="ts">
    import IconArrowRightWhite from '../../components/icons/IconArrowRightWhite.vue'
    import IconArrowRightBrown from '../../components/icons/IconArrowRightBrown.vue'
    import IconOrder from '../../components/icons/IconOrder.vue'
    import IconTableVip from '../../components/icons/IconTableVip.vue'
    import IconTableNull from '../../components/icons/IconTableNull.vue'
    import IconTableBook from '../../components/icons/IconTableBook.vue'
    import AppLink from '../../components/AppLink.vue'

    import { ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { get } from '../../services/api';
    
    const storeTable = ref([]);
    const messages = ref([]);

    const { id } = useRoute().params;

    const fetchTableData = async () => {
        try {
            const response = await get(`/danh-sach-ban/${id}`);
            storeTable.value = response.data; 
        } catch (error) {
            console.error('Error fetching table data:', error);
        }
    };

    const testTableData = async () => {
        try {
            window.Echo.channel('laravel_database_chatroom')
                .listen('App\\Events\\MessagePosted', (data) => {
                    // Xử lý dữ liệu nhận được từ Laravel
                    messages.value.push(data.message);
                });
        } catch (error) {
            console.error('Error fetching table data:', error);
        }
    };
    
    onMounted(() => {
        fetchTableData();
        // testTableData();
    }
    );

</script>