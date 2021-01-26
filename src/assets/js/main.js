const accordionItems = document.querySelectorAll('.accordion__item');
const accordionHeading = document.querySelector('.accordion__item-title');
const accordionContent = document.querySelector('.accordion__item-cont');

accordionItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    showAccPanel(e);
  });
});

function showAccPanel(e) {
  let target = e.currentTarget;

  if (!target.classList.contains('active')) {
    accordionItems.forEach((item) => {
      item.classList.remove('active');
    });
    target.classList.toggle('active');
  } else {
    target.classList.remove('active');
  }
}
