# Tipos de dados
conforme o ECMAScript temos 9* tipos de dados
* Data types 
    * Primitive / Primitive value
    * Structural
    * Structural Primitive

## Primitivos
    * String      - 1*
    * Nunber      - 2*
    * Boolean     - 3*
    * undefined   - 4*
    * Symbol      - 5*
    * BigInt      - 6*

## Estruturais
    * Object      - 7*
        * Array
        * Map
        * Set
        * Date
        * ...
    * Function    - 8*

## Primitivo Estrutural - Structural Root Primitive
    * null       - 9*

# Variaveis
    * nomes simbolicos para receber algum valor
    * atalhos no codigo
    * identificadores
    * 3 palavras reservadas para criar variavel
        * var        - variavel - pode receber novo valor
        * let        - variavel - pode receber novo valor
        * const      - constante - não pode receber novo valor

# O JS é uma linguagem fracamente tipada e Dinâmica
    Variáveis não precisam ter um tipo previamente definido
    Podemos mudar o conteudo da variável, ela é dinamica e podemos mudar o tipo de dado durante o seu uso

para inspecionarmos uma variavel usamos typeof nomedaVariavel
    ex: let clima = true
        console.log(typeof clima)
        run: Boolean

# Scope
    * o scopo determina a visibilidade de alguma variavel no JS
* Block statemente
    bloco de codigo normalmente delimitado por {...} e esse blobo criará um novo escopo que chamamos de 'block-scoped'
    sobre relação var/let/const com scopo
        * var é uma variavel global e também local
            o js usa de um conseito 'hoisting' que eleva uma variavel var para declarar ela no inicio do script porem o seu valor sera atribuido no local onde foi declarado no codigo. esse conceito de elevação proprio do JS
        * let e const são variáveis locais e so funcionam no escopo onde foram criadas

# Para criar nomes
    # JS é case-sensitive(sensivel ao caso) 
        diferencia maiusculas e minusculas
    # JS aceita a cadeia de caracteres Unicode

    -posso: iniciar com caracteres especiais: $ _ 
            iniciar com letras
            colocar acentos
            letras maiusculas e minusculas fazem diferença
    -não posso: iniciar com numeros
                colocar espaços vazios no nomes
    -Ideal:
        * Criar nomes que fazem sentido
        * Que explique o que a variavel é, guarda ou faz
        * camelCase
        * snake_case
        * Escrever em ingles.
        * Preferencialmente escreva todo o seu codigo em ingles.
# Para criar objetos devemos seguir a seguinte Sintaxe:
    var nomeDoObjeto = {
        nomeMembro1: valorMembro1,
        nomeMembro2: valorMembro2,
        nomeMembro3: valorMembro3
    };