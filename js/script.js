document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".mousikomi_link");
  const container = document.querySelector(".mousikomi-container");

  button.addEventListener("click", function (e) {
    e.preventDefault();

    // 表示されているかどうかの判定
    const isShown = container.classList.contains("show");

    if (isShown) {
      // 非表示にする
      container.classList.remove("show");
      setTimeout(() => {
        container.style.display = "none";
      }, 300); // アニメーションがある場合は少し待つ
    } else {
      // 表示にする
      container.style.display = "block";
      setTimeout(() => {
        container.classList.add("show");
      }, 10);

      const containerHeight = container.offsetHeight;
      window.scrollBy({
        top: containerHeight - 100,
        behavior: "smooth"
      });
    }
  });
});

