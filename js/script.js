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
    
      /* writeYourGenres:  function () {
        for  ( let i = 1 ; i <= 3; i++){
          let genre = prompt(`Ваш любимый жанр под номером ${i}`);
          if (genre== "" || genre== null) {
          console.log("incorect ");
          i--;
            
        } else {personalMovieDB.genres[i-1]= genre;}

    }
     personalMovieDB.genres.forEach((item,i)=>{
    console.log (`Любимый жанр ${i+1} - это ${item}`)

     })
    
    } */
    
    
    writeYourGenre: function ()
{     for ( let i=1 ; i < 2; i++ ){
    let genre = prompt ("введите ваши любимые жанры через запятую");
    if (genre =="" || genre== null){
       console.log('incorrrect' ); i--;
    } else {
        personalMovieDB.genres = genre.split(',');
        personalMovieDB.genres.sort();
        
    }
}   personalMovieDB.genres.forEach((item,i)=>{
    console.log (`Любимый жанр ${i+1} - это ${item}`);

} );    
    
}  }

    