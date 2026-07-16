// document.querySelectorAll(".group.cursor-pointer").forEach((card) => {
//   card.addEventListener("click", () => {
//     const link = card.querySelector(".project-link");
//     if (link) {
//       const destination = link.getAttribute("href");
//       if (destination !== "#") {
//         window.location.href = destination;
//       } else {
//         console.log(
//           `Navigating to project: ${card.querySelector("h4").innerText}`,
//         );
//       }
//     }
//   });
// });

document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();

    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    answer.classList.toggle("hidden");
    icon.classList.toggle("rotate-45");
  });
});
