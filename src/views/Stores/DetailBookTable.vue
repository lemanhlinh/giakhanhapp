<script setup lang="ts">
  import IconBackTable from '../../components/icons/IconBackTable.vue'
  import IconAddBook from '../../components/icons/IconAddBook.vue'
</script>
<template>
    <div class="detail-table mb-20">
      <div class="container mx-auto">
        <div class="flex justify-between items-start menu-table">
            <ul class="flex items-center">
                <li>
                    <a href="" >Bàn đang sử dụng</a>
                </li>
                <li>
                    <a href="" class="active">Bàn đặt trước</a>
                </li>
                <li>
                    <a href="">Lịch sử đặt bàn</a>
                </li>
            </ul>
        <a href="" class="flex justify-between back-to-list-table"><IconBackTable class="mr-1.5" />Quay lại danh sách đặt bàn</a>
        </div>
        <div class="form-info-customer">
            <form action="">
                <div class="grid grid-cols-2">
                    <div class="box-input">
                        <label for="">Tên khách hàng</label>
                        <input type="text" placeholder="Tên khách hàng">
                    </div>
                    <div class="box-input">
                        <label for="">Số điện thoại</label>
                        <input type="text" placeholder="Số điện thoại">
                    </div>
                    <div class="box-input">
                        <label for="">Chọn ngày</label>
                        <input type="text">
                    </div>
                    <div class="box-input">
                        <label for="">Chọn giờ</label>
                        <input type="text">
                    </div>
                </div>
                <button class="flex items-center add-customer"><IconAddBook class="mr-1.5" />Đặt bàn trước</button>
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
    .form-info-customer{
        .box-input{
            margin-bottom: 30px;
            label,input{
                width: 100%;
            }
            label{
                color: var(--neutral-neutral-13, #0E0202);
                font-family: GoogleSans-Bold;
                font-size: 16px;
                font-style: normal;
                font-weight: 700;
                line-height: 140%; /* 22.4px */  
                margin-bottom: 13px;
                display: block;
            }
            input{
                border-radius: 5px;
                border: 1px solid var(--neutral-neutral-7, #938D8D);
                display: flex;
                width: 576px;
                height: 45px;
                padding: 16px;
                align-items: center;
                gap: 10px;
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