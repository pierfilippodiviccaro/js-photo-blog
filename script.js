 fetch("https://lanciweb.github.io/demo/api/pictures/")
 .then(Response => Response.json())
 .then (data =>{
     const container = document.querySelector("conjtainer-2");
     data.forEach(obj => {
        
         const img = document.createElement("img")
         img.src= obj.url;
        
         const description= document.createElement("p");
                  description.innerText= obj.date
        
  const title= document.createElement("h2")
         title.innerText=obj.title
        
         card.appendChild(img);
        card.appendChild(description);
         card.appendChild(title);
         container.appendChild(card)
     });
 })

