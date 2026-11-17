(function () {
  document.documentElement.classList.add("js");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var nodes = document.querySelectorAll(".reveal");
  var root = document.documentElement;

  if (!reduce && "IntersectionObserver" in window) {
    var pending = [];
    nodes.forEach(function (node) {
      var rect = node.getBoundingClientRect();
      if (rect.bottom > 0 && rect.top < window.innerHeight) {
        node.classList.add("is-in");
      } else {
        pending.push(node);
      }
    });
    root.classList.add("can-reveal");
    if (pending.length) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px", threshold: 0.12 }
      );
      pending.forEach(function (node) {
        observer.observe(node);
      });
    }
  }

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  document.querySelectorAll(".faq details").forEach(function (details) {
    if (location.hash && details.id === location.hash.slice(1)) details.open = true;
  });

  if (!reduce) {
    document.querySelectorAll(".faq details").forEach(function (details) {
      var summary = details.querySelector("summary");
      var panel = details.querySelector(".faq-panel");
      if (!summary || !panel) return;
      if (details.open) panel.style.height = "auto";
      summary.addEventListener("click", function (event) {
        event.preventDefault();
        var open = details.open;
        if (open) {
          panel.style.height = panel.scrollHeight + "px";
          requestAnimationFrame(function () {
            panel.style.height = "0px";
          });
          var closeDone = function (ev) {
            if (ev.propertyName !== "height") return;
            details.open = false;
            panel.style.height = "";
            panel.removeEventListener("transitionend", closeDone);
          };
          panel.addEventListener("transitionend", closeDone);
        } else {
          details.open = true;
          panel.style.height = "0px";
          var end = panel.scrollHeight;
          requestAnimationFrame(function () {
            panel.style.height = end + "px";
          });
          var openDone = function (ev) {
            if (ev.propertyName !== "height") return;
            panel.style.height = "auto";
            panel.removeEventListener("transitionend", openDone);
          };
          panel.addEventListener("transitionend", openDone);
        }
      });
    });
  }

  var tabs = document.querySelector("[data-tabs]");
  if (tabs) {
    var tabButtons = Array.prototype.slice.call(tabs.querySelectorAll('[role="tab"]'));
    var panels = Array.prototype.slice.call(tabs.querySelectorAll('[role="tabpanel"]'));
    function selectTab(next, focus) {
      tabButtons.forEach(function (button) {
        var on = button === next;
        button.setAttribute("aria-selected", on ? "true" : "false");
        button.tabIndex = on ? 0 : -1;
        var panel = document.getElementById(button.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
      if (focus) next.focus();
    }
    panels.forEach(function (panel, index) {
      panel.hidden = index !== 0;
    });
    tabButtons.forEach(function (button, index) {
      button.tabIndex = index === 0 ? 0 : -1;
      button.addEventListener("click", function () {
        selectTab(button, false);
      });
      button.addEventListener("keydown", function (event) {
        var key = event.key;
        var nextIndex = index;
        if (key === "ArrowRight" || key === "ArrowDown") nextIndex = (index + 1) % tabButtons.length;
        else if (key === "ArrowLeft" || key === "ArrowUp") nextIndex = (index - 1 + tabButtons.length) % tabButtons.length;
        else if (key === "Home") nextIndex = 0;
        else if (key === "End") nextIndex = tabButtons.length - 1;
        else return;
        event.preventDefault();
        selectTab(tabButtons[nextIndex], true);
      });
    });
  }

  var banner = document.getElementById("founding-banner");
  if (banner && !root.classList.contains("offer-dismissed")) {
    document.body.classList.add("has-offer-banner");
    var dismiss = banner.querySelector(".offer-dismiss");
    function dismissBanner() {
      try {
        localStorage.setItem("rr-founding-dismissed", "1");
      } catch (err) {}
      root.classList.add("offer-dismissed");
      banner.hidden = true;
      document.body.classList.remove("has-offer-banner");
      var cta = document.querySelector(".hero-actions .button");
      if (cta) cta.focus();
    }
    if (dismiss) dismiss.addEventListener("click", dismissBanner);
    banner.addEventListener("keydown", function (event) {
      if (event.key === "Escape") dismissBanner();
    });
  } else if (banner) {
    banner.hidden = true;
  }

  if (!header) return;
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(!header.classList.contains("is-open"));
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && header.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", function (event) {
    if (!header.classList.contains("is-open")) return;
    if (header.contains(event.target)) return;
    setOpen(false);
  });

  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });
})();
