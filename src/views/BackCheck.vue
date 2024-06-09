<script>
export default {
    data() {
        return {
            quId: [1],
            question: "",
            select: [],
            option: [],
            questions: [],
            necessary: "",
            edit: "編輯"
        }
    },
    methods: {
        back() {
            this.$router.push('/BackQue');
        },

        addQuestion() {
            localStorage.setItem('question', JSON.stringify(this.question));
            localStorage.setItem('option', JSON.stringify(this.option));

            if (this.question.trim() !== "") {
                this.questions.push({
                    question: this.question,
                    select: this.select,
                    necessary: this.necessary,
                    edit: this.edit
                });
                this.question = "";
            }
            // if (this.select.value == "單選題") {
            //     this.questions.push(this.select[index]);
            // }
        },
        send() {
            // localStorage.setItem('question', JSON.stringify(this.question));
            // localStorage.setItem('description', JSON.stringify(this.description));
            // localStorage.setItem('startDate', JSON.stringify(this.startDate));
            // localStorage.setItem('endDate', JSON.stringify(this.endDate));
            alert("資料已成功送出!");
            this.$router.push('/');
        },



    },

}
</script>
<template>
    <div class="content">
        <div class="question">題目:
            <input type="text" class="ttt" v-model="this.question" @keyup.enter="addQuestion">
            <select class="select" v-model="this.select">
                <option value="單選題">單選題</option>
                <option value="多選題">多選題</option>
                <option value="簡答題">簡答題</option>
            </select>
            <input type="checkbox" class="necCheck" value="是" v-model="this.necessary">
            <label for="" class="necessary">是否必填</label>
        </div>

        <div class="option">選項:
            <input type="text" v-model="this.option">
            <button class="add" @click="addQuestion">新增</button>
        </div>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
        <div class="icon">
            <i id="trash" class="fa-solid fa-trash-can"></i>
        </div>

        <div class="lower">
            <table border="1">
                <tr>
                    <th></th>
                    <th>編號</th>
                    <th>題目</th>
                    <th>問題種類</th>
                    <th>必填</th>
                    <th>編輯</th>
                </tr>
                <tr v-for="(question, index) in questions" :key="index">
                    <td><input class="check" type="checkbox"></td>
                    <td>{{ index + 1 }}</td>
                    <td>{{ question.question }}</td>
                    <td>{{ question.select }}</td>
                    <td>{{ question.necessary ? '是' : '否' }}</td>
                    <td class="edit" @click="this.send()">{{ question.edit }}</td>
                </tr>
            </table>
        </div>

        <div class="btnRow">
            <button class="back" @click="this.back()">上一步</button>
            <button class="send" @click="this.send()">送出</button>
        </div>
    </div>


</template>

<style lang="scss" scoped>
.content {
    width: 100vw;
    height: 100vw;

    .question {
        width: 600px;
        font-size: 25px;
        font-weight: 800;
        margin-left: 100px;
    }

    .ttt {
        font-size: 20px;
    }

    .select {
        margin-left: 20px;
        font-size: 20px;
        font-weight: 800;
    }

    .necCheck {
        margin-left: 20px;
        margin-bottom: 5px;
        width: 22px;
        height: 22px;

    }

    .necessary {
        margin-top: 50px;
        font-size: 25px;
    }

    .option {
        margin-top: 20px;
        margin-left: 100px;
        width: 600px;
        font-size: 25px;
        font-weight: 800;

        .add {
            margin-left: 20px;
            font-size: 18px;
            font-weight: 600;
        }
    }

    #trash {
        margin-top: 50px;
        margin-right: 450px;
        font-size: 22px;
    }

    .lower {
        display: flex;
        justify-content: center;
        align-items: center;
        width: auto;
        height: auto;
        border: 1px solid black;

        th {
            width: 90px;
            height: 50px;
            font-size: 20px;
        }

        td {
            width: 90px;
            height: 50px;
        }

        .edit {
            cursor: pointer;
            color: purple;
            text-decoration: underline;
        }
    }

    .btnRow {
        display: flex;
        margin-top: 30px;
        margin-left: 350px;

        .back {
            font-size: 18px;
        }

        .send {
            margin-left: 20px;
            font-size: 18px;
        }
    }
}
</style>