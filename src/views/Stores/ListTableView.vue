<template>
<div class="list-table">
      <div class="container mx-auto">
        <div class="box-floor" v-if="storeTable" v-for="(floor, index) in storeTable" :key="index">
            <h2 class="title-floor text-center">{{  floor.name }}</h2>
            <div class="grid grid-cols-3 gap-10 list-table">
                <div class="item-table" v-if="floor.floor_desk" v-for="(table, index) in floor.floor_desk" :key="index">
                    <div class="name-table">
                        <a href="" class="flex items-center"><IconOrder class=" mr-2" />{{ table.name }}</a>
                    </div>
                    <div class="flex justify-between items-center show-detail-table">
                        <p class="flex flex-col">
                            <span>Anh Toàn - 0978219820</span>
                            <span>Đến lúc 11:30 ngày 22/5/2023</span>
                        </p>
                        <a class="flex items-center detail-store">Chi tiết <IconArrowRightBrown /></a>
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
  import IconWrapper from '../../components/icons/IconWrapper.vue'
  import IconArrowRightBrown from '../../components/icons/IconArrowRightBrown.vue'
  import IconArrowRightWhite from '../../components/icons/IconArrowRightWhite.vue'
  import IconOrder from '../../components/icons/IconOrder.vue'
  import IconTableNull from '../../components/icons/IconTableNull.vue'
  import IconTableBook from '../../components/icons/IconTableBook.vue'

  import { useStoreTable } from '../../composable/useStoresTables'

    const { storeTable, fetchStoreTables } = useStoreTable()

    await fetchStoreTables()

</script>