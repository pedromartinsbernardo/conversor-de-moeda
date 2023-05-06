const calcular = document.getElementById('calcular')



calcular.addEventListener('click',media)

function media(){
    const real  = parseFloat(document.getElementById('real').value) 

    const dolar = parseFloat(document.getElementById('dolar').value)

    const resultado = document.getElementById('resultado')

    const media=(real/dolar)

    resultado.innerHTML = `$ ${media.toFixed(2)}`
}
 





