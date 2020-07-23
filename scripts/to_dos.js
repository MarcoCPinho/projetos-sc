var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input#to_do');
var buttonElement = document.querySelector('#app button#btnAdicionar');

var to_dos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade de JS'
];

function renderTo_dos(){
    for (let to_do of to_dos){ //for ( "variável" of "interável") { declaração }
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(to_do);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}
renderTo_dos();
/*
<li>
    Fazer café
                <a href="#">Excluir</a>
</li>
    <li>
        Estudar JavaScript
                <a href="#">Excluir</a>
    </li>
    <li>
        Acessar comunidade da Rocketseat
                <a href="#">Excluir</a>
    </li>*/