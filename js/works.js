fetch('data/home.json')
.then(response => response.json())
.then(data => running(data))
.catch(error => console.error('Error fetching data:', error))

function running(parameter) {
  const data = parameter.works.allWorks
  const place = document.getElementById("allworks") 

  for(let i = 0; i <= data.length - 1; i++) {
    place.innerHTML += 
    `<div id="${i}" class="clickButton relative aspect-video group overflow-hidden rounded-md">
      <img src="images/${data[i].img}">
      <div class="absolute p-4 flex-col flex bg-black/50 top-full group-hover:top-0 items-start duration-500 justify-end text-white w-full h-full">
        <b>${data[i].title}</b>
        <p>${data[i].category}</p>
      </div>
    </div>`
  }

  const modal = document.getElementById("modal")
  const close = document.querySelector(".close")
  const clickButton = document.querySelectorAll(".clickButton")

  const modalImg = document.querySelector(".modal-img")
  clickButton.forEach(divElement => {
    divElement.addEventListener("click", function() {
      var id = divElement.getAttribute("id")
      modal.classList.toggle("top-20")
      modal.classList.toggle("top-full")
      modalImg.setAttribute("src", `images/${data[id].img}`)
    })
    close.addEventListener("click", ()=> {
      modal.classList.remove("top-20")
      modal.classList.add("top-full")
    })
  })
}
