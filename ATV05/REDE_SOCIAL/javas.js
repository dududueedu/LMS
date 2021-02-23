//comportamento JavaScript
//botao hamburguer
let meu_botao = document.querySelector(" .navegador_superior .meu_botao")
console.log(meu_botao)

let menu = document.querySelector(".menu_retratil_esquerdo")
console.log(menu)

meu_botao.addEventListener("click", function(){
    menu.classList.toggle("active")
})

let conteudo = document.querySelector(".container .conteudo")
console.log(conteudo)
meu_botao.addEventListener("click", function(){
    conteudo.classList.toggle("active")
})

//botao postar
let botaopostar = document.querySelector(".navegador_superior .meu_botao_postar")
console.log(botaopostar)