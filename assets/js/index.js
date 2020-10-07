// 60b45aeab0194285955c35252f7f04e4
let selectbymeal = document.querySelector("#mealtype");
let selectbycusine = document.querySelector("#cusine");
let renderelement = document.querySelector(".renderelement");
function search(){
    while(renderelement.firstChild){
        renderelement.removeChild(renderelement.firstChild);
    }
    let cusinevalue = selectbycusine.value;
    let mealvalue = selectbymeal.value;

    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=60b45aeab0194285955c35252f7f04e4&type=${mealvalue}&cuisine=${cusinevalue}`)
                .then(e => e.json())
                .then(e => renderitems(e))
}

function renderitems(e){
    let results = e["results"];
    let resultslength = e["totalResults"];
    if(resultslength > 0 ){
    (results).forEach(element => {
        let item = document.createElement("div");
        item.setAttribute('class',"item");
        let itemimage = document.createElement("img");
        itemimage.setAttribute('src',element["image"]);
        let item_text_box = document.createElement("div")
        item_text_box.setAttribute("class","item_text_box");
        let itemh3 = document.createElement("h3");
        itemh3.setAttribute("class", "item_text");
        itemh3.innerHTML = element["title"];
        item_text_box.appendChild(itemh3);
        item.appendChild(itemimage);
        item.appendChild(item_text_box);
        item.setAttribute("id",`${element["id"]}`);
        item.setAttribute(onclick,recipes());
        renderelement.appendChild(item);
    });
    }
    else{
        let notfound = document.createElement("div");
        notfound.innerHTML = "Sorry there are no recipes with your choice, please try with a different search"
        notfound.setAttribute("class","not_found");
        renderelement.setAttribute("justify-content","center");

        renderelement.appendChild(notfound);
    }
}

function recipes(c){
    console.log(c);
}