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
        <a href="" class="flex justify-between back-to-list-table"><IconBackTable class="mr-1.5" />Quay lại danh sách đặt bàn</a>
        </div>
        <div class="grid grid-cols-2 gap-10">
            <div class="bg-order list-ordered">
                <div class="flex items-center title-form-pay">Thanh toán bàn B2.1</div>
                <div class="form-info-customer">
                    <form action="">
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Bắt đầu</label>
                            <span class="text-right col-span-3">11:30 ngày 22/5/2023</span>
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Số tiền</label>
                            <span class="text-right col-span-3"><b>1.126000đ</b></span>
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Giảm giá</label>
                            <input type="text" class="text-right col-span-3">
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Số tiền thanh toán</label>
                            <span class="text-right col-span-3 total-price-pay">1.126000đ</span>
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Tên khách</label>
                            <input type="text" class="text-right col-span-3">
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <label for="" class="flex items-center col-span-2">Số điện thoại</label>
                            <input type="text" class="text-right col-span-3">
                        </div>
                        <div class="grid grid-cols-5 mb-5">
                            <div class="col-span-2"></div>
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
                            <span>Số lượng: 1</span>
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
                            <span>Số lượng: 1</span>
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
                            <span>Số lượng: 1</span>
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
                            <span>Số lượng: 1</span>
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
                            <span>Số lượng: 1</span>
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
                            <span>Số lượng: 1</span>
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
</script>