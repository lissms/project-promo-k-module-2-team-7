"use strict";

/* const icons = document.querySelectorAll(".js-icons");
const name = document.querySelector(".js-name");
const borderTitle = document.querySelector(".js-title"); */

//////////////////////////////////////////////////////////////

/*PASO 1- pinto mi paleta en html */

/* me hago un array */
const palette = ["green", "red", "random"];

/* Localizo donde voy a pintar mi codigo en el HTML y hago un querySelector */
const paletteColors = document.querySelector(".js-palettes");

/* PASO 2 - pinto la tarjeta */

/* Localizo donde voy a pintar mi codigo en el HTML y hago un querySelector */
const card = document.querySelector(".main__photo");

// Painter function
const paintPalettes = () => {
  for (let i = 0; i < palette.length; i++) {
    /* este codigo lo quiero repetido, lo meto dentro de for con += para q no se sobreesciba */
    paletteColors.innerHTML += `<div class="design__palette-color">
  <input id=${palette[i]} class="palettes js-palette" type="radio" name="palette" value="palette-1" />
  <span class="box-color ${palette[i]}__1"></span> 
  <span class="box-color ${palette[i]}__2"></span>
  <span class="box-color ${palette[i]}__3"></span>
  </div>
  `;
  }
};

const paintCard = (color) => {
  card.innerHTML = "";
  card.innerHTML = `<div class="main__photo--title js-title js-title-${color}">
<h4 class="name js-name js-name-${color}">Nombre apellido</h4>
<p class="description js-description js-role">Front-end developer</p>
</div>
<div class="main__photo--photo">
<div
  class="profile__image js__profile-image"
  style="background-image: url(https://via.placeholder.com/300x300/cccccc/666666/?text=IMAGE)"
></div>
</div>
<div class="main__photo--social">
<a href="" class="js-icon-phone js-telephone" target="_blank" title="Teléfono"
  ><i class="icons js-icons js-icons-${color} fas fa-mobile-alt"></i
></a>
<a href="" class="js-icon-mail js-email" target="_blank" title="Email"
  ><i class="icons js-icons js-icons-${color} far fa-envelope"></i
></a>
<a href="" class="js-icon-linkedin js-linkedin" target="_blank" title="Linkedin"
  ><i class="icons js-icons js-icons-${color} fab fa-linkedin-in"></i
></a>
<a href="" class="js-icon-github js-github" target="_blank" title="Github"
  ><i class="icons js-icons js-icons-${color} fab fa-github-alt"></i
></a>
</div>`;
};

// Paint elements
paintPalettes();
paintCard("random");

const radioButtonList = document.querySelectorAll(".js-palette");

// Listen events
for (let i = 0; i < radioButtonList.length; i++) {
  radioButtonList[i].addEventListener("click", handleRadioButtonCLick);
}

function handleRadioButtonCLick(event) {
  console.log("palette Id", event.target.id);
  paintCard(event.target.id);
}

////////////////////////////////////////////////////////////
/* palette1.addEventListener("click", function () {
  name.classList.add("js-name-green");
  name.classList.remove("js-name-red");
  name.classList.remove("js-name-random");
  borderTitle.classList.add("js-title-green");
  borderTitle.classList.remove("js-title-red");
  borderTitle.classList.remove("js-title-random");
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("js-icons-green");
    icons[i].classList.remove("js-icons-red");
    icons[i].classList.remove("js-icons-random");
  }
});
palette2.addEventListener("click", function () {
  name.classList.add("js-name-red");
  name.classList.remove("js-name-random");
  name.classList.remove("js-name-green");
  borderTitle.classList.add("js-title-red");
  borderTitle.classList.remove("js-title-random");
  borderTitle.classList.remove("js-title-green");
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("js-icons-red");
    icons[i].classList.remove("js-icons-random");
    icons[i].classList.remove("js-icons-green");
  }
});
palette3.addEventListener("click", function () {
  name.classList.add("js-name-random");
  name.classList.remove("js-name-red");
  name.classList.remove("js-name-green");
  borderTitle.classList.add("js-title-random");
  borderTitle.classList.remove("js-title-red");
  borderTitle.classList.remove("js-title-green");
  for (let i = 0; i < icons.length; i++) {
    icons[i].classList.add("js-icons-random");
    icons[i].classList.remove("js-icons-red");
    icons[i].classList.remove("js-icons-green");
  }
});
 */
