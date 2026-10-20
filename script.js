// Navigation entre les 6 sections, avec transition directionnelle
var links = document.querySelectorAll("nav a");
var panels = document.querySelectorAll(".panel");

function showSection() {
  // l'identifiant vient de l'URL (#engineering, #career...), par défaut : welcome
  var id = window.location.hash.replace("#", "") || "welcome";
  var current = 0;

  for (var i = 0; i < panels.length; i++) {
    if (panels[i].id === id) {
      current = i;
    }
  }

  for (var j = 0; j < panels.length; j++) {
    // la section affichée est "active", celles qui la précèdent sont "before"
    panels[j].classList.toggle("active", j === current);
    panels[j].classList.toggle("before", j < current);
    panels[j].setAttribute("aria-hidden", j !== current);

    links[j].classList.toggle("active", j === current);
    if (j === current) {
      links[j].setAttribute("aria-current", "page");
    } else {
      links[j].removeAttribute("aria-current");
    }
  }

  panels[current].scrollTop = 0;
}

window.addEventListener("hashchange", showSection);
showSection();
