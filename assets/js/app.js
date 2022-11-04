
import { createApp } from "../../node_modules/vue/dist/vue.esm-browser.prod.js";

    createApp({
        data(){
            return{

                inn: '',
                sex: {check: false, gender: 'Женьщина'},
                birthday: '',
                age: 0,
                trueInn: false

            }
        },
        methods:{

            forInput(){

                let num = this.inn.trim();
                num = num.split('');
                let DateBirthdayInNumber = '';
                let dateToday = new Date();
                let Birthday = new Date(1900, 0, 0);

                if((num[8] == 8) || (num[8] == 1) || ((num[8] % 2) == 0)){

                    this.sex.map(item => item.cheak = false);

                    for (let i = 0; i < 5; i++) {
                        DateBirthdayInNumber = DateBirthdayInNumber + num[i];
                    }

                    DateBirthdayInNumber = DateBirthdayInNumber / 1;
                    Birthday.setDate( Birthday.getDate() + DateBirthdayInNumber);
                    this.birthday = Birthday.getDate() + '.' + Birthday.getMonth() + '.' + Birthday.getFullYear();
                    console.log(this.birthday, 'dfgsdfgsdfg');
                    this.age = dateToday.getFullYear() - Birthday.getFullYear();
                }else{

                    this.sex.map(item => item.cheak = true);
        
                    for (let i = 0; i < 5; i++) {
                        DateBirthdayInNumber = DateBirthdayInNumber + num[i];
                    }
        
                    DateBirthdayInNumber = DateBirthdayInNumber / 1;
                    Birthday.setDate( Birthday.getDate() + DateBirthdayInNumber);
                    this.birthday = Birthday.getDate() + '.' + Birthday.getMonth() + '.' + Birthday.getFullYear();
                    this.age = dateToday.getFullYear() - Birthday.getFullYear();
                }

            },
            forSex(){

                let stat = this.sex.check;
                if(stat){
                    this.sex.map(item => item.gender = "Мужчина");
                }else{
                    this.sex.map(item => item.gender = "Женьщина");
                }

            },
            forCorrectAge(){

                if(this.birthday.getMonth() <= this.dateToday.getMonth()){
                    if(this.birthday.getDate() <= this.dateToday.getDate()){
                        this.age = this.age;
                    }else{
                        this.age = this.age - 1;
                    }
    
                }
                if(this.birthday.getMonth() > this.dateToday.getMonth()){
                    if(this.birthday.getDate() > this.dateToday.getDate()){
                        this.age = this.age - 1;
                    }else{
                        this.age = this.age - 1;
                    }
                }

            },
            forCheckCorrectInn(){

                let checkSum;
                let number = this.inn.trim();
                number = number.split('');
                checkSum = ((
                    2 * number[0] +
                    4 * number[1] +
                    10 * number[2] +
                    3 * number[3] +
                    5 * number[4] +
                    9 * number[5] +
                    4 * number[6] +
                    6 * number[7] +
                    8 * number[8]
                ) % 11 ) % 10;
                if(checkSum === Number(number[9])){
                    this.trueInn = true;
                }else{
                    this.trueInn = false;
                }

            }
        }
    }).mount('#app');