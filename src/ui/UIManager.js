export class UIManager {
    constructor() {
        this.app = document.getElementById('app');
        this.currentView = null;
    }

    renderLoginPage(handlers) {
        this.app.innerHTML = `
            <div class="background-animation">
                <div class="floating-note">♪</div>
                <div class="floating-note">♫</div>
                <div class="floating-note">♪</div>
                <div class="floating-note">♬</div>
            </div>

            <div class="login-container">
                <div class="logo">🎵 Moodlify</div>
                <div class="tagline">"Your soundtrack to every feeling"</div>

                <h1 class="welcome-text">Welcome Back!</h1>
                <p class="subtitle">Connect with Spotify to discover music that matches your mood perfectly</p>

                <button id="spotifyLoginBtn" class="spotify-btn">
                    <svg class="spotify-icon" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.32 11.28-1.08 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Continue with Spotify
                </button>

                <div class="divider">
                    <span>or</span>
                </div>

                <button id="registerBtn" class="register-btn">
                    Create New Spotify Account
                </button>

                <div class="footer-text">
                    By continuing, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </div>
            </div>
        `;

        // Add event listeners
        document.getElementById('spotifyLoginBtn').addEventListener('click', handlers.onSpotifyLogin);
        document.getElementById('registerBtn').addEventListener('click', () => {
            window.open('https://www.spotify.com/signup/', '_blank');
        });

        this.currentView = 'login';
    }

    renderHomePage(handlers) {
        this.app.innerHTML = `
            <div class="background-animation">
                <div class="floating-note">♪</div>
                <div class="floating-note">♫</div>
                <div class="floating-note">♪</div>
                <div class="floating-note">♬</div>
                <div class="floating-note">♩</div>
            </div>

            <header class="header">
                <div class="logo">🎵 Moodlify</div>
                <div class="user-info">
                    <span>Welcome back, ${handlers.user.name}!</span>
                    <img src="${handlers.user.avatar}" alt="User Avatar" class="user-avatar">
                    <button id="logoutBtn" class="logout-btn">Logout</button>
                </div>
            </header>

            <main class="main-content">
                <section class="welcome-section">
                    <h1 class="welcome-title">How are you feeling today?</h1>
                    <p class="welcome-subtitle">Tell us your mood and we'll find the perfect soundtrack for you</p>
                </section>

                <section class="mood-selector">
                    <h2>🎭 Select Your Mood</h2>
                    <div class="mood-form">
                        <div class="mood-dropdown">
                            <select id="moodSelect" class="mood-select">
                                <option value="">Choose your mood...</option>
                                <option value="happy">😊 Happy</option>
                                <option value="sad">😢 Sad</option>
                                <option value="energetic">⚡ Energetic</option>
                                <option value="relaxed">😌 Relaxed</option>
                                <option value="romantic">💕 Romantic</option>
                                <option value="angry">😤 Angry</option>
                            </select>
                            <div class="dropdown-arrow">▼</div>
                        </div>

                        <button id="findMusicBtn" class="find-music-btn" disabled>
                            🎵 Find My Music
                        </button>
                    </div>
                </section>

                <div id="loadingIndicator" class="loading-indicator">
                    <div class="loading-spinner"></div>
                    <p id="loadingText">Loading...</p>
                </div>

                <div id="moodIndicator" class="mood-indicator">
                    <p id="moodText"></p>
                </div>

                <section id="recommendations" class="recommendations">
                    <h3 id="recommendationsTitle">🎶 Perfect Songs for Your Mood</h3>
                    <div id="songsGrid" class="songs-grid">
                        <!-- Songs will be dynamically inserted here -->
                    </div>
                </section>
            </main>
        `;

        // Add event listeners
        const moodSelect = document.getElementById('moodSelect');
        const findMusicBtn = document.getElementById('findMusicBtn');

        moodSelect.addEventListener('change', function() {
            findMusicBtn.disabled = !this.value;
        });

        findMusicBtn.addEventListener('click', () => {
            const selectedMood = moodSelect.value;
            if (selectedMood) {
                handlers.onMoodSelect(selectedMood);
            }
        });

        document.getElementById('logoutBtn').addEventListener('click', handlers.onLogout);

        this.currentView = 'home';
    }

    showLoading(message) {
        const loadingIndicator = document.getElementById('loadingIndicator');
        const loadingText = document.getElementById('loadingText');
        
        if (loadingIndicator && loadingText) {
            loadingText.textContent = message;
            loadingIndicator.classList.add('show');
        }
    }

    hideLoading() {
        const loadingIndicator = document.getElementById('loadingIndicator');
        if (loadingIndicator) {
            loadingIndicator.classList.remove('show');
        }
    }

    displaySongs(songs, mood) {
        this.hideLoading();
        
        const moodIndicator = document.getElementById('moodIndicator');
        const moodText = document.getElementById('moodText');
        const recommendations = document.getElementById('recommendations');
        const songsGrid = document.getElementById('songsGrid');
        const recommendationsTitle = document.getElementById('recommendationsTitle');

        if (!moodIndicator || !songsGrid) return;

        // Show mood indicator
        const moodEmoji = this.getMoodEmoji(mood);
        moodText.textContent = `${moodEmoji} Found ${songs.length} perfect ${mood} songs for you!`;
        moodIndicator.classList.add('show');

        // Update recommendations title
        recommendationsTitle.textContent = `🎶 ${mood.charAt(0).toUpperCase() + mood.slice(1)} Songs Just for You`;

        // Clear previous songs
        songsGrid.innerHTML = '';

        // Add songs
        songs.forEach(song => {
            const songCard = document.createElement('div');
            songCard.className = 'song-card';
            songCard.innerHTML = `
                <div class="song-image">
                    <img src="${song.image}" alt="${song.name}" loading="lazy">
                    <div class="play-overlay">
                        <button class="play-btn-overlay" onclick="window.open('${song.uri}', '_blank')">
                            ▶️
                        </button>
                    </div>
                </div>
                <div class="song-info">
                    <h4 class="song-title">${song.name}</h4>
                    <p class="song-artist">${song.artist}</p>
                    <button class="play-btn" onclick="window.open('${song.uri}', '_blank')">
                        ▶️ Play on Spotify
                    </button>
                </div>
            `;
            songsGrid.appendChild(songCard);
        });

        recommendations.classList.add('show');
    }

    showError(message) {
        this.hideLoading();
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <div class="error-content">
                <span class="error-icon">❌</span>
                <p>${message}</p>
                <button onclick="this.parentElement.parentElement.remove()" class="error-close">×</button>
            </div>
        `;
        
        document.body.appendChild(errorDiv);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentElement) {
                errorDiv.remove();
            }
        }, 5000);
    }

    getMoodEmoji(mood) {
        const emojis = {
            happy: '😊',
            sad: '😢',
            energetic: '⚡',
            relaxed: '😌',
            romantic: '💕',
            angry: '😤'
        };
        return emojis[mood.toLowerCase()] || '🎵';
    }
}