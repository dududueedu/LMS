//comportamento JavaScript
//botao hamburguer
let meu_botao = document.querySelector(" .navegador_superior .meu_botao")
console.log(meu_botao)

let menu = document.querySelector(".menu_retratil_esquerdo")
console.log(menu)

let links = document.querySelector(".menu_retratil_esquerdo .link")
console.log(links)

meu_botao.addEventListener("click", function(){
    menu.classList.toggle("active")
    links.classList.toggle("active")
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

//formulario
let form_nome = document.querySelector(".form_nome")
let form_msg = document.querySelector(".form_msg")
let botao_sumit = document.querySelector(".botao_submit") 

let conteudo_mural = document.querySelector(".conteudo")

botao_sumit.addEventListener("click", function(){
    let posts = document.querySelector(".container .conteudo .post.active")
    posts.classList.remove("active")
})

botao_sumit.addEventListener("click", function(event){

    event.preventDefault()

    let nome = form_nome.value
    let msg = form_msg.value

    let post = document.createElement("div")
    post.classList.add("post")
    conteudo_mural.appendChild(post)

    let h3 = document.createElement("h3")
    h3.classList.add("nome_card")
    let texto_h3 = document.createTextNode(nome)
    h3.appendChild(texto_h3)
    post.appendChild(h3)

    let p = document.createElement("p")
    p.classList.add("msg_card")
    let mensagem = document.createTextNode(msg)
    p.appendChild(mensagem)
    post.appendChild(p)

    overlayModal.classList.remove("active")
    post.classList.add("active")

})
//destaque para o primeiro post
let posts_data = [
    {
        nome: "Eduardo",
        mensagem: "E aí, tranquilo!",
    },
    {
        nome: "Liro",
        mensagem: "Oi gente!",
    },
    {
        nome: "Safira",
        mensagem: "Como vai?",
    },
    {
        nome: "Nicolau",
        mensagem: "Boa noite seus lindos(as)!",
    }
]

let posts = document.querySelector(".conteudo")

for (let i = 0; i < posts_data.length; i++) {
    let post = document.createElement("div")
    post.classList.add("post")
    posts.appendChild(post)

    let h3 = document.createElement("h3")
    h3.classList.add("nome_card")

    let p = document.createElement("p")
    p.classList.add("msg_card")

    posts_data.map((post) => {
        h3.innerHTML = posts_data[i].nome
        p.innerHTML = posts_data[i].mensagem
    })
    post.appendChild(h3)
    post.appendChild(p)

    if(i == 3){
        post.classList.add("active")
    }
}

let h3 = document.querySelector(".container .conteudo .post.active .nome_card")
let pp = document.querySelector(".container .conteudo .post.active .msg_card")
let trocarpost = -1

function mudarText(){ 
    if(trocarpost >= posts_data.length) trocarpost = -1
    trocarpost++
    h3.innerHTML = posts_data[trocarpost].nome
    pp.innerHTML = posts_data[trocarpost].mensagem
}

post = setInterval(mudarText, 2000)