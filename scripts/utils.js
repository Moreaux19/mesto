// функция открытия попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', escapeButtonClose);
  popup.addEventListener('click', overlayZoneClose);
}

// функция закрытия попапа
export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', escapeButtonClose);
}

// функция закрытия попапа по клавише Esc
function escapeButtonClose(evt) {
  const popup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape' && popup) {
    closePopup(popup);
  }
}

// функция закрытия попапа по клику на оверлей
function overlayZoneClose(evt) {
  const popup = evt.target;
  if (popup === evt.currentTarget) {
    closePopup(popup);
  }
}
