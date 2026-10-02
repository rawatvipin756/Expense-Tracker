let totalExpense=document.getElementById("totalExpense");
let inputText=document.getElementById("inputText");
let inputAmt=document.getElementById("inputAmt");
let addBtn=document.getElementById("addBtn");
let allTasks=document.getElementById("allTasks");

let amount=0;

let Expense=[];
let Expens=localStorage.getItem("Expense");
if(Expens!==null){
    Expense=JSON.parse(Expens);
    console.log(Expense);
}
for(let i=0;i<Expense.length;i++){
    createExpense(Expense[i]);
}

function createExpense(Expens){
    let name=Expens.text;
    let amt=Expens.number;

    let row=document.createElement("tr");

    let expenseCell=document.createElement("td");
    let amtCell=document.createElement("td");
    let btnCell=document.createElement("td");
    
    let editBtn=document.createElement("button");
    let deleteBtn=document.createElement("button");

    expenseCell.innerText = name;
    amtCell.innerText = "₹ " + amt;

    editBtn.innerText="Edit";
    deleteBtn.innerText="Delete";

    btnCell.appendChild(editBtn);
    btnCell.appendChild(deleteBtn);

    editBtn.type = "button";
    deleteBtn.type = "button";

    amount+=Number(amt);
    totalExpense.textContent="Total Expense : ₹ " + amount;

    row.appendChild(expenseCell);
    row.appendChild(amtCell);
    row.appendChild(btnCell);

    allTasks.appendChild(row);

    editBtn.addEventListener("click",()=> {
        let newName=prompt("Enter New Input");
        let newAmt=prompt("Enter new value");
        if(newName===null || newName.trim()==="" || newAmt===null || newAmt.trim()===""){
            return;
        }

        amount-=Number(amt);
        amount+=Number(newAmt);
        amt=newAmt;

        Expens.text = newName;
        Expens.number = newAmt;

        totalExpense.textContent="Total Expense : ₹ " + amount;
        expenseCell.innerText = newName;
        amtCell.innerText = "₹ " + newAmt;
        localStorage.setItem("Expense",JSON.stringify(Expense));
    });

    deleteBtn.addEventListener("click",()=> {
        row.remove();

        amount-=Number(amt);
        totalExpense.textContent="Total Expense : ₹ " + amount;

        let index=Expense.indexOf(Expens);
        Expense.splice(index,1);
        localStorage.setItem("Expense",JSON.stringify(Expense));
    });
}

addBtn.addEventListener("click",()=> {
    if(inputText.value.trim()==""){
        alert("Enter valid value");
        return;
    }
    if(inputAmt.value.trim() === ""){
    alert("Enter amount");
    return;
}
    let newExpense={
        text:inputText.value.trim(),
        number:inputAmt.value
    }

    Expense.push(newExpense)
    localStorage.setItem("Expense",JSON.stringify(Expense));
    createExpense(newExpense);

    inputText.value="";
    inputAmt.value="";
});