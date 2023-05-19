
import navbar from './components/navbar.js';
import appendMovies from './scripts/append.js';
// console.log(navbar);

let navbar_div = document.getElementById('navbar');

navbar_div.innerHTML = navbar();


const movies = [
    {
    Title: 'Jhansi',
    Year: 2022,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2387/1452387-v-e9e11947b44a',
    },
    {
    Title: 'Angrezi Medium',
    Year: 2014,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6699/1026699-v-cb786ee970de',
    },
    {
    Title: 'Chhichhore',
    Year: 2018,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9219/1389219-v-9752e6e5bb92',
    },
    {
    Title: 'Govinda',
    Year: 2022,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2979/1432979-v-36cfe251ff8a',
    },
    {
    Title: 'Drishyam',
    Year: 2018,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/4189/1000074189/1000074189-v',
    },
    {
    Title: 'Total Dhamaal',
    Year: 2015,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8285/388285-v',
    },
    {
    Title: 'Tanhaji',
    Year: 2018,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7676/647676-v',
    },
    {
    Title: 'Arjun Reddy',
    Year: 2022,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9217/1389217-v-c29b53bc1557',
    },
    {
    Title: 'Freedy',
    Year: 2019,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/372/1420372-v-c4dc9b7e307f',
    },
    {
    Title: 'Raid',
    Year: 2020,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1270/1431270-v-b6bfc3b82ee5',
    },
    {
    Title: 'Aar Ya Paar',
    Year: 2021,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1970/1441970-v-574d1988c10a',
    },
    {
    Title: 'Super 30',
    Year: 2018,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9231/1389231-v-6191b0d9af4f',
    },
    {
    Title: 'Neerja',
    Year: 2013,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/old_images/vertical/MOVIE/704/1000090704/1000090704-v',
    },
    {
    Title: 'Taaza Khabar',
    Year: 2016,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5002/1445002-v-29ff9172fed9',
    },
    {
    Title: 'Goodluck Jerry',
    Year: 2018,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9970/1309970-v-8589b0d35717',
    },
    {
    Title: 'Vatan',
    Year: 2020,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9986/1309986-v-f19f45e7f2f1',
    },
    {
    Title: 'Intelligent',
    Year: 2019,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2914/472914-v',
    },
    {
    Title: 'Dear Ishq',
    Year: 2015,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5718/1455718-v-98830a770da2',
    },
    {
    Title: 'Anupama',
    Year: 2017,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4249/1364249-v-2e30b93b7bb5',
    },
    {
    Title: 'Bhaag Milkha Bhaag',
    Year: 2013,
    Poster: 'https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1258/1431258-v-bfcf814b38fd',
    },
];


function slideShow () {
    const arr = [`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2212/1042212-h-0e83e926cfc1`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4839/1454839-h-bb4bcae07d95`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1_5x/sources/r1/cms/prod/9218/1389218-h-2a35a38e4b54`,`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5681/1415681-h-d4156275b3b3`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1257/1431257-h-c0a136fb4fd0`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5418/1445418-h-3685fc747503`];

    let i = 0;

    let div = document.getElementById('carousel');
    let img = document.createElement('img');
    img.id = 'pic';
    img.src = arr[0];

    div.append(img);

    i = i + 1;

    setInterval(function () {

        if(i == arr.length) {
            i = 0;
        }
        img.src = arr[i];

        i = i + 1;

        div.append(img);
    }, 3000);
}

slideShow();

// using the same function in append.js
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

function sortLH () {
    let data = movies;

    data = data.sort((a, b)=>a.rating - b.rating);
    appendMovies(data);
}

function sortHL () {
    let data = movies;

    data = data.sort((a, b)=>b.rating - a.rating);
    appendMovies(data);
}

 

let getmeData = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let data = movies;
       
        if(data != null) {
            resolve(data);   // born execute and return. it is going to return data.
        }
        else {
            reject('ERROR: Server could not get Movies Data');  // it is going to give you chappal because you failed.
        }
    }, 1000);
});



getmeData.then(function (success) {

    appendMovies(success);
}).catch(function (error) {
    console.log(error, 'ERROR: Server could not get the Movies Data');
})