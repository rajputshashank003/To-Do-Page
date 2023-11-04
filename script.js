let btn = document.querySelector(".add");
let input = document.querySelector("input");
let list = document.querySelector(".list");
let delbtn = document.querySelector(".delete");

btn.addEventListener("click",function(){
    let item = document.createElement("div");
    item.classList.add("data");

    let checkbtn = document.createElement("input");
    checkbtn.type = "checkbox";
    checkbtn.classList.add("checkbox-1");

    let textVal = input.value + " ";
    textVal = textVal.charAt(0).toUpperCase() + textVal.slice(1);
    
    let span = document.createElement("span");
    span.className = "hello";
    span.append(textVal);

    let delbtn = document.createElement("button");
    delbtn.innerText = "X";
    delbtn.classList.add("delete");

    item.appendChild(checkbtn);
    item.appendChild(span);
    item.appendChild(delbtn);
    list.appendChild(item);
    
    input.value = "";
});

list.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        let delData = event.target.parentElement;
        delData.remove();
    }
});      

list.addEventListener("click" ,() => {
    if(event.target.classList.contains("checkbox-1")){
        let delData = event.target.parentElement;
        if(delData.children[0].checked){
            delData.children[1].className = "strikethrough";
        } else{
            delData.children[1].className = "hello";
        }

    }
});
