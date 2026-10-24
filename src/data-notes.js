(function () {
  const modal = document.getElementById("data-notes-modal");
  const openBtn = document.getElementById("data-notes-open");
  const closeBtn = document.getElementById("data-notes-close");
  if (!modal || !openBtn) return;

  const tabs = modal.querySelectorAll("[data-notes-tab]");
  const panels = modal.querySelectorAll("[data-notes-panel]");

  function showTab(name) {
    tabs.forEach((t) => {
      const on = t.dataset.notesTab === name;
      t.classList.toggle("active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
    });
    panels.forEach((p) => p.classList.toggle("active", p.dataset.notesPanel === name));
    modal.querySelector(".notes-body").scrollTop = 0;
  }

  function open() {
    modal.hidden = false;
    document.body.classList.add("notes-open");
    closeBtn.focus();
  }

  function close() {
    modal.hidden = true;
    document.body.classList.remove("notes-open");
    openBtn.focus();
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });
  tabs.forEach((t) => t.addEventListener("click", () => showTab(t.dataset.notesTab)));
})();
