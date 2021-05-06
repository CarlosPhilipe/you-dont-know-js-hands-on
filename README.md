### Feito apenas para centralizar os exercícios do livro **You Dont Know JS**
- O enunciado de cada exercício deve estar na mesma pasta do respectivo

Notas:
### COERÇÃO:
- é a forma que o JS utiliza para transformar o tipo do valor contido em uma variável, eles podem se apresentar em dois tipos, coerção implícita e coerção explícita
- - **Coerção explícita**
```
var a = "42";

var b = Number( a );

a;              // "42"
b;              // 42 -- o número!
```
 - - **Coerção implícita**
 ```
var a = "42";

var b = a * 1;  // "42" implicitamente coagido para 42 aqui

a;              // "42"
b;              // 42 -- o número!
```

### Truthy & Falsy:
- "truthy" e "falsy" é quando um valor não-booleano é **coagido** para um valor boolean, ele se torna de fato true ou false?
- - A lista de valores "falsy" em JavaScript é a seguinte:
```
"" (string vazia)
0, -0, NaN (number inválido)
null, undefined
false

```
- - Qualquer valor que não esteja nessa lista de "falsy", é considerado "truthy". Aqui estão alguns exemplos deles:

```
"hello"
42
true
[ ], [ 1, "2", 3 ] (arrays)
{ }, { a: 42 } (objects)
function foo() { .. } (functions)
```
### Hoisting
- Onde quer que var apareça dentro de um escopo, sua declaração é tomada como parte de todo o escopo e acessada em qualquer área dentro dele.
- Quando uma declaração var é conceitualmente "movida" para o topo do **escopo**

### Polyfilling
- A palavras "polyfill" é um termo inventado (por Remy Sharp) usado para referenciar a definição de uma nova funcionalidade e reproduzir um pedaço de código que é equivalente ao comportamento, mas que pode rodar em ambientes com o JS antigo.

```
if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
        return x !== x;
    };
}
```

### Transpiling

- Não existe nenhuma forma de polyfillar uma nova sintaxe, que ainda não foi incluída na linguagem. A nova sintaxe iria retornar um erro no mecanismo do JS como não reconhecida/inválida.

- Sendo assim a melhor opção é usar uma ferramenta que converte seu código novo em um código antigo equivalente. Esse processo é comumente chamado "transpiling".

- Essencialmente, seu código fonte é feito com o formato da nova sintaxe, mas quando você faz o deploy para o navegador ele aparece como um código transpilado com o formato da sintaxe velha. Tipicamente você insere o transpilador no seu processo de build, similar ao seu linter ou minifier.

### Como funciona o compilador - Para a frente e para trás
- A primeira coisa que o Compilador vai fazer com este programa é realizar uma análise léxica para quebrá-lo em tokens, que posteriormente serão transformados em uma árvore (AST). Mas quando o Compilador chega à fase de geração de código, ele vai tratar este programa um pouco diferente do que você talvez tenha suposto.

- O Compilador verifica na leitura dos tokens e cria comandos para serem executados pelo Motor do JS

- Se o Motor eventualmente encontra uma variável, ele atribui o valor 2 a ela. Se não, o Motor vai levantar a mão e gritar que há um erro!

- Quando o Motor executa o código que o Compilador produziu no passo (2), ele tem que buscar pela variável a para saber se ela foi declarada, e essa busca ocorre consultando o Escopo. Mas o tipo de busca que o Motor efetua afeta o resultado da mesma.

- No nosso caso, é dito que o Motor faria uma busca "LHS" para a variável a. O outro tipo de busca é chamado de "RHS".

### LHS e RHS
- Esses termos significam "Left-hand Side" (que em tradução livre, significa: "Lado esquerdo") e "Right-hand Side" (que em tradução livre, significa: "Lado direito"), isso se referindo a atribuição

- Em outras palavras, uma busca LHS é feita quando uma variável aparece do lado esquerdo da operação de atribuição, e uma busca RHS é feita quando uma variável aparece do lado direito de uma operação de atribuição.

- Uma busca RHS é como uma busca simples pelo valor de uma variável, enquanto a busca LHS está tentando encontrar o local onde a variável foi declarada para assim poder fazer a atribuição.

- RHS Já atribuiu o valor e tenta achar

- LHS, qualquer coisa que não RHS, geralmente criar o valor na memória

- Sendo assim, RHS não significa exatamente "lado direito de uma atribuição", mas sim "não estar do lado esquerdo".

- Se uma busca RHS falha ao encontrar uma variável em qualquer lugar dos Escopos aninhados, esta operação resulta em um ReferenceError lançado pelo Motor. É importante salientar que o erro é do tipo ReferenceError.

- Por outro lado, se o Motor executa uma busca LHS e chega no último andar (Escopo global) sem localizar a variável, e se o programa não está sendo executado em "Modo estrito" (strict mode) [^note-strictmode], então o Escopo global irá criar uma nova variável com este nome no escopo global e repassá-la para o Motor

- Agora, se uma variável é encontrada em uma busca RHS, mas você tenta realizar uma ação impossível, como executar como função um valor que não é uma função ou tentar ler uma propriedade a partir de valores como null ou undefined, então o Motor irá lançar um tipo diferente de erro, chamado de TypeError.