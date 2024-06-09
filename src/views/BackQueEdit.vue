<script>

export default {
    data() {
        return { // 將字串轉成 JSON 格式
            question: JSON.parse(localStorage.getItem('question')),
            description: JSON.parse(localStorage.getItem('description')),
            name: JSON.parse(localStorage.getItem('name')),
            phone: JSON.parse(localStorage.getItem('phone')),
            email: JSON.parse(localStorage.getItem('email')),
            age: JSON.parse(localStorage.getItem('age')),
            reason: JSON.parse(localStorage.getItem('reason')),
            radio: JSON.parse(localStorage.getItem('radio')),
            queTitle: JSON.parse(localStorage.getItem('myName')),
        }
    },
    methods: {

        back() {
            // 尚未寫儲存
            this.$router.push({ path: '/' });
        },

        // transfer() {
        // },
        // enableAndSubmit() {
        //     this.enableInput();
        //     this.name = localStorage.getItem('name');
        //     this.phone = localStorage.getItem('phone');
        //     this.email = localStorage.getItem('email');
        //     this.age = localStorage.getItem('age');
        //     this.radio = localStorage.getItem('country');
        //     this.reason = localStorage.getItem('que2');
        //     this.send();
        // },
        send() {
            alert("資料已成功送出!");
            this.$router.push({ path: '/' });
        },
        
    }
}
</script>

<template>
    <div class="content">
        <div class="question">{{this.queTitle}}</div>
        <div class="description">{{this.description}}</div>
        <div class="nameRow">
            <div class="name">姓名: </div>
            <input type="text" v-model="this.name">
        </div>
        <div class="phoneRow">
            <div class="phone">手機: </div>
            <input type="text" v-model="this.phone">
        </div>
        <div class="emailRow">
            <div class="email">電子信箱: </div>
            <input type="text" v-model="this.email">
        </div>
        <div class="ageRow">
            <div class="age">年齡: </div>
            <input type="text" v-model="this.age">
        </div>

        <h1 class="que1">1.{{this.question}}</h1>
        <div class="sel1">
            <input type="radio" value="" v-model="this.radio" name="contry">
            <label for=""></label><br>
        </div>
        <div class="que2">
            <h1>2. 請說明理由</h1>
            <input type="text" class="ans2" v-model="this.reason">
        </div>
        <div class="btnBox">
            <button class="btn1" id="back" @click="this.back()">儲存並返回</button>
            <button class="btn3" id="send" @click="this.send()">儲存並送出</button>
        </div>
    </div>




</template>

<style lang="scss" scoped>
h1 {
    color: black;
}

.content {
    width: 100vw;
    height: 100vw;
    display: flex;

    .question {
        width: 100px;
        margin-bottom: 30px;
        font-size: 35px;
        font-weight: 900;
    }

    .description {
        width: 600px;
        height: 100px;
        font-size: 25px;
        border: 1px solid black;
        margin-bottom: 50px;
    }

    .nameRow {
        display: flex;

        .name {
            width: 120px;
            font-size: 20px;
            font-weight: 500;
        }
    }

    .phoneRow {
        display: flex;
        margin-top: 10px;

        .phone {
            width: 120px;
            font-size: 20px;
            font-weight: 500;
        }
    }

    .emailRow {
        display: flex;
        margin-top: 10px;

        .email {
            width: 120px;
            font-size: 20px;
            font-weight: 500;
        }
    }

    .ageRow {
        display: flex;
        margin-top: 10px;

        .age {
            width: 120px;
            font-size: 20px;
            font-weight: 500;
        }
    }

    .que1 {
        width: 500px;
        margin-top: 50px;
        margin-left: 91px;
    }

    .sel1 {
        width: 200px;
    }

    .que2 {
        margin-top: 50px;
        width: 400px;
        height: 200px;
    }

    .ans2 {
        width: 400px;
        height: 200px;
    }

    .btnBox {
        margin-top: 15vw;
        margin-left: 400px;
        display: flex;
        width: 280px;

        .btn1 {
            font-size: 20px;
        }

        .btn2 {
            margin-left: 30px;
            font-size: 20px;
        }

        .btn3 {
            margin-left: 30px;
            font-size: 20px;
        }
    }

}
</style>