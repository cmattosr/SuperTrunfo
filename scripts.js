var teste = 1

var cartaMae = {
  nome: "Mãenine",
  imagem: "https://cmattosr.github.io/pascoa2021/Mae.jpg",
  atributos: {
    ataque: parseInt(Math.random()*100),
    defesa: parseInt(Math.random()*100),
    magia:parseInt(Math.random()*100)
  }
}

var cartaPai = {
  nome: "Paizam",
  imagem: "https://cmattosr.github.io/pascoa2021/Pai.jpg",
  atributos: {
    ataque: parseInt(Math.random()*100),
    defesa: parseInt(Math.random()*100),
    magia: parseInt(Math.random()*100)
  }
}

var cartaMatheus = {
  nome: "Matheustwo",
  imagem: "https://cmattosr.github.io/pascoa2021/Matheus.jpg",
  atributos: {
    ataque: parseInt(Math.random()*100),
    defesa: parseInt(Math.random()*100),
    magia:parseInt(Math.random()*100)
  }
}

var cartaMiguel = {
  nome: "Miguelchu",
  imagem: "https://cmattosr.github.io/pascoa2021/Miguel.jpg",
  atributos: {
    ataque: parseInt(Math.random()*100),
    defesa: parseInt(Math.random()*100),
    magia:parseInt(Math.random()*100)
  }
}

var cartaTio = {
  nome: "Tiosaur",
  imagem: "https://cmattosr.github.io/pascoa2021/Tio2.jpg",
  atributos: {
    ataque: parseInt(Math.random()*100),
    defesa: parseInt(Math.random()*100),
    magia:parseInt(Math.random()*100)
  }
}

var cartaVo = {
  nome: "Vógonite",
  imagem: "https://cmattosr.github.io/pascoa2021/Vo.png",
  atributos: {
    ataque: parseInt(Math.random()*100),
    defesa: parseInt(Math.random()*100),
    magia:parseInt(Math.random()*100)
  }
}

var cartaCharizard = {
    nome: "Charizard",
    imagem: "https://images.gameinfo.io/pokemon/256/006-52.png",
    atributos: {
        ataque: parseInt(Math.random()*100),
        defesa: parseInt(Math.random()*100),
        magia: parseInt(Math.random()*100)
    }
}

var cartaBlastoise = {
    nome: "Blastoise",
    imagem: "https://cdn.bulbagarden.net/upload/thumb/0/02/Blasty.png/230px-Blasty.png",
    atributos: {
        ataque: parseInt(Math.random()*100),
        defesa: parseInt(Math.random()*100),
        magia: parseInt(Math.random()*100)
    }
}

var cartaVenusaur = {
    nome: "Venusaur",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/venusaur_zyxu.png",
    atributos: {
        ataque: parseInt(Math.random()*100),
        defesa: parseInt(Math.random()*100),
        magia: parseInt(Math.random()*100)
    }
}

var cartaPikachu = {
    nome: "Pikachu",
    imagem: "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/03/pikachu-2-810x540.jpg",
    atributos: {
        ataque: parseInt(Math.random()*100),
        defesa: parseInt(Math.random()*100),
        magia: parseInt(Math.random()*100)
    }
}

var cartaArcanine = {
    nome: "Arcanine",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/arcanine_22vn.png",
    atributos: {
        ataque: parseInt(Math.random()*100),
        defesa: parseInt(Math.random()*100),
        magia: parseInt(Math.random()*100)
    }
}

var cartaAlakazam = {
    nome: "Alakazam",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/alakazam_meah.png",
    atributos: {
        ataque: parseInt(Math.random()*100),
        defesa: parseInt(Math.random()*100),
        magia: parseInt(Math.random()*100)
    }
}

var cartaGengar = {
    nome: "Gengar",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/gengar_z2ud.png",
    atributos: {
        ataque: parseInt(Math.random()*100),
        defesa: parseInt(Math.random()*100),
        magia: parseInt(Math.random()*100)
    }
}

var cartaGyarados = {
    nome: "Gyarados",
    imagem: "https://sm.ign.com/ign_br/screenshot/default/gyarados_74k6.png",
    atributos: {
        ataque: parseInt(Math.random()*100),
        defesa: parseInt(Math.random()*100),
        magia: parseInt(Math.random()*100)
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaCharizard, cartaBlastoise, cartaVenusaur, cartaPikachu, cartaArcanine, cartaAlakazam, cartaGengar, cartaGyarados, cartaTio, cartaVo, cartaMiguel, cartaMatheus, cartaPai, cartaMae]

var pontosJogador = 0
var pontosMaquina = 0

atualizaPlacar()
atualizaQuantidadeCartas()

function atualizaPlacar(){
  var divPlacar = document.getElementById("placar")
  var html = "Placar: Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
  divPlacar.innerHTML = html
}

function atualizaQuantidadeCartas(){
  var divQuantidadeCartas = document.getElementById("quantidade-cartas")
  var html = "Quantidade de cartas no jogo: " + cartas.length
  divQuantidadeCartas.innerHTML = html
}

function sortearCarta() {
    teste = 0
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length)
    cartaMaquina = cartas[numeroCartaMaquina]
    cartas.splice(numeroCartaMaquina, 1)

    var numeroCartaJogador = parseInt(Math.random() * cartas.length)

    cartaJogador = cartas[numeroCartaJogador]
    cartas.splice(numeroCartaJogador, 1)

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibeCartaJogador()
}

function exibeCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status'>"

    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()

    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu</p>'
        pontosJogador++
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu</p>'
        pontosMaquina++
    } else {
        htmlResultado = '<p class="resultado-final">Empatou</p>'
    }
  
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = false
  
    atualizaPlacar()
    exibeCartaMaquina()
    atualizaQuantidadeCartas()
  
 //   if (cartas.length == 0){
      if (teste == 0){
      alert("Fim de jogo")
      document.getElementById('btnJogarNovamente').disabled = false
      if (pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Jogador venceu!</p>'
 document.getElementById('btnProximaRodada').disabled = true
      } else if (pontosMaquina > pontosJogador){
        htmlResultado = '<p class="resultado-final">Máquina venceu!</p>'
 document.getElementById('btnProximaRodada').disabled = true
      }else {
        htmlResultado = '<p class="resultado-final">Empate!</p>'
 document.getElementById('btnProximaRodada').disabled = true
    }
    }else{
  document.getElementById('btnProximaRodada').disabled = false
  }

divResultado.innerHTML = htmlResultado
}

function exibeCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""

    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"
    }

    var html = "<div id='opcoes' class='carta-status --spacing'>"

    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
}

function proximaRodada(){
  var divCartas = document.getElementById("cartas")
  divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="carta"></div>`
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  document.getElementById('btnProximaRodada').disabled = true
  
  var divResultado = document.getElementById("resultado")
  divResultado.innerHTML = ""
}

function jogarNovamente(){
  window.location.href = window.location.href;
}
