<template>
    <div class="header">
        <RouterLink class="routeItem" to="/">首頁</RouterLink>
        <!-- <RouterLink class="routeItem" @click="clearInput" to="/answer">Answer</RouterLink> -->
        <RouterLink class="routeItem" to="/AnswerCheck"></RouterLink>
        <RouterLink class="routeItem" to="/add">新增</RouterLink>
        <RouterLink class="routeItem" to="/BackQue">後台問卷</RouterLink>
        <RouterLink class="routeItem" to="/backCheck">後台題目</RouterLink>
        <RouterLink class="routeItem" to="/BackQueEdit">編輯</RouterLink>
        <RouterLink class="routeItem" to="/BackAns">問卷回答</RouterLink>

    </div>

    <div class="search">
        <div class="serBox">
            <div class="firstRow">
                <label for="quizName">問卷名稱</label>
                <input type="text" v-model="this.quizName" @keyup.enter="searchVal"><br>
            </div>
            <div class="secondRow">
                <label for="">統計時間</label>
                <input type="date" v-model="this.startDate">
                <label for="">&nbsp;&nbsp;&nbsp; 至 &nbsp;&nbsp;&nbsp;</label>
                <input type="date" v-model="this.endDate">
                <button @click="this.searchVal()">搜尋</button>
            </div>
        </div>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    <div class="mainContentBox">
        <div class="mainContent">
            <table border="1">
                <tr>
                    <th>編號 </th>
                    <th>名稱 </th>
                    <th>狀態 </th>
                    <th>開始時間</th>
                    <th>結束時間</th>
                    <th>前往作答</th>
                </tr>
                <tr v-for="(item, index) in this.pageData" :key="index">
                    <!-- <samp>{{ this.add(item.quiz_id) }}</samp> -->
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.quiz_name }}</td>
                    <td>{{ getStatus(item.start_date, item.end_date) }}</td>
                    <td>{{ item.start_date }}</td>
                    <td>{{ item.end_date }}</td>
                    <!-- 根據狀態用v-bind判斷要不要開放填寫 -->
                    <!-- 點擊事件跳到對應頁面檢視 -->
                    <td>
                        <button type="button" id="goBtn" v-if="this.ansBtn(item.start_date, item.end_date)"
                            @click="this.go(item.quiz_id)">前往</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
    <!-- () =>{this.$router.push(`/answer/${item.quiz_id}`)} -->
    <div class="page">
        <button class="lowBtn" type="button" v-for="n in Math.ceil(this.resObj.length / 10)"
            @click="this.btnChangePage(n)">{{
                n }}</button>
    </div>


</template>

<script>
import answer from "../components/Answer.vue"
import { RouterLink, RouterView } from 'vue-router'

export default {
    data() {
        return {
            quizName: "",
            startDate: "",
            endDate: "",
            isBack: false,
            resObj: [],
            pageData: [],
            currentIndex: 1, //索引位置
            quizData: [],
        }
    },
    components: {
        RouterLink, RouterView,
        answer,

    },
    methods: {

        go(item) {
            this.$router.push(`/answer/${item}`);
            localStorage.setItem('quid', JSON.stringify(item));
            this.clearInput()

        },

        searchVal() {
            let obj = {
                quizName: this.quizName,
                startDate: this.startDate,
                endDate: this.endDate,
                isBack: this.isBack
            }
            fetch("http://localhost:8080/quiz/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            })
                .then(res => res.json())
                .then(data => {
                    this.resObj = data.quizList
                    console.log(this.resObj);
                    this.changePage();
                })
        },
        changePage() {
            console.log("changePage");
            this.pageData = [] //清空陣列要裝當前頁面新的資料
            let i = 0 + (this.currentIndex - 1) * 10; //底下for迴圈用，從第幾筆資料開始裝
            let j = 10 + (this.currentIndex - 1) * 10; //從i 裝到哪筆資料
            let k = 0;
            console.log(j);
            if (j > this.resObj.length) {
                k = this.resObj.length
            } else {
                k = j
            }
            for (i; i < k; i++) {
                this.pageData.push(this.resObj[i])
            }
            console.log(this.pageData);
            console.log(this.pageData.length);
        },
        btnChangePage(n) {
            if (this.currentIndex === n) {
                return
            }
            this.currentIndex = n;
            this.changePage(); //索引位置變了所以會裝不同位置的資料進來
        },
        getStatus(startDate, endDate) {
            const currentTime = new Date();
            startDate = new Date(startDate);
            endDate = new Date(endDate);
            if (currentTime < startDate) {
                return "未開始";
            } else if (currentTime > endDate) {
                return "已結束";
            } else {
                return "進行中"
            }
        },
        // v-bind用
        ansBtn(startDate, endDate) {
            const status = this.getStatus(startDate, endDate)
            if (status === "進行中") {
                return true
            } else {
                return false
            }
        },
        clearInput() {
            this.name= "",
            this.phone= "",
            this.email= "",
            this.age= "",
            this.radio= "",
            this.reason= "",
            localStorage.setItem('name', JSON.stringify(this.name));
            localStorage.setItem('phone', JSON.stringify(this.phone));
            localStorage.setItem('email', JSON.stringify(this.email));
            localStorage.setItem('age', JSON.stringify(this.age));
            localStorage.setItem('radio', JSON.stringify(this.radio));
            localStorage.setItem('reason', JSON.stringify(this.reason));
        },

    },


    beforeMount() {
        this.searchVal();
    },
}

</script>
<style lang="scss" scoped>
.header {

    .routeItem {
        font-size: 2vw;
        text-decoration: none;
        color: black;
        margin: 10px;

    }
}



.search {
    width: 80vw;
    height: 10vw;
    margin-top: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .serBox {
        top: 25px;
        left: 40px;
        margin-left: 50px;

        .firstRow {
            display: flex;
            width: 500px;
            height: 30px;
        }

        .secondRow {
            display: flex;
            margin-top: 10px;
            width: 800px;
            height: 30px;

            button {
                margin-left: 30px;
                font-size: 18px;
            }
        }
    }


}

.mainContentBox {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;

    .mainContent {
        display: flex;
        justify-content: center;
        width: auto;
        height: auto;
        border: 1px solid black;

        th {
            width: 90px;
            height: 50px;
        }

        td {
            width: 90px;
            height: 50px;

        }

        #goBtn {

            margin-left: 25px;
        }

        .page {
            width: 400px;
            height: 20px;

            .lowBtn {
                margin: 10px;
            }
        }
    }
}
</style>