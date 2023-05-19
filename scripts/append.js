

function appendMovies(data) {

    let movies_div = document.getElementById('movies');

    movies_div.innerHTML = null;

    data.forEach(function (el) {

        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = el.Poster;

        let p_name = document.createElement('p');
        p_name.innerText = el.Title;

        let rele_year = document.createElement('p');
        rele_year.innerText = el.Year;

        div.append(img, p_name, rele_year);

        movies_div.append(div);
    })
}

export default appendMovies;