window.setTimeout(function(){

    let choice = prompt("Enter your choice first");
    let product = [];

    while(choice !== 'quit'){
         if(choice === 'new'){
            let add = prompt("Enter new todo");
            product.push(add);
            console.log(`${add} added to the list`)
         }
         else if(choice === 'list'){
             console.log("*****************");
             for(let i=0;i<product.length;i++){
                 console.log(`${i}: "${product[i]}`);
             }
             console.log("******************");
         }
         else if(choice === 'delete'){
             let num = parseInt(prompt("Enter index number to delete"));
             if(!Number.isNaN(num)){
                let deleted = product.splice(num, 1);
                console.log(`OK, ${deleted} deleted`);
             }
             else{
                 console.log("Wrong input");
             }
             
         }

         choice = prompt("Enter your choice first");
    }
    
    console.log("OK, YOU QUIT THE APP");

}, 1000)
