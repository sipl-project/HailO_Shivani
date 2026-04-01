// Simple animation on scroll
window.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".card");

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;

    if (position < window.innerHeight - 50) {
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }
  });
});
function showApp(appId) {

  // remove active from all detail cards
  document.querySelectorAll(".detail-card")
    .forEach(card => card.classList.remove("active"));

  // remove active from icons
  document.querySelectorAll(".icon-card")
    .forEach(icon => icon.classList.remove("active"));

  // show selected
  document.getElementById(appId).classList.add("active");

  // highlight clicked icon
  event.currentTarget.classList.add("active");
}


function toggleAccordion(element) {

  const content = element.nextElementSibling;

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}



function selectCard(el){
  document.querySelectorAll(".platform-card")
    .forEach(c=>c.classList.remove("active"));
  el.classList.add("active");
}

function showUser(id){
  document.querySelectorAll(".user-content")
    .forEach(c=>c.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}
