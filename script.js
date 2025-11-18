const grid = document.getElementById("post-grid")


axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then((resp)=>{
    const array = resp.data
    let postStr="";
    array.forEach((curPost)=>{
    postStr += `<div class="card">
                 <img src="./img/pin.svg" alt="" class="pin"> 
                <img src="${curPost.url}" alt="" class="immagine">
                <p>${curPost.date}</p>
                <h2>${curPost.title}</h2>
            </div>`
    })
     grid.innerHTML = postStr
})


