
import navbar from "./components/navbar.js";
// console.log(navbar);

 let navbar_div = document.getElementById('navbar');
 navbar_div.innerHTML = navbar();

 import appendMovies from "./scripts/append.js";

 let input_box = document.getElementById('movie_name');
 input_box.addEventListener('input', function() {
    debounce(searchMovies, 1000);
 });



let btn = document.getElementById('rhs');
btn.style.display = 'none';

async function searchMovies() {

    let loader_div = document.getElementById('loader_div');
    loader_div.style.display = 'block';

    let movie_name = document.getElementById('movie_name').value;

    try {

    let res = await fetch(`http://www.omdbapi.com/?apikey=44d9eb2a&s=${movie_name}`);

    let data = await res.json();
    console.log(data);

    let actual_data = data.Search;
    //console.log('actual_data', actual_data);

    appendMovies(actual_data);
    loader_div.style.display = 'none';
    }
    catch (err) {
        console.log('err:', err);
    }
  }
    
// function appendMovies(data) {

//     let movies_div = document.getElementById('movies');

//     movies_div.innerHTML = null;

//     data.forEach(function (el) {

//         let div = document.createElement('div');

//         let img = document.createElement('img');
//         img.src = el.Poster;

//         let p_name = document.createElement('p');
//         p_name.innerText = el.Title;

//         let rele_year = document.createElement('p');
//         rele_year.innerText = el.Year;

//         div.append(img, p_name, rele_year);

//         movies_div.append(div);
//     })
// }



    // fetch return a promise.
    // because there is a possibility of rejection as well.
    // res is a promise? => yes
    // promise is a gift box ? => yes
    // how do you open promise gift box? .then and .catch
    // res.then(callback function)

    //async await way to do same work.



    // res.then(function (success) {
    //     console.log(success);

    //     // collecting the stream.
    //     let data = success.json();
    //     data.then(function(success) {
    //         console.log(success);
    //         appendMovies(success.Search)
    //     }).catch(function(error) {
    //         console.log(error);
    //     });
    // })
    // .catch(function (error) {
    //     console.log('error', error);
    // });
    // im going to do the same work by using async await.

    let id;

    function debounce (func, delay) {

    // a-> debounce -> setTimeout('a')->5-> searchMovies('a');
    // av-> debounce -> setTimeout('av')->6-> searchMovies('av');
    // ave-> debounce -> setTimeout('ave')->7-> searchMovies('ave');

    if(id) {
        clearTimeout(id);
    }

    id = setTimeout(function () {
        func();
    }, delay);
}




//     function sayHello () {
//         console.log('rahul say hello');
//     }
//   let id = setTimeout(sayHello, 3000);

//   clearTimeout(id);