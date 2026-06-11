// ===== Navigation scroll effect =====
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== Active nav link =====
const navLinks = document.querySelectorAll('.nav-links a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
    }
});

// ===== Fade-in on scroll =====
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(el => observer.observe(el));

// ===== Mobile nav toggle =====
const mobileToggle = document.querySelector('.nav-mobile-toggle');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navLinksContainer.classList.toggle('mobile-open');
        mobileToggle.classList.toggle('open');
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('mobile-open');
            mobileToggle.classList.remove('open');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target) && navLinksContainer.classList.contains('mobile-open')) {
            navLinksContainer.classList.remove('mobile-open');
            mobileToggle.classList.remove('open');
        }
    });
}

// ===== SPRINT GAME LOGIC =====
let sprintGameState = {
    day: 0,
    budget: 70,
    timeline: 70,
    morale: 70,
    trust: 70,
    usedEvents: [],
    isGameOver: false,
    currentEvent: null
};

// Game screen management
function showGameScreen(screenId) {
    const screens = document.querySelectorAll('.game-screen');
    screens.forEach(screen => screen.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

// Start the sprint game
function startSprintGame() {
    sprintGameState = {
        day: 0,
        budget: 70,
        timeline: 70,
        morale: 70,
        trust: 70,
        usedEvents: [],
        isGameOver: false,
        currentEvent: null
    };
    
    updateGameStats();
    showGameScreen('game-play');
    nextSprintDay();
}

// Restart the game
function restartSprintGame() {
    showGameScreen('game-start');
}

// Update game statistics display
function updateGameStats() {
    const stats = ['budget', 'timeline', 'morale', 'trust'];
    
    stats.forEach(stat => {
        const value = sprintGameState[stat];
        const valueEl = document.getElementById(`${stat}-value`);
        const barEl = document.getElementById(`${stat}-bar`);
        const itemEl = valueEl.closest('.stat-item');
        
        if (valueEl) valueEl.textContent = value;
        if (barEl) {
            barEl.style.width = `${value}%`;
            
            // Update bar color based on value
            barEl.className = 'stat-fill';
            if (value > 70) {
                barEl.classList.add('high');
            } else if (value <= 25) {
                barEl.classList.add('low');
            }
        }
        
        // Update item styling
        if (itemEl) {
            itemEl.className = 'stat-item';
            if (value <= 25) {
                itemEl.classList.add('danger');
            } else if (value <= 40) {
                itemEl.classList.add('warning');
            }
        }
    });
    
    // Update sprint progress
    const dayEl = document.getElementById('sprint-day');
    const progressEl = document.getElementById('sprint-progress');
    
    if (dayEl) dayEl.textContent = `Day ${sprintGameState.day}/10`;
    
    if (progressEl) {
        const progressPercent = (sprintGameState.day / 10) * 100;
        progressEl.style.width = `${progressPercent}%`;
        
        // Change color based on sprint phase
        if (sprintGameState.day <= 3) {
            progressEl.style.background = 'linear-gradient(90deg, #5cb85c, #4cae4c)';
        } else if (sprintGameState.day <= 7) {
            progressEl.style.background = 'linear-gradient(90deg, var(--soft-gold), #c4912e)';
        } else {
            progressEl.style.background = 'linear-gradient(90deg, #dc3c3c, #c23321)';
        }
    }
}

// Get available events based on current day
function getAvailableSprintEvents() {
    if (!window.sprintEvents) return [];
    
    const day = sprintGameState.day;
    let pool;
    
    if (day <= 3) {
        pool = window.sprintEvents.filter(e => e.difficulty === 'easy' || e.difficulty === 'medium');
    } else if (day <= 7) {
        pool = window.sprintEvents.filter(e => e.difficulty === 'medium' || e.difficulty === 'hard');
    } else {
        pool = window.sprintEvents.filter(e => e.difficulty === 'hard' || e.difficulty === 'medium');
    }
    
    // Filter out recently used events
    const available = pool.filter(e => !sprintGameState.usedEvents.includes(e.id));
    
    if (available.length === 0) {
        sprintGameState.usedEvents = [];
        return pool;
    }
    
    return available;
}

// Advance to next day
function nextSprintDay() {
    sprintGameState.day++;
    updateGameStats();
    
    const availableEvents = getAvailableSprintEvents();
    if (availableEvents.length === 0) {
        endSprintGame("No more events available", false);
        return;
    }
    
    const event = availableEvents[Math.floor(Math.random() * availableEvents.length)];
    sprintGameState.usedEvents.push(event.id);
    sprintGameState.currentEvent = event;
    
    displaySprintEvent(event);
}

// Display current event
function displaySprintEvent(event) {
    const categoryEl = document.getElementById('event-category');
    const textEl = document.getElementById('event-text');
    const difficultyEl = document.getElementById('event-difficulty');
    const optionsEl = document.getElementById('game-options');
    
    if (categoryEl) categoryEl.textContent = event.category;
    if (textEl) textEl.textContent = event.text;
    
    if (difficultyEl) {
        difficultyEl.textContent = event.difficulty;
        difficultyEl.className = `event-difficulty ${event.difficulty}`;
    }
    
    if (optionsEl) {
        optionsEl.innerHTML = '';
        
        event.options.forEach((option, index) => {
            const optionEl = document.createElement('div');
            optionEl.className = 'game-option';
            optionEl.textContent = option.label;
            optionEl.addEventListener('click', () => selectSprintOption(option));
            optionsEl.appendChild(optionEl);
        });
    }
}

// Handle option selection
function selectSprintOption(option) {
    // Apply effects
    const stats = ['budget', 'timeline', 'morale', 'trust'];
    stats.forEach(stat => {
        const change = option.effects[stat];
        if (change !== 0) {
            sprintGameState[stat] = Math.max(0, Math.min(100, sprintGameState[stat] + change));
        }
    });
    
    updateGameStats();
    
    // Check win condition first
    if (sprintGameState.day >= 10) {
        endSprintGame("Sprint completed successfully!", true);
        return;
    }
    
    // Check lose conditions
    const loseConditions = {
        budget: "Project exceeded budget.",
        timeline: "Deadline missed.",
        morale: "The team burned out.",
        trust: "Client terminated the contract."
    };
    
    for (const [stat, reason] of Object.entries(loseConditions)) {
        if (sprintGameState[stat] <= 0) {
            endSprintGame(reason, false);
            return;
        }
    }
    
    // Continue to next day
    setTimeout(nextSprintDay, 800);
}

// Get PM archetype based on performance
function getSprintArchetype() {
    const { budget, timeline, morale, trust } = sprintGameState;
    const day = sprintGameState.day;
    const stats = [budget, timeline, morale, trust];
    const statsUnder30 = stats.filter(s => s < 30).length;
    const avgStats = stats.reduce((a, b) => a + b, 0) / 4;
    
    // Special archetypes for completed sprint
    if (day >= 10) {
        if (stats.every(s => s > 70)) {
            return { icon: '🏆', name: 'Perfect PM', desc: 'Completed sprint with all metrics above 70!' };
        }
        if (avgStats > 60) {
            return { icon: '📊', name: 'Delivery Machine', desc: 'Balanced everything like a pro and delivered on time.' };
        }
        if (trust > 80) {
            return { icon: '🤝', name: 'Client Champion', desc: 'Maintained excellent client relationships throughout.' };
        }
        if (morale > 70) {
            return { icon: '😊', name: 'Team Hero', desc: 'Kept the team happy and motivated till the end.' };
        }
        if (budget > 70) {
            return { icon: '💰', name: 'Budget Master', desc: 'Delivered on time while staying within budget.' };
        }
        if (timeline > 70) {
            return { icon: '⏰', name: 'Time Keeper', desc: 'Managed timeline perfectly despite all challenges.' };
        }
        return { icon: '🎯', name: 'Sprint Survivor', desc: 'Made it through the full sprint - well done!' };
    }
    
    // Archetypes for failed sprints
    if (trust > 85 && budget < 30) {
        return { icon: '🤝', name: 'Client Pleaser', desc: 'Always protected client trust at any cost.' };
    }
    if (trust > 70 && morale < 30) {
        return { icon: '🔥', name: 'Firefighter PM', desc: 'High trust, but the team is exhausted.' };
    }
    if (budget > 70 && trust < 40) {
        return { icon: '💸', name: 'Budget Guardian', desc: 'Saved money, lost the client.' };
    }
    if (day >= 7 && statsUnder30 >= 2) {
        return { icon: '⚡', name: 'Chaos Survivor', desc: 'Survived sprint chaos with unstable stats.' };
    }
    
    return { icon: '🎯', name: 'Sprint Warrior', desc: 'Gave it your best shot.' };
}

// End the game
function endSprintGame(reason, isWin = false) {
    sprintGameState.isGameOver = true;
    
    const score = (sprintGameState.day * 20) + sprintGameState.budget + sprintGameState.timeline + sprintGameState.morale + sprintGameState.trust;
    const archetype = getSprintArchetype();
    
    // Update game over screen
    const titleEl = document.getElementById('game-over-title');
    const iconEl = document.getElementById('game-over-icon');
    const reasonEl = document.getElementById('game-over-reason');
    const daysEl = document.getElementById('final-days');
    const scoreEl = document.getElementById('final-score');
    const archetypeIconEl = document.getElementById('archetype-icon');
    const archetypeNameEl = document.getElementById('archetype-name');
    const archetypeDescEl = document.getElementById('archetype-desc');
    
    if (titleEl) {
        titleEl.textContent = isWin ? 'Sprint Success!' : 'Sprint Failed';
        titleEl.style.color = isWin ? '#5cb85c' : '#dc3c3c';
    }
    
    if (iconEl) {
        iconEl.textContent = isWin ? '🎉' : '💥';
    }
    
    if (reasonEl) reasonEl.textContent = reason;
    if (daysEl) daysEl.textContent = sprintGameState.day;
    if (scoreEl) scoreEl.textContent = score;
    if (archetypeIconEl) archetypeIconEl.textContent = archetype.icon;
    if (archetypeNameEl) archetypeNameEl.textContent = archetype.name;
    if (archetypeDescEl) archetypeDescEl.textContent = archetype.desc;
    
    showGameScreen('game-over');
}

// ===== CV Download Function =====
function downloadCV() {
    // Create a temporary link to download the CV HTML file
    // Note: For PDF conversion, you would typically use a service like Puppeteer or similar
    // For now, this downloads the HTML version which can be printed to PDF by the user
    const link = document.createElement('a');
    link.href = 'cv-viktoriia-zaremba.html';
    link.download = 'Viktoriia-Zaremba-CV.html';
    link.target = '_blank';
    
    // Trigger download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Show a message to the user
    setTimeout(() => {
        alert('CV downloaded! You can print it to PDF using your browser\'s print function (Ctrl/Cmd + P → Save as PDF).');
    }, 100);
}

// Make functions globally available
window.startSprintGame = startSprintGame;
window.restartSprintGame = restartSprintGame;
window.downloadCV = downloadCV;

// ===== EASTER EGG: STAKEHOLDER POPUP =====
let stakeholderTimer;
let lastActivity = Date.now();
const INACTIVITY_TIMEOUT = 30000; // 30 seconds

function resetStakeholderTimer() {
    lastActivity = Date.now();
    clearTimeout(stakeholderTimer);
    
    // Only set timer on home page
    if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
        stakeholderTimer = setTimeout(showStakeholderPopup, INACTIVITY_TIMEOUT);
    }
}

function showStakeholderPopup() {
    const popup = document.getElementById('stakeholder-popup');
    if (popup && !popup.classList.contains('active')) {
        popup.classList.add('active');
        // Prevent body scroll when popup is open
        document.body.style.overflow = 'hidden';
    }
}

function closeStakeholderPopup() {
    const popup = document.getElementById('stakeholder-popup');
    if (popup) {
        popup.classList.remove('active');
        // Restore body scroll
        document.body.style.overflow = '';
        // Reset timer after closing
        resetStakeholderTimer();
    }
}

// Track user activity
['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'].forEach(event => {
    document.addEventListener(event, resetStakeholderTimer, { passive: true });
});

// Close popup when clicking overlay (outside the popup)
document.addEventListener('click', (e) => {
    const popup = document.getElementById('stakeholder-popup');
    if (popup && e.target === popup) {
        closeStakeholderPopup();
    }
});

// Close popup with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeStakeholderPopup();
    }
});

// Start timer when page loads (only on home page)
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
    resetStakeholderTimer();
}

// Make close function globally available
window.closeStakeholderPopup = closeStakeholderPopup;

// ===== Auto-update footer year =====
document.addEventListener('DOMContentLoaded', () => {
    const footerCopy = document.querySelector('.footer-copy');
    if (footerCopy) {
        const currentYear = new Date().getFullYear();
        footerCopy.innerHTML = `© ${currentYear} Viktoriia Zaremba<br><span style="font-size: 0.75rem; color: var(--steel-blue); font-style: italic;">Built with coffee, Jira and controlled optimism.</span>`;
    }
});

// ===== Smooth scroll for game CTA and contact links =====
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href="#footer"]') || e.target.matches('a[href="#contact"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
