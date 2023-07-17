import * as database from "./database.js";
import * as search from "./search.js";

window.addEventListener('load', loadCatalog)
const params = new URLSearchParams(window.location.search);

const filter = params.get('filter');

function loadCatalog() {

    let bookCatalog = database.getAllBooks();

    if (bookCatalog.length == 0) {
        database.loadExistingBooks();
        bookCatalog = database.getAllBooks();
    }
    console.log(bookCatalog)

    let bookListTerror = bookCatalog.filter(function (book) { return book.catalog.toLowerCase() == "terror" });
    let bookListRevistas = bookCatalog.filter(function (book) { return book.catalog.toLowerCase() == "revistas" });
    let bookListBestSellers = bookCatalog.filter(function (book) { return book.catalog.toLowerCase() == "bestsellers" });
    let bookListPoemas = bookCatalog.filter(function (book) { return book.catalog.toLowerCase() == "poemas" });
    console.log(bookListRevistas)
    if (filter === 'revista') {
        // Agrego título "Revistas"
        let list = document.getElementById("bookList");

        let tituloRevistas = document.createElement("h3");
        tituloRevistas.classList = "title-catalogos"
        tituloRevistas.innerText = "Revistas"
        list.appendChild(tituloRevistas);

        bookListRevistas.forEach((item) => {
            let a = document.createElement("a");
            a.classList = "list-group-item list-group-item-action"
            a.href = "#"
            a.innerText = item.author + ", " + item.title + ", " + item.year + ", " + item.pages
            list.appendChild(a);
        })
    }
    else if (filter === 'terror') {
        // Agrego título "Terror"
        let list = document.getElementById("bookList");
        let tituloTerror = document.createElement("h3");
        tituloTerror.classList = "title-catalogos"
        tituloTerror.innerText = "Terror"
        list.appendChild(tituloTerror);

        bookListTerror.forEach((item) => {
            let a = document.createElement("a");
            a.classList = "list-group-item list-group-item-action"
            a.href = "#"
            a.innerText = item.author + ", " + item.title + ", " + item.year + ", " + item.pages
            list.appendChild(a);
            // console.log(bookListTerror)
        })
    }




}



console.log(filter); // Imprimirá "terror"