// This script fetches team data from the main website and updates the footer dynamically
// For demonstration purposes, we're using placeholder data
// In a real implementation, this would fetch from www.team4stack.com

async function fetchTeamData() {
    try {
        // In a real implementation, this would fetch from your website:
        // const response = await fetch('https://www.team4stack.com/api/team');
        // const teamData = await response.json();
        
        // Placeholder data for demonstration
        const teamData = {
            members: [
                {
                    id: 1,
                    name: "M.Sami Khan",
                    role: "Co-Founder & CEO",
                    bio: "Visionary leader with 15+ years in software development and business management.",
                    image: "https://via.placeholder.com/100x100/007bff/ffffff.png?text=MS",
                    social: {
                        linkedin: "#",
                        twitter: "#",
                        github: "#"
                    }
                },
                {
                    id: 2,
                    name: "Aftab Akram",
                    role: "Co-Founder & CTO",
                    bio: "Technical innovation expert in full-stack development and cloud architecture.",
                    image: "https://via.placeholder.com/100x100/28a745/ffffff.png?text=AA",
                    social: {
                        linkedin: "#",
                        twitter: "#",
                        github: "#"
                    }
                },
                {
                    id: 3,
                    name: "M.Hasnain",
                    role: "Co-Founder & Lead Developer",
                    bio: "Expert in web technologies and mobile application development.",
                    image: "https://via.placeholder.com/100x100/dc3545/ffffff.png?text=MH",
                    social: {
                        linkedin: "#",
                        twitter: "#",
                        github: "#"
                    }
                },
                {
                    id: 4,
                    name: "Faiz Ahmad",
                    role: "Co-Founder & UX Director",
                    bio: "User experience and design specialist focused on intuitive interfaces.",
                    image: "https://via.placeholder.com/100x100/fd7e14/ffffff.png?text=FA",
                    social: {
                        linkedin: "#",
                        twitter: "#",
                        github: "#"
                    }
                }
            ]
        };
        
        return teamData;
    } catch (error) {
        console.error('Error fetching team data:', error);
        // Fallback data
        return {
            members: []
        };
    }
}

// Function to update the footer with team data
async function updateFooterTeamInfo() {
    const teamData = await fetchTeamData();
    const teamContainer = document.getElementById('dynamic-team-members');
    
    if (!teamContainer) return;
    
    if (teamData.members.length === 0) {
        teamContainer.innerHTML = '<p>Team information currently unavailable.</p>';
        return;
    }
    
    let teamHTML = '';
    teamData.members.forEach(member => {
        teamHTML += `
            <div class="footer-team-member">
                <img src="${member.image}" alt="${member.name}" class="footer-member-image" onerror="this.src='https://via.placeholder.com/100x100/6c757d/ffffff.png?text=${encodeURIComponent(member.name.charAt(0))}';">
                <div class="footer-member-info">
                    <h4>${member.name}</h4>
                    <p class="footer-member-role">${member.role}</p>
                </div>
            </div>
        `;
    });
    
    teamContainer.innerHTML = teamHTML;
}

// Initialize when the page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
        updateFooterTeamInfo();
    });
} else {
    // Document is already loaded
    updateFooterTeamInfo();
}