//getElements
//var inputElement = document.getElementById('nome') //"document." se referência a árvore DOM. getElementById = pelo ID (sempre único, não posso ter 2 itens com o msm ID)
//var inputElement = document.getElementsByTagName('input')[0]; //pega pela TAG HTML usada. Sempre retorna um VETOR, msm que tenha 1 valor somente!!
//var inputElement = document.getElementsByClassName('nome')[0]; //pega pelo NAME. Sempre retorna um VETOR, pois assim como o TAG, eu posso ter mais de um ítem com o msm "NAME"
var inputElement = document.querySelector('div#app input'); //referencio o caminho que quero... no exemplo, o query procurou pelo "Body -> Div de ID app -> input". tirei o body pois posso solicitar ao query para "procurar" itens diretamente pelas TAGs e IDs(ou classes, no caso ficaria div.app, se "app" fosse uma classe e não um id)
//var inputElement = document.querySelector('input[name=nome]'); //referenciando inputs que contenham valores "name" dentro.
//var inputElement = document.querySelector('input'); //pegará o primeiro input que encontrar.
//querySelector só retorna o primeiro elementro encontrado. o querySelectorAll retorna um vetor, com todos os valores encontrados
var btnElement = document.querySelector('button.botao')
btnElement.onclick = function(){
    var text = inputElement.value //pega o valor dentro do inputElement. este por sua vez, recebeu anteriormente o valor digitado na caixa de texto. todo valor digitado na caixa retorna como STRING. por isso não foi feita conversão.
    alert(text)
}
/*********************************************************************************************** */
//createElements
var linkElement = document.createElement('a'); //crio um elemento 'a', e o atribuo a variável 'linkElement'... imagina um vetor com 1 elemento
linkElement.setAttribute('href', 'https://github.com/MarcoCPinho'); //atribuo ao linkElement o "href=https..." como eu só tenho 1 elemento ('a') criado, ele atribiu automaticamente à este elemento 'a' o atributo de 'href=https...'... se eu tivesse criado um vetor, ele atribuiria ao primeiro elemento, ou ao elemento especificado, caso eu especifica-se
linkElement.setAttribute('title', 'GitHub do Marco');
var textElement = document.createTextNode('Acessar meu GitHub'); //crio um elemento de texto e o atribuo a variavel textElement
linkElement.appendChild(textElement); //textElement como filho de linkElement (conceito de herança- oK)
var containerElement = document.querySelector('#app'); //crio a variável containerElement e atribuo o valor do "ID=APP" a este
containerElement.appendChild(linkElement); //linkElement como filho de containerElement (conceito de herança - oK)
/*********************************************************************************************** */
//removeChild
/*
var inputElement = document.querySelector('div#app button.botao')
containerElement.removeChild(inputElement);
*/
/*********************************************************************************************** */
//estilos nos Elements
var boxElement = document.querySelector('.box');

boxElement.style.width = 100;
boxElement.style.height = 100;
boxElement.style.backgroundColor = 'yellow';
boxElement.style.boxShadow = '5px 5px 5px black';