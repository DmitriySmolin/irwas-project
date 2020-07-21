import { checkNumInputs } from './checkNumInputs';
export const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img');
  const windowWidth = document.querySelectorAll('#width');
  const windowHeight = document.querySelectorAll('#height');
  const windowType = document.querySelectorAll('#view_type');
  const windowProfile = document.querySelectorAll('.checkbox');

  checkNumInputs('#width');
  checkNumInputs('#height');

  function bindActionToElems(elem, event, prop) {
    elem.forEach((item, i) => {
      item.addEventListener(event, () => {
        switch (item.tagName) {
          case 'SPAN':
            state[prop] = i;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              state[prop] = item.nextElementSibling.id;
              elem.forEach((checkbox, j) => {
                i === j ? (checkbox.checked = true) : (checkbox.checked = false);
              });
            } else state[prop] = item.value;
            break;
          case 'SELECT':
            state[prop] = item.value;
            break;
        }
      });
    });
  }

  bindActionToElems(windowForm, 'click', 'form');
  bindActionToElems(windowWidth, 'input', 'width');
  bindActionToElems(windowHeight, 'input', 'height');
  bindActionToElems(windowType, 'change', 'type');
  bindActionToElems(windowProfile, 'change', 'profile');
};
