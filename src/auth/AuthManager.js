export class AuthManager {
    constructor() {
        this.tokenKey = 'moodlify_token';
    }

    storeToken(token) {
        localStorage.setItem(this.tokenKey, token);
    }

    getStoredToken() {
        return localStorage.getItem(this.tokenKey);
    }

    clearToken() {
        localStorage.removeItem(this.tokenKey);
    }

    async getCurrentUser(token) {
        // Simulate API call to get user info
        if (token && token.startsWith('mock_spotify_token_')) {
            return {
                id: 'user123',
                name: 'Music Lover',
                email: 'user@example.com',
                avatar: 'https://images.pexels.com/photos/1674752/pexels-photo-1674752.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
            };
        }
        return null;
    }

    // In a real app, this would handle the Spotify OAuth flow
    async initiateSpotifyAuth() {
        const clientId = 'your_spotify_client_id';
        const redirectUri = encodeURIComponent(window.location.origin + '/callback');
        const scopes = encodeURIComponent('user-read-private user-read-email playlist-read-private user-library-read user-read-recently-played user-top-read');
        
        const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes}&show_dialog=true`;
        
        // This would redirect to Spotify
        // window.location.href = authUrl;
        
        // For demo purposes, we'll simulate the flow
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('mock_token_' + Date.now());
            }, 2000);
        });
    }
}