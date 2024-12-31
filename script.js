document.addEventListener("DOMContentLoaded", () => {
  const interface = document.getElementById("relodelogo");

  // Fade out the interface after 2 seconds
  setTimeout(() => {
      interface.classList.add("hidden");
  }, 1000); // Adjust the delay as needed
});

document.addEventListener("DOMContentLoaded", () => {
  const interface = document.getElementById("relode");

  // Disable scrolling
  document.body.style.overflow = "hidden";

  // Fade out the interface after 2 seconds
  setTimeout(() => {
      interface.classList.add("hidden");

      // Enable scrolling
      document.body.style.overflow = "auto";
  }, 2000); // Adjust the delay as needed
});

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

// Create the scroll-based animation for the logo
gsap.timeline({
  scrollTrigger: {
      trigger: ".logo-container", // Element to track
      start: "top center", // When the top of the element hits the center of the viewport
      end: "bottom top", // When the bottom of the element leaves the viewport
      scrub: true, // Smooth animation tied to scroll
      markers: false, // Set to true for debug markers
  },
})
.fromTo(
  ".logo-container",
  { scale: 0.5, opacity: 1 }, // Initial state
  { scale: 1.5, opacity: 1, duration: 1 } // Scale up and fade in
)
.to(
  ".logo-container",
  { scale: 2, opacity: 0, duration: 1 } // Scale up further and fade out
);

// Create the scroll-based animation for the welcome text
gsap.timeline({
  scrollTrigger: {
      trigger: "#welcome", // Element to track
      start: "top bottom", // When the top of the element hits the bottom of the viewport
      end: "bottom top", // When the bottom of the element leaves the viewport
      scrub: true, // Smooth animation tied to scroll
      markers: false, // Set to true for debug markers
      onEnter: () => document.getElementById("welcome").classList.add("visible"),
      onLeaveBack: () => document.getElementById("welcome").classList.remove("visible"),
  },
})
.fromTo(
  "#welcome",
  { scale: 0.5, opacity: 0, duration: 0 }, // Initial state
  { scale: 1, opacity: 1, duration: 1 } // Scale up and fade in
)
.to(
  "#welcome",
  { scale: 1.5, opacity: 0, duration: 1 } // Scale up further and fade out
);

function sendMail(){
  let parms = {
      name : document.getElementById("name").value,
      email : document.getElementById("Email").value,
      subject : document.getElementById("subject").value,
      message : document.getElementById("msg").value,
  }

  emailjs.send("service_ah787y9", "template_05nuzfd",parms);
}
