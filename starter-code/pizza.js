// Write your Pizza Builder JavaScript in this file.

// Constants
var basePrice = 10;
var ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function($pep) {
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    } else {
      $pep.style.visibility = "hidden";
    }
  });
}
// Iteration 1: set the visibility of `<section class="mushroom">`
function renderMushrooms() {
  document.querySelectorAll(".mushroom").forEach($mushrooms => {
    if (state.mushrooms) {
      $mushrooms.style.visibility = "visible";
    } else {
      $mushrooms.style.visibility = "hidden";
    }
  });
}
// Iteration 1: set the visibility of `<section class="green-pepper">`
function renderGreenPeppers() {
  document.querySelectorAll(".green-pepper").forEach($peppers => {
    if (state.greenPeppers) {
      $peppers.style.visibility = "visible";
    } else {
      $peppers.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function(sauce) {
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white");
    } else {
      sauce.classList.remove("sauce-white");
    }
  });
}
// Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
function renderGlutenFreeCrust() {
  document.querySelectorAll(".cheese").forEach(function(crust) {
    if (state.glutenFreeCrust) {
      crust.classList.add("crust");
    } else {
      crust.classList.remove("crust");
    }
  });
}

// Iteration 3: add/remove the class "active" of each `<button class="btn">`
function renderButtons() {
  const pepperoni = document.querySelector(".btn.btn-pepperonni");

  if (!state.pepperonni) {
    pepperoni.classList.add("active");
  } else {
    pepperoni.classList.remove("active");
  }

  const mushrooms = document.querySelector(".btn.btn-mushrooms");

  if (!state.mushrooms) {
    mushrooms.classList.add("active");
  } else {
    mushrooms.classList.remove("active");
  }

  const greenPep = document.querySelector(".btn.btn-green-peppers");

  if (!state.greenPeppers) {
    greenPep.classList.add("active");
  } else {
    greenPep.classList.remove("active");
  }

  const whiteSauce = document.querySelector(".btn.btn-sauce");

  if (!state.whiteSauce) {
    whiteSauce.classList.add("active");
  } else {
    whiteSauce.classList.remove("active");
  }

  const crust = document.querySelector(".btn.btn-crust");

  if (!state.glutenFreeCrust) {
    crust.classList.add("active");
  } else {
    crust.classList.remove("active");
  }
}

// Iteration 4: change the HTML of `<aside class="panel price">`

function renderPrice() {
  let finalPrice = 10;
  let list = document.querySelector("aside.panel.price ul");
  const price = document.querySelector("aside.panel.price strong");
  list.innerHTML = "";

  for (let key in ingredients) {
    if (state[key]) {
      list.innerHTML = `<li> + $${ingredients[key].price} ${ingredients[key].name}</li>`;

      finalPrice += ingredients[key].price;
    }

    price.innerText = `$${finalPrice}`;
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function() {
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function() {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function() {
  state.greenPeppers = !state.greenPeppers;

  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function() {
  state.whiteSauce = !state.whiteSauce;

  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`

document.querySelectorAll(".btn-btn-crust").onclick = function() {
  state.crust = !state.crust;
};
