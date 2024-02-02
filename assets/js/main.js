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
// avto 183,65 g/km https://kazalci.arso.gov.si/sl/content/izpusti-co2-iz-novih-vseh-osebnih-vozil-1?tid=95
// mleko 0,7 kg/kg https://kazalci.arso.gov.si/sl/content/intenzivnost-izpustov-tgp-pri-prireji-mleka-govejega-mesa?tid=96
// odtis slovenca 6t v 2022 https://ourworldindata.org/co2-and-greenhouse-gas-emissions
function carbonify(data) {
  let gb = 0.0;
  for (let i = 1; i < 4; i++) {
    if (data.get("number-" + i)) {
      let moar = parseFloat(data.get("number-" + i))
      if (data.get("enota-" + i) == "mb") moar /= 1024;
      gb += moar;
    }
  }
  let co2 = gb * 209.5; // v gramih, LDI FR
  let svn = (co2 / 1000 / 0.7 / 1.03).toFixed(1).replace(".", ","); // for some reason toLocaleString is a noop
  let km = Math.round(co2 / 183.65);
  return [Math.round(co2), svn, km];
}

function giveFeedback(data, fidx) {
  let notify = document.querySelectorAll("#formConfirm");
  let [co2, svn, km] = carbonify(data);
  if (co2 < 250) {
    notify[fidx].innerHTML = `<strong>Hvala za podatke!</strong> Približen odtis izbrisanih podatkov je <strong>${co2}g CO<sub>2</sub>eq na leto</strong>.`;
  } else {
    notify[fidx].innerHTML = `<strong>Hvala za podatke!</strong> Približen odtis izbrisanih podatkov je <strong>${co2}g CO<sub>2</sub>eq na leto</strong>, kar si lahko predstavljate kot ${km} km prevoženih z avtom ali pa pridelavo ${svn} litrov mleka.`;
  }

  // temporarily disable button
  let subbtn = document.querySelectorAll('button[type="submit"]')[fidx];
  subbtn.toggleAttribute("disabled");
  setTimeout(() => {
    subbtn.toggleAttribute("disabled");
  }, 3000);
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
    // temporarily disable button
    let subbtn = form.querySelectorAll('button[type="submit"]')[0];
    subbtn.toggleAttribute("disabled");
    setTimeout(() => {
      subbtn.toggleAttribute("disabled");
    }, 3000);
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
