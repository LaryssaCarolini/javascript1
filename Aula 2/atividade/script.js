var nome1 = prompt('Digite o nome da pessoa mais velha')
var idade1 = Number(prompt('Digite a idade da pessoa mais velha'))
var nome2 = prompt('Digite o nome da pessoa mais nova')
var idade2 = Number(prompt('Digite a idade da pessoa mais nova'))

var diferencaIdade = idade1-idade2


alert(
    'Nome da pessoa mais velha: ' + nome1 + '\nIdade da pessoa mais velha: ' + idade1 + '\nNome da pessoa mais nova: ' + nome2 + '\nIdade: ' + idade2 + 'anos'+
    '\nDiferença da idade: ' + diferencaIdade)