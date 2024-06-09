<script>

</script>

<template>

    <div class="content">
        <div class="main">
            <table border="1" id="table">
                <tr>
                    <th>編號</th>
                    <th>姓名</th>
                    <th>填寫時間</th>
                    <th>觀看結果</th>
                </tr>
                <tr>
                    <th>001</th>
                    <th>will</th>
                    <th>2024/7/14</th>
                    <th>前往</th>
                </tr>


            </table>


        </div>
    </div>




</template>


<style lang="scss" scoped>
.content {
    width: 100vw;
    height: 100vw;
    position: relative;

    .main {

        width: 50vw;
        height: 50vw;
        border: 1px solid black;

        display: flex;
        justify-content: center;
        align-items: center;

        #table {
        position: absolute;
        width: 400px;
        top: 30vw;
        }

        th{
            width: 90px;
            height: 50px;
            font-size: 20px;
        }

    }


}
</style>