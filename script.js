// 1. Apparition en douceur des blocs quand on arrive dessus
var blocks = document.querySelectorAll(".card, .skills > div, .intro, h2, .button");
var revealObserver = new IntersectionObserver(function (entries) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.classList.add("visible");
      revealObserver.unobserve(entries[i].target);
    }
  }
}, { threshold: 0.15 });

for (var i = 0; i < blocks.length; i++) {
  blocks[i].classList.add("reveal");
  revealObserver.observe(blocks[i]);
}

// 2. Le lien du menu correspondant à la section visible est mis en surbrillance
var links = document.querySelectorAll("nav a");
var sections = document.querySelectorAll("section");

var navObserver = new IntersectionObserver(function (entries) {
  for (var i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      for (var j = 0; j < links.length; j++) {
        var cible = links[j].getAttribute("href") === "#" + entries[i].target.id;
        links[j].classList.toggle("active", cible);
        if (cible) {
          links[j].scrollIntoView({ block: "nearest", inline: "center" });
        }
      }
    }
  }
}, { rootMargin: "-40% 0px -55% 0px" });

for (var k = 0; k < sections.length; k++) {
  navObserver.observe(sections[k]);
}
