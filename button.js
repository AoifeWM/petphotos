'use strict'

let addBio = document.getElementById('addBio');
// console.log(addBio);
addBio.addEventListener('submit', petBioPrinter);

function petBioPrinter(event){
    let petBio = event.target.bioText.value;
    event.preventDefault();
    console.log(event.target.bioText.value);
    console.log('hit petbioprinter');
    alert('Your sumbitted bio is ' + petBio);
}
