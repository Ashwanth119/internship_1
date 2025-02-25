let xhr = new XMLHttpRequest();
xhr.onload = function () {
    const data = JSON.parse(this.responseText);
    console.log(data.products);
    // document.getElementById("div1").innerHTML=this.response;
}
xhr.open("GET", "https://dummyjson.com/products");
xhr.send();