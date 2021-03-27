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
//estrutura da lista de grupos
function listarGrupos(nome) {
    group_list = document.querySelector(".group-list");

    let grupo = document.createElement("div");
    grupo.classList.add("grupo");
    grupo.textContent = nome;

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
                let createGroup = listarGrupos(group.nome);
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
GETGroups();

//criar grupos
let form_group = document.querySelector("#new-group");
let input_form = document.querySelector("#new-group #grupo");
console.log(form_group)

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
    }).catch((error) => {
        console.log(error);
    })
})

//nome do usuário
let navbarnome = document.querySelector(".pagina .header_nome #navbarText.navbar-collapse");
console.log(navbarnome)

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
        
    myModal.hide()
});