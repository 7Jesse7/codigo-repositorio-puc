let user = '{"name": "Jessé", "age": 42, "isAdmin": true, "friends":[0,8,2,3]}';
// A propriedade ainda não existe, portanto teremos erro
//console.log(user.friends[0] ?? "Propriedade inexistente"); 

usuario = JSON.parse(user);
console.log(usuario.friends[1]); // com o PARSE o JSON converte a string em um objeto