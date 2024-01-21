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
