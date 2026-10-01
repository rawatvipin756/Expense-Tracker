let totalExpense=document.getElementById("totalExpense");
let inputText=document.getElementById("inputText");
let inputAmt=document.getElementById("inputAmt");
let addBtn=document.getElementById("addBtn");
let allTasks=document.getElementById("allTasks");

let amount=0;
addBtn.addEventListener("click",()=> {
    let expense=inputText.value;
    let amt=inputAmt.value;
    let tasks=document.createElement("p");
    amount=amount+amt;
    totalExpense.innerText=amount;
    tasks.innerText=expense + amt;
    allTasks.appendChild(tasks);

    inputText.value="";
    inputAmt.value="";
});