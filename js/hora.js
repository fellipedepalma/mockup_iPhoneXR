// Setar Hora
function pad(s){
    return (s < 10) ? '0' + s : s;
}

function time(){
    let agora = new Date();
    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    
    let pegarHora = document.querySelector('.hours');
    pegarHora.innerHTML = [horas, minutos].map(pad).join(':');
    setTimeout('time()', 500);
  }
time();