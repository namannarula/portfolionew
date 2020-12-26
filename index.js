$('document').ready(() => {
  const intersector = $('#intersector');
  const header = $('header');
  const headerContainer = $('.headerContainer')
  const options = {};
  const headerMenuIcon = $('.headerMenuIcon');
  let menuIsOpen = false;
  const menuItems = $('#menuItems');
  const headerHeight = header.height();
  const form = $('#usersForm');
  const formChildren = form.children('div').children();
  const errorMessage = $('#errorMessage');
  let errorMessageVisible = false;
  const showWorksButton = $('#showWorks');
  menuItems.fadeOut(0);
  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting === false) {
              header.css('backgroundColor', '#510A32');
              headerContainer.css('transform', 'scale(0.9)');
          } else {
              header.css('backgroundColor', 'transparent');
              headerContainer.css('transform', 'scale(1)');
          }
      });
  }, options);
  observer.observe(intersector[0]);
  const openMenu = () => {
      $(header).animate({
          height: `100vh`
      }, 100, () => {
          menuItems.fadeIn(100);
      });
      headerMenuIcon.css({
          'transform': 'rotate(360deg)',
          'backgroundImage': "url('./assets/cancelIcon.svg')",
          'backgroundPosition': 'center',
          'backgroundRepeat': 'noRepeat',
          'backgroundRepeat': 'noRepeat',
          'backgroundSize': '60%'
      })
      header.css('background', '#510A32');
      $('body').css('overflowY', 'hidden');
  }
  const closeMenu = () => {
      menuItems.fadeOut(400);
      $(header).animate({
          height: `${headerHeight}`
      }, 100, () => {
          menuItems.fadeOut(100);
      });
      $('body').css('overflowY', 'visible');
      headerMenuIcon.css({
          'transform': 'rotate(360deg)',
          'backgroundImage': "url('./assets/menuIcon.svg')",
          'backgroundPosition': 'center',
          'backgroundRepeat': 'noRepeat',
          'backgroundRepeat': 'noRepeat',
          'backgroundSize': '60%'
      })
  }
  showWorksButton.on('click', () => {
      if (!menuIsOpen) {
          openMenu();
          menuIsOpen = true;
      } else {
          closeMenu();
          menuIsOpen = false;
      }
  });
  headerMenuIcon.on('click', () => {
      if (!menuIsOpen) {
          openMenu();
          menuIsOpen = true;
      } else {
          closeMenu();
          menuIsOpen = false;
      }
  });
