let btn = document.querySelector(".add");
let input = document.querySelector("input");
let ul = document.querySelector(".ul");

let ul2 = document.querySelector(".ul2");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = input.value + " ";

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");
    
    item.appendChild(delbtn);
    ul.appendChild(item);
    
    input.value = "";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let eventdel = event.target.parentElement;
        eventdel.remove();
        console.log(event.target.parentElement)
    }
});


                 
        