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

var cardEditLs = document.querySelectorAll('.card-edit');
var modalBg = document.querySelector('.model-bg');
var modalClose = document.querySelector('.modal-close');
var idNote = "";
var titleModal = document.getElementById("titleModal");
var detailsModal = document.getElementById("detailsModal");
var updateButton = document.getElementById("update-button");
// var tagTitleModal = document.getElementById("tagtitle-modal");

cardEditLs.forEach(el => el.addEventListener('click',function() {
  modalBg.classList.add('bg-active');
  let [title, content, id] = el.value.split("&");
  console.log(title);
    titleModal.value = title;
    detailsModal.innerHTML = content;
    updateButton.value = id;
    // tagTitleModal.value = tag
  
}));

modalClose.addEventListener('click', function() {
  modalBg.classList.remove('bg-active');
});