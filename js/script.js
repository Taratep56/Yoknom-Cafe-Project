// JS here

document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('show');
})

const cursor = document.querySelector('.cursor');
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
});