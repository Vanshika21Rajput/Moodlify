import { AuthManager } from './auth/AuthManager.js';
import { UIManager } from './ui/UIManager.js';
import { MoodService } from './services/MoodService.js';

class MoodlifyApp {
    constructor() {
        this.authManager = new AuthManager();
        this.uiManager = new UIManager();
        this.moodService = new MoodService();
        this.currentUser = null;
        
        this.init();
    }

    async init() {
        // Check if user is already authenticated
        const token = this.authManager.getStoredToken();
        if (token) {
            this.currentUser = await this.authManager.getCurrentUser(token);
            if (this.currentUser) {
                this.showHomePage();
                return;
            }
        }
        
        this.showLoginPage();
    }

    showLoginPage() {
        this.uiManager.renderLoginPage({
            onSpotifyLogin: () => this.handleSpotifyLogin()
        });
    }

    showHomePage() {
        this.uiManager.renderHomePage({
            user: this.currentUser,
            onMoodSelect: (mood) => this.handleMoodSelection(mood),
            onLogout: () => this.handleLogout()
        });
    }

    async handleSpotifyLogin() {
        try {
            // Simulate Spotify OAuth flow
            this.uiManager.showLoading('Connecting to Spotify...');
            
            // In a real app, this would redirect to Spotify OAuth
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Simulate successful authentication
            const mockUser = {
                id: 'user123',
                name: 'Music Lover',
                email: 'user@example.com',
                avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
            };
            
            const mockToken = 'mock_spotify_token_' + Date.now();
            this.authManager.storeToken(mockToken);
            this.currentUser = mockUser;
            
            this.showHomePage();
        } catch (error) {
            this.uiManager.showError('Failed to connect to Spotify. Please try again.');
        }
    }

    async handleMoodSelection(mood) {
        try {
            this.uiManager.showLoading(`Finding ${mood} songs for you...`);
            
            const songs = await this.moodService.getSongsByMood(mood);
            this.uiManager.displaySongs(songs, mood);
        } catch (error) {
            this.uiManager.showError('Failed to load songs. Please try again.');
        }
    }

    handleLogout() {
        this.authManager.clearToken();
        this.currentUser = null;
        this.showLoginPage();
    }
}

// Initialize the app
new MoodlifyApp();