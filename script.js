const ul = document.querySelector('ul')

fetch("http://localhost:3002")

.then(result=> result.json())
.then(data=> {
    
   
    data.forEach(element => {
        const para = element
        
        const mama=JSON.stringify(para)
        console.log(mama)
    let li=document.createElement('li');
    li.innerText= mama;
    ul. appendChild(li);
    console.log(data)

    
    })  
});












// fetch("http://localhost:3002/")
// .then(resul=>resul.json()
// .then(data=>{
    
//     const para = data
//     const mama=JSON.stringify(para)
//     const misma = document.getElementById('h1').innerHTML=mama

//     const mira = ()=>{
       
//         const misma = mama.join()
//         console.log(mira)

//     }

   
   
    
  


   

    
    
//     console.log(typeof mama)
//     console.log(mama)
   
// }))
   










// const h1 = document.getElementById('h1')

// fetch("http://localhost:3000/")
// .then(resul=>resul.json()
// .then(data=>{
//     console.log(data)
//     data.prueba = JSON.stringify(data)
//     h1.innerText=data

    
       
// }))



  
    
     
    







    