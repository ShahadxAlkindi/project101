var bookArray = ["Enter the day you want",
    "Enter the month you want",
    "Enter the year you want",
    "Enter the time you want",
    "Enter your name here",
    "Enter you e-mail here",
    "Enter your phone number for contact ",
    "If you have any special requests please write them here ",
    "Clck the button to confirm the booking"
];

var bookText;

function init() {
    bookText = document.getElementById("bookText");

    registerListenrs(document.getElementById("day"), 0);
    registerListenrs(document.getElementById("month"), 1);
    registerListenrs(document.getElementById("year"), 2);
    registerListenrs(document.getElementById("time"), 3);
    registerListenrs(document.getElementById("name"), 4);
    registerListenrs(document.getElementById("email"), 5);
    registerListenrs(document.getElementById("phone"), 6);
    registerListenrs(document.getElementById("requests"), 7);
    registerListenrs(document.getElementById("book"), 8);


}

function registerListenrs(object, messageNumber) {

    object.addEventListener("focus",
        function() { bookText.innerHTML = bookArray[messageNumber] }, false);

    object.addEventListener("blur",
        function() { bookText.innerHTML = bookArray[9] }, false);
}
window.addEventListener("load", init, false);