import imagesLoaded from "imagesloaded";

imagesLoaded(document.body, () => {
  document.body.classList.remove("loading");
  init();
});
