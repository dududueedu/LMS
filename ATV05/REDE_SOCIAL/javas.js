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

//OVERLAY com o botao postar
let overlayModal = document.querySelector(".overlay_modal")

botaopostar.addEventListener("click", function(){
    overlayModal.classList.add("active")
})

//botões
let botao_close = document.querySelector(".overlay_modal .container_modal .footer .botao_close")
botao_close.addEventListener("click", function(){
    overlayModal.classList.remove("active")
})

let botaoX = document.querySelector(".overlay_modal .container_modal .header_modal .botaoX")
botaoX.addEventListener("click", function(){
    overlayModal.classList.remove("active")
})

window.addEventListener("click", function(event){
    if(event.target == overlayModal) overlayModal.classList.remove("active")
})