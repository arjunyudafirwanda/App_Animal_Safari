const ANIMALS = {
  lion: {
    name: "Singa",
    emoji: "🦁",
    action: "Mengaum",
    bg: "#fff1dc",
    border: "#f2dfbd",
    accent: "#e6ac59",
  },
  elephant: {
    name: "Gajah",
    emoji: "🐘",
    action: "Menginjak",
    bg: "#eaf2f7",
    border: "#d5e3eb",
    accent: "#8bb6c9",
  },
  monkey: {
    name: "Monyet",
    emoji: "🐒",
    action: "Melompat",
    bg: "#f8eddf",
    border: "#eedfcb",
    accent: "#c79a68",
  },
  zebra: {
    name: "Zebra",
    emoji: "🦓",
    action: "Berlari",
    bg: "#f0f1ed",
    border: "#dfe3da",
    accent: "#a2aa9a",
  },
  giraffe: {
    name: "Jerapah",
    emoji: "🦒",
    action: "Meregangkan leher",
    bg: "#fff4d9",
    border: "#f0e4bf",
    accent: "#d9ae53",
  },
};

const LEVELS = [
  {
    title: "Kenalan dengan Hewan",
    description:
      "Bantu Leo dan Ellie memulai parade safari. Susun dua hewan sesuai urutan contoh!",
    target: ["lion", "elephant"],
    hint: "Perhatikan urutan dari kiri ke kanan. Hewan pertama adalah Singa, lalu Gajah.",
    category: "KENALI HEWAN",
    difficulty: "MUDAH",
    group: "Safari Friends",
  },
  {
    title: "Dua Teman Baru",
    description:
      "Momo dan Zippy ingin ikut parade. Susun kartu Monyet dan Zebra sesuai contoh!",
    target: ["monkey", "zebra"],
    hint: "Cari kartu Monyet terlebih dahulu, kemudian Zebra.",
    category: "KENALI HEWAN",
    difficulty: "MUDAH",
    group: "Safari Friends",
  },
  {
    title: "Tiga Hewan Safari",
    description:
      "Tiga teman ingin berjalan bersama. Perhatikan urutannya sebelum menjalankan parade.",
    target: ["giraffe", "lion", "elephant"],
    hint: "Ada tiga hewan. Jangan sampai posisi Singa dan Gajah tertukar.",
    category: "KENALI HEWAN",
    difficulty: "MUDAH",
    group: "Safari Friends",
  },
  {
    title: "Parade di Padang Rumput",
    description:
      "Zippy, Momo, dan Gigi akan tampil. Susun ketiganya dengan urutan yang tepat.",
    target: ["zebra", "monkey", "giraffe"],
    hint: "Mulai dari Zebra, lanjutkan dengan Monyet, dan tutup dengan Jerapah.",
    category: "KENALI HEWAN",
    difficulty: "MUDAH",
    group: "Safari Friends",
  },
  {
    title: "Parade Bertiga",
    description:
      "Sekarang parade menjadi sedikit lebih panjang. Susun tiga hewan sesuai kartu contoh.",
    target: ["lion", "elephant", "monkey"],
    hint: "Baca urutan sekali lagi sebelum menekan Jalankan Parade.",
    category: "URUTAN INSTRUKSI",
    difficulty: "MUDAH",
    group: "Sequencing",
  },
  {
    title: "Gajah Datang Lagi",
    description:
      "Ellie ingin tampil dua kali! Susun urutan hewan yang sama seperti contoh.",
    target: ["elephant", "elephant", "lion"],
    hint: "Gajah muncul dua kali berturut-turut sebelum Singa.",
    category: "URUTAN INSTRUKSI",
    difficulty: "MUDAH",
    group: "Sequencing",
  },
  {
    title: "Pola Zebra dan Jerapah",
    description:
      "Zippy dan Gigi membuat pola bergantian. Amati lalu susun urutannya.",
    target: ["zebra", "giraffe", "zebra"],
    hint: "Perhatikan pola: Zebra, Jerapah, lalu Zebra lagi.",
    category: "POLA SEDERHANA",
    difficulty: "SEDANG",
    group: "Patterns",
  },
  {
    title: "Pola Bergantian",
    description:
      "Momo dan Leo ingin tampil bergantian. Pastikan urutannya tidak tertukar.",
    target: ["monkey", "lion", "monkey", "lion"],
    hint: "Pola ini berulang: Monyet lalu Singa.",
    category: "POLA SEDERHANA",
    difficulty: "SEDANG",
    group: "Patterns",
  },
  {
    title: "Empat Penjuru Safari",
    description:
      "Empat hewan akan tampil di panggung. Susun sesuai urutan yang terlihat.",
    target: ["lion", "elephant", "giraffe", "monkey"],
    hint: "Ada empat kartu. Cocokkan satu per satu dari kiri ke kanan.",
    category: "URUTAN INSTRUKSI",
    difficulty: "SEDANG",
    group: "Sequencing",
  },
  {
    title: "Barisan Terbalik",
    description:
      "Tantangan baru! Perhatikan susunan hewan dengan teliti dan jangan terburu-buru.",
    target: ["giraffe", "zebra", "elephant", "lion"],
    hint: "Mulai dari Jerapah. Singa berada di posisi terakhir.",
    category: "URUTAN INSTRUKSI",
    difficulty: "SEDANG",
    group: "Sequencing",
  },
  {
    title: "Pola ABABA",
    description:
      "Leo dan Momo membuat pola bergantian. Temukan urutan yang benar.",
    target: ["lion", "monkey", "lion", "monkey", "lion"],
    hint: "Pola Singa–Monyet berulang. Perhatikan hewan penutupnya.",
    category: "MENGENALI POLA",
    difficulty: "SEDANG",
    group: "Patterns",
  },
  {
    title: "Pola Tiga Sahabat",
    description:
      "Ellie, Gigi, dan Momo membentuk pola tiga hewan. Susun semuanya dengan tepat.",
    target: ["elephant", "giraffe", "monkey", "elephant", "giraffe"],
    hint: "Tiga hewan pertama membentuk pola. Perhatikan dua kartu terakhir.",
    category: "MENGENALI POLA",
    difficulty: "SEDANG",
    group: "Patterns",
  },
  {
    title: "Monyet Muncul Dua Kali",
    description:
      "Ada hewan yang muncul berulang. Susun parade dengan memperhatikan pengulangan tersebut.",
    target: ["zebra", "zebra", "monkey", "zebra", "zebra"],
    hint: "Zebra muncul dua kali di awal dan dua kali lagi di akhir.",
    category: "PENGULANGAN",
    difficulty: "MENANTANG",
    group: "Repetition",
  },
  {
    title: "Pola Tiga Hewan Berulang",
    description:
      "Tiga teman safari mengulang urutan yang sama. Bisakah kamu menyusunnya tanpa salah?",
    target: ["lion", "elephant", "monkey", "lion", "elephant", "monkey"],
    hint: "Susunan tiga hewan pertama diulang sekali lagi.",
    category: "PENGULANGAN",
    difficulty: "MENANTANG",
    group: "Repetition",
  },
  {
    title: "Zebra dan Jerapah Bergantian",
    description:
      "Zippy dan Gigi tampil bergantian beberapa kali. Periksa setiap posisi.",
    target: ["giraffe", "zebra", "giraffe", "zebra", "giraffe", "zebra"],
    hint: "Jerapah selalu diikuti Zebra. Pola itu diulang tiga kali.",
    category: "POLA BERULANG",
    difficulty: "MENANTANG",
    group: "Repetition",
  },
  {
    title: "Perbaiki Parade",
    description:
      "Ada urutan yang perlu diperiksa. Gunakan contoh sebagai petunjuk dan bangun kembali parade yang benar.",
    target: ["monkey", "zebra", "giraffe", "elephant", "lion", "monkey"],
    hint: "Perhatikan semua enam posisi. Jangan melewatkan satu pun hewan.",
    category: "DEBUGGING",
    difficulty: "MENANTANG",
    group: "Debugging",
  },
  {
    title: "Safari Enam Langkah",
    description:
      "Enam hewan siap berbaris. Susun urutan yang benar agar parade dapat dimulai.",
    target: ["elephant", "monkey", "elephant", "zebra", "giraffe", "zebra"],
    hint: "Cari urutan Ellie, Momo, Ellie, Zippy, Gigi, lalu Zippy.",
    category: "DEBUGGING",
    difficulty: "MENANTANG",
    group: "Debugging",
  },
  {
    title: "Pola Tiga Sahabat Berulang",
    description:
      "Leo, Momo, dan Gigi membuat pola yang berulang. Temukan urutannya sampai selesai.",
    target: ["lion", "monkey", "giraffe", "lion", "monkey", "giraffe", "lion"],
    hint: "Pola tiga hewan diulang. Perhatikan bahwa parade berakhir dengan Singa.",
    category: "POLA BERULANG",
    difficulty: "MENANTANG",
    group: "Repetition",
  },
  {
    title: "Petualangan Safari Panjang",
    description:
      "Tantangan hampir selesai! Susun delapan kartu untuk membuat parade yang tepat.",
    target: [
      "zebra",
      "giraffe",
      "zebra",
      "monkey",
      "zebra",
      "giraffe",
      "zebra",
      "monkey",
    ],
    hint: "Perhatikan pola empat hewan, kemudian ulangi pola yang sama.",
    category: "MISI LANJUTAN",
    difficulty: "AHLI CILIK",
    group: "Advanced",
  },
  {
    title: "Grand Safari Parade",
    description:
      "Inilah misi terakhir! Lima sahabat safari membuat parade panjang. Susun semua kartu dengan teliti dan rayakan keberhasilanmu!",
    target: [
      "lion",
      "elephant",
      "monkey",
      "zebra",
      "giraffe",
      "lion",
      "elephant",
      "monkey",
      "zebra",
      "giraffe",
    ],
    hint: "Lima hewan pertama membentuk satu pola. Ulangi urutan yang sama untuk lima posisi berikutnya.",
    category: "FINAL MISSION",
    difficulty: "AHLI CILIK",
    group: "Final Safari",
  },
];

const PROFILE_STORAGE_KEY = "animal-safari-coding-player-profiles-v2";
const LEGACY_STORAGE_KEY = "animal-safari-coding-progress-v1";
const MAX_SEQUENCE = 12;
const BASE_POINTS = 100;
const PERFECT_BONUS = 25;
const PENALTY_AFTER_MISTAKES = 3;
const PENALTY_POINTS = 20;

const $ = (selector) => document.querySelector(selector);
const elements = {
  levelNumber: $("#levelNumber"),
  totalScore: $("#totalScore"),
  totalStars: $("#totalStars"),
  playerNameDisplay: $("#playerNameDisplay"),
  changePlayerButton: $("#changePlayerButton"),
  missionLevelLabel: $("#missionLevelLabel"),
  missionTitle: $("#missionTitle"),
  missionDescription: $("#missionDescription"),
  difficultyBadge: $("#difficultyBadge"),
  targetCount: $("#targetCount"),
  targetSequence: $("#targetSequence"),
  missionTip: $("#missionTip"),
  missionCategory: $("#missionCategory"),
  animalCards: $("#animalCards"),
  sequenceCount: $("#sequenceCount"),
  sequenceTray: $("#sequenceTray"),
  undoButton: $("#undoButton"),
  clearButton: $("#clearButton"),
  runButton: $("#runButton"),
  feedbackMessage: $("#feedbackMessage"),
  paradeStage: $("#paradeStage"),
  stageStatus: $("#stageStatus"),
  guideAnimalGrid: $("#guideAnimalGrid"),
  unlockedCount: $("#unlockedCount"),
  progressScore: $("#progressScore"),
  progressStars: $("#progressStars"),
  progressPercent: $("#progressPercent"),
  progressBarFill: $("#progressBarFill"),
  levelMap: $("#levelMap"),
  resultModal: $("#resultModal"),
  resultMascot: $("#resultMascot"),
  resultKicker: $("#resultKicker"),
  resultTitle: $("#resultTitle"),
  resultDescription: $("#resultDescription"),
  earnedPoints: $("#earnedPoints"),
  earnedStars: $("#earnedStars"),
  resultTotal: $("#resultTotal"),
  replayButton: $("#replayButton"),
  nextButton: $("#nextButton"),
  copyrightYear: $("#copyrightYear"),
  playerModal: $("#playerModal"),
  playerForm: $("#playerForm"),
  playerNameInput: $("#playerNameInput"),
  playerFormError: $("#playerFormError"),
  cancelPlayerButton: $("#cancelPlayerButton"),
  penaltyModal: $("#penaltyModal"),
  penaltyDescription: $("#penaltyDescription"),
  penaltyBefore: $("#penaltyBefore"),
  penaltyAmount: $("#penaltyAmount"),
  penaltyAfter: $("#penaltyAfter"),
  closePenaltyButton: $("#closePenaltyButton"),
};

let currentLevel = 0;
let sequence = [];
let isRunning = false;
let playerName = "";
let playerKey = "";
let state = defaultProgress();
let profileStore = loadProfileStore();

function defaultProgress() {
  return {
    unlockedLevel: 1,
    currentLevel: 0,
    completed: [],
    attempts: {},
    bestScores: {},
    bestStars: {},
    mistakes: {},
    penaltyPoints: 0,
  };
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function normalizeProgress(saved = {}) {
  const fallback = defaultProgress();
  const unlockedLevel = Math.max(
    1,
    Math.min(LEVELS.length, Number(saved.unlockedLevel) || 1),
  );
  const completed = Array.isArray(saved.completed)
    ? [
        ...new Set(
          saved.completed
            .map(Number)
            .filter(
              (value) =>
                Number.isInteger(value) && value >= 0 && value < LEVELS.length,
            ),
        ),
      ]
    : [];
  const rawCurrent = Number.isInteger(Number(saved.currentLevel))
    ? Number(saved.currentLevel)
    : Math.max(0, unlockedLevel - 1);
  return {
    ...fallback,
    ...saved,
    unlockedLevel,
    currentLevel: Math.max(
      0,
      Math.min(unlockedLevel - 1, LEVELS.length - 1, rawCurrent),
    ),
    completed,
    attempts: isPlainObject(saved.attempts) ? saved.attempts : {},
    bestScores: isPlainObject(saved.bestScores) ? saved.bestScores : {},
    bestStars: isPlainObject(saved.bestStars) ? saved.bestStars : {},
    mistakes: isPlainObject(saved.mistakes) ? saved.mistakes : {},
    penaltyPoints: Math.max(0, Number(saved.penaltyPoints) || 0),
  };
}

function loadProfileStore() {
  try {
    const rawStore = localStorage.getItem(PROFILE_STORAGE_KEY);
    if (rawStore) {
      const parsed = JSON.parse(rawStore);
      if (isPlainObject(parsed) && isPlainObject(parsed.profiles)) {
        return {
          activeKey:
            typeof parsed.activeKey === "string" ? parsed.activeKey : "",
          profiles: parsed.profiles,
        };
      }
    }
  } catch (error) {
    console.warn("Player profiles could not be loaded.", error);
  }

  // Migrate the previous single-player save to the first username used.
  let legacyProgress = null;
  try {
    const legacyRaw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (legacyRaw) legacyProgress = normalizeProgress(JSON.parse(legacyRaw));
  } catch (error) {
    console.warn("Previous progress could not be migrated.", error);
  }
  return { activeKey: "", profiles: {}, legacyProgress };
}

function normalizePlayerName(name) {
  return name.trim().replace(/\s+/g, " ");
}

function getPlayerKey(name) {
  return normalizePlayerName(name).toLocaleLowerCase("id-ID");
}

function getRememberedPlayerName() {
  const remembered = profileStore.profiles[profileStore.activeKey];
  return remembered && typeof remembered.name === "string"
    ? remembered.name
    : "";
}

function saveProgress() {
  if (!playerKey) return;
  state.currentLevel = currentLevel;
  profileStore.profiles[playerKey] = {
    name: playerName,
    progress: JSON.parse(JSON.stringify(state)),
  };
  profileStore.activeKey = playerKey;
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profileStore));
  } catch (error) {
    console.warn("Player progress could not be saved in this browser.", error);
  }
}

function activatePlayer(name) {
  const cleanName = normalizePlayerName(name);
  const newKey = getPlayerKey(cleanName);
  if (!newKey) return false;

  if (playerKey) saveProgress();

  const existingProfile = profileStore.profiles[newKey];
  if (existingProfile && isPlainObject(existingProfile.progress)) {
    playerName = existingProfile.name || cleanName;
    state = normalizeProgress(existingProfile.progress);
  } else {
    playerName = cleanName;
    if (
      profileStore.legacyProgress &&
      Object.keys(profileStore.profiles).length === 0
    ) {
      state = normalizeProgress(profileStore.legacyProgress);
      profileStore.legacyProgress = null;
    } else {
      state = defaultProgress();
    }
  }

  playerKey = newKey;
  currentLevel = state.currentLevel;
  sequence = [];
  isRunning = false;
  updatePlayerHeader();
  renderLevel();
  saveProgress();
  setFeedback(
    `Selamat datang, ${playerName}! Kamu melanjutkan Misi ${currentLevel + 1}.`,
    "normal",
  );
  return true;
}

function updatePlayerHeader() {
  elements.playerNameDisplay.textContent = playerName || "Pilih pemain";
  elements.playerNameDisplay.title = playerName || "Belum ada pemain";
  elements.changePlayerButton.disabled = !playerName || isRunning;
}

function openPlayerModal() {
  elements.playerNameInput.value = playerName || getRememberedPlayerName();
  elements.playerFormError.textContent = "";
  elements.cancelPlayerButton.classList.toggle("hidden", !playerName);
  elements.playerModal.classList.remove("hidden");
  window.setTimeout(() => elements.playerNameInput.focus(), 30);
}

function closePlayerModal() {
  elements.playerModal.classList.add("hidden");
}

function submitPlayer(event) {
  event.preventDefault();
  const name = normalizePlayerName(elements.playerNameInput.value);
  if (name.length < 2) {
    elements.playerFormError.textContent =
      "Masukkan nama minimal 2 karakter, ya!";
    elements.playerNameInput.focus();
    return;
  }
  if (name.length > 24) {
    elements.playerFormError.textContent = "Nama maksimal 24 karakter.";
    elements.playerNameInput.focus();
    return;
  }
  activatePlayer(name);
  closePlayerModal();
}

function getRawTotalScore() {
  return Object.values(state.bestScores).reduce(
    (sum, score) => sum + Math.max(0, Number(score) || 0),
    0,
  );
}

function getTotalScore() {
  return Math.max(
    0,
    getRawTotalScore() - Math.max(0, Number(state.penaltyPoints) || 0),
  );
}

function getTotalStars() {
  return Object.values(state.bestStars).reduce(
    (sum, stars) => sum + Math.max(0, Number(stars) || 0),
    0,
  );
}

function renderHeader() {
  elements.levelNumber.textContent = `${currentLevel + 1} / ${LEVELS.length}`;
  elements.totalScore.textContent = `${getTotalScore().toLocaleString("id-ID")} PTS`;
  elements.totalStars.textContent = String(getTotalStars());
  updatePlayerHeader();
}

function renderTarget() {
  const target = LEVELS[currentLevel].target;
  elements.targetSequence.replaceChildren();
  target.forEach((animalId, index) => {
    const animal = ANIMALS[animalId];
    const card = document.createElement("div");
    card.className = "target-animal";
    card.style.animationDelay = `${index * 45}ms`;
    const number = document.createElement("b");
    number.textContent = String(index + 1);
    const emoji = document.createElement("span");
    emoji.textContent = animal.emoji;
    const name = document.createElement("small");
    name.textContent = animal.name;
    card.append(number, emoji, name);
    elements.targetSequence.append(card);
  });
  elements.targetCount.textContent = `${target.length} hewan`;
}

function renderAnimalCards() {
  elements.animalCards.replaceChildren();
  Object.entries(ANIMALS).forEach(([id, animal]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "animal-card";
    button.dataset.animal = id;
    button.style.setProperty("--animal-bg", animal.bg);
    button.style.setProperty("--animal-border", animal.border);
    button.style.setProperty("--animal-accent", animal.accent);
    button.setAttribute(
      "aria-label",
      `Tambahkan ${animal.name}, aksi ${animal.action}`,
    );
    const emoji = document.createElement("span");
    emoji.className = "animal-emoji";
    emoji.textContent = animal.emoji;
    const name = document.createElement("strong");
    name.textContent = animal.name;
    const action = document.createElement("small");
    action.textContent = animal.action;
    button.append(emoji, name, action);
    button.addEventListener("click", () => addAnimal(id));
    elements.animalCards.append(button);
  });
}

function renderGuideCards() {
  elements.guideAnimalGrid.replaceChildren();
  Object.values(ANIMALS).forEach((animal) => {
    const card = document.createElement("article");
    card.className = "guide-animal-card";
    const emoji = document.createElement("div");
    emoji.className = "guide-emoji";
    emoji.textContent = animal.emoji;
    const name = document.createElement("h3");
    name.textContent = animal.name;
    const action = document.createElement("p");
    action.textContent = `Aksi: ${animal.action}`;
    const label = document.createElement("small");
    label.textContent = "SAFARI FRIEND";
    card.append(emoji, name, action, label);
    elements.guideAnimalGrid.append(card);
  });
}

function renderSequence(activeIndex = -1) {
  elements.sequenceTray.replaceChildren();
  if (sequence.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-sequence";
    empty.innerHTML =
      "<span>🧺</span><strong>Parademu masih kosong</strong><small>Pilih kartu hewan untuk memulai.</small>";
    elements.sequenceTray.append(empty);
  } else {
    sequence.forEach((animalId, index) => {
      const animal = ANIMALS[animalId];
      const chip = document.createElement("div");
      chip.className = "sequence-chip";
      chip.style.setProperty("--animal-bg", animal.bg);
      chip.style.setProperty("--animal-border", animal.border);
      if (activeIndex === index) chip.classList.add("active-step");
      const number = document.createElement("span");
      number.className = "chip-number";
      number.textContent = String(index + 1);
      const emoji = document.createElement("span");
      emoji.className = "chip-emoji";
      emoji.textContent = animal.emoji;
      const copy = document.createElement("span");
      copy.className = "chip-copy";
      const name = document.createElement("strong");
      name.textContent = animal.name;
      const action = document.createElement("small");
      action.textContent = animal.action;
      copy.append(name, action);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "remove-chip";
      remove.textContent = "×";
      remove.setAttribute(
        "aria-label",
        `Hapus kartu ${animal.name} nomor ${index + 1}`,
      );
      remove.disabled = isRunning || !playerKey;
      remove.addEventListener("click", () => removeAnimal(index));
      chip.append(number, emoji, copy, remove);
      elements.sequenceTray.append(chip);
    });
  }
  const playerReady = Boolean(playerKey);
  elements.sequenceCount.textContent = `${sequence.length} / ${MAX_SEQUENCE} KARTU`;
  elements.undoButton.disabled =
    isRunning || !playerReady || sequence.length === 0;
  elements.clearButton.disabled =
    isRunning || !playerReady || sequence.length === 0;
  elements.runButton.disabled =
    isRunning || !playerReady || sequence.length === 0;
  document.querySelectorAll(".animal-card").forEach((button) => {
    button.disabled =
      isRunning || !playerReady || sequence.length >= MAX_SEQUENCE;
  });
  updatePlayerHeader();
}

function setFeedback(message, type = "normal") {
  const icons = { normal: "🌼", success: "🌟", error: "🌱" };
  elements.feedbackMessage.className = `feedback-message${type === "normal" ? "" : ` ${type}`}`;
  elements.feedbackMessage.querySelector("span").textContent =
    icons[type] || icons.normal;
  elements.feedbackMessage.querySelector("p").textContent = message;
  elements.feedbackMessage.classList.remove("feedback-pop");
  void elements.feedbackMessage.offsetWidth;
  elements.feedbackMessage.classList.add("feedback-pop");
}

function setStageStatus(text, type = "waiting") {
  elements.stageStatus.textContent = text;
  elements.stageStatus.className = `stage-status${type === "waiting" ? "" : ` ${type}`}`;
}

function showStagePlaceholder() {
  elements.paradeStage.replaceChildren();
  const placeholder = document.createElement("div");
  placeholder.className = "stage-placeholder";
  placeholder.innerHTML =
    "<span>🌴</span><p>Hewan-hewan akan tampil di sini setelah kamu menekan <strong>Jalankan Parade</strong>.</p><span>🌴</span>";
  elements.paradeStage.append(placeholder);
  setStageStatus("MENUNGGU PARADE");
}

function renderLevel() {
  const level = LEVELS[currentLevel];
  elements.missionLevelLabel.textContent = `MISSION ${String(currentLevel + 1).padStart(2, "0")}`;
  elements.missionTitle.textContent = level.title;
  elements.missionDescription.textContent = level.description;
  elements.difficultyBadge.textContent = level.difficulty;
  elements.targetCount.textContent = `${level.target.length} hewan`;
  elements.missionCategory.textContent = level.category;
  elements.missionTip.querySelector("p").textContent = level.hint;
  renderHeader();
  renderTarget();
  renderSequence();
  showStagePlaceholder();
  renderProgress();
  setFeedback(
    playerName
      ? `Siap bermain, ${playerName}? Susun parade hewanmu terlebih dahulu!`
      : "Masukkan username untuk mulai bermain.",
    "normal",
  );
  saveProgress();
}

function addAnimal(animalId) {
  if (!playerKey || isRunning || sequence.length >= MAX_SEQUENCE) return;
  sequence.push(animalId);
  renderSequence();
  setFeedback(
    `${ANIMALS[animalId].name} ditambahkan ke parade! Pilih hewan berikutnya.`,
    "normal",
  );
}

function removeAnimal(index) {
  if (!playerKey || isRunning) return;
  const removed = sequence.splice(index, 1)[0];
  renderSequence();
  setFeedback(
    `${ANIMALS[removed].name} dihapus. Kamu bisa menyusun ulang parade.`,
    "normal",
  );
}

function undoLast() {
  if (!playerKey || isRunning || sequence.length === 0) return;
  const removed = sequence.pop();
  renderSequence();
  setFeedback(`${ANIMALS[removed].name} diurungkan dari urutan.`, "normal");
}

function clearSequence() {
  if (!playerKey || isRunning) return;
  sequence = [];
  renderSequence();
  showStagePlaceholder();
  setFeedback("Parade sudah dikosongkan. Ayo susun kembali!", "normal");
}

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function appendPerformer(animalId, index) {
  const animal = ANIMALS[animalId];
  const performer = document.createElement("div");
  performer.className = "parade-performer";
  performer.style.animationDelay = `${index * 105}ms`;
  performer.style.background = "rgba(255,255,255,.86)";
  performer.dataset.index = String(index);
  const emoji = document.createElement("span");
  emoji.className = "performer-emoji";
  emoji.textContent = animal.emoji;
  const name = document.createElement("small");
  name.textContent = animal.name;
  performer.append(emoji, name);
  elements.paradeStage.append(performer);
  return performer;
}

function arraysMatch(a, b) {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

function scrollToParadeStage() {
  const stageSection = document.querySelector(".parade-stage");
  if (!stageSection) return;
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  stageSection.scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth",
    block: "center",
  });
}

function openPenaltyModal({ before, deduction, after }) {
  elements.penaltyDescription.textContent = `${playerName}, kamu sudah tiga kali mencoba menyusun parade Misi ${currentLevel + 1}, tetapi urutannya belum tepat. Sebagai pengingat, skor dikurangi ${deduction} poin.`;
  elements.penaltyBefore.textContent = `${before.toLocaleString("id-ID")} PTS`;
  elements.penaltyAmount.textContent = `-${deduction.toLocaleString("id-ID")} PTS`;
  elements.penaltyAfter.textContent = `${after.toLocaleString("id-ID")} PTS`;
  elements.penaltyModal.classList.remove("hidden");
  window.setTimeout(() => elements.closePenaltyButton.focus(), 30);
}

function closePenaltyModal() {
  elements.penaltyModal.classList.add("hidden");
  elements.runButton.focus();
}

function handleIncorrectAttempt() {
  const levelKey = String(currentLevel);
  const mistakes = Math.max(0, Number(state.mistakes[levelKey]) || 0) + 1;
  state.mistakes[levelKey] = mistakes;
  saveProgress();

  if (mistakes >= PENALTY_AFTER_MISTAKES) {
    const before = getTotalScore();
    const deduction = Math.min(PENALTY_POINTS, before);
    state.penaltyPoints =
      Math.max(0, Number(state.penaltyPoints) || 0) + deduction;
    state.mistakes[levelKey] = 0;
    saveProgress();
    renderHeader();
    renderProgress();
    setFeedback(
      `Tiga kali belum tepat. Skor dikurangi ${deduction} poin. Coba periksa pola parade, ya!`,
      "error",
    );
    openPenaltyModal({ before, deduction, after: getTotalScore() });
    return;
  }

  const remaining = PENALTY_AFTER_MISTAKES - mistakes;
  setFeedback(
    `Hampir berhasil! Urutannya belum cocok. Ini kesalahan ke-${mistakes} dari ${PENALTY_AFTER_MISTAKES}. Periksa lagi, ya!`,
    "error",
  );
  // Give an early reminder without reducing points.
  if (remaining === 1) {
    setFeedback(
      `Hati-hati, ${playerName}! Ini kesalahan ke-2 dari 3. Satu kesalahan lagi akan mengurangi 20 poin.`,
      "error",
    );
  }
}

async function runParade() {
  if (!playerKey) {
    openPlayerModal();
    return;
  }
  if (isRunning || sequence.length === 0) return;

  isRunning = true;
  const attemptNumber = Number(state.attempts[currentLevel] || 0);
  const submittedSequence = [...sequence];
  renderSequence();
  document.querySelectorAll(".animal-card").forEach((button) => {
    button.disabled = true;
  });
  elements.runButton.disabled = true;
  elements.undoButton.disabled = true;
  elements.clearButton.disabled = true;
  elements.paradeStage.replaceChildren();
  setStageStatus("PARADE BERJALAN", "running");
  setFeedback(
    `${playerName}, parade safari dimulai! Yuk, lihat hewan-hewan tampil satu per satu. 🎵`,
    "normal",
  );

  // Bring the parade stage into view before animating the performers.
  scrollToParadeStage();
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches)
    await delay(420);

  for (let index = 0; index < submittedSequence.length; index += 1) {
    renderSequence(index);
    const performer = appendPerformer(submittedSequence[index], index);
    await delay(520);
    performer.classList.add("active");
    await delay(300);
    performer.classList.remove("active");
  }

  isRunning = false;
  renderSequence();
  state.attempts[currentLevel] = attemptNumber + 1;
  saveProgress();

  if (arraysMatch(submittedSequence, LEVELS[currentLevel].target)) {
    state.mistakes[String(currentLevel)] = 0;
    completeLevel(attemptNumber === 0);
  } else {
    setStageStatus("COBA LAGI", "waiting");
    handleIncorrectAttempt();
    renderSequence();
  }
}

function completeLevel(isFirstAttempt) {
  const earnedPoints = BASE_POINTS + (isFirstAttempt ? PERFECT_BONUS : 0);
  const earnedStars = isFirstAttempt ? 2 : 1;
  const previousBest = Number(state.bestScores[currentLevel] || 0);
  const previousStars = Number(state.bestStars[currentLevel] || 0);
  state.bestScores[currentLevel] = Math.max(previousBest, earnedPoints);
  state.bestStars[currentLevel] = Math.max(previousStars, earnedStars);
  if (!state.completed.includes(currentLevel))
    state.completed.push(currentLevel);
  state.unlockedLevel = Math.max(
    Number(state.unlockedLevel || 1),
    Math.min(LEVELS.length, currentLevel + 2),
  );
  state.mistakes[String(currentLevel)] = 0;
  saveProgress();
  renderHeader();
  renderProgress();
  setStageStatus("PARADE BERHASIL", "finished");
  setFeedback(
    `Yeay, ${playerName}! Parade safari berhasil disusun dengan tepat. Hebat!`,
    "success",
  );

  const isFinal = currentLevel === LEVELS.length - 1;
  elements.resultMascot.textContent =
    LEVELS[currentLevel].target.map((id) => ANIMALS[id].emoji).slice(-1)[0] ||
    "🦁";
  elements.resultKicker.textContent = isFinal
    ? "GRAND SAFARI COMPLETED"
    : "MISSION COMPLETED";
  elements.resultTitle.textContent = isFinal
    ? `Safari Luar Biasa, ${playerName}!`
    : `Parade Berhasil, ${playerName}!`;
  elements.resultDescription.textContent = isFirstAttempt
    ? "Sempurna! Kamu menyusun urutan dengan benar pada percobaan pertama."
    : "Kamu berhasil memperbaiki urutan dan menyelesaikan misi. Terus semangat!";
  elements.earnedPoints.textContent = `+${earnedPoints} PTS`;
  elements.earnedStars.textContent = `${earnedStars} / 2`;
  elements.resultTotal.textContent = `Total skor: ${getTotalScore().toLocaleString("id-ID")} PTS`;
  elements.replayButton.textContent = "Main Level Ini Lagi";
  elements.nextButton.textContent = isFinal
    ? "Ulangi dari Level 1 ↺"
    : "Level Berikutnya →";
  elements.resultModal.classList.remove("hidden");
  elements.nextButton.focus();
}

function replayCurrentLevel() {
  elements.resultModal.classList.add("hidden");
  sequence = [];
  renderLevel();
}

function goToNextLevel() {
  elements.resultModal.classList.add("hidden");
  currentLevel =
    currentLevel === LEVELS.length - 1
      ? 0
      : Math.min(currentLevel + 1, LEVELS.length - 1);
  sequence = [];
  renderLevel();
  document.querySelector("#safari").scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start",
  });
}

function renderProgress() {
  const completedCount = state.completed.length;
  const unlocked = Math.max(
    1,
    Math.min(LEVELS.length, Number(state.unlockedLevel || 1)),
  );
  const stars = getTotalStars();
  elements.unlockedCount.textContent = `${unlocked} / ${LEVELS.length}`;
  elements.progressScore.textContent = `${getTotalScore().toLocaleString("id-ID")} PTS`;
  elements.progressStars.textContent = String(stars);
  elements.progressPercent.textContent = `${Math.round((completedCount / LEVELS.length) * 100)}% selesai`;
  elements.progressBarFill.style.width = `${(completedCount / LEVELS.length) * 100}%`;

  elements.levelMap.replaceChildren();
  LEVELS.forEach((level, index) => {
    const number = index + 1;
    const isUnlocked = number <= unlocked || state.completed.includes(index);
    const isCompleted = state.completed.includes(index);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "level-node";
    button.textContent = isCompleted ? "✓" : String(number);
    button.disabled = !isUnlocked || !playerKey;
    button.classList.toggle("unlocked", isUnlocked);
    button.classList.toggle("completed", isCompleted);
    button.classList.toggle("current", index === currentLevel);
    button.setAttribute(
      "aria-label",
      isCompleted
        ? `Level ${number}, selesai`
        : isUnlocked
          ? `Mainkan level ${number}`
          : `Level ${number}, terkunci`,
    );
    button.title = isUnlocked
      ? `${number}. ${level.title}`
      : `Selesaikan level sebelumnya untuk membuka ${number}`;
    if (isUnlocked) {
      button.addEventListener("click", () => {
        if (isRunning || !playerKey) return;
        currentLevel = index;
        sequence = [];
        renderLevel();
        document.querySelector("#safari").scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "auto"
            : "smooth",
          block: "start",
        });
      });
    } else {
      button.textContent = "🔒";
    }
    elements.levelMap.append(button);
  });
}

function setupNavigation() {
  const links = [...document.querySelectorAll(".nav-link")];
  const sections = ["home", "safari", "guide", "progress"].map((id) =>
    document.getElementById(id),
  );
  links.forEach((link) =>
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
        block: "start",
      });
      links.forEach((item) => {
        item.classList.remove("active");
        item.removeAttribute("aria-current");
      });
      link.classList.add("active");
      link.setAttribute("aria-current", "location");
    }),
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        links.forEach((link) => {
          const active = link.getAttribute("href") === `#${visible.target.id}`;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      },
      { rootMargin: "-145px 0px -58% 0px", threshold: [0.08, 0.2, 0.4] },
    );
    sections.forEach((section) => observer.observe(section));
  }
}

function setupRevealAnimations() {
  const selectors = [
    ".hero-content",
    ".hero-scene",
    ".section-heading",
    ".mission-card",
    ".animal-picker",
    ".sequence-panel",
    ".parade-stage",
    ".guide-animal-card",
    ".learning-note",
    ".progress-stat",
    ".progress-bar-wrap",
    ".level-map",
    ".progress-legend",
    ".site-footer",
  ];
  const targets = [
    ...new Set(
      selectors.flatMap((selector) => [...document.querySelectorAll(selector)]),
    ),
  ];
  if (!targets.length) return;
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    targets.forEach((target) => target.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -35px 0px" },
  );
  targets.forEach((target, index) => {
    target.classList.add("reveal-on-scroll");
    if (index % 4 === 1) target.classList.add("reveal-delay-1");
    else if (index % 4 === 2) target.classList.add("reveal-delay-2");
    else if (index % 4 === 3) target.classList.add("reveal-delay-3");
    observer.observe(target);
  });
}

function setupHeaderScrollEffect() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const updateHeader = () =>
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

function setupEvents() {
  elements.undoButton.addEventListener("click", undoLast);
  elements.clearButton.addEventListener("click", clearSequence);
  elements.runButton.addEventListener("click", runParade);
  elements.replayButton.addEventListener("click", replayCurrentLevel);
  elements.nextButton.addEventListener("click", goToNextLevel);
  elements.changePlayerButton.addEventListener("click", () => {
    if (isRunning) return;
    saveProgress();
    openPlayerModal();
  });
  elements.playerForm.addEventListener("submit", submitPlayer);
  elements.cancelPlayerButton.addEventListener("click", closePlayerModal);
  elements.closePenaltyButton.addEventListener("click", closePenaltyModal);
  elements.resultModal.addEventListener("click", (event) => {
    if (event.target === elements.resultModal) event.preventDefault();
  });
  elements.penaltyModal.addEventListener("click", (event) => {
    if (event.target === elements.penaltyModal) event.preventDefault();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!elements.penaltyModal.classList.contains("hidden")) {
      closePenaltyModal();
      return;
    }
    if (!elements.resultModal.classList.contains("hidden")) {
      elements.nextButton.focus();
      return;
    }
    if (!elements.playerModal.classList.contains("hidden") && playerKey) {
      closePlayerModal();
    }
  });
}

function initializeApp() {
  elements.copyrightYear.textContent = String(new Date().getFullYear());
  renderAnimalCards();
  renderGuideCards();
  renderLevel();
  setupEvents();
  setupNavigation();
  setupRevealAnimations();
  setupHeaderScrollEffect();
  updatePlayerHeader();
  openPlayerModal();
}

initializeApp();
