const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasMundo = (dados.total_pessoas_mundo  / 1e9)
    const horas = parseInt (dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas)*100)
    const porcentagemConetada=Math.round ((pessoasConectadas/pessoasMundo)*100)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
   
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão
     conectadas em alguma rede social e passam em média <span>${horas}horas</span> e <span>${minutos} minutos</span> conectados.
     <br> Isso significa que <span>${porcentagemConetada}%</span> das pessoas estão ativas em alguma rede social`

    const container = document.getElementById("graficos-container")
    container.appendChild(paragrafo)
  }
  
  vizualizarInformacoesGlobais()