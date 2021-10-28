const axios = require('axios');

async function accessToken(){
    // Parte 1 -> Acessando o accessToken
    console.log('\nGerando acessToken...\n');
    let response = await axios({
        method: 'post',
        url: 'https://tecweb-js.insper-comp.com.br/token',
        data: {
            username: 'luizavap'
        },
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    });
 
    return response.data.accessToken;
}

async function accessExercise(token){
    // Parte 2 -> Acessando os exercícios
    console.log('\nAcessando exercícios...\n');
    let response = await axios
        .get('https://tecweb-js.insper-comp.com.br/exercicio', 
             {headers: {'Authorization': `token ${token}`}}, 
             {username: 'luizavap'})
        .catch((error) => {console.error(error)})

    return response.data
    }


async function solvingExercises(){

    let token = await accessToken();
    console.log(token);

    let exercises = await accessExercise(token);

    console.log(exercises);

    ex1 = soma(exercises);
    postResult(ex1, 'soma', token);

    ex2 = tamanhoString(exercises);
    postResult(ex2, 'tamanho-string', token);

    ex3 = nomeDoUsuario(exercises);
    postResult(ex3, 'nome-do-usuario', token);

    ex4 = jacaWars(exercises);
    postResult(ex4, 'jaca-wars', token);

    ex5 = anoBissexto(exercises);
    postResult(ex5, 'ano-bissexto', token);

    ex6 = volumeDaPizza(exercises);
    postResult(ex6, 'volume-da-pizza', token);

    ex7 = mru(exercises);
    postResult(ex7, 'mru', token);

    ex8 = inverteString(exercises);
    postResult(ex8, 'inverte-string', token);

    ex9 = somaValores(exercises);
    postResult(ex9, 'soma-valores', token);

    ex10 = nEsimoPrimo(exercises);
    postResult(ex10, 'n-esimo-primo', token);

    ex11 = maiorPrefixoComum(exercises); // !!!
    postResult(ex11, 'maior-prefixo-comum', token);

    ex12 = somaSegundoMaiorEMenorNumeros(exercises);
    postResult(ex12, 'soma-segundo-maior-e-menor-numeros', token);

    ex13 = contaPalindromos(exercises);
    postResult(ex13, 'conta-palindromos', token);

    ex14 = somaDeStringsDeInts(exercises);
    postResult(ex14, 'soma-de-strings-de-ints', token);

    ex15 = somaComRequisicoes(exercises, token);
    postResult(ex15, 'soma-com-requisicoes', token);

    ex16 = cacaAoTesouro(exercises, token);
    postResult(ex16, 'caca-ao-tesouro', token);
}

solvingExercises(); 

// ------------------------------------------------------------------------------------------------

function soma(exercises){ 
    // Exercício 1/16 - Soma

    let exercise = exercises.soma;

    console.log(exercise);
    console.log('\nExercício 1: ' + exercise.titulo);
    console.log(exercise.descricao);
    console.log('a: ' + exercise.entrada.a);
    console.log('b: ' + exercise.entrada.b);
    let resultado = exercise.entrada.a + exercise.entrada.b;
    console.log('Resultado: ' + resultado);
    console.log('\n');

    return resultado;
}

function tamanhoString(exercises){
    // Exercício 2/16 - Calcula tamanho da String

    let exercise = exercises['tamanho-string'];
    
    console.log(exercise);
    console.log('\nExercício 2: ' + exercise.titulo);
    console.log(exercise.descricao);
    console.log('String: ' + exercise.entrada.string);
    let resultado = exercise.entrada.string.length
    console.log('Resultado: ' + resultado);
    console.log('\n');

    return resultado;
}

function nomeDoUsuario(exercises){
    // Exercício 3/16 - Descobre o nome do usuário

    let exercise = exercises['nome-do-usuario'];
    
    console.log(exercise);
    console.log('\nExercício 3: ' + exercise.titulo);
    console.log(exercise.descricao);
    let email = exercise.entrada.email;
    let resultado = email.split('@')[0];
    console.log('E-mail: ' + email);
    console.log('Resultado: ' + resultado);
    console.log('\n');

    return resultado;
}

function jacaWars(exercises){
    // Exercício 4/16 - Jaca Wars

    let exercise = exercises['jaca-wars'];
    console.log(exercise);
    console.log('\nExercício 4: ' + exercise.titulo);
    console.log(exercise.descricao);
    let g = 9.8;
    let v = exercise.entrada.v;
    let theta = exercise.entrada.theta * (Math.PI/180);
    let distancia = (v*v*Math.sin(2*theta))/g;
    console.log('Para a velocidade igual à ' + v);
    console.log('Para o ângulo igual à: ' + theta);
    console.log('A distância será de: ' + distancia);
    let resultado;
    if (distancia >= 98 && distancia <= 102) { resultado = 1; }
    else { resultado = 0; }
    console.log('Resultado: ' + resultado);
    console.log('\n');

    return resultado;
}

function anoBissexto(exercises){
    // Exercício 5/16 - Descobre se o ano é bissexto

    let exercise = exercises['ano-bissexto'];
    
    console.log(exercise);
    console.log('\nExercício 5: ' + exercise.titulo);
    console.log(exercise.descricao);
    let ano = exercise.entrada.ano;
    console.log('Ano ' + ano);
    let resultado;
    if ((ano % 4) == 0 && (ano % 100) != 0) { resultado = true; }
    else { resultado = false; }
    console.log('Resultado: ' + resultado);
    console.log('\n');

    return resultado;
}

function volumeDaPizza(exercises){
    // Exercício 6/16 - Descobre se o volume da pizza

    let exercise = exercises['volume-da-pizza'];
    
    console.log(exercise);
    console.log('\nExercício 6: ' + exercise.titulo);
    console.log(exercise.descricao);
    let raio = exercise.entrada.z;
    let altura = exercise.entrada.a;
    console.log('Raio: ' + raio);
    console.log('Altura: ' + altura);
    let resultado = Math.round(Math.PI*raio*raio*altura);
    console.log('Resultado: ' + resultado);
    console.log('\n');

    return resultado;
}

function mru(exercises){
    // Exercício 7/16 - Descobre se a posição de um objeto

    let exercise = exercises.mru;
    
    console.log(exercise);
    console.log('\nExercício 7: ' + exercise.titulo);
    console.log(exercise.descricao);
    let s0 = exercise.entrada.s0;
    let v = exercise.entrada.v;
    let t = exercise.entrada.t;
    console.log('Posição Inicial: ' + s0);
    console.log('Velocidade: ' + v);
    console.log('Tempo: ' + t);
    let resultado = s0 + v*t;
    console.log('Resultado: ' + resultado);
    console.log('\n');

    return resultado;
}

function inverteString(exercises) {
    // Exercício 8/16 - Inverte a String

    let exercise = exercises['inverte-string'];
        
    console.log(exercise);
    console.log('\nExercício 8: ' + exercise.titulo);
    console.log(exercise.descricao);
    let string = exercise.entrada.string;
    console.log('String:' + string);
    let resultado = '';
    console.log(resultado);
    for (i = 1; i < string.length; i++) {
        resultado += string[string.length - i];
    }
    resultado += string[0]
    console.log('Resultado: ' + resultado);
    console.log('\n');

    return resultado;
}

function somaValores(exercises){
    // Exercício 9/16 - Soma valores guardados no objeto

    let exercise = exercises['soma-valores'];
            
    console.log(exercise);
    console.log('\nExercício 9: ' + exercise.titulo);
    console.log(exercise.descricao);

    let resultado = 0;
    for (i in exercise.entrada.objeto){
        let value = exercise.entrada.objeto[i];
        resultado += value;
    }
    console.log('Resultado: ' + resultado);
    console.log('\n');

    return resultado;
}

function nEsimoPrimo(exercises){
    // Exercício 10/16 - Descobre o enésimo primo

    let exercise = exercises['n-esimo-primo'];
            
    console.log(exercise);
    console.log('\nExercício 10: ' + exercise.titulo);
    console.log(exercise.descricao);
    let n = exercise.entrada.n;
    console.log('Entrada: ' + n);

    let resultado = 0;
    let count = 0;

    for (i=1; i < 1e7; i++){
        if (isPrime(i) == true){ 
            count += 1;
            if (count == n){ 
                resultado = i;
                break
            } 
        }
    }
    console.log('Resultado: ' + resultado);
    console.log('\n');
    return resultado; 
}

function isPrime(n) {
    if (n===1) { return false; }
    else if(n === 2) { return true;}
    else
    {
        for(var x = 2; x < n; x++)
        {
            if(n % x === 0)
            {
            return false;
            }
        }
        return true;  
    }
}

function maiorPrefixoComum(exercises){
    // Exercício 11/16 - Descobre o maior prefixo - NÃO SEI

    let exercise = exercises['maior-prefixo-comum'];
    
    console.log(exercise);
    console.log('\nExercício 11: ' + exercise.titulo);
    console.log(exercise.descricao);

    let lnPrefixos = [];
    let length = Object.keys(exercise.entrada.strings).length;
    
    for (palavra in exercise.entrada.strings){
        for (i=1; i < length; i++){
            let prefix = '';
            for (letra=0; letra < palavra.length; letra++){
                if (palavra[letra] != exercise.entrada.strings[i]){
                    prefix += letra; 
                }
            }
            lnPrefixos.push(prefix);
        }
    }

    console.log('\n');
    return lnPrefixos; 
}

function somaSegundoMaiorEMenorNumeros(exercises) {
    // Exercício 12/16 - Soma o segundo maior e menor número

    let exercise = exercises['soma-segundo-maior-e-menor-numeros'];
    
    console.log(exercise);
    console.log('\nExercício 12: ' + exercise.titulo);
    console.log(exercise.descricao);

    let numeros = exercise.entrada.numeros;

    numeros.sort((a,b)=>a-b)
    let min = numeros[1];

    numeros.sort((a,b)=>b-a)
    let max = numeros[1];

    let resultado = max + min;
    
    console.log('Resultado: ' + resultado);
    console.log('\n');
    return resultado; 
}

function contaPalindromos(exercises){
    // Exercício 13/16 - Conta Palindromos

    let exercise = exercises['conta-palindromos'];
    
    console.log(exercise);
    console.log('\nExercício 13: ' + exercise.titulo);
    console.log(exercise.descricao);
    
    let resultado = 0;
    let length = Object.keys(exercise.entrada.palavras).length;

    console.log(exercise.entrada.palavras);

    for (i=0; i < length; i++) {
        let palavra = exercise.entrada.palavras[i];
        if (palavra == reverseString(palavra)){
            resultado += 1;
        }
    }

    console.log('Resultado: ' + resultado);
    console.log('\n');
    return resultado; 
}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i];
    }
    return newString;
}

function somaDeStringsDeInts(exercises) {
    // Exercício 14/16 - Conta Palindromos

    let exercise = exercises['soma-de-strings-de-ints'];
    
    console.log(exercise);
    console.log('\nExercício 14: ' + exercise.titulo);
    console.log(exercise.descricao);
    
    let resultado = 0;
    console.log('Resultado: ' + resultado);
    console.log('\n');
    return resultado; 
}

async function somaComRequisicoes(exercises, token){
    // Exercício 15/16 - Soma com requisições

    let exercise = exercises['soma-com-requisicoes'];
    
    console.log(exercise);
    console.log('\nExercício 15: ' + exercise.titulo);
    console.log(exercise.descricao);

    let endpoints = exercise.entrada.endpoints;
    let length = Object.keys(endpoints).length;
    let resultado = 0;

    for (i=0; i < length; i++) {
        let n = await accessNumbers(token, endpoints[i])
        resultado += n;
    }

    // console.log('Resultado: ' + resultado);
    console.log('\n');
    return resultado; 
}

async function accessNumbers(token, endpoint){
    let response = await axios
        .get(endpoint, 
             {headers: {'Authorization': `token ${token}`}}, 
             {username: 'luizavap'})
        .catch((error) => {console.error(error)})

    return response.data
    }

async function cacaAoTesouro(exercises, token){
    // Exercício 16/16 - Caça ao tesouro

    let exercise = exercises['caca-ao-tesouro'];
    
    console.log(exercise);
    console.log('\nExercício 16: ' + exercise.titulo);
    console.log(exercise.descricao);

    let link = exercise.entrada.inicio;
    let resultado = 0;

    for (i=0; i < 50; i++) {
        console.log(link);

        if (isNaN(link)){ 
            link = await accessNumbers(token, link);
            continue; 
        }
        else { 
            resultado = link; 
            break;}
    }

    console.log('Resultado: ' + resultado);
    console.log('\n');
    return resultado; 
}


function postResult(res, slug, token) {

    let options = {headers: {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': `token ${token}`}};

    axios
    .post('https://tecweb-js.insper-comp.com.br/exercicio/${slug}', {resposta: res}, options)
    .then((response) => {
        if (response.data.sucesso == true){
            console.log("Sucesso ", slug)
            return;
        } else {
            throw new Error('Erro ${slug}');
        }
    })
}