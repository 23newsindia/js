html2element:(function($){'use strict';$(document).ready(function(){$('.king-night-box').click(function(d){d.stopPropagation();});});if("undefined"!=typeof localStorage){$(window).load(function(){if(kingnight.nmdefault&&localStorage.getItem("king-night")==null){document.documentElement.classList.add("king-night");document.getElementById("king-night").checked=!0;}
if(localStorage.getItem("king-night")==1){document.documentElement.classList.add("king-night");document.getElementById("king-night").checked=!0;}
$("#king-night").change(function(){if($(this).is(":checked")){document.documentElement.classList.add("king-night");var b=document.getElementById("king-night");localStorage.setItem("king-night",1)}else document.documentElement.classList.remove("king-night"),localStorage.setItem("king-night",2)});});try{$(window).load()}catch(b){}}})(jQuery);