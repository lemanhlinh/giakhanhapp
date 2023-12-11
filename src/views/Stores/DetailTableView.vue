<template>
    <div class="detail-table mb-20">
      <div class="container mx-auto">
        <div class="flex justify-between items-start menu-table">
            <ul class="flex items-center">
                <li>
                    <AppLink name="tableDetail" class="active">
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
        <a href="" class="flex justify-between back-to-list-table"><IconBackTable class="mr-1.5" />Quay lại danh sách đặt bàn</a>
        </div>
        <div class="grid grid-cols-2 gap-10">
            <div class="bg-order list-ordered">
                <div class="flex items-center title-menu"><IconOrder class=" mr-2" />Thực đơn dùng</div>
                <p class="time-into-table">
                    <b>Bắt đầu:</b> 11:30 ngày 22/5/2023
                </p>
                <ul class="list-order">
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <img src="https://launamgiakhanh.vn/storage/upload_image/images/Rectangle 1 (2).jpg" alt="" class="object-contain">
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <span>SL</span>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconDeleteFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <img src="https://launamgiakhanh.vn/storage/upload_image/images/Rectangle 1 (2).jpg" alt="" class="object-contain">
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <span>SL</span>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconDeleteFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <img src="https://launamgiakhanh.vn/storage/upload_image/images/Rectangle 1 (2).jpg" alt="" class="object-contain">
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <span>SL</span>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconDeleteFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <img src="https://launamgiakhanh.vn/storage/upload_image/images/Rectangle 1 (2).jpg" alt="" class="object-contain">
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <span>SL</span>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconDeleteFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <img src="https://launamgiakhanh.vn/storage/upload_image/images/Rectangle 1 (2).jpg" alt="" class="object-contain">
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <span>SL</span>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconDeleteFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <img src="https://launamgiakhanh.vn/storage/upload_image/images/Rectangle 1 (2).jpg" alt="" class="object-contain">
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <span>SL</span>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconDeleteFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <img src="https://launamgiakhanh.vn/storage/upload_image/images/Rectangle 1 (2).jpg" alt="" class="object-contain">
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <span>SL</span>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconDeleteFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <img src="https://launamgiakhanh.vn/storage/upload_image/images/Rectangle 1 (2).jpg" alt="" class="object-contain">
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <span>SL</span>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconDeleteFood />
                            </a>
                        </div>
                    </li>
                </ul>
                <div class="total-price">
                    <b>Tạm tính: <span>1.126.000đ</span></b>
                </div>
                <p class="grid grid-cols-4">
                    <AppLink
                            name="payTable"
                            class="flex items-center detail-store"
                        >
                    Thanh toán <IconArrowRightWhite />
                    </AppLink>
                </p>
            </div>
            <div class="bg-order list-order-more">
                <div class="flex items-center title-menu"><IconAddFood class=" mr-2" />Thêm món</div>
                <div class="relative mb-4 group-search-food">
                    <input type="text" placeholder="Tìm món" class="search-food-now">
                    <IconSearch class="absolute right-1.5 top-2" />
                </div>
                <ul class="list-order">
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <IconAddMoreFood/>
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <a href="" class="mr-2">
                                <IconMinusFood />
                            </a>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconPlusFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <IconAddMoreFood/>
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <a href="" class="mr-2">
                                <IconMinusFood />
                            </a>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconPlusFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <IconAddMoreFood/>
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <a href="" class="mr-2">
                                <IconMinusFood />
                            </a>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconPlusFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <IconAddMoreFood/>
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <a href="" class="mr-2">
                                <IconMinusFood />
                            </a>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconPlusFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <IconAddMoreFood/>
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <a href="" class="mr-2">
                                <IconMinusFood />
                            </a>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconPlusFood />
                            </a>
                        </div>
                    </li>
                    <li class="flex justify-between items-center item-order">
                        <div class="flex items-center left-food">
                            <div class="image-food mr-2">
                                <IconAddMoreFood/>
                            </div>
                            <div class="name-price">
                                <p>Canh đặc biệt</p>
                                <p>Đơn giá: 145.000đ</p>
                            </div>
                        </div>
                        <div class="flex items-center right-food">
                            <a href="" class="mr-2">
                                <IconMinusFood />
                            </a>
                            <input type="text" value="1" class="input-ordered">
                            <a href="">
                                <IconPlusFood />
                            </a>
                        </div>
                    </li>
                </ul>
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
                    .input-ordered{
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
  import AppLink from '../../components/AppLink.vue'
</script>