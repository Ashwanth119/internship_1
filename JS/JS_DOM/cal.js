let div1=document.createElement("div");
document.body.appendChild(div1);

let val1=document.createElement("input");
val1.id="val1_id";
val1.type="text";
// val1.setAttribute("type","text");
div1.innerHTML+="Value1: ";
div1.appendChild(val1);

// let br=document.createElement('br');
// div1.appendChild(br);
div1.appendChild(document.createElement('br'));
div1.appendChild(document.createElement('br'));

let val2=document.createElement("input");
val2.id="val2_id";
val2.type="text";
// val2.setAttribute("type","text");
div1.innerHTML+="Value2: ";
div1.appendChild(val2);


div1.appendChild(document.createElement('br'));
div1.appendChild(document.createElement('br'));

let select1=document.createElement('select');
select1.id="select1_id";
select1.onclick=operation;

let options=['Add','Sub','Mul','Div','Modulo'];
let colors=['green','yellow','red','blue','orange'];
for(let i=0;i<options.length;i++){
    let op=document.createElement('option');
    op.text=options[i];
    op.value=options[i];
    op.style.backgroundColor=colors[i];
    select1.appendChild(op);
}
// let op1=document.createElement('option');
// let op2=document.createElement('option');
// let op3=document.createElement('option');
// let op4=document.createElement('option');
// let op5=document.createElement('option');
// op1.text="Add";
// op2.text="Sub";
// op3.text="Mul";
// op4.text="Div";
// op5.text="Modulo";
// op1.value="Add";
// op2.value="Sub";
// op3.value="Mul";
// op4.value="Div";
// op5.value="Modulo";
// select1.appendChild(op1);
// select1.appendChild(op2);
// select1.appendChild(op3);
// select1.appendChild(op4);
// select1.appendChild(op5);
div1.innerHTML+="Operation: ";
div1.appendChild(select1);

// div1.appendChild(br);
div1.appendChild(document.createElement('br'));
div1.appendChild(document.createElement('br'));

let val3=document.createElement("input");
val3.id="val3_id";
val3.type="text";
// val3.setAttribute("type","text");
// div1.innerHTML+="Result: ";
div1.appendChild(val3);

function operation(){
    let x=parseFloat(document.getElementById('val1_id').value);
    let y=parseFloat(document.getElementById('val2_id').value);
    let op=document.getElementById('select1_id').value;
    console.log(op);
    let result;
    let bg_color;
    switch(op){
        case "Add":
            result=x+y;
            bg_color=colors[0];
            break;
        case "Sub":
            result=x-y;
            bg_color=colors[1];
            break;
        case "Mul":
            result=x*y;
            bg_color=colors[2];
            break;
        case "Div":
            result=x/y;
            bg_color=colors[3];
            break;
        case "Modulo":
            result=x%y;
            bg_color=colors[4];
            break;
    }
    document.getElementById('val3_id').value=result;
    document.getElementById('val3_id').style.color=bg_color;
}