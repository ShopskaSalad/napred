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
    "kaelen-voss": {
      specBadge: "DOSSIER // SPEC-05.KV",
      monogram: "05.KV",
      role: "LEAD MECHANICS DESIGNER",
      name: "Kaelen Voss",
      callsign: "DISCIPLINE: MICRO-DYNAMICS",
      experience: "9+ YRS GAME FEEL",
      archiveId: "SPEC-NPR-05",
      hash: "2D6-KV-05",
      philosophy:
        "“Inputs should disappear beneath intent. The player must feel mass, timing, and consequence before they can name the system.”",
      bio:
        "Architects kinetic weight, controller response thresholds, animation cancel windows, and input buffering rules. Tunes tactile response curves across combat, traversal, and interaction loops so every action has measurable physical consequence.",
      specs: [
        { label: "INPUT RESPONSE", val: "Sub-Frame Buffer Calibration" },
        { label: "MOTION FEEL", val: "Kinetic Weight & Inertia Curves" },
        { label: "PLAYER LOOP", val: "High-Fidelity Action Cadence" },
        { label: "TEST METHOD", val: "Frame-Step Capture Review" },
      ],
    },
    "samira-patel": {
      specBadge: "DOSSIER // SPEC-06.SP",
      monogram: "06.SP",
      role: "PRINCIPAL AI & SIMULATION",
      name: "Samira Patel",
      callsign: "DISCIPLINE: HEURISTIC AI",
      experience: "13+ YRS AGENT SYSTEMS",
      archiveId: "SPEC-NPR-06",
      hash: "6B8-SP-06",
      philosophy:
        "“The best opponent is readable without being predictable. Intelligence is not chaos; it is structured adaptation.”",
      bio:
        "Engineers goal-oriented autonomous agents, hierarchical utility theory algorithms, and state machine transitions for emergent encounters. Designs behavior systems that expose intent while retaining tactical depth.",
      specs: [
        { label: "BEHAVIOR MODEL", val: "Hierarchical Utility AI" },
        { label: "SIMULATION LAYER", val: "Goal-Oriented Action Planning" },
        { label: "READABILITY", val: "Intent Signaling Windows" },
        { label: "ENCOUNTER FOCUS", val: "Adaptive Group Tactics" },
      ],
    },
    "jonas-lindqvist": {
      specBadge: "DOSSIER // SPEC-07.JL",
      monogram: "07.JL",
      role: "LEAD TECHNICAL ARTIST",
      name: "Jonas Lindqvist",
      callsign: "DISCIPLINE: HLSL / COMPUTE",
      experience: "10+ YRS PROCEDURAL ART",
      archiveId: "SPEC-NPR-07",
      hash: "3A7-JL-07",
      philosophy:
        "“A surface should reveal how it was made, how it moves, and what it has survived.”",
      bio:
        "Builds bespoke surface deformation shaders, procedural geometry tools, and high-frequency tactile physics rendering pipelines. Bridges visual direction with runtime performance and material response systems.",
      specs: [
        { label: "SHADER STACK", val: "Compute-Driven Material Response" },
        { label: "GEOMETRY TOOLS", val: "Procedural Industrial Assembly" },
        { label: "SURFACE LOGIC", val: "Wear, Stress & Impact Layers" },
        { label: "RENDER BUDGET", val: "GPU Micro-Profiled Passes" },
      ],
    },
    "renzo-takahashi": {
      specBadge: "DOSSIER // SPEC-08.RT",
      monogram: "08.RT",
      role: "NARRATIVE ARCHITECTURE",
      name: "Renzo Takahashi",
      callsign: "DISCIPLINE: SYSTEMATIC LORE",
      experience: "8+ YRS WORLD SYSTEMS",
      archiveId: "SPEC-NPR-08",
      hash: "5C9-RT-08",
      philosophy:
        "“Lore should be load-bearing. The world must explain itself through tools, ruins, routines, and scars.”",
      bio:
        "Crafts diegetic industrial lore, physical environmental artifacts, and narrative layers integrated with player progress. Focuses on story systems that can be explored, inferred, and mechanically rewarded.",
      specs: [
        { label: "WORLD METHOD", val: "Diegetic Artifact Networks" },
        { label: "PROGRESSION LORE", val: "System-Gated Discovery" },
        { label: "TEXTURE LAYER", val: "Industrial Cultural Memory" },
        { label: "PLAYER REWARD", val: "Inference-Based Unlocks" },
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
