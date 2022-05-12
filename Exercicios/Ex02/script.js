const body = document.getElementsByTagName("body");
const starWarsTable = document.getElementById("table");
const btFetch = document.getElementById("fetch");
const btPrevious = document.getElementById("previous");
const btNext = document.getElementById("next");

let people = [{name: "", birth_year: "", gender: "", height: "", mass: "", hair_color: "", eye_color: ""}]
let currentPage = "https://swapi.dev/api/people";
let nextPage = null;
let previousPage = null;

let fieldsTranslation = {
    name: "Nome",
    birth_year: "Ano de Nascimento",
    gender: "Gênero",
    height: "Altura",
    mass: "Massa",
    hair_color: "Cor do Cabelo",
    eye_color: "Cor dos Olhos"
};

const fetchStarWars = () => {
    fetch(currentPage)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            people = data.results;
            nextPage = data.next;
            previousPage = data.previous;
            console.log("Fetch executado com sucesso");
            showStarWarsTable();
        })
        .catch((err) => {
            console.log("Erro recebido: ", err);
        });
};

function showStarWarsTable () {
    btNext.disabled = nextPage == null;
    btPrevious.disabled = previousPage == null;

    starWarsTable.innerHTML = "";

    const head = document.createElement("thead");
    const headRow = document.createElement("tr");

    for (let field in fieldsTranslation) {
        let headCell = document.createElement("th");
        let headText = document.createTextNode(`${fieldsTranslation[field]}`);

        headCell.appendChild(headText);
        headRow.appendChild(headCell);
    }

    head.appendChild(headRow);

    starWarsTable.appendChild(head);

    const body = document.createElement("tbody");

    for (let i = 0; i < people.length; i++) {
        let row = document.createElement("tr");

        for (let field in fieldsTranslation) {
            let cell = document.createElement("td");

            let cellText = document.createTextNode(`${people[i][field]}`);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        body.appendChild(row);
    }

    starWarsTable.appendChild(body);

    starWarsTable.setAttribute("border", "2");
}

const fetchNext = () => {
    currentPage = nextPage;
    nextPage = null;
    fetchStarWars();
};

const fetchPrevious = () => {
    currentPage = previousPage;
    previousPage = null;
    fetchStarWars();
}

btFetch.onclick = fetchStarWars;
btNext.onclick = fetchNext;
btPrevious.onclick = fetchPrevious;