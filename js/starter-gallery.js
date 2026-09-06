(function () {
  const shell = document.querySelector(".apps-shell");
  if (!shell) return;

  const cards = Array.from(document.querySelectorAll(".starter-tile"));
  const filters = Array.from(document.querySelectorAll(".starter-filter-rail input"));
  const count = document.getElementById("starter-count");
  const empty = document.querySelector(".starter-empty");
  const lang = shell.dataset.galleryLang || "en";

  function selectedValues(name) {
    return filters
      .filter((input) => input.name === name && input.checked)
      .map((input) => input.value);
  }

  function hasAll(selected, values) {
    return selected.every((value) => values.includes(value));
  }

  function update() {
    const difficulty = document.querySelector('input[name="difficulty"]:checked')?.value || "all";
    const types = selectedValues("type");
    const skills = selectedValues("skill");
    let visible = 0;

    cards.forEach((card) => {
      const cardDifficulty = card.dataset.difficulty || "";
      const cardTypes = (card.dataset.type || "").split(/\s+/);
      const cardSkills = (card.dataset.skill || "").split(/\s+/);
      const matchesDifficulty = difficulty === "all" || cardDifficulty === difficulty;
      const matchesType = hasAll(types, cardTypes);
      const matchesSkill = hasAll(skills, cardSkills);
      const show = matchesDifficulty && matchesType && matchesSkill;
      card.hidden = !show;
      if (show) visible += 1;
    });

    if (count) {
      count.textContent = lang === "vi"
        ? `${visible} ứng dụng mẫu`
        : `${visible} starter app${visible === 1 ? "" : "s"}`;
    }

    if (empty) {
      empty.hidden = visible !== 0;
    }
  }

  filters.forEach((input) => input.addEventListener("change", update));
  update();
})();
