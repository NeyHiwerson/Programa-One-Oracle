# Expressoes e Operadores
    - Expressions
        Qualquer linha de codigo que resolva algo é uma expression, ex:
        let numero; //nesta expressao estamos criando uma variavel let de nome "numero" e ela esta Indefined pois nao foi atribuido value
        const aluno = "João"; //nesta expressao estamos criando uma variavel const de nome aluno do tipo String pois atribuivos o value uma cadeia de caracteres("João) 
    - Operators
        Binary - Unary - Ternary

        * Binary - operador binario por que são dois valores que precisa para que o operador esteja entre eles. Ex:
        let n1 = 2
        console.lo( n1 + 3)
        run: 5
        neste exemplo o operador binario soma"+" o valor da variavel n1 a 3.

        * Unary - que só tem um elemento. Ex:
        let n1 = 5
        console.lo( ++n1)
        run: 6
        acima o operador Unario ++ de incremento esta adicionando 1 a variavel n1

        console.log(typeof n1)
        acima o operador unario "typeof" de verificação de tipo de dado ou do value da variavel n1.

        * Ternary - recebe 3 expressoes para definir algo ao fim. ex: 
        let aluno = {
            name : "Robert"
            isHuman : true
        }
        console.log(aluno.isHuman ? "alo" : "nada aqui")

# new 
    expressão poderosa para criar um novo objeto
        * left-hand-side expression
        * criar um novo objeto

# Operadores Unary
    typeof  -  delete
        typeof "nomeDaVariavel"
            exibe o tipo de dado contido naquela variavel passada como argumento
        delete 
            deleta dados atributos dentro de uma variavel

# Operadores Aritméticos
    // multiplicaçao     *
    // divisão           /
    // soma              +
    // subtração         -
    // resto da divisão  %      remainder
    // incremento        ++     increment
    // decremento        --     decrement
    // exponencial       **     