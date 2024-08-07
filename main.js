document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');

    function changeHeaderBackground() {
        const colors = [
            ['#ff6b6b', '#ffcc00', '#6bff6b', '#6bcfff', '#b66bff'],
            ['#ff9671', '#ffc75f', '#f9f871', '#ffb5e8', '#c5e1a5'],
            ['#84fab0', '#8fd3f4', '#a18cd1', '#fbc2eb', '#fcb69f'],
            ['#ff9a9e', '#fad0c4', '#fad0c4', '#ffecd2', '#fcfcfc']
        ];

        const randomColorIndex = Math.floor(Math.random() * colors.length);
        const selectedColors = colors[randomColorIndex];

        header.style.background = `linear-gradient(90deg, ${selectedColors.join(', ')})`;
        header.style.backgroundSize = '500% 500%';
    }

    changeHeaderBackground();

    // Change the background color every time the page is loaded
    window.addEventListener('load', changeHeaderBackground);
});
