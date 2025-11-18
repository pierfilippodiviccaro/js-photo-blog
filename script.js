fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(Response => Response.json())
.then (data =>{
    const container = document.querySelector("conjtainer-2");
    data.forEach(obj => {
        const card = document.querySelector("card")
        const img = document.createElement("img")
        const description= document.createElement("p")
        const title =  document.
        img.src= obj.url;
    });
})