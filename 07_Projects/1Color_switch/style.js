const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

//Loop over each element in buttons. For every item, the loop calls the function and passes that element in as button.
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)//event aa kaha se raha h in this case id bata dega ki ye yaha aur ye yaha se h
        if(e.target.id === 'grey'){
            // body.style.backgroundColor = "grey"
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id;
        }

    })
});
/*
👉 A NodeList is basically a collection of DOM nodes (elements) that you can loop through.
It’s not a real array, but it’s array-like (has .length, can use forEach, and can be indexed like buttons[0]).
NodeList is the browser’s way of giving you a list of elements from the DOM.

It’s not a real Array, but “array-like.”

It works fine for looping, and if you need more, you can convert it.
*/