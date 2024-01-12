function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  /*  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }*/

  //tag img
  const img = document.querySelector("#profile img")
  //substituir img
  if (html.classList.contains("light")) {
    //cond. com light mode, add a img light
    img.setAttribute("src", "./assets/avatar-light1.png")
  } else {
    //cond. sem light mode, keep img normal
    img.setAttribute("src", "./assets/avatar22.png")
  }
  const Text = document.querySelector("#profile")
  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "Foto de Henrique Franco sério, com camisa verde e casaco jeans, com barba"
    )
  } else {
    img.setAttribute(
      "alt",
      "Foto de Henrique Franco sério, com headphones, mão apoiada na cabeça e barba"
    )
  }
}
