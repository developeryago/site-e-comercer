const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu');

icon.addEventListener('click', () => {
  menu.classList.toggle('show');
});

let cont = 1
document.getElementById("radio1").checked = true

setInterval( function(){
     nextImage()
}, 7000)

function nextImage(){
     cont += 1 
     if (cont > 3){
          cont = 1
     }
     document.getElementById("radio" + cont).checked = true
}
