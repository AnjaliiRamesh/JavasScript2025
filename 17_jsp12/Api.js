// JSON DATA TO JS OBJECT
let jsonApi = '{"fact":"A cat has more bones than a human; humans have 206, and the cat - 230.","length":70}';

// console.log(jsonApi.fact);
// let newApi = JSON.parse(jsonApi);
// console.log(newApi);
// console.log(newApi.fact);

// JS OBJECT TO JSON DATA
let student = {
    name: "anjali",
    marks : 70
}
// console.log(JSON.stringify(student));
// JSON.stringify(student);
// '{"name":"anjali","marks":70}'

// let url ="https://catfact.ninja/fact";
// fetch(url)
// .then((response)=>{
//     console.log(response);
//     return response.json()
    
// })
// .then((data)=>{
//         console.log(data);
// })
// .catch((error)=>{
//    console.log("error was: ", error);
   
// })

// async function getfacts() {
//    try { 
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data.fact);
// }
// catch(e){
//     console.log("errpr: ", e);
    
// }
// console.log("done");

    
// }

// fetch random facts
// let btn = document.querySelector("button");

// btn.addEventListener("click", async()=>{
//     let fact =  await getfacts();
//     // console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// })

// async function getfacts() {
//    try { 
//     let res = await axios.get(url);
//     return res.data.fact;
// }
// catch(e){
//     console.log("errpr: ", e);
//     return "no fact found"
// }

    
// }
// Here’s what happens step by step:
// You click the button.
// The function calls getfacts().
// getfacts() uses axios.get() — which is asynchronous (it takes time to fetch data).
// If you don’t use await, the function doesn’t wait for the result — it just gets a Promise immediately.
// By marking your listener function as async, you can use await to pause until the cat fact arrives.
// So, async lets you use await, and await gives you the actual result instead of a Promise.
// If you remove async and await, your fact variable will just store:

// Promise {<pending>}

// Fetch Random images
// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async()=>{
//     let dogfact = await getDog();
//     console.log(dogfact);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", dogfact);
    
// })

// async function getDog() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     }
//     catch(e){
//        console.log("eroor", e);
//         return "no data found"
//     }
// }

// fetch universities

let url3 = "http://universities.hipolabs.com/search?name=";

let uni = document.querySelector("button");

uni.addEventListener("click", async()=>{
    let country = document.querySelector("input").value;
    console.log(country);
    let clgArr = await getColleges(country);
    // console.log(clgArr);
    show(clgArr);
    
})
function show(clgArr){
    let list = document.querySelector("#list");
    list.innerText = "";
    for(col of clgArr){
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li)
        console.log(col.name);    
    }
}
async function getColleges(country) {
    try{
        let res = await axios.get(url3 + country);
        return res.data;
        
    }
    catch(e){
        console.log("error was ", e);
        return "no data found";  
    }
}