let totalExpense=document.getElementById("totalExpense");
let inputText=document.getElementById("inputText");
let inputAmt=document.getElementById("inputAmt");
let addBtn=document.getElementById("addBtn");
let allTasks=document.getElementById("allTasks");

let amount=0;
addBtn.addEventListener("click",()=> {
    let name=inputText.value;
    let amt=inputAmt.value;
    let tasks=document.createElement("p");
    let editBtn=document.createElement("button");
    let deleteBtn=document.createElement("button");
    let box=document.createElement("div");

    editBtn.innerText="Edit";
    deleteBtn.innerText="Delete";

    editBtn.type = "button";
    deleteBtn.type = "button";

    amount+=Number(amt);
    totalExpense.textContent="Total Expense : " + amount;
    tasks.innerText=name + amt;

    box.appendChild(tasks)
    box.appendChild(editBtn);
    box.appendChild(deleteBtn);
    allTasks.appendChild(box);

    editBtn.addEventListener("click",()=> {
        let newName=prompt("Enter New Input");
        let newAmt=prompt("Enter new value");
        amount-=Number(amt);
        amount+=Number(newAmt);
        amt=newAmt;
        totalExpense.textContent="Total Expense : " + amount;
        tasks.innerText=newName + newAmt;
    });

    deleteBtn.addEventListener("click",()=> {
        box.remove();
        amount-=Number(amt);
        totalExpense.textContent="Total Expense : " + amount;
    });

    // inputText.value="";
    // inputAmt.value="";
});