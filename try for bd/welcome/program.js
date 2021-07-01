var up_curtain =document.querySelector('.up');
var down_curtain =document.querySelector('.down');
var time_show =document.querySelector('.time');
var curtainof= document.querySelector('.curtain');
var main_page =document.querySelector('.wrapper');
var date =new Date();

function time(){
var interval= setInterval(function() {
        var date =new Date();
        let h= date.getHours();
        let m= date.getMinutes();
        let s = date.getSeconds();
        let separetor= ":";
        time_show.innerHTML= h+separetor+m+separetor+s;

         if(s==30){   //set the time for open curtain ; format h==7 && m==30 && s==0
            clearInterval(interval);
           time_show.style.textAlign= "center";
            time_show.innerHTML= "<pre>Your text is here</pre>";
            time_show.style.fontSize= '20px';
            time_show.style.animation= 'color 5s infinite';
            curtainOpen();
         }
    },1000);
}

time();

let counter =50;
function curtainOpen(){
   setTimeout(() => {
      time_show.innerHTML="";
      setInterval(() => {
         counter--;
         up_curtain.style.height= counter+'%';
         down_curtain.style.height= counter+'%';
      }, 30);
      up_curtain.visibility= 'hidden';
      down_curtain.visibility= 'hidden';
   },4000);
}
