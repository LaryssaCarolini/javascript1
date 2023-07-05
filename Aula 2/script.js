console.log('Mensagem pro console')

//variáveis - é um espaço na memória que armazena algo temporariamente - var, let, const


var nome = "João"//string

let idade = 18//Number

const cpf = 1234567896

console.log(nome)
console.log(idade)

//Tipos de dados

//1-numérico

let numero = 10
console.log(typeof numero) //typeof retorna o tipo de dado

//2- String - tipo texto

let nome1 = 'Mayara'
console.log(typeof nome1)

//3- Booleanos (verdadeiro ou falso / true ou false)

let erro = true
console.log(typeof erro)


//undefined (valor não atribuído)
let cep
console.log(typeof cep)

//null (valor vazio)

let entrada = null
console.log (typeof entrada)

//Arrays (listas)
let nomes = ['Larissa', 'João', 'Madu', 'May','Tiago', 'Shay']
console.log(typeof nomes)

//Tipos + complexos
let pessoa = {nome: 'João', idade =18, Cidade: 'Tabuao'}
console.log(typeof pessoa)

//tipo date 
let data = new Date()
console.log(typeof data)

//Regras para nome de variáveis
//pode começar com letras, _, $
//Não pode ter espaçamento
//Não pode começar com números

//camalCase

var estaAtivo = true

//----------------------------------------//

//Operadores aritméticos

var n1 = 8
var n2 = 12

console.log(n1+n2)//soma
console.log(n2-n1)//subtração
console.log(n2*n1)//multiplicação
console.log(n2/n1)//divisão
console.log(n1**n2)//exponencialização
console.log(n2%n1) //resto da divisão

//Operadores de atribuição e auto-atribuição

var numero2 = 3

//numero2 + 5

numero2+=5 //numero2 = numero 2+5


let n4 = 4
n4++ //n4 = n4 + 1 - incrementação

console.log('n4 = '+ n4)

n4-- //n4 = n4 - 1
console.log('n4 = ' + n4)



