window.addEventListener('DOMContentLoaded', () => {
  const tabcontent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsAll = document.querySelector('.tabheader__items');

  function hideTabsContent() {
    tabcontent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
      });
  }

  function showTabsContent(i = 0) {
    tabcontent[i].classList.add('show', 'fade');
    tabcontent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabsContent();
  showTabsContent();

  tabsAll.addEventListener('click', (e) =>{
    const target = e.target;

    if (target && target.classList.contains('tabheader__item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          showTabsContent(i);
        }
      });
    }
  });
});