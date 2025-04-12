var Jetty; 

Jetty = 2; 

var Rusty = 14;

console.log(Jetty);
console.log(Rusty);
console.log(Jetty+Rusty)
console.log(Rusty+"5")



$("#labs").hide();
$("#assignments").hide();

$("#labTitle").click(function(){
    $("#labs").toggle();
 })



$("#aTitle").click(function(){
    $("#assignments").toggle();
 })

