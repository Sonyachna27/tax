const menuBtn = document.querySelector('.menuBtns');
  
  menuBtn.addEventListener('click' , () => document.querySelector('html').classList.toggle('open'));
  
const accordionItems = document.querySelectorAll('.services__container-accord-item');

    accordionItems.forEach(item => {
      item.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  