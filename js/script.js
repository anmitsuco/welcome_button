document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".mousikomi_link");
  const container = document.querySelector(".mousikomi-container");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    // 表示されているかどうかの判定
    const isShown = container.classList.contains("show");

    if (isShown) {
      container.classList.remove("show");
    } else {
      container.classList.add("show");

      const containerHeight = container.offsetHeight;
      window.scrollBy({
        top: containerHeight - 80,
        behavior: "smooth"
      });
    }
  });
});

