// 60b45aeab0194285955c35252f7f04e4
let selectbymeal = document.querySelector("#mealtype");
let selectbycusine = document.querySelector("#cusine");
let renderelement = document.querySelector(".renderelement");
let main = document.querySelector(".main");
let mainBox = document.querySelector(".main_box");

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
        item.setAttribute("onclick",`recipes(${element["id"]})`);
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
    fetch(`https://api.spoonacular.com/recipes/${c}/analyzedInstructions?apiKey=60b45aeab0194285955c35252f7f04e4`)
    .then(e => e.json())
    .then(e => {
        // main.removeChild(mainBox);
        // main.removeChild(renderelement)
        renderRecipe(e[0]["steps"])
    });   
}


function renderRecipe(steps){
    while(renderelement.firstChild){
        renderelement.removeChild(renderelement.firstChild);
    }
    let mainheading = document.createElement("h1");
        mainheading.innerHTML = "RECIPE";
        mainheading.setAttribute('class',"mainheading");
        renderelement.appendChild(mainheading);
    steps.forEach(step => {
        let eachstep = document.createElement("div");
        eachstep.setAttribute("class","eachstep");
        
        let stepinfo = document.createElement("h3");
        stepinfo.innerHTML = `${step["number"]}.  ${step["step"]}`;
        stepinfo.setAttribute("class", "stepinfo");
        let ingredients = document.createElement("div");
        ingredients.setAttribute("class","ingredients");

        step["ingredients"].forEach(eachingre => {
        let eachingredient = document.createElement("div");
        eachingredient.setAttribute("class", "eachingredient");
        // let eachingredientimage = document.createElement("img");
        // eachingredientimage.setAttribute("src", `${eachingre["image"]}`);
        // eachingredientimage.setAttribute("class", "eachingredientimage");

        let eachingredientname = document.createElement("p");
        eachingredientname.innerHTML = `${eachingre["name"]}`;
        eachingredientname.setAttribute("class", "eachingredientname");
        // eachingredient.appendChild(eachingredientimage);

        eachingredient.appendChild(eachingredientname);
        ingredients.appendChild(eachingredient);
        eachstep.appendChild(stepinfo);
        eachstep.appendChild(ingredients);
        renderelement.appendChild(eachstep);
        })



        

    })
    
}
// 60b45aeab0194285955c35252f7f04e4
// let selectbymeal = document.querySelector("#mealtype");
// let selectbycusine = document.querySelector("#cusine");
// let renderelement = document.querySelector(".renderelement");
// let main = document.querySelector(".main");
// let mainBox = document.querySelector(".main_box");

// function search(){
//     while(renderelement.firstChild){
//         renderelement.removeChild(renderelement.firstChild);
//     }
//     let cusinevalue = selectbycusine.value;
//     let mealvalue = selectbymeal.value;

//     fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=60b45aeab0194285955c35252f7f04e4&type=${mealvalue}&cuisine=${cusinevalue}`)
//                 .then(e => e.json())
//                 .then(e => renderitems(e))
// }

// function renderitems(e){
//     let results = e["results"];
//     let resultslength = e["totalResults"];
//     if(resultslength > 0 ){
//     (results).forEach(element => {
//         let item = document.createElement("div");
//         item.setAttribute('class',"item");
//         let itemimage = document.createElement("img");
//         itemimage.setAttribute('src',element["image"]);
//         let item_text_box = document.createElement("div")
//         item_text_box.setAttribute("class","item_text_box");
//         let itemh3 = document.createElement("h3");
//         itemh3.setAttribute("class", "item_text");
//         itemh3.innerHTML = element["title"];
//         item_text_box.appendChild(itemh3);
//         item.appendChild(itemimage);
//         item.appendChild(item_text_box);
//         item.setAttribute("onclick",`recipes([${element["id"]},${element["image"]}])`);
//         renderelement.appendChild(item);
//     });
//     }
//     else{
//         let notfound = document.createElement("div");
//         notfound.innerHTML = "Sorry there are no recipes with your choice, please try with a different search"
//         notfound.setAttribute("class","not_found");
//         renderelement.setAttribute("justify-content","center");
//         renderelement.appendChild(notfound);
//     }
// }

// function recipes(c){
//     console.log(c);
//     let recipeId = c[0];
//     fetch(`https://api.spoonacular.com/recipes/${recipeId}/analyzedInstructions?apiKey=60b45aeab0194285955c35252f7f04e4`)
//     .then(e => e.json())
//     .then(e => {
//         main.removeChild(mainBox);
//         console.log(e);
//         renderRecipe(e)
//     });   
// }

// function renderRecipe(arr){
//     console.log(arr);
// } 