// Initialize Feather Icons
feather.replace();

// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

// Hook GSAP into Lenis
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Prevent default hash scroll and use Lenis for smooth anchor clicking
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      lenis.scrollTo(targetElement, { offset: -80 });
      // Close mobile menu if open
      document.getElementById("mobile-menu").classList.remove("menu-open");
      document.body.style.overflow = "auto";
      document
        .getElementById("bar1")
        .classList.remove("translate-y-2", "rotate-45");
      document.getElementById("bar2").classList.remove("opacity-0");
      document
        .getElementById("bar3")
        .classList.remove("-translate-y-2", "-rotate-45");
    }
  });
});

// Navbar Scroll Effect
const header = document.getElementById("navbar");
const navBg = document.getElementById("nav-bg");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("py-2");
    header.classList.remove("py-4");
    navBg.classList.remove("opacity-0");
  } else {
    header.classList.remove("py-2");
    header.classList.add("py-4");
    navBg.classList.add("opacity-0");
  }
});

// Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const b1 = document.getElementById("bar1");
const b2 = document.getElementById("bar2");
const b3 = document.getElementById("bar3");
let isMenuOpen = false;

menuBtn.addEventListener("click", () => {
  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    mobileMenu.classList.add("menu-open");
    document.body.style.overflow = "hidden"; // Prevent scrolling
    // Animate hamburger to X
    b1.classList.add("translate-y-[8px]", "rotate-45");
    b2.classList.add("opacity-0");
    b3.classList.add("-translate-y-[8px]", "-rotate-45");

    // Animate links in
    gsap.fromTo(
      ".mobile-link",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.2,
      },
    );
  } else {
    mobileMenu.classList.remove("menu-open");
    document.body.style.overflow = "auto";
    // Revert hamburger
    b1.classList.remove("translate-y-[8px]", "rotate-45");
    b2.classList.remove("opacity-0");
    b3.classList.remove("-translate-y-[8px]", "-rotate-45");
  }
});

// --- GSAP Animations ---

// Hero Section Entry
gsap.fromTo(
  "#hero-content .reveal-up",
  { y: 50, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    delay: 0.2,
  },
);

// Trust Bar Stagger
gsap.fromTo(
  ".trust-item",
  { y: 20, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: "power2.out",
    delay: 1,
  },
);

function dynamicCards() {
  // 1. Dynamic Data Array
  // Updated propertyData from user's spreadsheet
  const propertyData = [
    {
      id: 1,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Parsuram Bhuman",
      area: "-",
      localityValue: "ambapua",
      localityLabel: "Ambapua",
      tag: "",
      document: "",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://i.pinimg.com/1200x/fa/f5/29/faf5290a1f2065ce161fbc6fb850a245.jpg",
      ],
    },
    {
      id: 2,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Kamla Heights",
      area: "-",
      localityValue: "lanjipalli",
      localityLabel: "Lanjipalli",
      tag: "",
      document: "",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://i.pinimg.com/1200x/a9/dc/c7/a9dcc71224b114cbb965fd649b290750.jpg",
      ],
    },
    {
      id: 3,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Highfield Phase 1",
      area: "-",
      localityValue: "Jagannathpur Junction",
      localityLabel: "Jagannathpur Junction",
      tag: "",
      document: "RAJA RANI HIGHFIELD.pdf",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://i.pinimg.com/1200x/97/8c/f4/978cf4353b59933b2e05b9e7045bb903.jpg",
      ],
    },
    {
      id: 4,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Highfield Phase 2",
      area: "-",
      localityValue: "Jagannathpur Junction",
      localityLabel: "Jagannathpur Junction",
      tag: "",
      document: "FINAL BROCHURE RR HF P2.pdf",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://i.pinimg.com/1200x/de/95/40/de95405566accc421731b9be0ca4c3b6.jpg",
      ],
    },
    {
      id: 5,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Nilayam",
      area: "-",
      localityValue: "ichapuram",
      localityLabel: "Ichapuram",
      tag: "",
      document: "",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://plus.unsplash.com/premium_photo-1674676471380-1258cb31b3ac?q=80&w=1109&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 6,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Silver House",
      area: "-",
      localityValue: "Ghosanuinagan",
      localityLabel: "Ghosanuinagan",
      tag: "",
      document: "RAJA RANI SILVER HOUSE FINAL BROCHURE.pdf",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      ],
    },
    {
      id: 7,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Dwarka Palace",
      area: "-",
      localityValue: "lanjipalli",
      localityLabel: "Lanjipalli",
      tag: "",
      document: "DWARKA-PALACE.pdf",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://plus.unsplash.com/premium_photo-1663126298656-33616be83c32?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 8,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Alaknanda",
      area: "-",
      localityValue: "ambapua",
      localityLabel: "Ambapua",
      tag: "",
      document: "Alakananda.pdf",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 9,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Vasudeva",
      area: "-",
      localityValue: "jagannathpur",
      localityLabel: "Jagannathpur",
      tag: "",
      document: "",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://images.unsplash.com/photo-1680210851377-b7168175ae9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 10,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Ashok Vatika",
      area: "-",
      localityValue: "ambapua",
      localityLabel: "Ambapua",
      tag: "",
      document: "01-FINAL-Ashok-1-2.pdf",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://i.pinimg.com/webp/1200x/99/d3/a5/99d3a5daee69feeb769c8c1ed73b668b.webp",
      ],
    },
    {
      id: 11,
      bhk: "2,3",
      bhkLabel: "2BHK, 3BHK",
      society: "Panchvati",
      area: "-",
      localityValue: "First Gate",
      localityLabel: "First Gate",
      tag: "",
      document: "PANCHAVATI-1.pdf",
      whatsappNumber: "919827965685",
      phoneNumber: "+919827965685",
      images: [
        "https://i.pinimg.com/webp/1200x/ad/28/19/ad2819579cc5928881e1dfef52a46123.webp",
      ],
    },
  ];

  const propertyGrid = document.getElementById("property-grid");
  const localityFilter = document.getElementById("locality-filter");
  const bhkFilter = document.getElementById("bhk-filter");

  // 2. Render Function
  function renderProperties(data) {
    propertyGrid.innerHTML = ""; // Clear current grid

    if (data.length === 0) {
      propertyGrid.innerHTML =
        '<p class="text-maroonLight col-span-full text-center py-8">No properties found matching your criteria.</p>';
      return;
    }

    data.forEach((property) => {
      // Build Image Carousel HTML dynamically
      const imagesHTML = property.images
        .map(
          (img) =>
            `<img src="${img}" class="min-w-full object-cover" alt="View of ${property.society}">`,
        )
        .join("");

      const cardHTML = `
<div class="property-card bg-white overflow-hidden shadow-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 animate-fadeIn">

    <!-- Image Carousel -->
    <div class="relative w-full h-72 overflow-hidden carousel-container group" data-id="${property.id}">
        <div class="carousel-inner flex transition-transform duration-500 ease-in-out h-full">
            ${imagesHTML}
        </div>

        <!-- Nav Buttons -->
        <button class="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#4C0910] p-2 rounded-full opacity-100 transition-opacity prev-btn shadow-lg z-10">
            <i class="fa-solid fa-chevron-left text-sm"></i>
        </button>

        <button class="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#4C0910] p-2 rounded-full opacity-100 transition-opacity next-btn shadow-lg z-10">
            <i class="fa-solid fa-chevron-right text-sm"></i>
        </button>

        <!-- Property Tag -->
    <!-- <div class="absolute top-4 right-4 bg-gradient-to-r from-white to-[#F8F3E8] px-5 py-2 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-[#4C0910] shadow-lg border border-gold/30 z-10 font-serif">
    ${property.tag}
</div> -->
    </div>

    <!-- Info Section -->
 <div class="bg-[#4C0910] text-white px-2 py-2">

    <h3 class="text-xl font-[Poppins] ml-1 font-bold tracking-[0.08em] leading-tight uppercase mb-2 text-[#F8F3E8]">
    ${property.society}
</h3>

    <div class="flex justify-between items-center gap-4 mb-7">

        <p class="text-base font-medium tracking-[0.12em] uppercase text-white/90 flex items-center gap-2">
            <i class="ri-home-4-line text-gold text-xl"></i>
            <span class="font-sans">${property.bhkLabel}</span>
        </p>

    </div>

    <p class="text-sm font-semibold tracking-[0.18em] uppercase flex items-center justify-end gap-2 text-[#F8F3E8]/90">
        <i class="ri-map-pin-2-line text-gold text-lg"></i>
        <span class="font-sans">${property.localityLabel}</span>
    </p>

</div>

    <!-- Action Buttons -->
    <div class="grid grid-cols-3 bg-[#4C0910] border-t border-white/30 text-white uppercase tracking-[0.18em] text-sm font-semibold">

        <!-- Call -->
        <a href="tel:${property.phoneNumber}" 
           class="flex flex-col items-center justify-center py-2 border-r border-white/30 hover:bg-[#D4AF37] transition">
            <i class="ri-phone-line text-lg mb-1"></i>
        </a>

        <!-- WhatsApp -->
        <a href="https://wa.me/${property.whatsappNumber}?text=Hi, I am interested in the ${property.bhkLabel} in ${property.society}" 
           target="_blank"
           class="flex flex-col items-center justify-center py-2 border-r border-white/30 hover:bg-[#D4AF37] transition">
            <i class="fa-brands fa-whatsapp text-lg mb-1"></i>
        </a>

        <!-- Download -->
        <button onclick="openModal('${property.bhkLabel} ${property.society}')"
            class="flex flex-col items-center justify-center py-1 hover:bg-[#D4AF37] transition">
            <i class="ri-download-2-line text-lg mb-1"></i>
        </button>

    </div>
</div>
`;
      propertyGrid.innerHTML += cardHTML;
    });

    // Append CTA as a regular property card so it lines up with other cards
    const ctaHTML = `
<div class="property-card bg-[#4A0414] text-white overflow-hidden shadow-2xl border border-gray-200 transition-all duration-300 hover:-translate-y-2 animate-fadeIn h-full min-h-[420px] md:min-h-full">

    <div class="p-6 flex flex-col justify-between h-full">
      
      <div>
        <h4 class="text-[#D4AF37] text-xs md:text-sm tracking-[0.15em] uppercase mb-3 font-semibold">
          Can't find your perfect home?
        </h4>

        <h2 class="text-[#FDFBF7] text-2xl md:text-3xl font-sans font-medium leading-[1.15]">
          Handpicked homes<br/>added every week.
        </h2>
      </div>

      <div class="mt-6 space-y-4 w-full">
    <button 
  onclick="window.open('https://wa.me/919827965685?text=' + encodeURIComponent('Hi, I want to share my requirements regarding property inquiry.'), '_blank')"
  class="w-full bg-[#FDFBF7] text-[#4A0414] py-3 px-4 flex items-center justify-center gap-3 text-base font-medium transition-transform duration-300 hover:scale-[1.02] shadow-lg">
  Tell us your requirements
</button>

<button 
  onclick="window.open('https://wa.me/919827965685?text=' + encodeURIComponent('Hi, I need loan assistance for property purchase.'), '_blank')"
  class="w-full border border-[#D4AF37] text-[#FDFBF7] py-3 px-4 flex items-center justify-center gap-3 text-base font-medium transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#4A0414]">
  Get loan assistance
</button>
      </div>

    </div>
</div>
`;
    propertyGrid.innerHTML += ctaHTML;

    initializeCarousels(); // Attach events to newly generated carousels
  }

  // 3. Filter Logic
  function filterData() {
    const selectedLocality = localityFilter.value;
    const selectedBHK = bhkFilter.value;

    const filteredData = propertyData.filter((property) => {
      const propLoc = (property.localityValue || "").toString().toLowerCase();
      const selLoc = (selectedLocality || "").toString().toLowerCase();
      const matchLocality = selectedLocality === "all" || propLoc === selLoc;

      // handle BHK filter when property.bhk can be a comma-separated string like "2,3"
      if (selectedBHK === "all") {
        return matchLocality;
      }

      const propBhks = (property.bhk || "")
        .toString()
        .split(/[ ,]+/)
        .map((s) => s.trim());
      const matchBHK = propBhks.includes(selectedBHK);

      return matchLocality && matchBHK;
    });

    renderProperties(filteredData);
  }

  localityFilter.addEventListener("change", filterData);
  bhkFilter.addEventListener("change", filterData);

  // 4. Carousel Initialization (Called after rendering)
  function initializeCarousels() {
    document.querySelectorAll(".carousel-container").forEach((container) => {
      const inner = container.querySelector(".carousel-inner");
      const prevBtn = container.querySelector(".prev-btn");
      const nextBtn = container.querySelector(".next-btn");
      const imagesCount = inner.querySelectorAll("img").length;
      let currentIndex = 0;

      function updateCarousel() {
        inner.style.transform = `translateX(-${currentIndex * 100}%)`;
      }

      nextBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent accidental selection
        currentIndex = (currentIndex + 1) % imagesCount;
        updateCarousel();
      });

      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + imagesCount) % imagesCount;
        updateCarousel();
      });

      // Touch Swipe Support for Mobile
      let touchStartX = 0;
      let touchEndX = 0;

      container.addEventListener(
        "touchstart",
        (e) => {
          touchStartX = e.changedTouches[0].screenX;
        },
        { passive: true },
      );
      container.addEventListener(
        "touchend",
        (e) => {
          touchEndX = e.changedTouches[0].screenX;
          if (touchEndX < touchStartX - 30) nextBtn.click(); // Swipe Left
          if (touchEndX > touchStartX + 30) prevBtn.click(); // Swipe Right
        },
        { passive: true },
      );

      // --- Autoplay (auto-swipe) ---
      const AUTOPLAY_DELAY = 3500; // ms

      // Clear any existing autoplay (in case of re-initialization)
      if (container._autoplay) {
        clearInterval(container._autoplay);
      }

      function startAutoplay() {
        if (imagesCount <= 1) return;
        // safety: clear before setting
        if (container._autoplay) clearInterval(container._autoplay);
        container._autoplay = setInterval(() => {
          currentIndex = (currentIndex + 1) % imagesCount;
          updateCarousel();
        }, AUTOPLAY_DELAY);
      }

      function stopAutoplay() {
        if (container._autoplay) {
          clearInterval(container._autoplay);
          container._autoplay = null;
        }
      }

      // Pause on hover / focus, resume on leave
      container.addEventListener("mouseenter", stopAutoplay);
      container.addEventListener("mouseleave", startAutoplay);
      container.addEventListener("focusin", stopAutoplay);
      container.addEventListener("focusout", startAutoplay);

      // Start autoplay
      startAutoplay();
    });
  }

  // 5. Modal Logic
  const modal = document.getElementById("brochureModal");
  const modalContent = document.getElementById("modalContent");
  const titleSpan = document.getElementById("modalPropertyTitle");

  window.openModal = function (propertyName) {
    // Attached to window to be accessible from inline onclick
    titleSpan.textContent = propertyName;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    setTimeout(() => {
      modal.classList.remove("opacity-0");
      modalContent.classList.remove("scale-95");
    }, 10);
  };

  window.closeModal = function () {
    modal.classList.add("opacity-0");
    modalContent.classList.add("scale-95");
    setTimeout(() => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      document.getElementById("brochureForm").reset();
    }, 300);
  };

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // WhatsApp target number (with country code, no plus)
  const TARGET_WHATSAPP = "919827965685";

  // Map property names to brochure filenames in /doc/
  function getPdfForProperty(propertyName) {
    const name = (propertyName || "").toLowerCase();

    // Prefer explicit `document` field on propertyData if available
    for (const p of propertyData) {
      const soc = (p.society || "").toLowerCase();
      if (soc && name.includes(soc)) {
        if (p.document && p.document.trim() !== "") return p.document;
      }
    }

    // Fallback mapping by keywords
    const mapping = [
      ["panchvati", "PANCHAVATI-1.pdf"],
      ["dwarka", "DWARKA-PALACE.pdf"],
      ["alak", "Alakananda.pdf"],
      ["alakan", "Alakananda.pdf"],
      ["highfield", "RAJA RANI HIGHFIELD.pdf"],
      ["silver", "RAJA RANI SILVER HOUSE FINAL BROCHURE.pdf"],
      ["paradise", "PARADISE FINAL BROCHURE.pdf"],
      ["ashok", "01-FINAL-Ashok-1-2.pdf"],
    ];
    for (const [key, file] of mapping) {
      if (name.includes(key)) return file;
    }

    // fallback to a default brochure if no match
    return "01-FINAL-Ashok-1-2.pdf";
  }

  window.handleDownload = function (e) {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML =
      '<svg class="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...';

    // Read form values
    const name = document.getElementById("brochureName").value.trim();
    const phone = document.getElementById("brochurePhone").value.trim();
    const email = document.getElementById("brochureEmail").value.trim();
    const property = titleSpan.textContent || "";
    // Find the property object and check for an explicit document
    const propLower = property.toLowerCase();
    const matched = propertyData.find((p) =>
      propLower.includes((p.society || "").toLowerCase()),
    );

    if (matched && matched.document && matched.document.trim() !== "") {
      // Build WhatsApp message and open WhatsApp (web or app)
      const textMessage = `Brochure request for ${property}\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`;
      const waUrl = `https://wa.me/${TARGET_WHATSAPP}?text=${encodeURIComponent(textMessage)}`;
      window.open(waUrl, "_blank");

      // Trigger brochure download from doc/ folder using the explicit document
      const pdfFile = matched.document;
      const link = document.createElement("a");
      link.href = `doc/${encodeURIComponent(pdfFile)}`;
      link.download = pdfFile;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        btn.innerHTML = originalText;
        closeModal();
      }, 800);
    } else {
      // No explicit document found: do not auto-open WhatsApp
      setTimeout(() => {
        btn.innerHTML = originalText;
        closeModal();
      }, 300);
    }
  };

  // Initial Render on page load
  renderProperties(propertyData);
}

function footerAnimation() {
  document.addEventListener("DOMContentLoaded", () => {
    // 1. Scroll-triggered Fade In Animation
    const animatedElements = document.querySelectorAll(".footer-anim");

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2,
    };

    const footerObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach((el) => {
      footerObserver.observe(el);
    });

    // 2. Parallax Effect for the Giant 'APEX' Text
    const giantText = document.getElementById("giant-apex-text");

    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      if (scrollPosition + windowHeight >= documentHeight - 800) {
        const moveValue =
          (documentHeight - (scrollPosition + windowHeight)) * 0.15;
        giantText.style.transform = `translateY(${moveValue}px)`;
      }
    });
  });
}

dynamicCards();
footerAnimation();
