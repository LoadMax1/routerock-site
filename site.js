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
        { rootMargin: "0px", threshold: 0 }
      );
      pending.forEach(function (node) {
        observer.observe(node);
      });
    }
  }

  var demoForm = document.getElementById("demo-form");
  if (demoForm) {
    demoForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var fields = [
        { id: "demo-name", label: "Name", required: true },
        { id: "demo-company", label: "Company", required: true },
        { id: "demo-email", label: "Email", required: true, email: true },
        { id: "demo-phone", label: "Phone", phone: true },
        { id: "demo-trucks", label: "Trucks in fleet", trucks: true },
        { id: "demo-message", label: "Message" }
      ];
      var firstInvalid = null;
      var values = {};
      fields.forEach(function (field) {
        var input = document.getElementById(field.id);
        var error = document.getElementById(field.id + "-error");
        var value = input.value.trim();
        var message = "";
        if (field.required && !value) message = field.label + " is required.";
        else if (field.email && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) message = "Enter an email address.";
        else if (field.phone && value && value.replace(/\D/g, "").length < 7) message = "Enter a phone number with at least 7 digits, or leave it blank.";
        else if (field.trucks && value && !/^\d{1,5}$/.test(value)) message = "Enter the number of trucks as a whole number, or leave it blank.";
        input.setAttribute("aria-invalid", message ? "true" : "false");
        error.hidden = !message;
        error.textContent = message;
        if (message && !firstInvalid) firstInvalid = input;
        values[field.id] = value;
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }
      var body = [
        "I'd like to book a RouteRock demo.",
        "",
        "Name: " + values["demo-name"],
        "Company: " + values["demo-company"],
        "Email: " + values["demo-email"],
        "Phone: " + (values["demo-phone"] || "(not given)"),
        "Trucks in fleet: " + (values["demo-trucks"] || "(not given)"),
        "Message: " + (values["demo-message"] || "(not given)")
      ].join("\n");
      var href = "mailto:loadmaxlog@gmail.com?subject=" + encodeURIComponent("RouteRock demo request") + "&body=" + encodeURIComponent(body);
      if (typeof window.routeRockOpenMail === "function") window.routeRockOpenMail(href);
      else window.location.href = href;
    });
  }

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!header || !toggle || !nav) return;

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
