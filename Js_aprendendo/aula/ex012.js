var agora =new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora}`)
if(hora < 6) {
 console.log('Boa madrugada')
} else if (hora < 12){
    console.log('Bom dia')
}else if(hora <=18) {
    console.log('Coa tarde')
}else {
    console.log('Boa noite')
}