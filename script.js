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

// tutorial https://www.w3schools.com/howto/howto_js_sidenav.asp
 function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }

$("#rocky").hover(function () {
  $("#rockText").css("color", "#ffd412");
  $("#rocky").css("transform", "scale(1.05)");
},
  function () {
    $("#rockText").css("color", "#073507");
    $("#rocky").css("transform", "scale(1)");
  })

$("#rusty").hover(function () {
  $("#rustText").css("color", "#ffd412");
  $("#rusty").css("transform", "scale(1.05)");
},
  function () {
    $("#rustText").css("color", "#073507");
    $("#rusty").css("transform", "scale(1)");
  })

$("#tango").hover(function () {
  $("#tangText").css("color", "#ffd412");
  $("#tango").css("transform", "scale(1.05)");
},
  function () {
    $("#tangText").css("color", "#073507");
    $("#tango").css("transform", "scale(1)");
  })

$("#jetty").hover(function () {
  $("#jettText").css("color", "#ffd412");
  $("#jetty").css("transform", "scale(1.05)");
},
  function () {
    $("#jettText").css("color", "#073507");
    $("#jetty").css("transform", "scale(1)");
  })

  $("#randy").hover(function () {
    $("#randText").css("color", "#ffd412");
    $("#randy").css("transform", "scale(1.05)");
  },
    function () {
      $("#randText").css("color", "#073507");
      $("#randy").css("transform", "scale(1)");
    })
  
