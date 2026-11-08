(function () {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  if (mobileBtn && mobileMenu && menuIcon) {
    mobileBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      menuIcon.textContent = isOpen ? "close" : "menu";
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuIcon.textContent = "menu";
      });
    });
  }

  const dispatchForm = document.getElementById("dispatch-form");
  const dispatchAck = document.getElementById("dispatch-ack");

  if (dispatchForm && dispatchAck) {
    dispatchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      dispatchForm.hidden = true;
      dispatchAck.hidden = false;
    });
  }

  const teamData = {
    "aris-thorne": {
      specBadge: "DOSSIER // SPEC-01.AT",
      monogram: "01.AT",
      role: "CO-FOUNDER & LEAD SYSTEMS",
      name: "Aris Thorne",
      callsign: "DISCIPLINE: COMPUTATIONAL",
      experience: "14+ YRS ARCHITECTURE",
      archiveId: "SPEC-NPR-01",
      hash: "9A4-AT-01",
      philosophy:
        "“Every system must answer directly to player intent. Nothing disguised, nothing padded — depth through deterministic architecture.”",
      bio:
        "Specializes in deterministic simulations, emergent loop structures, and state machine integrity. Former principal systems architect on complex systemic sandbox simulation titles. Oversees game feel rules, state replication verifications, and mathematical pacing models.",
      specs: [
        { label: "SIMULATION ENGINE", val: "Deterministic Physics Core" },
        { label: "STATE INTEGRITY", val: "State Machine Formal Verification" },
        { label: "SYSTEM FOCUS", val: "Emergent Play Loops & Reaction" },
        { label: "LATENCY TOLERANCE", val: "Zero-Interpolation State Sync" },
      ],
    },
    "mira-kovac": {
      specBadge: "DOSSIER // SPEC-02.MK",
      monogram: "02.MK",
      role: "TECHNICAL DIRECTOR",
      name: "Mira Kovač",
      callsign: "DISCIPLINE: C++ / PIPELINE",
      experience: "12+ YRS LOW-LEVEL ENGINE",
      archiveId: "SPEC-NPR-02",
      hash: "4F2-MK-02",
      philosophy:
        "“The engine is an instrument of uncompromised response time. Every millisecond spared belongs to the player’s reaction.”",
      bio:
        "Oversees engine pipelines, custom native tooling, and low-latency physics replication. Veteran of performance-critical engine engineering with background in custom memory heaps, multithreaded task graphs, and cache-coherent frame pacing.",
      specs: [
        { label: "MEMORY ARCHITECTURE", val: "Custom Arena & Stack Allocators" },
        { label: "FRAME BUDGET", val: "Locked 120Hz Strict Frame Pacing" },
        { label: "ENGINE CHASSIS", val: "Unreal Engine 5.5 + Native C++ API" },
        { label: "PROFILING STANDARD", val: "Continuous CPU/GPU Micro-Telemetry" },
      ],
    },
    "lucian-vance": {
      specBadge: "DOSSIER // SPEC-03.LV",
      monogram: "03.LV",
      role: "ART & VISUAL ARCHITECTURE",
      name: "Lucian Vance",
      callsign: "DISCIPLINE: ATMOSPHERIC DESIGN",
      experience: "11+ YRS VISUAL ERGONOMICS",
      archiveId: "SPEC-NPR-03",
      hash: "7C1-LV-03",
      philosophy:
        "“Aesthetics without structural logic is mere decoration. Industrial constructivism gives weight and consequence to every surface.”",
      bio:
        "Directs aesthetic integrity, industrial constructivism, and visual ergonomics. Focuses on physical materials, bespoke micro-detail lighting, and tactile environments that guide player navigation without hand-holding UI clutter.",
      specs: [
        { label: "VISUAL SYSTEM", val: "Industrial Constructivist Geometry" },
        { label: "MATERIAL PIPELINE", val: "Subsurface PBR & Tactile Wear Shaders" },
        { label: "SPATIAL HIERARCHY", val: "Architectural Wayfinding & Contrast" },
        { label: "SURFACE RATIO", val: "High-Density Mechanical Micro-Greebling" },
      ],
    },
    "elena-holm": {
      specBadge: "DOSSIER // SPEC-04.EH",
      monogram: "04.EH",
      role: "AUDIO & SOUND DESIGN",
      name: "Elena Holm",
      callsign: "DISCIPLINE: ANALOG / FOLEY",
      experience: "10+ YRS ACOUSTIC DESIGN",
      archiveId: "SPEC-NPR-04",
      hash: "8E3-EH-04",
      philosophy:
        "“Sound is physical collision rendered audible. When a switch snaps or a mechanism engages, the tactile frequency must register in the palm.”",
      bio:
        "Composes acoustic tactile feedback, analog modular synthesizers, and mechanical foley tuned for fine mechanical satisfaction. Designs real-time dynamic room acoustics and custom DSP resonance filters for physical interactions.",
      specs: [
        { label: "SYNTHESIS APPARATUS", val: "Custom Eurorack Modular Patch Array" },
        { label: "FOLEY ACOUSTICS", val: "Heavy Mill Mechanical Sound Objects" },
        { label: "AUDIO FRAMEWORK", val: "Dynamic Spatial Wwise + Sub-Bass Triggers" },
        { label: "RESPONSE TUNING", val: "Microsecond Attack Transient Alignment" },
      ],
    },
  };

  const modal = document.getElementById("dossier-modal");
  const backdrop = document.getElementById("dossier-backdrop");
  const closeBtn = document.getElementById("dossier-close-btn");
  const closeAction = document.getElementById("dossier-close-action");
  const specsGrid = document.getElementById("dossier-specs-grid");

  const fields = {
    specBadge: document.getElementById("dossier-spec-badge"),
    monogram: document.getElementById("dossier-monogram"),
    role: document.getElementById("dossier-role"),
    name: document.getElementById("dossier-name"),
    callsign: document.getElementById("dossier-callsign"),
    experience: document.getElementById("dossier-experience"),
    archiveId: document.getElementById("dossier-archive-id"),
    philosophy: document.getElementById("dossier-philosophy"),
    bio: document.getElementById("dossier-bio"),
    hash: document.getElementById("dossier-hash"),
  };

  function setText(element, value) {
    if (element) element.textContent = value;
  }

  function openDossier(id) {
    const data = teamData[id];
    if (!data || !modal || !specsGrid) return;

    setText(fields.specBadge, data.specBadge);
    setText(fields.monogram, data.monogram);
    setText(fields.role, data.role);
    setText(fields.name, data.name);
    setText(fields.callsign, data.callsign);
    setText(fields.experience, data.experience);
    setText(fields.archiveId, data.archiveId);
    setText(fields.philosophy, data.philosophy);
    setText(fields.bio, data.bio);
    setText(fields.hash, `HASH: ${data.hash}`);

    specsGrid.replaceChildren(
      ...data.specs.map((spec) => {
        const item = document.createElement("div");
        const label = document.createElement("span");
        const value = document.createElement("span");
        label.textContent = spec.label;
        value.textContent = spec.val;
        item.append(label, value);
        return item;
      }),
    );

    modal.classList.add("open");
    document.body.classList.add("modal-open");
    closeBtn?.focus();
  }

  function closeDossier() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.classList.remove("modal-open");
  }

  document.querySelectorAll(".team-card").forEach((card) => {
    card.addEventListener("click", () => {
      openDossier(card.getAttribute("data-team-id"));
    });

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openDossier(card.getAttribute("data-team-id"));
      }
    });
  });

  backdrop?.addEventListener("click", closeDossier);
  closeBtn?.addEventListener("click", closeDossier);
  closeAction?.addEventListener("click", closeDossier);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal?.classList.contains("open")) {
      closeDossier();
    }
  });
})();
