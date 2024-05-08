var settingsMenu =  document.querySelector(".setting_menu");
var darkBtn =  document.getElementById("dark_btn");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("setting_menu_height");
}
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark_btn_on");
}
function passvalue() {
        var message =   document.getElementById("")
}

let btnGet = document.querySelector('#button_value');
let inputGet = document.querySelector('#input_vlaue');
let post = document.querySelector('#post');

btnGet.addEventListener('click',() =>{
    post.innerText = inputGet.value;
});
function postImage() {
    var fileInput = document.getElementById('fileInput');
    var imageContainer = document.getElementById('imageContainer');

    if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var image = document.createElement('img');
            image.src = e.target.result;
            imageContainer.appendChild(image);
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
}
