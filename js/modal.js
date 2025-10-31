const modal = document.querySelector('.backdrop');
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open'); // усі кнопки
const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

// вішаємо на всі кнопки
modalBtnsOpen.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

modalBtnClose.addEventListener('click', toggleModal);