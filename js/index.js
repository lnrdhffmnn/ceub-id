const Index = {
  elements: {
    /** @type {HTMLDialogElement} */
    dialog: document.querySelector("dialog"),

    /** @type {NodeListOf<HTMLElement>} */
    settingsBtn: document.querySelectorAll(".btn-dialog-open"),

    /** @type {NodeListOf<HTMLButtonElement>} */
    btnDialogClose: document.querySelectorAll(".btn-dialog-close"),

    /** @type {HTMLFormElement} */
    formSettings: document.querySelector("#form-settings"),

    /** @type {HTMLInputElement} */
    inputRa: document.querySelector('input[name="ra"]'),

    /** @type {HTMLParagraphElement} */
    pRa: document.querySelector("#ra"),

    /** @type {HTMLDivElement} */
    divQrcode: document.querySelector("#qrcode"),
  },

  globals: {
    localStorageKey: "ceub-id",
    ra: "",
  },

  init() {
    Index.addServiceWorker();
    Index.loadRa();
    Index.events();
  },

  events() {
    Index.elements.settingsBtn.forEach(btn => {
      btn.addEventListener("click", () => {
        Index.toggleDialog(true);
      });
    });

    Index.elements.btnDialogClose.forEach(btn => {
      btn.addEventListener("click", () => {
        Index.toggleDialog(false);
      });
    });

    Index.elements.formSettings.addEventListener(
      "submit",
      Index.handleSettingsFormSubmit
    );
  },

  addServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/service-worker.js", { scope: "/" });
    }
  },

  /** @param {boolean} open */
  toggleDialog(open) {
    if (open) {
      Index.loadRa();
      Index.elements.dialog.showModal();
    } else {
      Index.elements.formSettings.reset();
      Index.elements.dialog.close();
    }
  },

  /** @param {SubmitEvent} event */
  handleSettingsFormSubmit(event) {
    event.preventDefault();

    /** @type {HTMLFormElement} */
    const form = event.target;
    const formData = new FormData(form);

    const ra = formData.get("ra").toString();

    try {
      Index.saveRa(ra);
      Index.toggleDialog(false);
    } catch (/** @type {Error} */ error) {
      alert(error.message);
    }
  },

  loadRa() {
    Index.globals.ra =
      localStorage.getItem(Index.globals.localStorageKey) ?? "";

    Index.elements.inputRa.placeholder = Index.globals.ra;
    Index.elements.inputRa.value = Index.globals.ra;

    Index.updateApp();
  },

  /** @param {string} ra */
  saveRa(ra) {
    const raRegex = /^(\d{8})?$/;

    if (!raRegex.test(ra)) {
      throw new Error("Formato inválido");
    }

    localStorage.setItem(Index.globals.localStorageKey, ra);
    Index.loadRa();
    Index.updateApp();
  },

  updateApp() {
    const { ra } = Index.globals;
    const { divQrcode } = Index.elements;

    Index.elements.pRa.innerHTML = ra;

    if (ra.length) {
      divQrcode.innerHTML = "";
      const qr = new QRCode(divQrcode);
      qr.makeCode(ra);
      divQrcode.querySelector("img").draggable = false;
    } else {
      divQrcode.innerHTML = "";

      const span1 = document.createElement("span");
      span1.innerHTML = "Você precisa";

      const anchor = document.createElement("a");
      anchor.innerHTML = "preencher";
      anchor.classList.add("btn-dialog-open");
      anchor.addEventListener("click", () => {
        Index.toggleDialog(true);
      });

      const span2 = document.createElement("span");
      span2.innerHTML = "seus dados.";

      divQrcode.appendChild(span1);
      divQrcode.appendChild(anchor);
      divQrcode.appendChild(span2);
    }
  },
};

Index.init();
