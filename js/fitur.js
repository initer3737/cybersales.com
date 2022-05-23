const Date= ()=> new Date();

const validateTime=(time)=> time < 10 ? `0${time}`:time;

const Jam= (date=new Date() ,target )=>{
   let jam=validateTime(date.getHours());
   let menit=validateTime(date.getMinutes());
   let detik=validateTime(date.getMilliseconds());
    target=`${jam} : ${menit} : ${detik}`;
   setTimeout('Jam()',1000);
};

let target=document.getElementById('jam').innerHTML;

let Initialize=()=>{
    Jam( date,target);
};
Jam();
window.setTimeout('Jam()',1000);