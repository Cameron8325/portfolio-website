function toggleNavbar() {
  let menuLinks = document.getElementById("active");
  let links = document.querySelectorAll(".armed"); // Select all elements with class "armed"
  if (menuLinks.style.display === "flex") {
    menuLinks.style.animationName = "slideOut"; // Apply reverse animation
    links.forEach(link => {
      link.style.animationName = "fadeOut"; // Apply fadeOut animation to each link
    });
    setTimeout(() => {
      menuLinks.style.display = "none";
    }, 400); // Adjust timing to match animation duration
  } else {
    menuLinks.style.animationName = "slideIn"; // Apply regular animation
    links.forEach(link => {
      link.style.animationName = "fadeIn"; // Apply fadeIn animation to each link
    });
    menuLinks.style.display = "flex";
  }
}
