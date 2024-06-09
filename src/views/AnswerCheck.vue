<script>

export default {
    
    data() {
        return {
            question: JSON.parse(localStorage.getItem('question')),
            // description: JSON.parse(localStorage.getItem('description')),
            name: JSON.parse(localStorage.getItem('name')),
            phone: JSON.parse(localStorage.getItem('phone')),
            email: JSON.parse(localStorage.getItem('email')),
            age: JSON.parse(localStorage.getItem('age')),
            reason: JSON.parse(localStorage.getItem('reason')),
            radio: JSON.parse(localStorage.getItem('radio')),
            quid: JSON.parse(localStorage.getItem('quid')),
            disabled: true,
        }

    },
    methods: {
        back(quid) {
            this.$router.push(`/answer/${quid}`);
        },

        enableAndSubmit() {
            this.enableInput();
            // this.name = localStorage.getItem('name');
            // this.phone = localStorage.getItem('phone');
            // this.email = localStorage.getItem('email');
            // this.age = localStorage.getItem('age');
            // this.radio = localStorage.getItem('radio');
            // this.reason = localStorage.getItem('reason');
            this.submit();
        },
        enableInput() {
            this.disabled = false;
        },
        submit() {
            alert("資料已成功送出!");
            this.$router.push('/');
        },
        
        
    },


}

</script>

<template>
    <div class="content">
        <div class="question">問卷題目</div>
        <div class="description">問卷說明</div>
        <div class="nameRow">
            <div class="name">姓名: </div>
            <input type="text" v-model="this.name" :disabled="disabled">

        </div>
        <div class="phoneRow">
            <div class="phone">手機: </div>
            <input type="text" v-model="this.phone" :disabled="disabled">
        </div>
        <div class="emailRow">
            <div class="email">電子信箱: </div>
            <input type="text" v-model="this.email" :disabled="disabled">
        </div>
        <div class="ageRow">
            <div class="age">年齡: </div>
            <input type="text" v-model="this.age" :disabled="disabled">
        </div>

        <h1 class="que1">1. 請選擇喜歡的國家</h1>
        <div class="sel1">
            <input type="text" v-model="this.radio" :disabled="disabled">

        </div>
        <div class="que2">
            <h1>2. 請說明理由</h1>
            <input type="text" class="ans2" v-model="this.reason" :disabled="disabled">
        </div>

        <div class="btnBox">
            <button class="btn1" @click="this.back(this.quid)">修改</button>
            <button class="btn2" @click="this.enableAndSubmit()">送出</button>
        </div>
    </div>


</template>

<style lang="scss" scoped>
.content {
    width: 100vw;
    height: 100vw;
    display: flex;

    .question {
        width: 300px;
        margin-left: 120px;
        margin-bottom: 30px;
        font-size: 40px;
        font-weight: 900;
    }

    .description {
        width: 600px;
        height: 100px;
        border: 1px solid black;
        font-size: 20px;
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
        width: 300px;
        margin-top: 50px;
        margin-right: 100px;

    }

    h1 {
        color: red;
    }

    .sel1 {
        margin-right: 120px;
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
        margin-left: 500px;
        display: flex;
        width: 200px;

        .btn1 {
            font-size: 20px;
        }

        .btn2 {
            margin-left: 30px;
            font-size: 20px;
        }
    }

}
</style>