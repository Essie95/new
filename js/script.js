
/*  let numberOfFilms ; 
 
 function start()  {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms==""|| numberOfFilms==null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
 
start(); */
const personalMovieDB = {
count: 0, 
movies: {},
actors: {},
genres: [],
privat: false,
start : function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (personalMovieDB.count == ""|| personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
},
rememberMyFilms: function () {
    for ( let i = 0; i<2; i++ ) {
        const a = prompt('Один из последних просмотренных фильмов?', "" ),
            b = prompt ('На сколько оцените его?', "") ;
            
            if (a != null && b != null && a != '' && b != ''&& a.length < 50 )   {
                personalMovieDB.movies[a]=b ;
                console.log('done');
            }
            else {
                console.log('error');
                i--;
            }
    }},

  detectPersonalLevel: function () {
    if ( personalMovieDB.count<10 ) {
        console.log('просмотрено мало фильмов ');
    } else if (personalMovieDB.count>=10 &&personalMovieDB.count<30) {
        console.log('вы классический зритель ');
    } 
    else if (personalMovieDB.count >=30) {
        console.log('вы киноман ');
    } else  {
        console.log('error ')
    }},

showMyDB : function () {
    if(!hidden){
        console.log(personalMovieDB);
    }
 },

  writeYourGenres:  function () {
    for  ( let i = 1 ; i <= 3; i++){

      personalMovieDB.genres[i-1]= prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

};

/* const a = prompt('Один из последних просмотренных фильмов?', "" ),
      b = prompt ('На сколько оцените его?', "") ,
      c = prompt('Один из последних просмотренных фильмов?', "" ),
      d = prompt ('На сколько оцените его?', "");

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d; */
  /*   // function rememberMyFilms/* () {
  /*   for ( let i=0; i<2; i++ ) {
        const a = prompt('Один из последних просмотренных фильмов?', "" ),
            b = prompt ('На сколько оцените его?', "") ;
            
            if (a != null && b != null && a != '' && b != ''&& a.length < 50 )   {
                personalMovieDB.movies[a]=b ;
                console.log('done');
            }
            else {
                console.log('error');
                i--;
            }
    }} 
rememberMyFilms(); */
/* 
        function detectPersonalLevel(){
        if ( personalMovieDB.count<10 ) {
            console.log('просмотрено мало фильмов ');
        } else if (personalMovieDB.count>=10 &&personalMovieDB.count<30) {
            console.log('вы классический зритель ');
        } 
        else if (personalMovieDB.count >=30) {
            console.log('вы киноман ');
        } else  {
            console.log('error ')
        }}
 detectPersonalLevel(); */

 console.log(personalMovieDB);

  
/*   function showMyDB(){
      if(personalMovieDB.privat==false){
          console.log(personalMovieDB);
      }
  } */
  /* function showMyDB(hidden){
     if(!hidden){
         console.log(personalMovieDB);
     }
  }
  showMyDB(personalMovieDB.privat);
 */
/* function writeYourGenres() {
    for  ( let i = 1 ; i <= 3; i++){

      personalMovieDB.genres[i-1]= prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres(); */