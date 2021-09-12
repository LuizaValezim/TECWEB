var modal = document.getElementById("modal");
var btns = document.getElementsByClassName("card-edit-button");
var spans = document.getElementsByClassName("close");
var noteId = "";
var modalTitle = document.getElementById("modal-title");
var modalContent = document.getElementById("modal-content");
var modalUpdateButton = document.getElementById("modal-update-button");

for (let btn of btns) {
  btn.onclick = () => {
    let [title, content, id] = btn.value.split("&");

    modal.style.display = "block";
    modalTitle.innerHTML = title;
    modalContent.innerHTML = content;
    noteId = id;
  }
}

for (let span of spans) {
  span.onclick = () => {
    modal.style.display = "none";
  }
}

modalUpdateButton.onclick = () => {
  modalUpdateButton.setAttribute("value", `id=${noteId}&title=${modalTitle.value}&content=${modalContent.value}`);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", function () {
  let textareas = document.getElementsByClassName("autoresize");
  for (let i = 0; i < textareas.length; i++) {
    let textarea = textareas[i];
    function autoResize() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    }

    textarea.addEventListener("input", autoResize, false);
  }

  let cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.className += ` card-color-${getRandomInt(
      1,
      5
    )} card-rotation-${getRandomInt(1, 11)}`;
  }
});