async function quantidadedeUsuarios(){
const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
const res = await fetch(url)
const dados = await res.json()
const nomeDasRedes = Object.keys(dados) 
const quantidadedeUsuarios = Object.values(dados)

const data =[
{
x: nomeDasRedes,
y: quantidadedeUsuarios,
type: 'bar'

}

]
const grafico =document.createElement ('div')
grafico.className = 'grafico' 
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico,data)
}

quantidadedeUsuarios()