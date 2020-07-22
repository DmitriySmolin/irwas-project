export const images = () => {
  const imgPopup = document.createElement('div');
  const workSection = document.querySelector('.works');
  const bigImg = document.createElement('img');

  imgPopup.classList.add('imgPopup');
  imgPopup.append(bigImg);
  workSection.append(imgPopup);

  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';

  workSection.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      const path = target.parentNode.getAttribute('href');
      bigImg.setAttribute('src', path);
    }

    if (target && target.matches('div.imgPopup')) {
      imgPopup.style.display = 'none';
    }
  });
};