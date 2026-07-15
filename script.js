const gift = document.querySelector('#gift');

function openGift() {
  if (document.body.classList.contains('opened')) return;

  document.body.classList.add('opened');
  gift.setAttribute('aria-expanded', 'true');
  gift.setAttribute('aria-label', 'Presente aberto');
}

gift.addEventListener('click', openGift);

gift.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    openGift();
  }
});
