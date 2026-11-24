const menuButton = document.querySelector("#open-menu");
const menu = document.querySelector("#site-menu");
const panel = document.querySelector("#info-panel");
const panelTitle = document.querySelector("#panel-title");
const panelText = document.querySelector("#panel-text");
const panelPackaging = document.querySelector("#panel-packaging");
const aboutPanel = document.querySelector("#about-panel");
const aboutStory = aboutPanel.querySelector(".about-story");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const catalogMenu = document.querySelector("#menu-catalog");
const menuSections = menu.querySelectorAll(".menu-disclosure");

const content = {
  "new-arrivals": {
    title: "New Arrivals",
    text: "New arrivals will appear here as collections are released."
  },
  "try-on": {
    title: "Virtual Try-On",
    text: "Camera-based try-on is in development."
  },
  "delivery-times": {
    title: "Delivery Times",
    text: "Delivery time depends on your destination and shipping method. It starts when your order is dispatched."
  },
  "production-times": {
    title: "Production Times",
    text: "Each garment is made to order. The time needed to make it depends on the design and the options you choose, and is separate from delivery time."
  },
  packaging: {
    title: "Packaging",
    text: "Our packaging concept pairs a matte GYREX box with tissue paper around the garment."
  },
  support: {
    title: "Customer Support Centre",
    text: "Support contact details will be published here."
  },
  faq: {
    title: "General FAQ",
    text: "Answers about sizing, availability and orders will be added as the store develops."
  },
  contacts: {
    title: "Contact Us",
    text: "GYREX contact details will be posted here."
  },
  shipping: {
    title: "Shipping & Delivery",
    text: "Delivery options and rates will be listed when online ordering is available."
  },
  "order-tracking": {
    title: "Order tracking",
    text: "Order tracking will be available when online ordering opens."
  },
  returns: {
    title: "Returns & Refunds / Withdrawal",
    text: "Return, refund and withdrawal information will be published before online orders open."
  },
  "product-care": {
    title: "Product care",
    text: "Follow the care label on your garment for washing, drying and storage instructions."
  },
  stores: {
    title: "Find a store",
    text: "Store information will be posted here."
  },
  "gift-cards": {
    title: "Gift cards",
    text: "GYREX gift cards are not available yet."
  },
  resale: {
    title: "Resale",
    text: "GYREX does not currently offer a resale service."
  },
  app: {
    title: "Get the App",
    text: "You can browse GYREX collections on this website."
  },
  athletes: {
    title: "Athletes & Ambassadors",
    text: "Athlete and ambassador collaborations will be announced here."
  },
  sustainability: {
    title: "Sustainability",
    text: "Materials and care information will be shared as products are released."
  },
  careers: {
    title: "Careers",
    text: "Open roles will be posted here."
  },
  newsroom: {
    title: "Newsroom",
    text: "Updates about the brand and its collections will be published here."
  }
};

let returnFocusTo;

function openMenu() {
  if (!menu.open) {
    menu.showModal();
  }
}

menuButton.addEventListener("click", openMenu);

menuSections.forEach((section) => {
  section.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") {
      section.open = true;
    }
  });

  section.addEventListener("pointerleave", (event) => {
    if (event.pointerType === "mouse" && !section.matches(":has(:focus-visible)")) {
      section.open = false;
    }
  });
});

menu.addEventListener("close", () => {
  menuSections.forEach((section) => {
    section.open = false;
  });
});

catalogMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const destination = document.getElementById(link.hash.slice(1));
    menu.close();
    destination.focus({ preventScroll: true });

    if (!reducedMotion.matches) {
      destination.querySelectorAll("img").forEach((photo) => {
        photo.animate(
          [{ transform: "scale(1)" }, { transform: "scale(1.06)" }, { transform: "scale(1)" }],
          { duration: 520, easing: "ease-in-out" }
        );
      });
    }
  });
});

document.querySelectorAll("[data-panel]").forEach((button) => {
  button.addEventListener("click", () => {
    const panelName = button.dataset.panel;
    const fromMenu = menu.open;
    returnFocusTo = fromMenu ? menuButton : button;

    if (fromMenu) {
      menu.close();
    }

    if (panelName === "about") {
      aboutPanel.showModal();
      aboutStory.scrollTop = 0;
      return;
    }

    const item = content[panelName];
    panel.classList.toggle("from-menu", fromMenu);
    panelTitle.textContent = gyrexLanguage.t(`panel.${panelName}.title`, item.title);
    panelText.textContent = gyrexLanguage.t(`panel.${panelName}.text`, item.text);
    panelPackaging.hidden = panelName !== "packaging";
    panel.showModal();
  });
});

[panel, aboutPanel].forEach((dialog) => {
  dialog.addEventListener("close", () => returnFocusTo?.focus());
});

const aboutVideo = aboutStory.querySelector(".about-video");
let aboutVideoVisible = false;

function syncAboutPlayback() {
  if (!aboutPanel.open || !aboutVideoVisible || reducedMotion.matches) {
    aboutVideo.pause();
    return;
  }

  aboutVideo.play().catch(() => {
    // Keep the poster visible if the browser blocks autoplay.
  });
}

const aboutVisibility = new IntersectionObserver(([entry]) => {
  aboutVideoVisible = entry.intersectionRatio >= 0.25;
  syncAboutPlayback();
}, { root: aboutStory, threshold: 0.25 });
aboutVisibility.observe(aboutVideo);
aboutPanel.addEventListener("close", syncAboutPlayback);
reducedMotion.addEventListener("change", syncAboutPlayback);

const featureCarousel = document.querySelector(".feature-carousel");
const featureStage = featureCarousel.querySelector(".feature-stage");
const featureSlides = [...featureStage.querySelectorAll(".feature-slide")];
const featureDots = [...featureCarousel.querySelectorAll(".feature-pagination button")];
const featureStatus = featureCarousel.querySelector("#feature-status");
const featureDisclosure = featureCarousel.closest("details");
let featureIndex = 0;
let featureInView = false;

function syncFeaturePlayback() {
  const video = featureSlides[featureIndex].querySelector("video");
  if (!video) {
    return;
  }

  if (!featureDisclosure.open || !featureInView || reducedMotion.matches) {
    video.pause();
    return;
  }

  video.play().catch(() => {
    // Keep the poster visible if the browser blocks autoplay.
  });
}

const featureVisibility = new IntersectionObserver(([entry]) => {
  featureInView = entry.intersectionRatio >= 0.25;
  syncFeaturePlayback();
}, { threshold: 0.25 });
featureVisibility.observe(featureStage);
featureDisclosure.addEventListener("toggle", syncFeaturePlayback);
reducedMotion.addEventListener("change", syncFeaturePlayback);

function announceFeatureSlide() {
  featureStatus.textContent = gyrexLanguage.t("home.featurePosition", "Slide {current} of {total}")
    .replace("{current}", featureIndex + 1)
    .replace("{total}", featureSlides.length);
}

function localizeFeatureCarousel() {
  const slideLabel = gyrexLanguage.t("home.featureSlide", "Slide");
  featureDots.forEach((dot, index) => {
    dot.setAttribute("aria-label", slideLabel + " " + (index + 1));
  });
  announceFeatureSlide();
}

function showFeatureSlide(index) {
  const count = featureSlides.length;
  const next = (index + count) % count;
  if (next === featureIndex) {
    return;
  }

  featureSlides[featureIndex].querySelector("video")?.pause();
  featureSlides[featureIndex].hidden = true;
  featureDots[featureIndex].removeAttribute("aria-current");
  featureStage.dataset.direction = index > featureIndex ? "next" : "previous";
  featureIndex = next;
  featureSlides[featureIndex].hidden = false;
  featureDots[featureIndex].setAttribute("aria-current", "true");
  announceFeatureSlide();
  syncFeaturePlayback();
}

featureDots.forEach((dot, index) => {
  dot.addEventListener("click", () => showFeatureSlide(index));
});

featureCarousel.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
    return;
  }

  event.preventDefault();
  showFeatureSlide(featureIndex + (event.key === "ArrowRight" ? 1 : -1));
});

let swipeStart;
featureStage.addEventListener("pointerdown", (event) => {
  if (!event.isPrimary || event.button !== 0) {
    return;
  }

  swipeStart = { id: event.pointerId, x: event.clientX, y: event.clientY };
  featureStage.setPointerCapture(event.pointerId);
});

featureStage.addEventListener("pointerup", (event) => {
  if (swipeStart?.id !== event.pointerId) {
    return;
  }

  const horizontal = event.clientX - swipeStart.x;
  const vertical = event.clientY - swipeStart.y;
  swipeStart = undefined;
  if (Math.abs(horizontal) >= 42 && Math.abs(horizontal) > Math.abs(vertical) * 1.25) {
    showFeatureSlide(featureIndex + Math.sign(horizontal));
  }
});

featureStage.addEventListener("lostpointercapture", (event) => {
  if (swipeStart?.id === event.pointerId) {
    swipeStart = undefined;
  }
});

let lastWheelTime = -Infinity;
let wheelDistance = 0;
let wheelMoved = false;
featureStage.addEventListener("wheel", (event) => {
  if (event.ctrlKey || Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
    return;
  }

  event.preventDefault();
  // Treat the momentum events that follow a trackpad gesture as part of that swipe.
  if (event.timeStamp - lastWheelTime > 180) {
    wheelDistance = 0;
    wheelMoved = false;
  }
  lastWheelTime = event.timeStamp;
  if (wheelMoved) {
    return;
  }

  const multiplier = event.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16
    : event.deltaMode === WheelEvent.DOM_DELTA_PAGE ? featureStage.clientWidth : 1;
  wheelDistance += event.deltaX * multiplier;
  if (Math.abs(wheelDistance) >= 48) {
    showFeatureSlide(featureIndex + Math.sign(wheelDistance));
    wheelMoved = true;
  }
}, { passive: false });

document.addEventListener("gyrex-languagechange", localizeFeatureCarousel);
localizeFeatureCarousel();

const photoViewer = document.querySelector("#photo-viewer");
const expandedPhoto = new Image();
photoViewer.append(expandedPhoto);

document.querySelectorAll(".photo-mosaic figure > img").forEach((photo) => {
  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "photo-trigger";
  trigger.setAttribute("aria-haspopup", "dialog");
  trigger.setAttribute("aria-controls", photoViewer.id);
  photo.before(trigger);
  trigger.append(photo);

  trigger.addEventListener("click", () => {
    expandedPhoto.alt = photo.alt;
    expandedPhoto.src = photo.src;
    photoViewer.showModal();
  });
});

const accountPanel = document.querySelector("#account-panel");
const accountForm = document.querySelector("#account-form");
const accountEmail = accountForm.querySelector('input[type="email"]');
const accountPassword = accountForm.querySelector('input[type="password"]');
const accountSubmit = document.querySelector("#account-submit");
const accountStatus = document.querySelector("#account-status");
const accountOptions = document.querySelectorAll("[data-account-mode]");

for (const field of [accountEmail, accountPassword]) {
  field.addEventListener("click", (event) => {
    if (event.detail > 0) {
      field.classList.add("is-pointer-focused");
    }
  });
  field.addEventListener("blur", () => field.classList.remove("is-pointer-focused"));
}

let registering = false;
let accountSubmitted = false;

function updateAccountText() {
  accountSubmit.textContent = registering
    ? gyrexLanguage.t("account.register", "Create account")
    : gyrexLanguage.t("account.signIn", "Sign in");
  accountStatus.textContent = accountSubmitted
    ? gyrexLanguage.t("account.submitted", "Accounts will be available after the server integration.")
    : gyrexLanguage.t("account.status", "Account services are not connected yet.");
}

document.addEventListener("gyrex-languagechange", () => {
  accountEmail.setCustomValidity("");
  accountPassword.setCustomValidity("");
  updateAccountText();
});
updateAccountText();

document.querySelectorAll('[aria-controls="account-panel"]').forEach((button) => {
  button.addEventListener("click", () => accountPanel.showModal());
});

accountOptions.forEach((button) => {
  button.addEventListener("click", () => {
    registering = button.dataset.accountMode === "register";
    accountSubmitted = false;

    accountOptions.forEach((option) => {
      option.setAttribute("aria-pressed", String(option === button));
    });

    accountPassword.value = "";
    accountPassword.autocomplete = registering ? "new-password" : "current-password";
    accountPassword.setCustomValidity("");
    updateAccountText();
  });
});

accountForm.addEventListener("invalid", (event) => {
  const field = event.target;
  if (field.validity.valueMissing) {
    const message = field === accountEmail
      ? gyrexLanguage.t("account.emailRequired", "Enter your email address.")
      : gyrexLanguage.t("account.passwordRequired", "Enter your password.");
    field.setCustomValidity(message);
  } else if (field.validity.typeMismatch) {
    field.setCustomValidity(gyrexLanguage.t("account.emailInvalid", "Enter a valid email address."));
  }
}, true);

accountForm.addEventListener("input", (event) => event.target.setCustomValidity(""));

accountForm.addEventListener("submit", (event) => {
  event.preventDefault();
  accountPassword.value = "";
  accountSubmitted = true;
  updateAccountText();
});

accountPanel.addEventListener("close", () => {
  accountPassword.value = "";
  accountEmail.setCustomValidity("");
  accountPassword.setCustomValidity("");
});
