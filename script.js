// Add event listeners to boxes
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', (e) => {
        console.log(`Clicked on: ${e.target.textContent}`);
    });
});

// Handle mobile layout
function handleMobileLayout() {
    const isMobile = window.innerWidth <= 768;
    const profileImages = document.querySelector('.profile-images');
    const leftProfile = document.querySelector('.left-profile');
    const rightProfile = document.querySelector('.right-profile');

    if (isMobile) {
        // Adjust profile image positions for mobile
        profileImages.style.display = 'flex';
        profileImages.style.justifyContent = 'space-between';
        
        // Set specific heights for mobile view
        leftProfile.style.height = '40vh';
        rightProfile.style.height = '40vh';
        
        // Adjust positions
        leftProfile.style.transform = 'translateY(20%)';
        rightProfile.style.transform = 'translateY(-20%)';
    } else {
        // Reset styles for desktop
        profileImages.style.display = '';
        profileImages.style.justifyContent = '';
        leftProfile.style.height = '';
        rightProfile.style.height = '';
        leftProfile.style.transform = '';
        rightProfile.style.transform = '';
    }
}

// Run on load and resize
window.addEventListener('load', handleMobileLayout);
window.addEventListener('resize', handleMobileLayout);

// Prevent zoom on double tap for mobile devices
document.addEventListener('touchend', function(event) {
    event.preventDefault();
    event.target.click();
}, false); 