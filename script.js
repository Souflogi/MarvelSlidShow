/* Helpers */

/*Toggler */
const TogglePanel = (PanelToToggle, active) => {
  if (active) {
    PanelToToggle.querySelector(".accordion-trigger").setAttribute(
      "aria-expanded",
      "true"
    );
    PanelToToggle.querySelector(".accordion-content").setAttribute(
      "aria-hidden",
      "false"
    );
  } else {
    PanelToToggle.querySelector(".accordion-trigger").setAttribute(
      "aria-expanded",
      "false"
    );
    PanelToToggle.querySelector(".accordion-content").setAttribute(
      "aria-hidden",
      "true"
    );
  }
};

/* Initial Expand */
let CurrentPanel = document.querySelector(".accordion-panel");
TogglePanel(CurrentPanel, true);

/**********Click manager********** */
const accordion = document.querySelector(".accordion");
accordion.addEventListener("click", event => {
  const PanelToActivate = event.target.closest(".accordion-panel");

  if (!PanelToActivate || CurrentPanel === PanelToActivate) return;

  TogglePanel(CurrentPanel, false);

  CurrentPanel = PanelToActivate;

  TogglePanel(PanelToActivate, true);
});

/***********Auto Navigator********* */
const panels = accordion.querySelectorAll(".accordion-panel");
const amountOfPanels = panels.length;

let currentIndex = Array.from(panels).indexOf(CurrentPanel);

const tick = () => {
  if (currentIndex + 1 < amountOfPanels) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  TogglePanel(CurrentPanel, false);
  CurrentPanel = panels[currentIndex];

  TogglePanel(CurrentPanel, true);
};

setInterval(() => {
  tick();
}, 8000);
