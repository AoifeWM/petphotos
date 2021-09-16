'use strict'

function colorPicker(){
    alert ('You can pick the color of the header of this site! Please enter RGB values.');
    let i = 0;
    let red = 0;
    let blue = 0;
    let green = 0;
    while(i !== 1){
        red = Math.round(Number(prompt('Please enter red value (0-255):')));
        if(red > 255||red < 0||Number.isNaN(red)){
            alert("Incorrect value, try again.");
        }else{
            i++;
        }
    }
    i--;
    while(i !== 1){
        blue = Math.round(Number(prompt('Please enter blue value (0-255):')));
        if(blue > 255||blue < 0||Number.isNaN(blue)){
            alert("Incorrect value, try again.");
        }else{
            i++;
        }
    }
    i--;
    while(i !== 1){
        green = Math.round(Number(prompt('Please enter green value (0-255):')));
        if(green > 255||green < 0||Number.isNaN(green)){
            alert("Incorrect value, try again.");
        }else{
            i++;
        }
    }
    document.write('<header style = "background-color:rgb('+red+','+green+','+blue+');">');
}

// function buttonListener(){
// }

// function petBioPrinter(petBio){
//     alert('Your sumbitted bio is ' + petBio);
// }

// let petBio = document.getElementById('petBio').value;
// let button = document.getElementById('submit');
// button.addEventListener('click', petBioPrinter(petBio));