var helpArray = [
"Enter your name in this input box.",
"Enter your e-mail address in the format user@domain.",
"Check this box if you liked our site.",
"Enter any comments here that you'd like us to read.",
"This button submits the form to the server-side script.",
"This button clears the form.",""];
var helpText;


function init()
{
helpText = document.getElementById( "helpText" );

helpText = document.getElementById( "fname" ).addEventListener("focus",
function () {helpText.innerHTML = "Enter your name in this input box.";},
false );
helpText = document.getElementById( "lname" ).addEventListener("focus",
function () {helpText.innerHTML = "Enter your name in this input box.";},
false );
helpText = document.getElementById( "phone" ).addEventListener("focus",
function () {helpText.innerHTML = "Enter your phone number in this input box.";},
false );
helpText = document.getElementById( "email" ).addEventListener("focus",
function () {helpText.innerHTML = "Enter your e-mail address in the format jade@example.com";},
false );

helpText = document.getElementById( "note" ).addEventListener("focus",
function () {helpText.innerHTML = "Enter any note if you have.";},
false );


registerListeners(document.getElementById( "fname"),0);
registerListeners(document.getElementById( "lname"),1);
registerListeners( document.getElementById( "phone"),2);	
registerListeners(document.getElementById("email"),3);
registerListeners(document.getElementById("note"),4);
registerListeners( document.getElementById( "submit"),5);
registerListeners( document. getElementById( "reset"),6);
var myForm = document.getElementById( "myForm" );

myForm.addEventListener("submit",
function()
{
return confirm( "Are you sure you want to book?" );
},
false ) ;
myForm.addEventListener("Clear",
function()
{
return confirm( "Are you sure you want to clear?" );
},
false );
}

function registerListeners( object, messageNumber)
{
object.addEventListener( "focus",
function() { helpText.innerHTML = helpArray[ messageNumber ]; },
false );
object.addEventListener( "blur",
function() { helpText.innerHTML = helpArray[ 6 ]; }, false ) ;
}
window.addEventListener( "load", init, false );