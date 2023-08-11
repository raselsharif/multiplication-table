

let number = document.querySelector(".number");
let btn = document.querySelector(".btn");
let result = document.querySelector(".ans");
// let li = document.createElement("li");


btn.addEventListener("click", function () {
    if (number.value <= 0 ) {
        result.innerHTML = `
        <h2>Pls! Enter a positive number </h2>
        `;
    } else {
        let multi = "";
        for (i = 1; i <= 10; i++) {
            // let ans= "<h4>" + number.value + " x " + i + " = " + number.value * i+ "</h4>"+"<br>";

            multi += `
            <h4>${number.value}
            x
            ${i}
            =
            ${number.value * i}
            </h4>
    
            `;

            console.log(i);
        }
        result.innerHTML = multi;
    }
})