
import { createApp } from "../../node_modules/vue/dist/vue.esm-browser.prod.js";

    createApp({
        data(){
            return{

                inn: '',

            }
        },
        computed:{
            isCorrect(){
                let number = this.inn.trim();
                number = number.split('');
                let checkSum = ((
                    -1 * number[0] +
                    5 * number[1] +
                    7 * number[2] +
                    9 * number[3] +
                    4 * number[4] +
                    6 * number[5] +
                    10 * number[6] +
                    5 * number[7] +
                    7 * number[8]
                ) % 11 ) % 10;
                if(checkSum === Number(number[9])  && number.length == 10){
                    return 'Корректен!';
                }else{
                    return 'Не корректен!';
                }
            },
            forInput(){

                let num = this.inn.trim();
                num = num.split('');
                let DateBirthdayInNumber = '';
                let Birthday = new Date(1900, 0, 0);
                for (let i = 0; i < 5; i++) {
                    DateBirthdayInNumber = DateBirthdayInNumber + num[i];
                }
                DateBirthdayInNumber = DateBirthdayInNumber / 1;
                Birthday.setDate( Birthday.getDate() + DateBirthdayInNumber);
                return `${Birthday.getDate()}.${Birthday.getMonth() + 1}.${Birthday.getFullYear()}`;

            },
            forSex(){

                let num = this.inn.trim();
                num = num.split('');
                let sex = '';
                if((num[8] == 8) || (num[8] == 1) || ((num[8] % 2) == 0)){
                    sex = 'Женский';
                }else{
                    sex = 'Мужской';
                }
                return sex;
            },
            forZodiac(){
                
                let num = this.inn.trim();
                num = num.split('');
                let DateBirthdayInNumber = '';
                let Birthday = new Date(1900, 0, 0);
                for (let i = 0; i < 5; i++) {
                    DateBirthdayInNumber = DateBirthdayInNumber + num[i];
                }
                DateBirthdayInNumber = DateBirthdayInNumber / 1;
                Birthday.setDate( Birthday.getDate() + DateBirthdayInNumber);
                let d = +Birthday.getDate();
                let m = +Birthday.getMonth() + 1;
                let y = +Birthday.getFullYear();
                let zodiak = '';
                let yearOfChina = '';
                if(y % 12 == 1){
                    yearOfChina = 'Курица';
                }
                else if(y % 12 == 2){
                    yearOfChina = 'Собака';
                }
                else if(y % 12 == 3){
                    yearOfChina = 'Свинья';
                }
                else if(y % 12 == 4){
                    yearOfChina = 'Мышь';
                }
                else if(y % 12 == 5){
                    yearOfChina = 'Корова';
                }
                else if(y % 12 == 6){
                    yearOfChina = 'Тигр';
                }
                else if(y % 12 == 7){
                    yearOfChina = 'Заяц';
                }
                else if(y % 12 == 8){
                    yearOfChina = 'Улитка';
                }
                else if(y % 12 == 9){
                    yearOfChina = 'Змея';
                }
                else if(y % 12 == 10){
                    yearOfChina = 'Лошадь';
                }
                else if(y % 12 == 11){
                    yearOfChina = 'Овца';
                }
                else if(y % 12 == 12){
                    yearOfChina = 'Обезьяна';
                }

                //************************************************************************ */

                if((m == 10 && d >= 23) || (m == 11 && d <= 22)){
                    zodiak = 'Скорпион';
                }
                else if((m == 11 && d >= 23) || (m == 12 && d <= 21)){
                    zodiak = 'Стрелец';
                }
                else if((m == 12 && d >= 22) || (m == 1 && d <= 19)){
                    zodiak = 'Козерог';
                }
                else if((m == 1 && d >= 20) || (m == 2 && d <= 18)){
                    zodiak = 'Водолей';
                }
                else if((m == 2 && d >= 19) || (m == 3 && d <= 19)){
                    zodiak = 'Рыба';
                }
                else if((m == 3 && d >= 21) || (m == 4 && d <= 19)){
                    zodiak = 'Овен';
                }
                else if((m == 4 && d >= 20) || (m == 5 && d <= 20)){
                    zodiak = 'Телец';
                }
                else if((m == 5 && d >= 21) || (m == 6 && d <= 21)){
                    zodiak = 'Близнецы';
                }
                else if((m == 6 && d >= 22) || (m == 7 && d <= 22)){
                    zodiak = 'Рак';
                }
                else if((m == 7 && d >= 23) || (m == 8 && d <= 22)){
                    zodiak = 'Лев';
                }
                else if((m == 8 && d >= 23) || (m == 9 && d <= 22)){
                    zodiak = 'Дева';
                }
                else if((m == 9 && d >= 23) || (m == 10 && d <= 22)){
                    zodiak = 'Весы';
                }
                return `${zodiak}, символ: ${yearOfChina}`;

            },

        }
    }).mount('#app');
