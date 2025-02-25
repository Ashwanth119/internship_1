async function fetchDataAsync() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("2. Data received!"), 2000);
    });
}

async function main() {
    console.log("1. Fetching data...");
    // try
    //  {  
            let result = await fetchDataAsync(); 
    //  }    
    //   catch(error){
    //       console.log(error)
    //   }
    console.log(result);

    console.log("3. Processing data...");
}

console.log("0. Before calling main()");
await main();
console.log("4. After calling main()");