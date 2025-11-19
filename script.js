const immagineOverlay= document.querySelector(".immagine-overlay")
const grid = document.getElementById("post-grid")
const overlay = document.querySelector('.overlay')
const chiudere = document.querySelector('.chiudi')

axios.get("https://lanciweb.github.io/demo/api/pictures/")
.then((resp) => {
    console.log('creating cards');
    
    const array = resp.data
    let postStr = "";
    array.forEach((curPost) => {
        postStr += `
        <div class="card" data-immagine="${curPost.url}">
        <img src="./img/pin.svg" alt="" class="puntina"> 
        <img src="${curPost.url}" alt="" class="immagine">
        <p>${curPost.date}</p>
        <h2>${curPost.title}</h2>
        </div>`
    })
    grid.innerHTML = postStr
    
    console.log('searching card');
    
    const cards = document.querySelectorAll('.card')

        cards.forEach(card => {
            card.addEventListener('click', function (event) {
                overlay.classList.remove('d-none') 
             immagineOverlay.src = card.dataset.immagine;
                chiudere.addEventListener('click',function(event){
                 event.preventDefault;
                 overlay.classList.add("d-none")
                })
                
                
                

            })

        })

    })







