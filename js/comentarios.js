function init() {
 document.getElementById('btncomentar').onclick = function () {
 crear_comentario();
 limpiar();
 contar_comentarios();
 }
}
function limpiar() {
 document.getElementById("textnombre").value="";
 document.getElementById("selectbasic").value="";
 document.getElementById("textcontenido").value="";
}
function crear_comentario() {
 var contenedor = document.getElementById("Comentarios");
 var nombre = document.getElementById("textnombre").value;
 var pais = document.getElementById("textpais").value;
 var email = document.getElementById("textemail").value;
 //var tipo = document.getElementById("selectbasic").value;
 var mensaje = document.getElementById("textcontenido").value;
 var f = new Date();

 var fecha=f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
 var comentario = document.createElement("div");
 comentario.setAttribute("class","panel panel-default");

 var panel = document.createElement("div");
 panel.setAttribute("class","panel-body");

 var texto = document.createElement("div");
 texto.setAttribute("class","panel-footer");

 /*var paismo = document.createElement("div");
 paismo.setAttribute("class", "panel-pais");*/


 var contenidopanel = document.createTextNode(nombre);
 var fnegrita = document.createElement("div");

 
 var vispais = document.createElement("div");
 vispais.setAttribute("style","float: inline-block; textalign:center;margin:-20pxauto;");
  var verpais = document.createTextNode(pais);
 vispais.appendChild(verpais);

 var mail = document.createElement("div");
 mail.setAttribute("style","float: inline-block; textalign:center;margin:-20pxauto;");
  var momail = document.createTextNode(email);
 mail.appendChild(momail);


 fnegrita.setAttribute("style","float: right;");
 var verfecha = document.createTextNode(fecha);
 fnegrita.appendChild(verfecha);

 /*var ftipo = document.createElement("div");
 ftipo.setAttribute("style","float: inline-block; textalign:center;margin:-20pxauto;");
  var vertipo = document.createTextNode(tipo);
 ftipo.appendChild(vertipo);*/



 var vermensaje = document.createTextNode(mensaje);
 
 


 panel.appendChild(contenidopanel);

 //panel.appendChild(verpais);



 panel.appendChild(fnegrita);
 panel.appendChild(vispais);
 panel.appendChild(mail);
 //panel.appendChild(ftipo);

 texto.appendChild(vermensaje);
 comentario.appendChild(panel);
 comentario.appendChild(texto);

 /*paismo.appendChild(vermensaje);
 comentario.appendChild(panel);
 comentario.appendChild(paismo);*/





document.getElementById("Comentarios").appendChild(comentario);
}


localStorage.clear();




window.onload = init;