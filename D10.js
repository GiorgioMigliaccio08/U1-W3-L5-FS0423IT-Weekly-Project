/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics
console.log(
  "JS BASIC ____________________________________________________________________"
);

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log("ESERCIZIO A");

let sum = 10 + 20;
console.log("La somma tra i valori 10 + 20 è = ", sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log("ESERCIZIO B");

let random = Math.floor(Math.random() * 20);
console.log(
  "Stai visualizzando un numero casuale \n che cambia ad ogni refresh della pagina: ",
  random
);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log("ESERCIZIO C");

let me = {
  nome: "Giorgio",
  surname: "Migliaccio",
  age: 23,
};
console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log("ESERCIZIO D");

delete me.age;
console.log("Ho rimosso la proprietà age dall'oggetto:", me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log("ESERCIZIO E");

me.skills = ["HTML", "CSS", "JAVASCRIPT"];
console.log("Ho aggiunto un nuovo array con le mie skills:", me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO F");

me.skills.push("Python");
console.log("Ho aggiunto un nuovo elemento nell'array skills:", me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log("ESERCIZIO G");

function eliminaUltimoElemento() {
  me.skills.pop();
}
eliminaUltimoElemento();
console.log(
  "Ho eliminato dall'array l'elemento creato nel precedente esercizio:",
  me
);

// Funzioni
console.log(
  "ESERCIZI CON LE FUNZIONI ______________________________________________________________ "
);
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log("ESERCIZIO 1: ");

function dice() {
  return Math.floor(Math.random() * 7);
}
console.log("Genera un numero casuale tra 1 e 6 =", dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log("ESERCIZIO 2: ");

function whoIsBigger(num1, num2) {
  if (num1 < num2) {
    return num2;
  } else {
    return num1;
  }
}
console.log("Il più grande tra i due numeri inseriti è:", whoIsBigger(12, 10));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log("ESERCIZIO 3: ");

function splitMe(stringa) {
  return stringa.split(" ");
}
console.log(splitMe("I love coding"));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log("ESERCIZIO 4: ");

function deleteOne(stringa, booleano) {
  if (booleano) {
    return stringa.slice(1);
  } else {
    return stringa.slice(0, -1);
  }
}
console.log(deleteOne("Epicode", true));
console.log(deleteOne("Epicode", false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log("ESERCIZIO 5: ");

function onlyLetters(stringa) {
  return stringa.replace(/\d+/g, "");
}
console.log(onlyLetters("I have 4 horses"));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log("ESERCIZIO 6: ");

function isThisAnEmail(stringa) {
  let emailtrue =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailtrue.test(stringa);
}
console.log(
  "Questo indirizzo email: mariorossi@gmail.com è valido:",
  isThisAnEmail("mariorossi@gmail.com")
);
console.log(
  "Questo indirizzo email: mariorossigmail.com è valido:",
  isThisAnEmail("mariorossigmail.com")
);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
console.log("ESERCIZIO 7: ");

function whatDayIsIt() {
  let dayofweek = [
    "Domenica",
    "Lunedi",
    "Martedi",
    "Mercoledi",
    "Giovedi",
    "Venerdi",
    "Sabato",
  ];
  let today = new Date();
  let dayof = dayofweek[today.getDay()];
  return dayof;
}
console.log("Oggi è il 15 Settembre 2023 ovvero:", whatDayIsIt());
/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log("ESERCIZIO 8: ");

function rollTheDices(num) {
  let sum = 0;
  let values = [];
  for (let i = 0; i < num; i++) {
    let num = dice();
    sum += num;
    values.push(num);
  }
  return { sum: sum, values: values };
}
console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log("ESERCIZIO 9: ");

function howManyDays(date) {
  let giorno = 24 * 60 * 60 * 1000;
  let today = new Date();
  let differenza = today.getTime() - date.getTime();
  let differenzaGiorni = Math.floor(differenza / giorno);
  return differenzaGiorni;
}
console.log(
  "Giorni trascorsi dal 24 Giugno 2023:",
  howManyDays(new Date("2023-06-24"))
);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
console.log("ESERCIZIO 10: ");

function isTodayMyBirthday() {
  let today = new Date();
  let birthdayDate = new Date(today.getFullYear(), 6, 24);

  if (today.getMonth() == 6 && today.getDate == 24) {
    return true;
  } else {
    return false;
  }
}

console.log("Oggi è il mio compleaano:", isTodayMyBirthday());
// Arrays & Oggetti
console.log(
  "ARRAYS E OGGETTI __________________________________________________________"
);
// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/
console.log("ESERCIZIO 11: ");

function deleteProp(obj, propToDelete) {
  if (obj.hasOwnProperty(propToDelete)) {
    delete obj[propToDelete];
  }
  return obj;
}

const myObject = {
  nome: "Giorgio",
  cognome: "Migliaccio",
  città: "Prizzi",
};

deleteProp(myObject, "cognome ");

console.log("Oggetto dopo la rimozione della proprietà 'cognome':", myObject);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log("ESERCIZIO 12: ");

function newestMovie(p) {
  return p.reduce((newest, old) => {
    if (parseInt(old.Year) < parseInt(newest.Year)) {
      return newest;
    } else {
      return old;
    }
  });
}

console.log("Il film più recente dell'array è:", newestMovie(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 13: ");

function countMovies() {
  return movies.length;
}
const numberOfMovies = countMovies();
console.log("Il numero di film che contiene l'array è:", numberOfMovies);

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 14: ");

function onlyTheYears() {
  const yearsArray = movies.map((movie) => movie.Year);
  return yearsArray;
}

const years = onlyTheYears();
console.log("Anni di uscita dei film:", years);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 15: ");

function onlyInLastMillennium() {
  const currentYear = new Date().getFullYear();

  const lastMillenniumMovies = movies.filter(
    (movie) =>
      parseInt(movie.Year) >= 2000 && parseInt(movie.Year) <= currentYear - 1
  );

  return lastMillenniumMovies;
}

const lastMillenniumMoviesList = onlyInLastMillennium();
console.log("Film prodotti nel millennio scorso:", lastMillenniumMoviesList);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log("ESERCIZIO 16: ");

function sumAllTheYears(filmsSomma) {
  return filmsSomma.reduce((a, b) => a + Number(b.Year), 0);
}
console.log(
  "La somma di tutti gli anni in cui sono stati prodotti i film è:",
  sumAllTheYears(movies)
);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log("ESERCIZIO 17: ");

function searchByTitle(searchString) {
  const risultati = movies.filter((film) =>
    film.Title.toLowerCase().includes(searchString.toLowerCase())
  );

  return risultati;
}

console.log(searchByTitle("Lord"));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log("ESERCIZIO 18: ");

function searchAndDivide(searchString) {
  const match = [];
  const unmatch = [];

  for (const index in movies) {
    const film = movies[index];
    if (film.Title.toLowerCase().includes(searchString.toLowerCase())) {
      match.push(film);
    } else {
      unmatch.push(film);
    }
  }
  return { match, unmatch };
}

console.log(searchAndDivide("Lord"));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)
console.log("ESERCIZIO 19: ");

function removeIndex(index) {
  if (index >= 0 && index < movies.length) {
    movies.splice(index, 1);
  }
  return movies;
}

const indexToRemove = 2;
const updatedMovies = removeIndex(indexToRemove);
console.log("Array di film dopo la rimozione:", updatedMovies);

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log("ESERCIZIO 20: ");

function selezionaContainer() {
  return document.getElementById("container");
}
console.log("Funzione per selezionare l'elemento dotato di id container");

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 21: ");
function selezionaTuttiTd() {
  return document.querySelectorAll("td");
}
console.log("Funzione per selezionare ogni tag <td>");
/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log("ESERCIZIO 22: ");

function stampa() {
  let tdList = document.querySelectorAll("td");
  for (let i = 0; i < tdList.length; i++) {
    console.log(tdList[i].innerHTML);
  }
}

stampa();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log("ESERCIZIO 23: ");

function aggingiColore() {
  let linkList = document.querySelectorAll("a");
  for (let i = 0; i < linkList.length; i++) {
    linkList[i].style.backgroundColor = "red";
  }
}

console.log("BackgroundColor Red");
/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 24: ");

function aggiungiEl() {
  let lista = document.getElementById("myList");
  let nuovoElemento = document.createElement("li");
  lista.appendChild(nuovoElemento);
}
aggiungiEl();

console.log("Ho aggiunto un nuovo puntino nella lista degli sport");
/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log("ESERCIZIO 25: ");

function svuotaLista() {
  let lista = document.getElementById("myList");
  lista.innerHTML = "";
}
svuotaLista();
console.log("Ho eliminato la mia lista sports con Js");

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log("ESERCIZIO 26: ");

// [EXTRA] JS Avanzato
console.log(
  "[EXTRA] JS AVANZATO ____________________________________________________________"
);
/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log("ESERCIZIO 27: ");
console.log("Mezzo Albero con gli asterischi *");

function halfTree(num) {
  let albero = "";
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      albero += "*";
    }
    albero += "\n";
  }
  console.log(albero);
}

halfTree(3);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log("ESERCIZIO 28: ");

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
console.log("ESERCIZIO 29: ");
let i;
function isItPrime(numero) {
  if (numero === 1 || numero === 2) {
    return true;
  }
  for (i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
