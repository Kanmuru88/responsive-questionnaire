<script>
import AnswerCheck from '../views/AnswerCheck.vue';

export default {
    components:{
        AnswerCheck
    },
    data() {
        return {
            name: [],
            phone: [],
            email: [],
            age: [],
            reason: "",
            radio: "",
            ansList: [],
            disabled: false,
            input: null,
        }
    },
    methods: {

        back() {
            this.disabled = false;
            this.$router.push({ path: '/' });
        },

        transfer() {
            // this.disabled = true;
            this.$router.push('/AnswerCheck');
            
        },
        enableAndSubmit() {

            localStorage.setItem('name', JSON.stringify(this.name));
            localStorage.setItem('phone', JSON.stringify(this.phone));
            localStorage.setItem('email', JSON.stringify(this.email));
            localStorage.setItem('age', JSON.stringify(this.age));
            localStorage.setItem('radio', JSON.stringify(this.radio));
            localStorage.setItem('reason', JSON.stringify(this.reason));
            // this.setValidation();
            this.enableInput();
            this.$router.push('/AnswerCheck');
        },
        enableInput() {
            this.disabled = false;
        },

        setValidation() {
            this.inputs = document.querySelectorAll('input'),
                this.inputs.forEach(input => {
                    input.addEventListener('input', function () {
                        if (input.checkValidity()) {
                            input.classList.add('valid');
                            input.classList.remove('invalid');
                        } else {
                            input.classList.remove('valid');
                            input.classList.add('invalid');
                        }
                    })
                })
        },
        edit() {
            this.name = JSON.parse(localStorage.getItem('name'));
            this.phone = JSON.parse(localStorage.getItem('phone'));
            this.email = JSON.parse(localStorage.getItem('email'));
            this.age = JSON.parse(localStorage.getItem('age'));
            this.radio = JSON.parse(localStorage.getItem('radio'));
            this.reason = JSON.parse(localStorage.getItem('reason'));
        },
        replySearch() {
            let quizId = this.$route.params.id;
            fetch(`http://localhost:8080/quiz/replySearch?quiz_id=${quizId}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.ansList = data;
                    console.log(this.ansList.quizList[0].quiz_name);
                })
        },

    },
    beforeMount() {
        this.replySearch();
        
    },
    mounted() {
        // 在组件挂载后调用 setValidation 方法
        this.edit();
        this.setValidation();
    },
    


}


</script>
<template>

    <div class="content">
        <!-- <form> -->
        <div class="question">{{ this.ansList.quizList[0].quiz_name }}</div>
        <div class="description">{{ this.ansList.quizList[0].quiz_description }} </div>
        <div class="nameRow">

            <div class="name">姓名: </div>
            <input name="name" id="name" type="text" v-model="this.name" :disabled="this.disabled" required>

        </div>
        <div class="phoneRow">
            <div class="phone">手機: </div>
            <input name="phone" id="phone" type="phone" v-model="this.phone" :disabled="this.disabled" required>
        </div>
        <div class="emailRow">
            <div class="email">電子信箱: </div>
            <input name="email" type="email" v-model="this.email" :disabled="this.disabled" required>
        </div>
        <div class="ageRow">
            <div class="age">年齡: </div>
            <input type="number" id="age" v-model="this.age" min="0" max="150" :disabled="this.disabled" required>
        </div>

        <h1 class="que1">1. 請選擇喜歡的國家</h1>
        <div class="sel1">
            <input type="radio" value="美國" v-model="this.radio" required :disabled="this.disabled" name="contry">
            <label for="">美國</label><br>
            <input type="radio" value="日本" v-model="this.radio" required :disabled="this.disabled" name="contry">
            <label for="">日本</label><br>
            <input type="radio" value="韓國" v-model="this.radio" required :disabled="this.disabled" name="contry">
            <label for="">韓國</label>
        </div>

        <div class="que2">
            <h1>2. 請說明理由</h1>
            <input type="text" name="reason" class="ans2" v-model="this.reason" maxlength="300"
                :disabled="this.disabled" placeholder="請在三百字內作答" required>
        </div>


        <div class="btnBox">
            <button class="btn1" id="back" @click="this.back()">取消</button>
            <button class="btn2" type="submit" id="transfer" @click="this.enableAndSubmit()">確認</button>
        </div>
        <!-- </form> -->


    </div>



</template>

<style lang="scss" scoped>
h1 {
    color: black;
}

input:valid {
    border: 2px solid rgb(50, 159, 0);
}

input.invalid {
    border: 2px solid red;
}

.content {
    width: 100vw;
    height: 100vw;
    display: flex;

    .question {
        width: 300px;
        margin-left: 200px;
        margin-bottom: 30px;
        font-size: 50px;
        font-weight: 900;
    }

    .description {
        width: 600px;
        height: 100px;
        border: 1px solid black;
        margin-bottom: 50px;
        font-size: 25px;
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
        margin-right: 270px;

        .age {
            width: 120px;
            font-size: 20px;
            font-weight: 500;
            margin-left: 150px;
        }

        #age {
            width: 100px;

        }
    }

    .que1 {
        width: 400px;
        margin-top: 50px;

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
        margin-left: 470px;
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