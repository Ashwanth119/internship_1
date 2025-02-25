
let div1=document.createElement("div");
document.body.appendChild(div1);
deleteAll_btn=document.createElement("button");
deleteAll_btn.innerHTML="Delete All";
deleteAll_btn.name="Delete All";
deleteAll_btn.style.color="red";
// deleteAll_btn.onclick=deleteAll;
div1.appendChild(deleteAll_btn);

let div2=document.createElement("div");
document.body.appendChild(div2);

let div2_1=document.createElement("div");
div2_1.innerHTML+="Add New Task";
div2.appendChild(div2_1);

let div2_2=document.createElement("div");
let input1=document.createElement("input");
input1.placeholder="Enter a Task";
div2_2.appendChild(input1);
addTask_btn=document.createElement("button");
addTask_btn.innerHTML="+";
addTask_btn.name="+";
addTask_btn.style.color="green";
div2_2.appendChild(addTask_btn);
// div2.style.height="20px";
// div2.style.width="20px";
div2.appendChild(div2_2);

// let div_display=document.createElement("div");
// div_display.style.padding="100px";
// div_display.style.backgroundColor="white";
// document.body.appendChild(div_display);

let div3=document.createElement("div");
document.body.appendChild(div3);
let toDo_list=document.createElement("ul");
div3.appendChild(toDo_list);

addTask_btn.onclick=function(){
    let txt=input1.value;
    let li=document.createElement("li");
    // li.innerText=txt;
    li.style.listStyleType='none';
    li.style.justifyContent="space-around";
    li.style.width="100%";
    li.style.display="flex";
    li.style.padding="10px";
    li.style.borderRadius="5px";
    li.style.cursor="pointer";
    // toDo_list.appendChild(li);
    input1.value="";

    let li_span=document.createElement("span");
    li_span.innerHTML=txt;
    li_span.style.flex='1';
    li.appendChild(li_span);

    // let div4_1=document.createElement("div");
    // div4_1.style.display="flex";
    // div4_1.appendChild(li);

    let div4=document.createElement("div");
    div4.style.display="flex";
    li.appendChild(div4);
    let select1=document.createElement('select');
    select1.id="select1_id";

    let options=['Select a option','Completed','In-Progress'];
    for(let i=0;i<options.length;i++){
        let op=document.createElement('option');
        op.text=options[i];
        op.value=options[i];
        select1.appendChild(op);
    }
    div4.appendChild(select1);

    let delete_btn=document.createElement("button");
    delete_btn.innerHTML="Delete";
    delete_btn.name="Delete";
    delete_btn.style.color="red";
    div4.appendChild(delete_btn);

    // div4_1.appendChild(div4);

    // li.appendChild(div4);
    toDo_list.appendChild(li);

    delete_btn.onclick=function(){
        li.remove();
    }

}
deleteAll_btn.onclick=function(){
    toDo_list.innerHTML="";
}
