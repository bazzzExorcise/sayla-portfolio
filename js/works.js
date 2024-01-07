fetch('data/home.json')
.then(response => response.json())
.then(data => running(data))
.catch(error => console.error('Error fetching data:', error))

function running(parameter) {
  const catt = parameter.Category
  const data = parameter.works.allWorks
  const place = document.getElementById("allworks") 
  const cattCont = document.querySelector(".catt-container")
  unSorted()
  for (let i = 0; i <= catt.length - 1; i++) {
    cattCont.innerHTML += 
    `
    <button vall="${catt[i]}" class="catt-button border border-sy1 text-sm border-2 rounded-full px-4 duration-300 hover:bg-sy1 py-2">${catt[i]}</button>
    `
  }
  const cattButton = document.querySelectorAll(".catt-button")
  cattButton.forEach(data => {
    data.addEventListener("click", function() {
      var att = this.getAttribute("vall")
      this.classList.add("bg-sy1")
      data.classList.remove("bg-sy1")
      place.innerHTML = ""
      if(att == "" || att == "all works") {
        unSorted()
      }else{
        sortWork(att)
      }
    })
  });

  function unSorted() {
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
  }

  function sortWork(att) {
    var sort = att
    for(let i = 0; i <= data.length - 1; i++) {
      if(data[i].category == sort){
        place.innerHTML += 
        `<div id="${i}" class="clickButton relative aspect-video group overflow-hidden rounded-md">
          <img src="images/${data[i].img}">
          <div class="absolute p-4 flex-col flex bg-black/50 top-full group-hover:top-0 items-start duration-500 justify-end text-white w-full h-full">
            <b>${data[i].title}</b>
            <p>${data[i].category}</p>
          </div>
        </div>`
      }
    }
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
