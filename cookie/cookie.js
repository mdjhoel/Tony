var c = document.getElementById('mycanvas');
var ctx = c.getContext('2d');

var increment = 1
var cookies = 0;
var s = document.getElementById('score');
s.innerHTML = cookies;

c.addEventListener("click",draw, true);

//var event={clientX: 10, clientY: 10}
//for (i = 0; i < 1000; i = i + 1) {
//    draw(event);
//}

function draw(event) {
   cookies = cookies + increment;
   s.innerHTML = cookies;
    
   var aud = document.getElementById("myAudio");
   aud.play();
     
   if (cookies >= 10 && cookies < 20 && increment == 1) {
       increment = 2; 
       award(increment,"green");
   } 
    
   if (cookies > 15) {
       c.style.backgroundImage = "url('cook_bite.svg')";
   }
          
   var alpha = 1.0;
   interval = setInterval(function () {
      ctx.globalAlpha = alpha;
      ctx.font = "normal 30px Arial";
      ctx.fillStyle = "white";
      ctx.fillText("+" + increment,event.clientX,event.clientY);
      alpha = alpha - 0.05;
      if (alpha <= 0) {
          ctx.clearRect(0,0,500,500);
          clearInterval(interval);
      }
   }, 5);
}

function award(increment,colour) {
    mytab = "<table>";  
    mytab = mytab + "<tr>";
    mytab = mytab + "<td style='background-color:" + colour + ";padding:25px;'>";
    mytab = mytab + "Congratulations! x" + increment + " cursor";
    mytab = mytab + "</td>";
    mytab = mytab + "</tr>";
    mytab = mytab + "</table>"; 
       
    mydiv = document.getElementById("store");
    mydiv.innerHTML = mytab; 
}
