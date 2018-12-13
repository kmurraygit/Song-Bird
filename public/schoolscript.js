"use strict";

function makeCall(url) {
    return fetch(url)
    .then(response => {
        return response.json();
    })
    .then(json => {
        return json;
    })
    .catch(error => {
        console.error(error);
    });
}

function parseTemplate(data){
    let stringHTML ="";
    let template = document.getElementById("template").innerHTML;
    console.log(data);
    for (let index = 0; index < data.length; index++) {
        stringHTML += template
            .replace(/{{school}}/g, data[index]["school"])
            .replace(/{{state}}/g, data[index]["state"])
            .replace(/{{name}}/g, data[index]["name"])
            .replace(/{{email}}/g, data[index]["email"])
    }
    console.log(stringHTML);
    return stringHTML;
}

function getDataAndParseTemplate() {
    let div = document.getElementById("display");
    let url = "https://webdev-csis2000.herokuapp.com/collegerep";
    makeCall(url).then(array => {
        div.innerHTML = parseTemplate(array);
    });
}