//Codgio 1

$(document).ready(function(){
 var a=0;
 var b=0;
 var c=0;
 
 
 $("#frm1").submit(function (par)
 {
    par.preventDefault();
    var d="";
    a=parseInt($("#txt1").val());
    b=parseInt($("#txt2").val());
    d=$("#lst1").val();    
    if(d==="+")c=a+b;            
    if(d==="-")c=a-b;        
    if(d==="*")c=a*b;        
    if(d==="/")
    {
        if(b===0)
        {
            alert("No se puede ejecutar la division por cero");
        }       
    }
    $("#drivers").append("<tr>");
    $("#drivers").append("<td>" + a + " " + d + " " + b + "=</td>");
    $("#drivers").append("<td>"+ c + "</td></tr>");
 });
 $("#boton1").click(function ()
 {
     $("#div1").html("<h4>Desarrolador</h4>");
     $("#div1").append("<p>Juan Pablo Lagos</p>");
     $("#div1").append("<img src='images/foto.jpg' alt='foto'>");
     $("#div1").show(1000);
 });
  $("#boton2").click(function (){
     $("#div1").hide(3000);
 });
 $("#boton3").click(function (){
     $("#drivers").html("");
 });
 
});