const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navLinks = document.querySelectorAll("[data-nav] a");

if (header) {
    const syncHeader = () => {
        header.classList.toggle("scrolled", window.scrollY > 18);
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });
}

if (nav && navToggle) {
    const closeMenu = () => {
        nav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        document.body.classList.remove("menu-open");
    };

    navToggle.addEventListener("click", () => {
        const willOpen = !nav.classList.contains("is-open");
        nav.classList.toggle("is-open", willOpen);
        navToggle.classList.toggle("is-open", willOpen);
        document.body.classList.toggle("menu-open", willOpen);
    });

    navLinks.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 1080) {
            closeMenu();
        }
    });
}

const revealItems = document.querySelectorAll(".reveal");
if (revealItems.length > 0) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

    revealItems.forEach(item => observer.observe(item));
}

const sectionAnchors = document.querySelectorAll("section[id]");
if (sectionAnchors.length > 0 && navLinks.length > 0) {
    const updateActiveNav = () => {
        const marker = window.scrollY + 180;
        let current = "";

        sectionAnchors.forEach(section => {
            if (marker >= section.offsetTop) {
                current = section.id;
            }
        });

        navLinks.forEach(link => {
            const href = link.getAttribute("href");
            const isMatch = href && href.startsWith("#") && href.slice(1) === current;
            link.classList.toggle("is-active", Boolean(isMatch));
        });
    };

    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav, { passive: true });
}

const audioElement = document.querySelector("[data-audio-element]");
if (audioElement) {
    const playButton = document.querySelector("[data-play]");
    const progressBar = document.querySelector("[data-progress-bar]");
    const progressFill = document.querySelector("[data-progress]");
    const currentTime = document.querySelector("[data-current-time]");
    const totalTime = document.querySelector("[data-total-time]");
    const title = document.querySelector("[data-demo-title]");
    const description = document.querySelector("[data-demo-description]");
    const note = document.querySelector("[data-demo-note]");
    const durationCapsule = document.querySelector(".demo-player .capsule");
    const optionButtons = Array.from(document.querySelectorAll("[data-demo-option]"));

    const availableButtons = optionButtons.filter(button => {
        const src = button.dataset.audio?.trim();
        const isDisabled = button.dataset.state === "disabled";
        const isAvailable = Boolean(src) && !isDisabled;
        button.hidden = !isAvailable;
        return isAvailable;
    });

    const formatTime = seconds => {
        if (!Number.isFinite(seconds)) {
            return "0:00";
        }

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const syncButton = () => {
        const isPlaying = !audioElement.paused;
        playButton.setAttribute("aria-pressed", String(isPlaying));
        playButton.innerHTML = isPlaying
            ? '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>'
            : '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>';
    };

    const loadDemo = button => {
        const src = button.dataset.audio || "";
        const demoTitle = button.querySelector("strong")?.textContent || button.dataset.title || "";
        const demoDescription = button.querySelector("span")?.textContent || button.dataset.description || "";
        const isDisabled = button.dataset.state === "disabled";

        availableButtons.forEach(item => item.classList.remove("is-active"));
        button.classList.add("is-active");
        title.textContent = demoTitle;
        description.textContent = demoDescription;

        if (isDisabled || !src) {
            audioElement.pause();
            audioElement.currentTime = 0;
            audioElement.src = "";
            audioElement.load();
            progressFill.style.width = "0%";
            currentTime.textContent = "0:00";
            totalTime.textContent = "--";
            if (durationCapsule) {
                durationCapsule.textContent = "--";
            }
            note.textContent = button.dataset.note || note.textContent;
            syncButton();
            return;
        }

        note.textContent = button.dataset.note || note.textContent;

        if (audioElement.getAttribute("src") !== src && audioElement.src !== src) {
            audioElement.pause();
            audioElement.currentTime = 0;
            audioElement.src = src;
            audioElement.load();
        }

        progressFill.style.width = "0%";
        currentTime.textContent = "0:00";
        totalTime.textContent = button.dataset.duration || "--";
        if (durationCapsule) {
            durationCapsule.textContent = button.dataset.duration || "--";
        }
        syncButton();
    };

    availableButtons.forEach(button => {
        button.addEventListener("click", () => loadDemo(button));
    });

    playButton.addEventListener("click", async () => {
        if (!audioElement.src) {
            note.textContent = "Select an available demo to start playback.";
            return;
        }

        if (audioElement.paused) {
            try {
                await audioElement.play();
            } catch (error) {
                console.error(error);
                note.textContent = "Playback was blocked or the audio could not load. Try pressing play again.";
            }
        } else {
            audioElement.pause();
        }

        syncButton();
    });

    audioElement.addEventListener("timeupdate", () => {
        const ratio = audioElement.duration ? (audioElement.currentTime / audioElement.duration) * 100 : 0;
        progressFill.style.width = `${ratio}%`;
        currentTime.textContent = formatTime(audioElement.currentTime);
        totalTime.textContent = formatTime(audioElement.duration);
    });

    audioElement.addEventListener("loadedmetadata", () => {
        totalTime.textContent = formatTime(audioElement.duration);
        if (durationCapsule) {
            durationCapsule.textContent = formatTime(audioElement.duration);
        }
    });

    audioElement.addEventListener("pause", syncButton);
    audioElement.addEventListener("play", syncButton);
    audioElement.addEventListener("ended", () => {
        progressFill.style.width = "0%";
        currentTime.textContent = "0:00";
        syncButton();
    });

    audioElement.addEventListener("error", () => {
        note.textContent = "The audio file could not be loaded.";
    });

    progressBar.addEventListener("click", event => {
        if (!audioElement.duration) {
            return;
        }

        const rect = progressBar.getBoundingClientRect();
        const ratio = (event.clientX - rect.left) / rect.width;
        audioElement.currentTime = Math.max(0, Math.min(audioElement.duration, ratio * audioElement.duration));
    });

    const firstActive = availableButtons.find(button => button.classList.contains("is-active")) || availableButtons[0];
    if (firstActive) {
        loadDemo(firstActive);
    } else {
        playButton.hidden = true;
        progressBar.hidden = true;
        title.textContent = "No demo available";
        description.textContent = "Audio demos will appear here once a file is added.";
        totalTime.textContent = "--";
        if (durationCapsule) {
            durationCapsule.textContent = "--";
        }
        note.textContent = "No playable audio is currently available.";
    }
}
