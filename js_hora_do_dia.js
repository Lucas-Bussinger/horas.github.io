let texto = window.document.getElementById('div1');
let hora = new Date();
 //alert(hora.getTime())
texto.innerHTML = 'Agora são '+(hora.toTimeString()).substring(0,8)+' horas.'//hora.getTime();


setTimeout(() => {location.reload()}, 1000);