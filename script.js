function atualizarRelogio() {
    var agora = new Date();
    var horas = agora.getHours();
    var minutos = agora.getMinutes();
    var segundos = agora.getSeconds();

    horas = formatarNumero(horas);
    minutos = formatarNumero(minutos);
    segundos = formatarNumero(segundos);

    var horario = horas + ":" + minutos + ":" + segundos;

    document.getElementById("relogio").innerHTML = horario;

    setTimeout(atualizarRelogio, 1000);
}

function formatarNumero(numero) {
    return numero < 10 ? "0" + numero : numero;
}

window.onload = function() {
    atualizarRelogio();
};