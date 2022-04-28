para declararmos uma função usamos a sintaxe:
function nameDaFunction() {
    aqui declaramos seu bloco de codigo
}

para chamar essa função ou
execute, run, call, invoke:
nameDaFunction()
-------------------------------------------------
Argumentos e Prâmetros
function Expressio or function anonymous

function with parameters

function with parameters and return

function scope

hoisting in functions
    no caso da função sayMyName uma função criada com aquela estrutura(função anonima ou statement declaration) ela rescebe o hoisting porem se atribuirmos essa funçaõ a uma variavel(function de expressão) ela deixa de ser elevada.

arrow functions =>
    function do tipo expression com a seguinte sintaxe:
        const nomeDaFunção = () => {
            console.log("Ney e seus teclados")
        }
    por ser uma função do tipo expression não recebe hoisting

callback function
    trata-se de uma função sendo chamada com a passagem de outra função como argumento.

funçoes construtoras - function() constructor
    ao nomear funções construtoras é boa pratica o uso de letra maiuscuma para o inicio do nome da função 
    * expression new
    * criar novo objeto
    * this keyword