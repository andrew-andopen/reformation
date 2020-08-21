const h1Tag = document.querySelector('h1')
const h2Tag = document.querySelector('h2')
const textAreaTag = document.querySelector('textarea')



//Submit form via AJAX and show success page
var form = document.getElementById("form")

form.onsubmit = function(event) {
event.preventDefault();
var formData = new FormData(form);
var xhr = new XMLHttpRequest();
xhr.open("POST", form.action, true);
xhr.onload = function(e) {
console.log(xhr);
var response = JSON.parse(xhr.response);
if (xhr.status === 200) {
    h1Tag.innerHTML = "yes"
  
} else {
  formH1Tag.innerHTML = `Sorry, please reload your page and try again`
}
};
xhr.send(formData);
};