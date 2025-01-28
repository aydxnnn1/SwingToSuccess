document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById('main-title');
    setTimeout(() => {
        title.style.fontSize = '3rem';
        title.style.opacity = '0.8';
    }, 1000);
});

function scrollToTop() {
    window.location.href = 'index.html';
}

function expandContent(element, details) {
    const expandedClass = 'expanded';
    const overlay = document.getElementById('overlay');
    const expandedElements = document.querySelectorAll('.' + expandedClass);

    expandedElements.forEach(el => el.classList.remove(expandedClass));
    if (!element.classList.contains(expandedClass)) {
        element.classList.add(expandedClass);
        overlay.style.display = 'block';
        document.body.classList.add('nothing');
        element.querySelector('p').innerHTML += `<br><br>${details}`;
    } else {
        overlay.style.display = 'none';
        document.body.classList.remove('blur');
    }
}

function shrinkContent() {
    const expandedClass = 'expanded';
    const expandedElements = document.querySelectorAll('.' + expandedClass);
    expandedElements.forEach(el => el.classList.remove(expandedClass));
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
    document.body.classList.remove('blur');
    document.querySelectorAll('.content p').forEach(p => p.innerHTML = p.innerHTML.split('<br><br>')[0]);
}
