let scrollRevealOption = {
    distance: "15px",
    duration: 400,
};
ScrollReveal().reveal(".conta", {
    ...scrollRevealOption,
    origin: "top",
});
ScrollReveal().reveal(".conta", {
     ...scrollRevealOption,
     delay: 400,
});

let synonymText = document.querySelector(".synonymText");
let antonymText = document.querySelector(".antonymText");
let wordInput = document.querySelector(".wordInput");
let btn = document.querySelector(".btn");

btn.addEventListener("click",()=>{
let input = wordInput.value;
if(input === ""){
resultShow.innerHTML = `Enter a word`;
setTimeout(() => {
resultShow.innerHTML = "";
}, 1000);
}else{
let url = 'https://api.api-ninjas.com/v1/thesaurus?word=' + input
fetch(url,{
headers: {
'X-Api-Key': 'FxIIfne1F11VDaFrvODTcg==t7fkU4TSrkUw5VVA'
}
})
.then(response => response.json())
.then(data => {
let rando1 = data.synonyms[Math.floor(Math.random() * data.synonyms.length)];
let rando2 = data.antonyms[Math.floor(Math.random() * data.antonyms.length)];
synonymText.innerHTML = `✅ Synonyms: ${rando1}`;
antonymText.innerHTML = `✅🚫 Antonyms: ${rando2}`;
console.log(data.synonyms);
console.log(data.antonyms);
});
}
});

// let url = 'https://api.api-ninjas.com/v1/thesaurus?word=' + text
// fetch(url,{
// headers: {
// 'X-Api-Key': 'FxIIfne1F11VDaFrvODTcg==t7fkU4TSrkUw5VVA'
// }
// })
// .then(response => response.json())
// .then(data => {
// console.log(data.synonyms);
// console.log(data.antonyms);
// let rando1 = data.synonyms[Math.floor(Math.random() * data.synonyms.length)];
// console.log(rando1);
// let rando2 = data.antonyms[Math.floor(Math.random() * data.antonyms.length)];
// console.log(rando2);
// });