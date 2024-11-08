const text = `\nYOUR SMARTEST VIRTUAL ASSISTANT, ALWAYS READY TO HELP!\nMAKING CONVERSATIONS EFFORTLESS, \nINFORMATIVE, AND ENGAGING.`;

const heroText = document.getElementById("hero-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    const purpleWords = ["E c h o I Q", "ASSISTANT", "EFFORTLESS", "ENGAGING"];

    let wordMatch = text.substring(index).match(/^\w+/);
    if (wordMatch && purpleWords.includes(wordMatch[0])) {
      heroText.innerHTML += `<span style="color: #9370DB;">${wordMatch[0]}</span>`;
      index += wordMatch[0].length;
    } else {
      heroText.innerHTML +=
        text.charAt(index) === "\n" ? "<br>" : text.charAt(index);
      index++;
    }
    setTimeout(typeText, 100);
  }
}

window.onload = typeText;

function toggleMenu() {
  const navbarLinks = document.getElementById("navbar-links");
  navbarLinks.classList.toggle("show");
}
