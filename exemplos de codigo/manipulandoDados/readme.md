# Prototype
    * protoype-based language
    * protoype chain
    * __proto__

# Type conversion(typecasting) vs Type coersion
    * Alteração de um tipo de dado para outro
        Type conversion(typecasting)
            quando eu uso metodos para forçar uma conversao de tipo de dado, ex: number1

        Type coersion
            quando o JS faz isso por conta de sua programação. ex: number2

# Transformar String em Number e Number em String
    no primeiro caso da variavel S1 tipo string "123" verificamos seu tipo somamos a ela 100 e apresentamos o resultado. convertendo string em numero para realizar a operação 
    no segundo caso N1 tipo Number verificamos seu tipo de dado e na sequancia exibimos em forma de String concatenando(colocando ao lado de) com o resultado da soma de 10+15

# Contando caracteres e numeros
    contar quantos caracteres tem uma palavra  e quantos digitos tem um numero

# Formatando casas decimais e ponto por virgula
    quando temos um numero muito extenso em casas decimais podemos simplificalo com a função .toFixed() que é atrelada a dado tipo number. ao usar o .fixed() nosso dado é convertido(Type coersion) para dado tipo String 

    para trocar o ponto por virgula usamos a função .replace() passando como agumento o que queremos trocar. ao usar o .replace nosso dado é convertido(Type coersion) para dado tipo String mas podemos fazer uma nova conversão Type conversion(typecasting) embrulhando nosso dado com Number(), porem teriamos que tirar a virgula para poder voltar a Number e usalo corretamente

# MAIUSCULAS e minusculas ( toUpperCase() x toLowerCase())
    toUpperCase() é uma funcionalidade atrelada ao tipo String que transforma tudo em Maiusculas
    toLowerCase() já transforma tudo em minusculas

# Manipulando Strings e Arrays
    * separar um texto que tem espaços, em um novo array onde cada palavra é uma posição da Array. depois disso, tranforme em txto separado por Underscore(underline_) 

        ** para buscar por determinadas palavras dentro de um dado tipo String usamos a funçao .includes("argumento a ser buscado"), seu retorno é boolean e a busca respeita Case Sensitive então faz diferença a maiusculas e minusculas
        
        * nomeDaString.split("argumento de separação")
            nesse caso usaremos a funcção .split() que é atrelada a String passando o argumento usado para fazer a separação da String em Array
        * nomeDaString.join("argumento de junção")
            nesse caso usaremos a funcção .join() que é atrelada a String passando o argumento usado para fazer a junção da Array em String


        ** para separarmos uma String em elementos podemos usar o objeto global Array com uma funçao .from() com o argumento String a ser separada em array no caso ex da linha 74
        let myArray3 = Array.from(S10)

# Manipulando Arrays
    linha 77