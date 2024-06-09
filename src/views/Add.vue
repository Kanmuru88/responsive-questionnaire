<template>

    <div class="search">
        <div class="serBox">
            <div class="firstRow">
                <label for="">問卷名稱</label>
                <input type="text" v-model="this.quizName" @keyup.enter="searchVal"><br>
            </div>
            <div class="secondRow">
                <label for="">統計時間</label>
                <input type="date" v-model="this.startDate">
                <label for="">&nbsp;&nbsp;&nbsp; 至 &nbsp;&nbsp;&nbsp;</label>
                <input type="date" v-model="this.endDate">
                <button class="searchBtn" @click="this.searchVal()">搜尋</button>
            </div>
        </div>
    </div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <div class="icon">
        <i id="trash" class="fa-solid fa-trash-can" @click="this.delete"></i>
        <i id="plus" class="fa-solid fa-plus" @click="this.add"></i>
    </div>

    <div class="mainContentBox">
        <div class="mainContent">
            <table border="1">
                <tr>
                    <th></th>
                    <th>編號</th>
                    <th>名稱</th>
                    <th>狀態</th>
                    <th>開始時間</th>
                    <th>結束時間</th>
                    <th>結果</th>
                </tr>
                <tr v-for="item in this.pageData" :key="index">
                    <td><input class="check" type="checkbox"></td>
                    <td>{{ item.qu_id }}</td>
                    <td>{{ item.quiz_name }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.start_date }}</td>
                    <td>{{ item.end_date }}</td>
                    <td>{{ item.result }}</td>
                </tr>
            </table>
        </div>
    </div>


    <div class="page">
        <button class="lowBtn" type="button" v-for="n in Math.ceil(this.resObj.length / 10)"
            @click="this.btnChangePage(n)">{{
                n }}</button>
    </div>



</template>

<script>
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
        RouterLink,
        RouterView
    },
    methods: {
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
        add() {
            this.$router.push({ path: 'BackQue' });
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

    },

    beforeMount() {
        this.searchVal();
    },

}
</script>
<style lang="scss" scoped>
.icon {
    margin-top: 50px;
    margin-right: 500px;
    font-size: 25px;
}

.check {
    width: 15px;
    height: 15px;

    input[type="checkbox"] {
        /* Add if not using autoprefixer */
        -webkit-appearance: none;
        appearance: none;
        /* For iOS < 15 to remove gradient background */
        background-color: #fff;
        /* Not removed via appearance */
        margin: 0;
    }

    input[type="checkbox"] {
        appearance: none;
        background-color: #fff;
        margin: 0;
        font: inherit;
        color: black;
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid black;
        border-radius: 0.15em;
        transform: translateY(-0.075em);
    }

    .form-control+.form-control {
        margin-top: 1em;
    }

    input[type="checkbox"] {
        /* ...existing styles */

        display: grid;
        place-content: center;
    }

    input[type="checkbox"]::before {
        content: "";
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
    }

    input[type="checkbox"]:checked::before {
        transform: scale(1);
    }

}

th {
    width: 90px;
    height: 50px;
}

td {
    width: 90px;
    height: 50px;
}

#trash {
    border: 1px solid black;
    padding: 3px;
}


#plus {
    margin-left: 15px;
    border: 1px solid black;
    padding: 3px;
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

            .searchBtn {
                margin-left: 30px;
                font-size: 20px;
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

    }

    .page {
        width: 400px;
        height: 20px;
    }

}
</style>