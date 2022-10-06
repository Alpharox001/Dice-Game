
document.querySelectorAll("h1")[0].textContent = "Refresh me !";

// For dice 1

let randomNumber1 = Math.floor(Math.random() * 6 + 1);


let randomImage1 = "dice" + randomNumber1 + ".png";

let randomImageSource1 = "images/" + randomImage1;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

// for dice 2

let randomNumber2 = Math.floor(Math.random() * 6 + 1);

let randomImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if (randomNumber1 === randomNumber2) {
    document.querySelectorAll("h1")[0].textContent = "Its a Draw!";
} else if(randomNumber1 > randomNumber2) {
    document.querySelectorAll("h1")[0].textContent = "Player 1 Wins!";
} else {
    document.querySelectorAll("h1")[0].textContent = "Player 2 Wins!";
}