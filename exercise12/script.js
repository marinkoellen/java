


// Exercise 1 

let number = 0


function incrementValue(){
    // var value = parseInt(document.getElementById('number-counter').value);
    number++;
    document.getElementById('number-counter').innerText = number;
}


function DecreaseValue(){
    // var value = parseInt(document.getElementById('number-counter').value);
    number--;
    document.getElementById('number-counter').innerText = number;
}


// Exercise 2
window.onload= () => {
    // goes through container and selects all buttons
    const buttons = document.getElementById('available-food').querySelectorAll('button');
    // for each button it adds an event listener which waits for a click, and when it clicks it triggers add to cart function
    buttons.forEach(button =>{
        button.addEventListener('click',AddtoCart)
    })
}


function AddtoCart(e){
    // e is an event 
    var button = e.currentTarget;
    // so its looking at li, then finding first child in li which is the paragraph tag currently
    var paragraph = button.parentElement.children[0];
    var item = paragraph.innerText // take a copy of the text rather than moving the whole parent.element.children[0]
    var element = document.createElement("LI"); //creates a new list element
    var text = document.createTextNode(item); //creates a new text node(?)
    element.appendChild(text);
    document.getElementById("cart-list").appendChild(element)
}