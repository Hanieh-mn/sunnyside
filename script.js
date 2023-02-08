const hambergurMenu = document.querySelector('.hambergur-menu');
const navigation = document.querySelector('.navigation');



hambergurMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');
})
