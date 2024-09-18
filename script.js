const shareIcon = document.getElementById("share-icon");
const popup = document.getElementById("share-popup");

shareIcon.addEventListener("click", () => {
  shareIcon.classList.toggle("active");
  popup.classList.toggle("show");
});
