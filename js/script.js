const data_input = document.querySelector(".enter");
const data_display = document.querySelector(".value");

function Conversor (value) {

    let data = parseFloat(data_input.value);
    console.log (data);

    data *= value;

    let data_fixed = data.toFixed(2);

    let data_text = data_fixed.toString();

    if (data_text == "NaN") {

        console.log ("NaN");
        data_display.innerHTML = "0.00";

    }else {

        data_display.innerHTML = data_text;

    }

}

const switch_button = document.querySelector(".switch");

switch_button.addEventListener ("click" , () => {

    let first_text = document.querySelector("#first_text");
    let second_text = document.querySelector("#second_text");
    let coin = document.querySelector (".coin");

    if (first_text.innerHTML == "Dólar" && second_text.innerHTML == "Real") {

        first_text.innerHTML = "Real";
        second_text.innerHTML = "Dólar";
        data_input.addEventListener ("input", () => {Conversor(0.21)})
        data_input.removeEventListener ("input", () => {Conversor(4.85)})
        coin.innerHTML = "Dolares";

    } else {

        first_text.innerHTML = "Dólar";
        second_text.innerHTML = "Real";
        data_input.addEventListener ("input", () => {Conversor(4.85)})
        data_input.removeEventListener ("input", () => {Conversor(0.21)})
        coin.innerHTML = "Reais";
    }
    

})

switch_button.addEventListener ("click" , () => {

    switch_button.classList.toggle("active");

});

// Dolar To Real
data_input.addEventListener ("input", () => {Conversor(4.85)})



