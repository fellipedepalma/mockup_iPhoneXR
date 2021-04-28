// Setar Hora
function time(){
    let hoje = new Date();
    let horas = hoje.getHours();
    let minutos = hoje.getMinutes();
    
    let pegarHora = document.querySelector('.hours');
    pegarHora.innerHTML = horas + ' : ' + minutos;
    setTimeout('time()', 500);
  }