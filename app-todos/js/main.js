// var minhaPromise = function(){
//     return new Promise(function(resolve, reject){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/diego3g');
//         xhr.send(null);

//         xhr.onreadystatechange = function(){
//             if (xhr.readyState === 4) {
//                 if (xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Erro de requisição');
//                 }
//             }
//         }

//     });
// }

// o axios é wraper do xmlhttprequest. Aqui por baixo dos panos a requisição é xmlhttprequest.
// o axios só vai nos ajudar a trazer os valores mais fácil. Ex: ele já entende que a resposta é um json e já retorna um objeto JS

axios.get('https://api.github.com/users/diego3g') 
    .then(function(response){
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });