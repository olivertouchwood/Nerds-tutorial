var link = document.querySelector('.write');
var popup = document.querySelector('.modal-content');
var cancel = document.querySelector('.cancel');
var form = popup.querySelector('form');
var loginInput = popup.querySelector('.login');
var email = popup.querySelector('.email');
var storage = localStorage.getItem('loginInput');
var myVar;

function myFunction() {
	myVar = setTimeout(alertFunc, 5);
};

function alertFunc() {
	console.log('timeout');
	popup.classList.add("modal-content-error");
};

link.addEventListener('click', function(event){
	event.preventDefault();
	popup.classList.add("modal-content-show");
	if (storage) {
          loginInput.value = storage;
          email.focus();
        } else {
          loginInput.focus();
        }
});

cancel.addEventListener('click', function(event) {
        event.preventDefault();
        popup.classList.remove("modal-content-show");
 });

form.addEventListener('submit', function(event) {
        if (!(loginInput.value && email.value)) {
          event.preventDefault();
          console.log('form interaction');
          popup.classList.remove('modal-content-error');
          myFunction();
        } else {
        	event.preventDefault();
        	localStorage.setItem('loginInput', loginInput.value);
        	console.log(loginInput.value, email.value);
        }
 });

window.addEventListener("keydown", function(event) {
        if (event.keyCode == 27) {
          if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
          }
        }
});