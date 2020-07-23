/*********************************************************************************************** */
//Função IF ELSE
/*
function retornaSexo(sexo){
    if (sexo === 'M'){
        return 'Masculino';
    } else if (sexo === 'F'){
        return 'Feminino'
    } else{
        return 'Outro'
    }
}
*/
/*********************************************************************************************** */
//Função Switch
/*
function retornaSexo(sexo) {
    switch (sexo) {
        case 'M':
            return 'Masculino';
        case 'F':
            return 'Feminino';
        default:
            return 'Outro';
    }
}
var resultado = retornaSexo('M');
*/
/*********************************************************************************************** */
//Operadores Matemáticos
/*
var x = 10, y = 5; // numero + numero -> operação matemática
//var x = "10", y = 5; //número + string -> conconotação

var resultado = x+y; //15 -> soma
//var resultado = x-y; //05 -> subtração
//var resultado = x*y; //50 -> multiplicação
//var resultado = x/y; //15 -> divisão
//var resultado = x%y; //0 -> resto da divisão
//var resultado = x**y; //100000 -> elevado
*/
/*********************************************************************************************** */
//console.log(resultado);
/*############################################################################################## */
//Operadores Lógicos 
//(==)-> confere o valor variável '5' == '6' -> retorna false; pois os valore são diferente, apensar de ambos serem SRING. 5=='5'-> retorna TRUE, pois o valor é o mesmo, apesar de um ser INT e outro STRING.
//(===)-> confere o valor interno da variável e o tipo  5==='5'-> retorna FALSE, mesmo valor, mas tipos diferentes, INT e STRING
/*
var sexo = 'M', idade = 23;
if (sexo === 'M' && idade >= 18){ //&& = AND
    console.log('OK');
}
*/

/*
var sexo = 'M', idade = 23;
if (sexo === 'M' || idade >= 18){ //|| = OR
    console.log('OK');
}
*/
/*
var sexo = 'F';
if (sexo !== 'M'){ //! = NO
    console.log('OK');
}
*/