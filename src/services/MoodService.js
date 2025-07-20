export class MoodService {
    constructor() {
        this.moodPlaylists = {
            happy: [
                { id: '1', name: 'Happy', artist: 'Pharrell Williams', uri: 'https://open.spotify.com/track/60nZcImufyMA1MKQY3dcCH', image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '2', name: 'Good as Hell', artist: 'Lizzo', uri: 'https://open.spotify.com/track/1PckUlxKqWQs3RlWXVBLw3', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '3', name: 'Can\'t Stop the Feeling!', artist: 'Justin Timberlake', uri: 'https://open.spotify.com/track/20I6sIOMTCkB6w7ryavxtO', image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '4', name: 'Uptown Funk', artist: 'Mark Ronson ft. Bruno Mars', uri: 'https://open.spotify.com/track/32OlwWuMpZ6b0aN2RZOeMS', image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '5', name: 'Walking on Sunshine', artist: 'Katrina and the Waves', uri: 'https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0', image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' }
            ],
            sad: [
                { id: '6', name: 'Someone Like You', artist: 'Adele', uri: 'https://open.spotify.com/track/1zwMYTA5nlNjZxYrvBB2pV', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '7', name: 'Mad World', artist: 'Gary Jules', uri: 'https://open.spotify.com/track/3JOVTQ5h8HGFnDdp4VT3MP', image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '8', name: 'Hurt', artist: 'Johnny Cash', uri: 'https://open.spotify.com/track/5YKTJqnKyhPKWZHeHYKFSG', image: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '9', name: 'Black', artist: 'Pearl Jam', uri: 'https://open.spotify.com/track/6QgjcU0zLnzq5OrUoSZ3OK', image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '10', name: 'Tears in Heaven', artist: 'Eric Clapton', uri: 'https://open.spotify.com/track/4bHsxqR3GMrXTxEPLuK5ue', image: 'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' }
            ],
            energetic: [
                { id: '11', name: 'Thunder', artist: 'Imagine Dragons', uri: 'https://open.spotify.com/track/0tBbt8CrmxbjRP0pueQkyU', image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '12', name: 'Pump It', artist: 'The Black Eyed Peas', uri: 'https://open.spotify.com/track/3ZOEytgrvLwQaqXreDs2Jx', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '13', name: 'Eye of the Tiger', artist: 'Survivor', uri: 'https://open.spotify.com/track/2KH16WveTQWT6KOG9Rg6e2', image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '14', name: 'Don\'t Stop Me Now', artist: 'Queen', uri: 'https://open.spotify.com/track/5T8EDUDqKcs6OSOwEsfqG7', image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '15', name: 'Stronger', artist: 'Kelly Clarkson', uri: 'https://open.spotify.com/track/0jNDKpxDNKnZUEhKPxzUzc', image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' }
            ],
            relaxed: [
                { id: '16', name: 'Weightless', artist: 'Marconi Union', uri: 'https://open.spotify.com/track/6p0q6MoCBzBHgbCGAcRIbH', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '17', name: 'Clair de Lune', artist: 'Claude Debussy', uri: 'https://open.spotify.com/track/4Iho4MyroV1NhOOU2wkEbU', image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '18', name: 'River', artist: 'Joni Mitchell', uri: 'https://open.spotify.com/track/3qQbCzHBycnDpGskqOWY0E', image: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '19', name: 'Mad About You', artist: 'Sting', uri: 'https://open.spotify.com/track/1Je1IMUlBXcx1Fz0WE7oPT', image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '20', name: 'The Night We Met', artist: 'Lord Huron', uri: 'https://open.spotify.com/track/7qEHsqek33rTcFNT9PFqLf', image: 'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' }
            ],
            romantic: [
                { id: '21', name: 'Perfect', artist: 'Ed Sheeran', uri: 'https://open.spotify.com/track/0tgVpDi06FyKpA1z0VMD4v', image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '22', name: 'All of Me', artist: 'John Legend', uri: 'https://open.spotify.com/track/3U4isOIWM3VvDubwSI3y7a', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '23', name: 'Thinking Out Loud', artist: 'Ed Sheeran', uri: 'https://open.spotify.com/track/lAhHNCfA8xet4YAWAWjmAP', image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '24', name: 'Make You Feel My Love', artist: 'Adele', uri: 'https://open.spotify.com/track/4WXKOPKheuEqsIlLbFYjfG', image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '25', name: 'At Last', artist: 'Etta James', uri: 'https://open.spotify.com/track/5HNCy40Ni5BZJFw1TKzRsC', image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' }
            ],
            angry: [
                { id: '26', name: 'Break Stuff', artist: 'Limp Bizkit', uri: 'https://open.spotify.com/track/3YRCqOhFifThpXOEI5jldM', image: 'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '27', name: 'Bodies', artist: 'Drowning Pool', uri: 'https://open.spotify.com/track/0VgkVdmE4gld66l8iyGjgx', image: 'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '28', name: 'Chop Suey!', artist: 'System of a Down', uri: 'https://open.spotify.com/track/2DlHlPMa4M17kufBvI2lEN', image: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '29', name: 'Killing in the Name', artist: 'Rage Against the Machine', uri: 'https://open.spotify.com/track/59WN2psjkt1tyaxjspN8fp', image: 'https://images.pexels.com/photos/1708936/pexels-photo-1708936.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
                { id: '30', name: 'Du Hast', artist: 'Rammstein', uri: 'https://open.spotify.com/track/6C4LXC9UFH1IKiHYOp0BiJ', image: 'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' }
            ]
        };
    }

    async getSongsByMood(mood) {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        const songs = this.moodPlaylists[mood.toLowerCase()] || this.moodPlaylists.happy;
        return songs;
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

    getMoodDescription(mood) {
        const descriptions = {
            happy: 'Uplifting songs to brighten your day',
            sad: 'Melancholic tunes for when you need to feel understood',
            energetic: 'High-energy tracks to pump you up',
            relaxed: 'Calm and soothing music for peaceful moments',
            romantic: 'Love songs for those special feelings',
            angry: 'Intense music to channel your emotions'
        };
        return descriptions[mood.toLowerCase()] || 'Great music for any mood';
    }
}