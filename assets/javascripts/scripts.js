document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const overlay = document.querySelector(".overlay");
    const nav = document.querySelector(".nav");
    const burgerNav = document.getElementById("mobile-nav-header");
    let lastScrollTop = 0;
  
    document.addEventListener("click", (event) => {
      if (event.target.closest(".burger") || event.target.closest(".menu-item")) {
        // Toggle burger open state
        burger.classList.toggle("open");
  
        // Toggle overlay visibility
        if (overlay.style.display === "block") {
          overlay.style.display = "none";
          document.body.style.overflow = "auto"; // Re-enable scrolling
        } else {
          overlay.style.display = "block";
          document.body.style.overflow = "hidden"; // Disable scrolling
        }
  
        // Toggle navigation classes
        nav.classList.toggle("navactive");
        nav.classList.toggle("navhidden");
      }
  
      // If clicking on the back button
      if (event.target.closest(".back")) {
        window.location.href = "https://www.chadmdanford.com";
      }
    });

  
    // Scroll function, runs only if overlay is not active
    window.addEventListener("scroll", () => {
      if (overlay.style.display === "block") return; // Skip scroll handling if overlay is active
  
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        // User scrolled down - hide navigation
        burgerNav.classList.add("hidden");
      } else {
        // User scrolled up - show navigation
        burgerNav.classList.remove("hidden");
      }
  
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll values
    });
  });
  