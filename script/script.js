function clickMenu() {
    if (itens.style.display == 'flex') {
         itens.style.display = 'none'


    } else {
         itens.style.display = 'flex'
    }
}

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
