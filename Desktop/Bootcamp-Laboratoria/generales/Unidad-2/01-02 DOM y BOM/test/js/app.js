/*window.onload = function(){
    var board = document.querySelector('.board');
    
    board.addEventListener('click',addBgc);
    
    board.addEventListener('dblclick',function(event) {
        console.log(event.target);
        
        event.target.style.backgroundColor = 'blue';
    });
    
    board.addEventListener('mouseover',function(event) {
        console.log(event.target);
        
        event.target.style.backgroundColor = 'yellow';
    });
};

function addBgc(event){
    event.target.style.backgroundColor = 'red';
}*/

window.onload = function(){
    var board = document.querySelector('.board');
    
    board.addEventListener('click', addX);  
    
};

var centinel = true;

function addX(event){
    if(event.target.matches('td')&& event.target.textContent==='') {
        if(centinel)
        event.target.textContent = 'X';
        /*centinel = false;*/
        else
        event.target.textContent = 'O';
        /*centinel = true;*/
        centinel = !centinel;  
    }    
}
