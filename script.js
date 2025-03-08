// Add event listeners to boxes
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', (e) => {
        console.log(`Clicked on: ${e.target.textContent}`);
    });
}); 