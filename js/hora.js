// Setar Hora
function time(){
    let agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    
    let pegarHora = document.querySelector('.hours');
    pegarHora.innerHTML = horas + ' : ' + minutos;
    setTimeout('time()', 500);
  }
time();