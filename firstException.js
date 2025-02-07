try{
    throw new Error('Gerando um erro Genérico!')
}
catch(e){
    console.error(`${e.name}: ${e.message}`);
}