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
        // Reset flex styles
        profileImages.style.display = 'block';
        profileImages.style.justifyContent = '';
        
        // Position images
        leftProfile.style.position = 'fixed';
        leftProfile.style.top = '0';
        leftProfile.style.left = '0';
        leftProfile.style.height = '40vh';
        leftProfile.style.transform = 'none';
        
        rightProfile.style.position = 'fixed';
        rightProfile.style.bottom = '0';
        rightProfile.style.right = '0';
        rightProfile.style.height = '40vh';
        rightProfile.style.transform = 'none';
    } else {
        // Reset to desktop styles
        profileImages.style.display = '';
        leftProfile.style.position = '';
        leftProfile.style.top = '';
        leftProfile.style.left = '';
        leftProfile.style.height = '';
        leftProfile.style.transform = '';
        
        rightProfile.style.position = '';
        rightProfile.style.bottom = '';
        rightProfile.style.right = '';
        rightProfile.style.height = '';
        rightProfile.style.transform = '';
    }
}

// Run on load and resize
window.addEventListener('load', handleMobileLayout);
window.addEventListener('resize', handleMobileLayout);

// Prevent zoom on double tap for mobile devices
document.addEventListener('touchend', function(event) {
    if (event.target.classList.contains('box')) {
        event.preventDefault();
        event.target.click();
    }
}, false); 