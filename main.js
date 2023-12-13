// main.js
function displayCompanyInfo() {
    // Your function logic here
    console.log('Displaying company info');
}

// Rest of your main.js code

let data;

import('./moviesPlay.js')
    .then(res => {
        console.log('data imported into data constant');
        data = res;
        run();
    });

function run() {
    const movies = data.movies;
    console.log('Number of movies: ' + movies.length);

    let map = new Map();

    const movieInfoDiv = document.getElementById('table');

    const mpp = movies.map((object) => {
        if (map.get(object.originalLanguage)) {
            map.set(object.originalLanguage, map.get(object.originalLanguage) + 1);
        } else {
            map.set(object.originalLanguage, 1);
        }
    });

    let tableHTML = '';
    tableHTML += "<thead><tr><th>Language</th><th>Count</th></tr></thead>";
    map.forEach((key, value) => {
        tableHTML += "<tbody>";
        tableHTML += `<tr><td>${value}</td><td>${key}</td></tr>`;
        tableHTML += "</tbody>";
    });
    movieInfoDiv.innerHTML = "<table class='ui celled table'>" + tableHTML + "</table>";
}
