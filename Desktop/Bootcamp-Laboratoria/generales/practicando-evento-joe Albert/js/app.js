/* jshint browser: true */
/*window.addEventListener('load', function(e){
    var title = document.body.firstElementChild;
    title.addEventListener('mouseover', function(e){
        title.textContent = 'Hola gatito otra vez';
    });  
 });*/

window.addEventListener('load', funLoad);

function funLoad(){
    var title = document.body.firstElementChild;
    title.addEventListener('mouseover', funMouse);
    function funMouse(){
        title.textContent = 'Hola gatito otra vez';
    }
    
    var imagen = document.getElementById('imagen');
    imagen.addEventListener('mouseover', funImg);
    function funImg(){
    imagen.src = 'assets/gatito 2.jpg';
    }
    imagen.addEventListener('mouseout', funImgc);
    function funImgc(){
    imagen.src = 'assets/gatito.jpg';
    }
}


