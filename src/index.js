import { navbar } from "../component/navbar.js";

import'../styles/navbar.css';

const api = "rjxhEEP0R4dK3dK8NuIzR86iQFkF3OBVFuyAWhfKyFg";

let n = document.querySelector("#navbar");
n.innerHTML = navbar();

import { searchImage, append } from "./fetch.js"

let id;

let search = (e) => {
    if (e.key === "Enter") {
        let value = document.querySelector("#query").value;

        searchImage(api, value)
            .then((data) => {
                console.log(data);

                let container = document.querySelector("#container");
                container.innerHTML = null;
                append(data.results, container) //container
            });
    }
}

document.querySelector("#query").addEventListener("keydown", search);

let categories = document.querySelector("#categories").children;
// console.log(categories);


function cSearch() {
    console.log(this.id);
    searchImage(api, this.id)
        .then((data) => {
            let container = document.querySelector("#container");
            container.innerHTML = null;
            append(data.results, container)
        })

}

for (let ele of categories) {
    ele.addEventListener("click", cSearch)
}

document.querySelector("#query").addEventListener("input", InputSearch);

let delay = 3000;



function InputSearch() {
    let value = document.querySelector("#query").value;
    if (id) {
        clearTimeout(id);
    }
    id = setTimeout(function () {
        console.log("time");
        searchImage(api, value)
            .then((data) => {
                console.log(data);
                let container = document.querySelector("#container");
                container.innerHTML = null;
                append(data.results, container)
            })
    }, delay)



}