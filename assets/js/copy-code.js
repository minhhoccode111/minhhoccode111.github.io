(function () {
  "use strict";

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        resolve();
      } catch (err) {
        reject(err);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  function addButton(block) {
    var code = block.querySelector("code");
    if (!code) return;

    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "copy-code";
    btn.textContent = "Copy";
    btn.setAttribute("aria-label", "Copy code to clipboard");

    btn.addEventListener("click", function () {
      var text = (code.textContent || "").replace(/\n$/, "");
      copyText(text)
        .then(function () {
          btn.textContent = "Copied!";
          btn.setAttribute("data-copied", "true");
          window.setTimeout(function () {
            btn.textContent = "Copy";
            btn.removeAttribute("data-copied");
          }, 1500);
        })
        .catch(function () {
          btn.textContent = "Failed";
          window.setTimeout(function () {
            btn.textContent = "Copy";
          }, 1500);
        });
    });

    block.appendChild(btn);
  }

  function init() {
    document.querySelectorAll(".highlight").forEach(addButton);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
