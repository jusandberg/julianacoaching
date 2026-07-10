const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    document.body.classList.toggle("nav-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "x" : "+";
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navLinks.classList.remove("open");
      document.body.classList.remove("nav-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "+";
    }
  });
}

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const prev = carousel.querySelector("[data-carousel-prev]");
  const next = carousel.querySelector("[data-carousel-next]");
  const dots = Array.from(carousel.querySelectorAll(".carousel-dot"));
  const count = carousel.querySelector("[data-carousel-count]");
  const progress = carousel.querySelector("[data-carousel-progress]");

  if (!track) return;

  const slides = Array.from(track.children);

  const currentIndex = () => {
    const center = track.scrollLeft + track.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Infinity;

    slides.forEach((slide, index) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(center - slideCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  };

  const updateCarouselState = () => {
    const index = currentIndex();
    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === index);
    });
    if (count) {
      count.textContent = `${index + 1} / ${slides.length}`;
    }
    if (progress) {
      progress.style.width = `${((index + 1) / slides.length) * 100}%`;
    }
    if (prev) {
      prev.disabled = index === 0;
    }
    if (next) {
      next.disabled = index === slides.length - 1;
    }
  };

  const goTo = (direction) => {
    const index = Math.min(Math.max(currentIndex() + direction, 0), slides.length - 1);
    const slide = slides[index];
    if (slide) {
      track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
  };

  prev?.addEventListener("click", () => goTo(-1));
  next?.addEventListener("click", () => goTo(1));
  track.addEventListener("scroll", () => window.requestAnimationFrame(updateCarouselState), { passive: true });
  track.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goTo(-1);
    if (event.key === "ArrowRight") goTo(1);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      const slide = slides[index];
      if (slide) {
        track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
      }
    });
  });

  let autoTimer;
  const canAutoPlay = () => window.matchMedia("(min-width: 761px)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const stopAutoPlay = () => {
    if (autoTimer) window.clearInterval(autoTimer);
  };
  const startAutoPlay = () => {
    stopAutoPlay();
    if (!canAutoPlay()) return;
    autoTimer = window.setInterval(() => {
      const index = currentIndex();
      const nextIndex = index >= slides.length - 1 ? 0 : index + 1;
      const slide = slides[nextIndex];
      if (slide) {
        track.scrollTo({ left: slide.offsetLeft - track.offsetLeft, behavior: "smooth" });
      }
    }, 5200);
  };

  carousel.addEventListener("mouseenter", stopAutoPlay);
  carousel.addEventListener("mouseleave", startAutoPlay);
  carousel.addEventListener("focusin", stopAutoPlay);
  carousel.addEventListener("focusout", startAutoPlay);
  track.addEventListener("pointerdown", stopAutoPlay);
  track.addEventListener("pointerup", startAutoPlay);
  window.addEventListener("resize", startAutoPlay);

  updateCarouselState();
  startAutoPlay();
});

document.querySelectorAll("[data-coaching-picker]").forEach((picker) => {
  const options = Array.from(picker.querySelectorAll("[data-support-option]"));
  const title = picker.querySelector("[data-support-title]");
  const copy = picker.querySelector("[data-support-copy]");

  const selectOption = (option) => {
    options.forEach((item) => {
      const isActive = item === option;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    if (title) title.textContent = option.dataset.title || option.textContent || "";
    if (copy) copy.textContent = option.dataset.copy || "";
    option.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  };

  options.forEach((option) => {
    option.addEventListener("click", () => selectOption(option));
  });
});

document.querySelectorAll("[data-story-tabs]").forEach((tabs) => {
  const options = Array.from(tabs.querySelectorAll("[data-story-tab]"));
  const copy = tabs.querySelector("[data-story-copy]");

  const selectOption = (option) => {
    options.forEach((item) => {
      const isActive = item === option;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    if (copy) copy.textContent = option.dataset.copy || "";
    option.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  };

  options.forEach((option) => {
    option.addEventListener("click", () => selectOption(option));
  });
});

const archetypes = {
  witness: {
    title: "The Witness",
    copy: "The Witness holds presence and gentle awareness. It sees without judgment, creating the quiet safety where transformation begins. With curiosity and compassion, it allows us to meet ourselves fully.",
    icon: '<svg viewBox="0 0 64 44"><path d="M6 10l8 6 9-6 9 6 9-6 9 6 8-6"/><path d="M6 22l8 6 9-6 9 6 9-6 9 6 8-6"/><path d="M6 34l8 6 9-6 9 6 9-6 9 6 8-6"/></svg>'
  },
  guide: {
    title: "The Inner Guide",
    copy: "The Inner Guide speaks through intuition and stillness. It leads us through the descent and rise, reminding us that the answers we seek are already within. Wisdom unfolds when we learn to listen inward.",
    icon: '<svg viewBox="0 0 64 44"><circle cx="32" cy="22" r="5"/><circle cx="32" cy="22" r="11"/><circle cx="32" cy="22" r="17"/></svg>'
  },
  explorer: {
    title: "The Explorer",
    copy: "The Explorer moves with courage and wonder. It trusts the unknown and finds freedom in the unfolding. Through curiosity, it carries us along the U-shaped journey of becoming.",
    icon: '<svg viewBox="0 0 64 44"><path d="M20 40l12-8 12 8"/><path d="M20 28l12-8 12 8"/><path d="M20 16l12-8 12 8"/></svg>'
  }
};

document.querySelectorAll("[data-arch-tabs]").forEach((widget) => {
  const tabs = Array.from(widget.querySelectorAll(".arch-tab"));
  const title = widget.querySelector("[data-arch-panel-title]");
  const copy = widget.querySelector("[data-arch-panel-copy]");
  const icon = widget.querySelector("[data-arch-panel-icon]");
  const textWrap = widget.querySelector(".arch-panel-text");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const data = archetypes[tab.dataset.arch];
      if (!data || tab.classList.contains("active")) return;

      tabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle("active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      textWrap?.classList.add("swapping");
      icon?.classList.add("swapping");

      window.setTimeout(() => {
        if (title) title.textContent = data.title;
        if (copy) copy.textContent = data.copy;
        if (icon) icon.innerHTML = data.icon;
        textWrap?.classList.remove("swapping");
        icon?.classList.remove("swapping");
      }, 180);
    });
  });
});

document.querySelectorAll("[data-arch-accordion]").forEach((widget) => {
  const items = Array.from(widget.querySelectorAll(".arch-acc-item"));

  items.forEach((item) => {
    const head = item.querySelector(".arch-acc-head");
    if (!head) return;

    head.addEventListener("click", () => {
      if (item.classList.contains("open")) return;

      items.forEach((current) => {
        const isOpen = current === item;
        current.classList.toggle("open", isOpen);
        current.querySelector(".arch-acc-head")?.setAttribute("aria-expanded", String(isOpen));
      });
    });
  });
});
