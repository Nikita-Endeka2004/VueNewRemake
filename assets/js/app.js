
import { createApp } from "../../node_modules/vue/dist/vue.esm-browser.prod.js";

    createApp({
        data(){
            return{

                inn: '',
                sex: {check: false, gender: ''},
                birthday: '',
                age: 0,
                trueInn: false

            }
        },
        computed:{
            isCorrect(){
                this.inn = 'sdfsaf';
                return this.inn;
                // if(this.inn.lenght == 10){
                //     let checkSum;
                //     let number = this.inn.trim();
                //     number = number.split('');
                //     checkSum = ((
                //         2 * number[0] +
                //         4 * number[1] +
                //         10 * number[2] +
                //         3 * number[3] +
                //         5 * number[4] +
                //         9 * number[5] +
                //         4 * number[6] +
                //         6 * number[7] +
                //         8 * number[8]
                //     ) % 11 ) % 10;
                //     if(checkSum === Number(number[9])){
                //         return this.trueInn = true;
                //     }else{
                //         return this.trueInn = false;
                //     }

                // }
            }
        }
    }).mount('#app');