var calculate = Math.floor(Math.random() * 100) + 1;
if (calculate <= 25 ){
  var heading = document.querySelector("p").innerHTML = "% OK";
}
else if(calculate > 26 && calculate <= 50){
  var heading = document.querySelector("p").innerHTML = "% GOOD";
}
else if(calculate > 51 && calculate <= 75){
  var heading = document.querySelector("p").innerHTML = "% BEST";
}
else{
  var heading = document.querySelector("p").innerHTML = "% EXCELLENT";
}
