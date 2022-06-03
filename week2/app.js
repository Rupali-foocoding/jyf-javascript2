'use strict';
//1.1
const bookTitles = ['atomic_habits', 'club', 'an_immense_world', 'the_measure', 'me_before_you', 'cant_hurt_me', 'diary_of_young_girl', 'joy_of_cooking', 'the_worst_best_man', 'start_with_why'];
//console.log(bookTitles);
//1.3
let title = document.createElement('book');
bookTitles.map(book => {
  let listItem = document.createElement("li");
  let itemText = document.createTextNode(book);
  listItem.appendChild(itemText);
  title.appendChild(listItem);
})
document.body.appendChild(title);
//function that declare for each list tag an element of the myArray
//1.4
const bookInfo = {
  book1:{
  
  id: bookTitles[0],
  title: "Atomic Habits",
  author: "James Clear",
  language: "English",
  genre: "self-help",
  //imgSrc: 'Books List/atomic habits.jpg'
},
  book2:{
    id: bookTitles[1],
    title: "The 5 a.m. Club",
    author: "Robin Sharma",
    language: "English",
    genre: "Motivational",
    //imgSrc: 'Books List/The 5 am club.jpg'
  },
  book3: {
    id: bookTitles[2],
    title: "An Immense World",
    author: "Ed Young",
    language: "English",
    genre:"Fantasy",
    //imgSrc: 'Books List/An Immense world.jpg'
  },
    book4: {
      id: bookTitles[3],
      title: "The Measure",
      author: "Nikki Erlick",
      language: "English",
      genre: "Relationships",
      //imgSrc: 'Books List/The measure.jpg'
    },
    book5: {
      id: bookTitles[4],
      title: "Me Before You",
      author: "Jojo Moyes",
      language: "English",
      genre: "Romance",
      //imgSrc: 'Books List/me before you.jpg'
    },
      book6: {
        id: bookTitles[5],
        title: "Can Not Hurt Me",
        author: "David Goggins",
        language: "English",
        genre:"Motivational",
        //imgSrc: 'Books List/cant hurt me.jpg'
      },
      book7: {
        id: bookTitles[6],
        title: "The Diary Of A Young Girl",
        author: "Anne Frank",
        language: "English",
        genre: "True story",
        //imgSrc: 'Books List/the diary of a young girl.jpg'
      },
        book8: {
          id: bookTitles[7],
          title: "The Joy Of Cooking",
          author: "Irma s. Rombauer",
          language: "English",
          genre:"Food",
          //imgSrc: 'Books List/the joy of cooking.jpg'
        },
        book9: {
          id: bookTitles[8],
          title: "The Worst Best Man",
          author: "Lucy Score",
          language: "English",
          genre: "Humour",
          //imgSrc: 'Books List/the worst best man.jpg'
        },
        book10: {
          id: bookTitles[9],
          title: "Start With Why",
          author: "Simon Sinek",
          language: "English",
          genre: "Business",
          //imgSrc: 'Books List/start with why.jpg'
        }}
//1.5
/*const article = document.querySelector("article");
let bookList = document.createElement("infoBookList")
for (const Object in bookInfo) {
  let listItem = document.createElement("h3");
  listItem.innerHTML = `Title : ${bookInfo[Object].title}<br>
                        Language: ${bookInfo[Object].language}<br>
                        Author: ${bookInfo[Object].author}`;
  bookList.append(listItem);
}              
article.append(bookList);*/

const bookImages = {
  atomic_habits: 'img/atomic_habits.jpg',
  club: 'img/club.jpg',
  an_immense_world: 'img/an_immense_world.jpg',
  the_measure: 'img/the_measure.jpg',
  me_before_you: 'img/me_before_you.jpg',
  cant_hurt_me: 'img/cant_hurt_me.jpg',
  diary_of_young_girl: 'img/girl.jpg',
  joy_of_cooking: 'img/the_joy_of_cooking.jpg',
  the_worst_best_man: 'img/the_worst_best_man.jpg',
  start_with_why: 'img/start_with_why.jpg'
};


console.log(bookImages);

const article = document.querySelector("article");
let bookList = document.createElement("infoBookList");
for(const [key, value] of Object.entries(bookInfo)){
    let listItem = document.createElement("h3");
    listItem.innerHTML = `<img src= "${bookImages[bookInfo[key].id]}"}><br> ` + `Title: ${bookInfo[key].title}<br>Language: ${bookInfo[key].language}<br>Author: ${bookInfo[key].author}<br> Genre: ${bookInfo[key].genre}<br>`;
    bookList.append(listItem);
}

article.append(bookList);












