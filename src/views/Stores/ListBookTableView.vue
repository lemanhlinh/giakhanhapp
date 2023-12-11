<template>
    <div class="detail-table mb-20">
      <div class="container mx-auto">
        <div class="flex justify-between items-start menu-table">
            <ul class="flex items-center">
                <li>
                    <AppLink name="tableDetail">Bàn đang sử dụng</AppLink>
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
                    <tr>
                        <td>1</td>
                        <td>Trương Đình Toàn</td>
                        <td>0978219820</td>
                        <td>11:30 ngày 22/5/2023</td>
                        <td>1961</td>
                        <td>
                            <p class="flex items-center justify-center">
                                <IconDeleteBookNone class="mr-1.5" />Xóa
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Trương Đình Toàn</td>
                        <td>0978219820</td>
                        <td>11:30 ngày 22/5/2023</td>
                        <td>1961</td>
                        <td>
                            <p class="flex items-center justify-center">
                                <IconDeleteBook class="mr-1.5" />Xóa
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
            <a href="" class="flex items-center add-customer"><IconAddBook class="mr-1.5" />Thêm mới</a>
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
</script>