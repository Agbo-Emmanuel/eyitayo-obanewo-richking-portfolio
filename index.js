// Your work card data
const workCards = [
  {
    title: "Executive Protocol Accelerator — Lagos & Abuja",
    objective:
      "Elevate executive presence and cross-cultural competence for mid- to senior-level leaders.",
    strategy:
      "Scenario-based etiquette curriculum, pre/post presence scoring, live role-play and drills.",
    execution:
      "3-day intensive: seating plans, dignitary sequence drills, dining diplomacy lab, feedback loops.",
    tools: [
      "Protocol playbooks",
      "Checklists",
      "Video feedback",
      "LMS folders",
    ],
    results:
      "+80% average improvement in executive-presence scores on internal post-program assessments; 95% completion; repeat corporate bookings next quarter.",
  },
  {
    title: "CSR → Empowerment Model (Richgates)",
    objective:
      "Elevate executive presence and cross‑cultural competence for mid to senior‑level leaders.",
    strategy:
      " Quarterly cohorts; scholarships + mentorship + skills track; governance templates and partner MOUs.",
    execution:
      "Built SOP and M&E dashboards; cadence meetings; alumni mentorship pipes; donor‑grade reporting.",
    tools: ["SOPs", "M&E scorecards", "Trello/Asana", "Google Workspace"],
    results:
      "2,500+ beneficiaries impacted; 40% lift in accountability metrics across entities; ₦35M operational waste eliminated via process fixes.",
  },
  {
    title: "NGO Operations Reset — Three Mid‑Sized Orgs",
    objective:
      "Shorten donor reporting cycles and clarify roles to reduce rework and risk.",
    strategy:
      " Diagnose → restructure → retrain; write SOPs; embed monthly M&E cadence.",
    execution:
      "RACI by function; grant‑compliance checklist; reporting templates; weekly sprint stand‑ups.",
    tools: ["SOP library", "M&E indicators", "Slack", "Trello boards"],
    results:
      "On‑time donor reports; clearer accountability; measurable reduction in process delays across all three NGOs.",
  },
  {
    title: "Government & Executive Events — Protocol Direction",
    objective:
      "Achieve dignitary‑grade standards for formal government/religious/executive events.",
    strategy:
      "Protocol playbooks (precedence, arrivals, staging, flags, titles), rehearsal walks, cue‑to‑cue showcalling.",
    execution:
      "Liaison with security & ushers, VVIP seating/holding, signage maps, timing control.",
    tools: [" Run‑of‑show", "Cue sheets", "Seating charts", "Comms plan"],
    results:
      "Zero‑incident events delivered on schedule with formal commendations.",
  },
  {
    title: "Youth Empowerment Commons — Cohort Series",
    objective:
      "Equip young professionals with etiquette, confidence, and workplace readiness.",
    strategy:
      "Quarterly cohorts; values + voice + vocation; alumni mentors and showcase night.",
    execution:
      " 4‑week track; weekly workshops; service project; placement follow‑ups.",
    tools: ["Toolkits", "Worksheets", "Alumni community"],
    results:
      "700+ participants since 2022; improved interview outcomes and internship placements.",
  },
];

// Select the container where cards will be added
const container = document.getElementById("work_cards_container");

// Loop through the data and create cards dynamically
workCards.forEach((c) => {
  const card = document.createElement("div");
  card.classList.add("work_card");

  card.innerHTML = `
    <h3>${c.title}</h3>
    <dl class="work_card_bottom">
      <div>
        <dt>Objective</dt>
        <dd>${c.objective}</dd>
      </div>
      <div>
        <dt>Strategy</dt>
        <dd>${c.strategy}</dd>
      </div>
      <div>
        <dt>Execution</dt>
        <dd>${c.execution}</dd>
      </div>
      <div>
        <dt>Tools Used</dt>
        <dd>${c.tools.join(", ")}</dd>
      </div>
      <div>
        <dt>Results</dt>
        <dd>${c.results}</dd>
      </div>
    </dl>
  `;

  container.appendChild(card);
});
