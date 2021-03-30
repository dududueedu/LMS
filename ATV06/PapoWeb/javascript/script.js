/*
GET – Solicita algum recurso: 
    Dados são anexados à URL, ficando visíveis ao usuário.
POST – Envia dados referentes ao recurso especificado para serem processados: 
    Dados são incluídos no corpo do comando.
PUT – Envia certo recurso: Em geral, é usado para atualizar dados
DELETE – Exclui o recurso
HEAD – Variação do GET em que o recurso não é retornado: 
    Usado para obter metainformações por meio do cabeçalho da resposta, sem ter que recuperar todo o conteúdo.
*/

//mostra modal
let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
myModal.show()

let pag = document.querySelector(".container .pagina")
let globalIdGrupo = ""

//estrutura da lista de grupos
function listarGrupos(id, nome) {
    group_list = document.querySelector(".group-list");

    let grupo = document.createElement("div");
    grupo.classList.add("grupo");

    let img = document.createElement("img");
    img.classList.add("imagem");
    img.src = "https://cdn.pixabay.com/photo/2016/11/14/17/39/person-1824147_960_720.png";

    let nome_gp = document.createElement("div");
    nome_gp.classList.add("nome_gp");
    nome_gp.textContent = nome;

    //pega o id do grupo clicado
    grupo.addEventListener("click", ()=> {
        console.log(id);
        globalIdGrupo = id;
        GETmensagens(globalIdGrupo);
    })

    grupo.appendChild(img);
    grupo.appendChild(nome_gp);
    group_list.appendChild(grupo);
    return group_list;
}

function GETGroups() {
    axios({
        method: 'GET',
        url: 'https://server-json-lms.herokuapp.com/grupos'
    }).then(
        (response) => {
            let grupos = response.data;
            for (let group of grupos) {
                let createGroup = listarGrupos(group.id, group.nome);
                pag.appendChild(createGroup);
                console.log(group.nome);
            }
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    )
}


//criar grupos
let form_group = document.querySelector("#new-group");
let input_form = document.querySelector("#new-group #grupo");

form_group.addEventListener("submit", (e)=> {
    e.preventDefault();
    axios({
        method: "POST",
        url: "https://server-json-lms.herokuapp.com/grupos",
        data: {
            nome: input_form.value   
        }
    }).then((response) => {
        GETGroups();
    }).catch((err) => {
        console.log(err);
    })
})

//inserir nome do usuário no canto direito
let navbarnome = document.querySelector(".pagina .header_nome #navbarText.navbar-collapse");

globalName = ""
let form = document.getElementById('form_modal');
let input = document.getElementById('nome');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    globalName = input.value;
    console.log(input.value);
    let span = document.querySelector(".navbar-text");
    span.textContent = globalName;

    console.log(span);
    navbarnome.appendChild(span);
    
    myModal.hide();
    GETGroups();
});
   
//adicionar mensagem em um grupo (ok)
let form_conversa = document.getElementById("new-mensagem")
let input_conversa = document.querySelector(".new-mensagem .form-control")

form_conversa.addEventListener("submit", (e)=> {
    e.preventDefault();
    axios({
        method: "POST",
        url: "https://server-json-lms.herokuapp.com/mensagens",
        data: {
            nome: globalName,
            corpo: input_conversa.value,
            grupoId: globalIdGrupo
        }
    }).then((response) => {
        GETmensagens(globalIdGrupo);
        console.log("deu certo!");
    }).catch((err) => {
        console.log(err);
    })
})

//requisitar mensagens por meio de um grupo (ID)
let mensagens = document.querySelector(".pagina .mensagens");
function GETmensagens(grupoIdGrupo){
    mensagens.innerHTML = ""
    axios({
        method: "GET",
        url: 'https://server-json-lms.herokuapp.com/grupos/' + grupoIdGrupo + '/mensagens'   
    }).then((response) => {
        let msgs = response.data;
        listarMensagens(msgs);
    }).catch((err)=>{
        console.log(err);
    })
}

function listarMensagens(msgs){
    for(let mensage of msgs){
        let corpoDaMsg = document.createElement("div");
        corpoDaMsg.classList.add("corpoDaMsg");

        let nome = document.createElement("h6");
        nome.classList.add("nome");
        nome.textContent = mensage.nome;

        let mensagem = document.createElement("span");
        mensagem.classList.add("msg");
        mensagem.textContent = mensage.corpo;

        corpoDaMsg.appendChild(nome);
        corpoDaMsg.appendChild(mensagem);

        mensagens.appendChild(corpoDaMsg);
    }
}