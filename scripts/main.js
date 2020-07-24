/*
var xhr = new XMLHttpRequest(); //puxa dados da API e mostra somente no "network" do inspecionar

xhr.open('GET', 'https://api.github.com/users/MarcoCPinho')
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}
*/
/* 
var minhaPromise = function(){ //puxa dados da API e mostra no console o resultado ou error
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/MarcoCPinho')
        xhr.send(null);

        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                if (xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}
minhaPromise()
.then(function(response) {
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});
*/
/*
axios.get('https://api.github.com/users/MarcoCPinho') //axios age como um "wrapper" do XMLHTTPRequest
.then(function(response){
    console.log(response);
})
.catch(function(error){
    console.warn(error);
});
*/