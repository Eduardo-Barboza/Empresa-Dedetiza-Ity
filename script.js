var m = document.getElementById('txtarea')
var res = document.getElementById('res')

function verificar(){
    if (m.value.length == 0) {
        window.alert('Verifique os dados e tente novamente')
    } else{
        var metro = Number(m.value)
        var animal = document.getElementsByName('infes')
        var tanimal = ''
        var valor = parseFloat('')          /* Recebe o valor das operrações e converte em NUMBER */
        if (animal[0].checked){
            valor =metro*2.75 + (metro*2.75*5/100) + (metro*2.75*30/100) + (metro*2.75*65/100)
            tanimal = 'Baratas'
        } else if (animal[1].checked){
            valor =metro*1.50 + (metro*1.50*5/100) + (metro*1.50*30/100) + (metro*1.50*65/100)
            tanimal = 'Ratos'
        } else if (animal[2].checked){
            valor =metro*0.80 + (metro*0.80*5/100) + (metro*0.80*30/100) + (metro*0.80*65/100)
            tanimal = 'Formigass'
        } else if (animal[3].checked){
            valor =metro*3.00 + (metro*3.00*5/100) + (metro*3.00*30/100) + (metro*3.00*65/100)
            tanimal = 'Escorpiãos'
        } else if (animal[4].checked){
            valor =metro*1.40 + (metro*1.40*5/100) + (metro*1.40*30/100) + (metro*1.40*65/100)
            tanimal = ' Cupims'
        }
        m.value = '' 
        m.focus()
        res.style.textAlign = 'center'
        res.innerHTML = `O seu pré orçamento para a dedetizaçao de ${tanimal} ficou no valor de R$ ${valor.toFixed(2)}
        OBS: Esta é apenas uma margem para fins de precificação simples, para mais detalhes entre em contato conosco.`
    }
}


