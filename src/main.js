document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");
    const isCurrentlyHidden = answer.classList.contains("hidden");

    document.querySelectorAll(".faq-item").forEach((otherItem) => {
      otherItem.querySelector(".faq-answer").classList.add("hidden");
      otherItem.querySelector(".faq-icon").classList.remove("rotate-45");
    });

    if (isCurrentlyHidden) {
      answer.classList.remove("hidden");
      icon.classList.add("rotate-45");
    }
  });
});
