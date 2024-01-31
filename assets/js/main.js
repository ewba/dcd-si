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
  form = document.getElementById("oddaj1");
  if (form) {
    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      let data = new FormData(form);
      fetch("https://ebm.si/p/dcd/subone.php", { method: "post", body: data });
      let notify = document.getElementById("formConfirm");
      notify.innerHTML = "Hvala za podatke!";
    });
  }
  form = document.getElementById("oddaj2");
  if (form) {
    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      let data = new FormData(form);
      fetch("https://ebm.si/p/dcd/submany.php", { method: "post", body: data });
      let notify = document.getElementById("formConfirm");
      notify.innerHTML = "Hvala za podatke!";
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
