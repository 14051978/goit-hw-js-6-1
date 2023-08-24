
const quantCateg=document.querySelectorAll(`.item`);
console.log(`Number of Categories:`,quantCateg.length);


quantCateg.forEach (function(element){
    console.log (`Category:`,element.querySelector(`h2`).textContent);
    console.log(`Elements:`,element.querySelectorAll(`li`).length);
})