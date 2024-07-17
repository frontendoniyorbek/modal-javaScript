const elOpenModal = document.querySelector('.open-modal');
const elModal = document.querySelector('.modal');
const elCloseModal = document.querySelector('.modal__icon');

function add() {
	elModal.classList.add('open');
	elOpenModal.classList.add('close');
}

function remove() {
	elModal.classList.remove('open');
	elOpenModal.classList.remove('close');
}

elOpenModal.addEventListener('click', () => {
	add();
});

elCloseModal.addEventListener('click', () => {
	remove();
});

document.addEventListener('keydown', e => {
	console.log(e.key);
	if (e.key === 'Escape') {
		remove();
	}
});
