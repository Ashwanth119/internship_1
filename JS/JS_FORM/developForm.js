let count=0;
let table=document.createElement("table");
table.id="table_id";
let div2=document.createElement("div");
let page_count=0;
div2.setAttribute('style',"position:absolute;right:200px; top:0px;border:2px solid black")
let index=['Id','First_Name','Last_Name','Gender',"DOB",'email','Contact','Whatsapp_Messages'];

function dec(){
    --page_count;
    if(page_count<=0){
        page_count=0;
    }
    display();
}
function inc(){
    ++page_count;
    display();
}

function display(){
    let row_count=document.getElementById("row_count").value;
    if(page_count<=0)
        document.getElementById("prev").disabled=true;
    else
        document.getElementById("prev").disabled=false;
    // console.log(row_count);
    let rows=Array.from(table.querySelectorAll("tr")).slice(1);
    if(page_count==(Math.ceil(rows.length/row_count))-1)
        document.getElementById("next").disabled=true;
    else
        document.getElementById("next").disabled=false;
    // console.log(rows);
    for(let st=0;st<rows.length;st++){
        if((st>=page_count*row_count) && (st<(page_count+1)*row_count))
            rows[st].style.display="";
        else
            rows[st].style.display="none";
    }
}

function createObject(){    
    let fName=document.getElementById("fName").value;
    // console.log(fName);
    let lName=document.getElementById("lName").value;
    let find_gender=document.getElementsByName("gender") ;
    let gender=find_gender[0].checked?"Male":(find_gender[1].checked?"Female":"Not selected");
    let dob=document.getElementById("date").value;
    let email=document.getElementById("email").value;
    let contact=document.getElementById("phNo").value;
    let msg=document.getElementById("check").checked?"Allowed":"Not Allowed";
    if(fName.length<4){
        alert("The first name should contain minimum 4 characters");
        return false;
    }
    if(contact.length!=10){
        alert("The contact must exactly contain 10 digits");
        return false;
    }
    let obj={};
    obj.Id=++count;
    obj.First_Name=fName;
    obj.Last_Name=lName;
    obj.Gender=gender;
    obj.DOB=dob;
    obj.email=email;
    obj.Contact=contact;
    obj.Whatsapp_Messages=msg;
    // console.log(obj);
    // console.log(student);
    if(count==1){
        let tr_head=document.createElement("tr");
        for(let i=0;i<index.length;i++){
            let th=document.createElement("th");
            th.innerHTML=index[i];
            tr_head.appendChild(th);
        }
        table.appendChild(tr_head);        
    }

    let tr=document.createElement("tr");
    for(let i=0;i<index.length;i++){
        let td=document.createElement("td");
        td.innerHTML=obj[index[i]];
        tr.appendChild(td);
    }

    let edit_btn = document.createElement("button");
    edit_btn.innerHTML = "Edit";
    edit_btn.onclick = function () {
        editRow(tr, obj);
    };

    let del_btn=document.createElement("button");
    del_btn.innerHTML='Delete';
    del_btn.onclick=function(){
        tr.remove();
    }

    tr.appendChild(edit_btn);
    tr.appendChild(del_btn);
    table.appendChild(tr);
    div2.appendChild(table);
    document.body.appendChild(div2);
    return true;
}

function editRow(row, obj) {
    document.getElementById("fName").value=obj.First_Name;
    document.getElementById("lName").value=obj.Last_Name;
    if (obj.Gender==="Male") {
        document.getElementById("radio_1").checked=true;
    } else if (obj.Gender==="Female") {
        document.getElementById("radio_2").checked=true;
    }
    document.getElementById("date").value=obj.DOB;
    document.getElementById("email").value=obj.email;
    document.getElementById("phNo").value=obj.Contact;
    document.getElementById("check").checked=obj.Whatsapp_Messages === "Allowed";

    // Remove the row from the table and student array
    row.remove();
}

function sortTable() {
    let rows=Array.from(table.querySelectorAll("tr")).slice(1); // Exclude header row
    rows.sort((rowA, rowB) => {
        let cellA=rowA.cells[1].textContent; // First Name column
        let cellB=rowB.cells[1].textContent;
        return cellA.localeCompare(cellB);
    });

    rows.forEach(row => table.appendChild(row));
    div2.appendChild(table);
    document.body.appendChild(div2);
}

function search() {
    let searchTerm=document.getElementById("search").value.toLowerCase();
    let rows=Array.from(table.querySelectorAll("tr")).slice(1); // Exclude header row

    rows.forEach(row => {

        // // Based on first Name
        // let firstName=row.cells[1].textContent.toLowerCase(); // First Name column
        // if (firstName.includes(searchTerm)) {
        //     row.style.display="";
        // } else {
        //     row.style.display="none";
        // }

        // updated
        // Based on entire table
        for(let i=0;i<row.cells.length;i++){
            let firstName=row.cells[i].textContent.toLowerCase(); // First Name column
            if (firstName.includes(searchTerm)) {
                row.style.display="";
                break;
            }
            else {
                row.style.display="none";
            } 
        }
    });
}

function filter() {
    let filterTerm=document.getElementById("filter").value.toLowerCase();
    let rows=Array.from(table.querySelectorAll("tr")).slice(1); // Exclude header row

    rows.forEach(row => {
        let firstName=row.cells[2].textContent.toLowerCase(); // Last Name
        if (firstName.includes(filterTerm)) {
            row.style.display="";
        } else {
            row.style.display="none";
        }
    });
}

function deleteAll() {
    count=0;
    table.innerHTML=""; // Clear all rows
    div2.innerHTML=""; // Clear the container div
}