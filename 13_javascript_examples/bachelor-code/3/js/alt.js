const contestants = document.querySelectorAll('.contestant');

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose));

function checkForRose(element) {
    if (element.target.classList.contains('rose')) {
        document.querySelector('#nikki').classList.toggle('hidden')
    } else {
        alert('Wrong')
    }
}