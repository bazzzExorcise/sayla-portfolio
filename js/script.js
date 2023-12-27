fetch('data/home.json')
.then(response => response.json())
.then(data => running(data))
.catch(error => console.error('Error fetching data:', error))

function running(parameter) {
  const data = parameter
  console.log(data)
  document.querySelector('.logo').innerHTML = data.header.logo

  landingPage(data.landingPage)
  skill(data.skills)
  worksList(data.works)

  const aboutMe = document.querySelector('.aboutMe')
  const Education = document.querySelector('.Education')
  const Achivments = document.querySelector('.Achivments')

  aboutMe.innerHTML = data.aboutMe
  Education.innerHTML = data.Education
  Achivments.innerHTML = data.Achivments
}

function landingPage(parameter) {
  const data = parameter
  const button = document.querySelector('.buttonText')
  const title = document.querySelector('.title')
  const description = document.querySelector('.textDescription')

  title.innerHTML = data.title
  description.innerHTML = data.text
  button.innerHTML = data.buttonText
}

function skill(parameter) {
  const data = parameter
  const img = document.querySelector(".img-skill")
  const text = document.querySelector(".skill-text")

  img.setAttribute('src', data.image)
  text.innerHTML = data.text
}

function worksList(parameter) {
  const data = parameter
  const text = document.querySelector('.text-work')
  const highlight = document.querySelector('.highlight')

  var hg = data.highlight
  for(let i = 0; i <= hg.length - 1; i++) {
    var img = document.createElement("img")
    img.setAttribute('class', 'w-full aspect-video border shadow rounded bg-gradient-to-b object-cover from-grd1 to-grd2')
    img.setAttribute('id', i);
    img.setAttribute('src', hg[i])
    console.log(hg[i]);
    highlight.appendChild(img)
  }

  text.innerHTML = data.text
}