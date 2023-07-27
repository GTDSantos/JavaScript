function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12){
        img.src = "manhar.png"
        document.body.style.background = '#F7BEB8'
    }else if (hora >= 12 && hora <= 18) {
        img.scr ="tarder-fotor.png"
        document.body.style.background = '#B82C02'
    }else {
        img.src ='noiter-fotor-20230726222156.png'
        document.body.style.background = '#193D6D'
    }
}


