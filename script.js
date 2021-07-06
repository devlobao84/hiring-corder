const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function(e){
     e.preventDefault()
     const listName = newListInput.value
     if (listName === null || listName === '') return 
     const list = createList(listName)
     newListInput.value = null 
     lists.push(list)
     render()    
})

function createList(name) {
     return {id: Date.now().toString(), name: name}
     
}

function render() {
     clearElement(listContainer)
     lists.forEach(function(list) {
          const item = document.createElement('li')
          item.classList.add('item')
          item.innerText = list.name
          listContainer.appendChild(item)
     })
}

function clearElement(element) {
     while (element.firstChild){
          element.removeChild(element.firstChild) 

     } 
}

render()








//const newListForm = document.querySelector('[data-new-list-form]')
//const newListInput = document.querySelector('[data-new-list-input]')
//
//let List = ['html', 'js', 'css']
//
//newListForm.addEventListener('submit', function(e){
//     e.preventDefault()
//     const lestName = newListInput.nodeValue
//     if (listName === null || lustName ===' ') return 
//     const list = createList(listName)
//     newListInput.value = null
//     list.push(list)
//     render()
//})
//
//function render() {
//     lists.forEach(function(list) {
//          const item = document.createElement('li')
//          item.classList.add('item')
//          item.innerText = list
//          listContainer.appendChild(item)
//
//     })
//}
//
//function createList(name) {
//     
//}
//
//render()






































/*let mes = "janeiro"; 

switch (mes) {
     case "março":
          console.log("estamos no mês 3");
     break

     case "janeiro":
          console.log("estamos no mes 4");
     break

     case "agosto":
          console.log("estamos no mes 1")
     break
     
     default:
          console.log("Nenhuma das alternativas foram encontradas");

}*/

/*let colors = ["blue", "white", "red", "black", "orange", "purple", "pink"];

for (let i =0; i < 2; i++) {
     console.log(colors[i]);

}*/

/* function sayHello (name, lastName) {
     console.log('Olá ' + name + ' ' + lastName)

}

sayHello("Jonas", "Lobo");

function sum (a,b) {
     return a + b;
}

console.log(sum(40,60)); */

/*class Book {
     constructor(title, author, category, pages) {
          this.title = title;
          this.author = author;
          this.categoria = category;
          this.pages = pages;
     }
     read() {
          return `Estou lendo um livro que se chama ${this.title} e que está bem ${this.dois}`
     }
}

class ITBook extends Book {
     constructor(title, author, category, pages, technology) {
          super(title, author, category, pages);
          this.technology = technology
     }
}


let itbook = new ITBook('Algoritmos para viver', 'Brian', 500);
/*let otherBook = new Book ('Exu na Encruzilhada', 'Lobo das Cavernas', 'Umbanda', 700);|

console.log(itbook);*/



/*class Person {
     constructor(name) {
          this._name = name; 
     }

     get name() {
          return this._name;
     }

     set name(value) {
          this._name = value;
     }
}

let person = new Person ('Jonas');
person.name = 'Lobão'
console.log(person.name)*/ 


/* algoritmo fizzbuzz*/ 

/*let resultado = fizzBuzz(7);
console.log(resultado)

function fizzBuzz(entrada) {
     if (typeof entrada !== 'number')
          return 'Não é um número';
     if ((entrada % 3 === 0) && (entrada % 5 ==0))
          return 'FizzBuzz'
     if (entrada % 3 ===0)
          return 'Fizz'
     if (entrada % 5 === 0)
          return 'Buzz'

          return entrada;


}*/

/*let newStr = '';

function reverseAstring(str) {
     for (let i = str.length - 1; i >= 0; i--){
          newStr += str[i] 
          console.log(newStr)
          }
     }
     

let resultado = reverseAstring('Hello Gama Academy')*/


/*&function convertToFahrenheit(value) {
     return value * 1.8 + 32
}

let result = convertToFahrenheit(40)
console.log(`O valor em Fahrenheit é ${result}`)*/


