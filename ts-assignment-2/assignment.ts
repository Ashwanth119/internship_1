// Interface for filmPerson (i.e., actors or cast)
interface filmPerson{
    id:number;
    name:string;
    age:number;
    gender:string;
    no_of_movies:number;
    remuneration:number | string;
    movie_names:Array<string>;
}

// Interface for producer
interface producer extends filmPerson{
    production_house:string;
}

// Interface for director
interface director extends filmPerson{
    own_story:boolean;
}

// Interface for movie
interface movie{
    id:number;
    title:string;
    duration:string;
    rating:1|2|3|4|5|'*'|'**'|'***'|'****'|'*****';
    release_date:string;
    cast:filmPerson[];
    director:director | undefined;
    producer:producer | undefined;
    genre:'Comedy'|'Action'|'Thriller'|'Horror';
}


let movies:movie[]=[]; // let movies:Array<movie>=[]; --> Array to store all movies
let castArray:filmPerson[]=[]; // // let castArray:Array<filmPerson>=[]; --> Array to store all cast filmPersons
let directorArray:director[]=[]; // --> Array to store all cast directors
let producerArray:producer[]=[]; // --> Array to store all cast producers

// addCast() function pushes the particular persons into their respactive arrays
// i.e., cast filmPerson into castArray, director into directorArray, producer into producerArray

function addCast(id:number, name:string, age:number, gender:string, no_of_movies:number, remuneration:number | string, movie_names:Array<string>,production_house?:string,own_story?:boolean){
    if(production_house){
        let obj:producer={
            id:id,
            name:name,
            age:age,
            gender:gender,
            no_of_movies:no_of_movies,
            remuneration:remuneration,
            movie_names:movie_names,
            production_house:production_house,
        };
        producerArray.push(obj);
    }
    else if(own_story!==undefined){
        let obj:director={
            id:id,
            name:name,
            age:age,
            gender:gender,
            no_of_movies:no_of_movies,
            remuneration:remuneration,
            movie_names:movie_names,
            own_story:own_story,
        };
        directorArray.push(obj);
    }
    else{
        let obj:filmPerson={
            id:id,
            name:name,
            age:age,
            gender:gender,
            no_of_movies:no_of_movies,
            remuneration:remuneration,
            movie_names:movie_names
        };
        castArray.push(obj);
    }
    
}



// addMovie() function push the movie into movies array

function addMovie(id:number, title:string, duration:string, rating:1|2|3|4|5|'*'|'**'|'***'|'****'|'*****', release_date:string, cast_id:Array<number>, director_id:number, producer_id:number, genre:'Comedy'|'Action'|'Thriller'|'Horror' ){
    // let cast=castArray.filter(x=>{
        //     cast_id.indexOf(x.id)!==-1;
        //     // console.log(cast_id.indexOf(x.id));
        // })
        let c=[];
        for(let x of castArray){
            if(cast_id.indexOf(x.id)!=-1)
                c.push(x);
        }
    // console.log(c);
    let director;
    for(let i=0;i<directorArray.length;i++){
        if(directorArray[i].id===director_id){
            director=directorArray[i];
        }
    }
    // let director=directorArray.filter(x=>{
    //     x.id===director_id;
    // });
    let producer;
    for(let i=0;i<producerArray.length;i++){
        if(producerArray[i].id===producer_id){
            producer=producerArray[i];
        }
    }
    let obj={
        id:id,
        title:title,
        duration:duration,
        rating:rating,
        release_date:release_date,
        cast:[...c],
        director:director,
        producer:producer,
        genre:genre

    };
    movies.push(obj);
}

// getMovie() function displays the movie details of id passed as a paramter
function getMovie(id:number){
    for(let movie of movies){
        if(movie.id===id)
            console.log(movie);
    }
}

// Adding cast, producer and director to their respective arrays
addCast(1,'NTR.Jr',35,'male',4,'50 crores',['Devara','RRR','Temper','Janata Garage']); // cast
addCast(2,'Prabhas',40,'male',4,'100 crores',['Salaar','Bahubali','Mirchi','Sahoo']); // cast
addCast(3,'Anushka',39,'female',2,'25 crores',['Bahubali','Mirchi']); // cast
addCast(4,'Samantha',34,'female',1,'30 crores',['pushpa']); // cast
addCast(5,'Ram charan',35,'male',3,'75 crores',['Game changer','RRR','VVR']); // cast
addCast(6,'Rajamouli',50,'male',3,'75 crores',['Simhadri','RRR','Bahubali'],undefined,false); // director
addCast(7,'Daanayya',35,'male',3,'75 crores',['Game changer','RRR','VVR'],'DVV'); // producer
addCast(8,'Sukumar',40,'male',4,'75 crores',['Arya','Arya2','Pushpa','Pushpa2'],undefined,true); // director
addCast(9,'Mythri movie makers',45,'male',3,'75 crores',['Pushpa','Pushpa2','Raja Saab'],'Mythri'); // producer
addCast(10,'Koratala Siva',40,'male',3,'30 crores',['Devara','Mirchi','Janata Garage'],undefined,true); // director
addCast(11,'Dil Raju',45,'male',3,'75 crores',['Game changer','RRR','VVR'],'Dil Raju Production'); // producer
// console.log(castArray); // --> to display castArray
// console.log(directorArray); // --> to display directorArray
// console.log(producerArray); // --> to display producerArray

// adding movies to the movies array
addMovie(1,'Hello','3 hrs 19 min',4,'20-03-2025',[1,4],10,9,'Action');
addMovie(2,'RRR2','3 hrs 39 min','*****','20-03-2026',[1,5],6,7,'Thriller');
addMovie(3,'Pushpa3','3 hrs 29 min',4,'20-03-2027',[4,5],8,9,'Action');
addMovie(4,'Devara2','3 hrs 39 min',4,'20-08-2028',[1,3],10,11,'Action');
addMovie(5,'Raja Saab','3 hrs 19 min',4,'20-03-2027',[2,4],8,7,'Horror');
//  console.log(movies); // --> to display movies Array


// get movies
getMovie(1);
getMovie(5);
getMovie(4);
getMovie(2);
getMovie(3);