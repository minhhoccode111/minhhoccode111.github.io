(function () {
  "use strict";

  var chips = Array.prototype.slice.call(document.querySelectorAll("[data-tag]"));
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-tags]"));
  if (!chips.length || !items.length) return;

  var clearBtn = document.querySelector("[data-tag-clear]");
  var active = {};

  function isActive(tag) {
    return Object.prototype.hasOwnProperty.call(active, tag);
  }

  function itemTags(el) {
    return (el.getAttribute("data-tags") || "").split(/\s+/).filter(Boolean);
  }

  function syncUrl() {
    var url = new URL(window.location.href);
    url.search = "";
    Object.keys(active).forEach(function (tag) {
      url.searchParams.append("tag", tag);
    });
    var query = url.searchParams.toString();
    window.history.replaceState(null, "", url.pathname + (query ? "?" + query : "") + url.hash);
  }

  function apply() {
    var hasActive = Object.keys(active).length > 0;

    items.forEach(function (el) {
      var tags = itemTags(el);
      el.hidden = hasActive && !tags.some(isActive);
    });

    chips.forEach(function (chip) {
      var on = isActive(chip.getAttribute("data-tag"));
      chip.classList.toggle("is-active", on);
      chip.setAttribute("aria-pressed", on ? "true" : "false");
    });

    if (clearBtn) clearBtn.hidden = !hasActive;
    syncUrl();
  }

  function toggle(tag) {
    if (isActive(tag)) {
      delete active[tag];
    } else {
      active[tag] = true;
    }
    apply();
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      toggle(chip.getAttribute("data-tag"));
    });
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      active = {};
      apply();
    });
  }

  // Restore filters from the URL (?tag=go&tag=dotnet).
  new URLSearchParams(window.location.search).getAll("tag").forEach(function (tag) {
    active[tag] = true;
  });

  apply();
})();
