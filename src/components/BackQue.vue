<script>

export default {
    data() {
        return {
            queName: "",
            queDesc: "",
            startDate:"",
            endDate:"",
        }
    },
    methods: {
        back() {
            this.$router.push('/');
        },
        next() {
            localStorage.setItem('myName', this.queName);

            localStorage.setItem('description', this.queDesc);
            
            localStorage.setItem('startDate', this.startDate);
            localStorage.setItem('endDate', this.endDate);

            this.$router.push('/backCheck')
        },
    },


}

</script>
<template>


    <div class="content">
        <div class="main">
            <div class="question">問卷名稱:
                <input type="text" class="question" v-model="this.queName">
            </div>

            <div class="description">問卷說明:
                <input type="text" class="question" v-model="this.queDesc" >
            </div>
            <div class="strTime">開始時間:
                <input type="date" class="question" v-model="this.startDate">
            </div>
            <div class="endTime">結束時間:
                <input type="date" class="question" v-model="this.endDate">
            </div>

            <div class="btnRow">
                <button class="cancel" @click="this.back()">取消</button>
                <button class="next" @click="this.next()">下一步</button>
            </div>
        </div>
    </div>


</template>



<style lang="scss" scoped>
.content {
    width: 100vw;
    height: 100vw;
    position: relative;
    // display: flex;
    // justify-content: center; 
    // align-items: center;
    // flex-direction: column;

    .main {
        border: 1px solid black;
        width: 50vw;
        height: 50vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .question {
            font-size: 25px;
            font-weight: 800;
            width: 400px;
        }

        .description {
            font-weight: 800;
            font-size: 25px;
            width: 400px;
            margin-top: 20px;

            #des {
                width: 400px;
                height: 200px;
            }
        }

        .strTime {
            font-weight: 800;
            font-size: 25px;
            width: 400px;
            margin-top: 30px;
        }


        .endTime {
            font-weight: 800;
            font-size: 25px;
            width: 400px;
            margin-top: 20px;
        }



        .btnRow {
            margin-top: 50px;
            margin-left: 280px;

            .cancel {
                font-size: 18px;
            }

            .next {
                margin-left: 20px;
                font-size: 18px;

            }
        }
    }
}
</style>