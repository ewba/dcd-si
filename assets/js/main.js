"use strict";

// just some inherited eye-candy that can probably be done via newer css selectors directly
function updatemenu() {
  let el = document.getElementById('menu');
  if (document.getElementById('responsive-menu').checked == true) {
    el.style.borderBottomRightRadius = '0';
    el.style.borderBottomLeftRadius = '0';
  } else {
    el.style.borderRadius = '45px';
  }
}

// avto 1/0,184 (impactco2.fr pa 4,6/1) km na kg, let 1/0,230 km na kg, tgv 341
// odtis slovenca 7,45t https://www.trajnostnaenergija.si/Trajnostna-energija/Ohranite-okolje-%C4%8Disto/Oglji%C4%8Dni-odtis
function carbonify(data) {
  let gb = 0;
  for (let i = 1; i < 4; i++) {
    if (data.get("number-" + i)) {
      let moar = parseInt(data.get("number-" + i))
      if (data.get("enota-" + i) == "mb") moar /= 1024;
      gb += moar;
    }
  }
  console.log(data);
  let co2 = gb; // TODO: izračunaj iz vseh podatkov, upoštevaj enote; preračunaj v KG
  let svn = (co2 / 7450).toPrecision(2).replace(".", ","); // for some reason toLocaleString is a noop
  let km = Math.round(co2 / 0.184);
  return [Math.round(co2), svn, km];
}

function giveFeedback(data, fidx) {
  let notify = document.querySelectorAll("#formConfirm");
  let [co2, svn, km] = carbonify(data);
  notify[fidx].innerHTML = `<strong>Hvala za podatke!</strong>`;
}

window.addEventListener("load", (ev) => {
  // carousel vertical scroll prevention based on Markus Oberlehner's snippet
  let els = document.querySelectorAll(".carousel__navigation, .carousel__prev, .carousel__next");
  for (let el of els) {
    el.addEventListener("click", (event) => {
      const $slide = document.querySelector(event.target.getAttribute('href'));
      if (!$slide) return;

      event.preventDefault();
      $slide.scrollIntoView({ block: "nearest" });
    });
  }

  // email subscription
  let form = document.getElementById("subs");
  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    let data = new FormData(form);
    fetch("https://ebm.si/civi-signup.php", { method: "post", body: data });
  });

  // data submission
  let el = document.getElementById("osub-btn");
  if (el) {
    el.addEventListener("click", () => {
      let fc1 = document.getElementById("posameznik");
      let fc2 = document.getElementById("skupine");
      fc1.style.display = "block";
      fc2.style.display = "none";
    });
  }
  el = document.getElementById("msub-btn");
  if (el) {
    el.addEventListener("click", () => {
      let fc1 = document.getElementById("posameznik");
      let fc2 = document.getElementById("skupine");
      fc1.style.display = "none";
      fc2.style.display = "block";
    });
  }
  let form2 = document.getElementById("oddaj1");
  if (form2) {
    form2.addEventListener("submit", function(ev) {
      ev.preventDefault();
      let data = new FormData(form2);
      fetch("https://ebm.si/p/dcd/subone.php", { method: "post", body: data });
      giveFeedback(data, 0);
      return false;
    });
  }
  let form3 = document.getElementById("oddaj2");
  if (form3) {
    form3.addEventListener("submit", function(ev) {
      ev.preventDefault();
      let data = new FormData(form3);
      fetch("https://ebm.si/p/dcd/submany.php", { method: "post", body: data });
      giveFeedback(data, 1);
      return false;
    });
  }
});

// Light YouTube Embeds based on work by @labnol https://www.labnol.org/
function labnolIframe(div) {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '1');
  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
  div.parentNode.replaceChild(iframe, div);
}
