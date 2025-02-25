let cart=[];
let index=0;

async function fetchData(){
    let data=await fetch("https://dummyjson.com/products");
    // console.log(typeof(data));
    // console.log(data);
    let product=await data.json();
    // console.log(product);
    for(let i=0;i<product.products.length;i++){
        let obj={};
        obj.image=product.products[i].images[0];
        obj.title=product.products[i].title;
        obj.description=product.products[i].description;
        let discount_per=product.products[i].discountPercentage;
        obj.price=(product.products[i].price)-((product.products[i].price*discount_per)/100);
        obj.rating=product.products[i].rating;
        cart.push(obj);
    }
    // console.log(cart);
    addCards();
    addCards();
    document.getElementById("fetch").disabled=true;
}

function search(){
    let search_term=document.getElementById("search").value.toLowerCase();
    let arr=[];
    for(let i=0;i<index;i++){
        if((cart[i].title).toLowerCase().includes(search_term))
            arr.push(cart[i]);
    }
    // let arr=cart.filter(x=>{
    //     x.title.toLowerCase().includes(search_term);
    // })
    console.log(search_term);
    console.log(arr);
    // console.log(cart);
    let div2_1=document.createElement("div");
    div2_1.style.display="flex";
    div2_1.style.flexWrap="wrap";
    // div2_1.style.width="90%";
    // div2_1.style.alignItems="center";
    // if(arr.length===index){
        document.getElementById("div2").innerHTML="";
        let len=0;
        while(len<arr.length){
            let div2_1=document.createElement("div");
            div2_1.style.display="flex";
            let rem=arr.length-len;
            // console.log(arr.length);
            // console.log(len);
            // console.log(rem);
            // rem=Math.floor(rem/5);
            // console.log(rem);
            let rem_length=(Math.floor(rem/5)>0)?5:rem;
            console.log(rem_length);
            // div2_1.style.flexWrap="wrap";
            for(let idx=len;idx<len+rem_length;idx++){
                let span=document.createElement("span");
                span.style.width="20%";
                // span.style.marginTop="10px";
                span.style.border="1px solid black";
                span.class="span-container";
                let img=document.createElement("img");
                img.src=arr[idx].image;
                img.style.height='200px';
                img.style.alignItems='center';
                let ti=document.createElement("p");
                ti.innerHTML=arr[idx].title;
                let des=document.createElement("p");
                des.innerHTML=arr[idx].description;
                let pr=document.createElement("p");
                pr.innerHTML=arr[idx].price;
                let rat=document.createElement("p");
                rat.innerHTML=arr[idx].rating;
                span.appendChild(img);
                span.appendChild(ti);
                span.appendChild(des);
                span.appendChild(pr);
                span.appendChild(rat);
                div2_1.appendChild(span);
                // div2_1.style.width="400px";
                // div2_1.style.margin="40px";
            }
            len+=5;
            document.getElementById("div2").appendChild(div2_1);
        }
    // }
    // else{
    //     for(let idx=0;idx<arr.length;idx++){
    //         let span=document.createElement("span");
    //         span.style.width="400px";
    //         span.style.border="1px solid black";
    //         span.class="span-container";
    //         let img=document.createElement("img");
    //         img.src=arr[idx].image;
    //         img.style.height='200px';
    //         img.style.alignItems='center';
    //         let ti=document.createElement("p");
    //         ti.innerHTML=arr[idx].title;
    //         let des=document.createElement("p");
    //         des.innerHTML=arr[idx].description;
    //         let pr=document.createElement("p");
    //         pr.innerHTML=arr[idx].price;
    //         let rat=document.createElement("p");
    //         rat.innerHTML=arr[idx].rating;
    //         span.appendChild(img);
    //         span.appendChild(ti);
    //         span.appendChild(des);
    //         span.appendChild(pr);
    //         span.appendChild(rat);
    //         div2_1.appendChild(span);
    //         // div2_1.style.width="400px";
    //         // div2_1.style.margin="40px";
    //     }
    //     document.getElementById("div2").innerHTML="";
    //     document.getElementById("div2").appendChild(div2_1);
    // }
    if(index==cart.length)
        document.getElementById("more").disabled=true;
}

function add(){
    addCards();
    addCards();
}
function addCards(){
    console.log("I am in card");
    let div2_1=document.createElement("div");
    div2_1.style.display="flex";
    // div2_1.style.width="90%";
    // div2_1.style.alignItems="center";
    for(let idx=index;idx<index+5;idx++){
        let span=document.createElement("span");
        span.style.width="400px";
        span.style.border="1px solid black";
        span.class="span-container";
        let img=document.createElement("img");
        img.src=cart[idx].image;
        img.style.height='200px';
        img.style.alignItems='center';
        let ti=document.createElement("p");
        ti.innerHTML=cart[idx].title;
        let des=document.createElement("p");
        des.innerHTML=cart[idx].description;
        let pr=document.createElement("p");
        pr.innerHTML=cart[idx].price;
        let rat=document.createElement("p");
        rat.innerHTML=cart[idx].rating;
        span.appendChild(img);
        span.appendChild(ti);
        span.appendChild(des);
        span.appendChild(pr);
        span.appendChild(rat);
        div2_1.appendChild(span);
        // div2_1.style.width="400px";
        // div2_1.style.margin="40px";
    }
    index+=5;
    if(index==cart.length)
        document.getElementById("more").disabled=true;
    document.getElementById("div2").appendChild(div2_1);
}