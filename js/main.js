$(function () {
  // выравнивание карточек  по  высоте
  function GreatBalancer(block) {
    var wrapWidth = $(block).parent().width(), // 1
      blockWidth = $(block).width(), // 2
      wrapDivide = Math.floor(wrapWidth / blockWidth), // 3
      cellArr = $(block);
    for (var arg = 1; arg <= arguments.length; arg++) { // 4.1
      for (var i = 0; i <= cellArr.length; i = i + wrapDivide) {
        var maxHeight = 0,
          heightArr = [];
        for (j = 0; j < wrapDivide; j++) { // 4.2
          heightArr.push($(cellArr[i + j]).find(arguments[arg]));
          if (heightArr[j].outerHeight() > maxHeight) {
            maxHeight = heightArr[j].outerHeight();
          }
        }
        for (var counter = 0; counter < heightArr.length; counter++) { // 4.3
          $(cellArr[i + counter]).find(arguments[arg]).outerHeight(maxHeight);
        }
      }
    }
  }
  GreatBalancer(".blog__item", ".blog__title", ".blog__category");

  //  табы
  let filter = $("[data-filter]");
  filter.on("click", function (event) {
    event.preventDefault();

    let cat = $(this).data("filter");
    if (cat == "All") {
      $("[data-cat]").removeClass("hide");

    } else {
      $("[data-cat]").each(function () {
        let workCat = $(this).data("cat");
        if (workCat != cat) {

          $(this).addClass("hide");

        } else {
          $(this).removeClass("hide");

        }

      });
    }
  });


  // модальные окна
  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");


  modalCall.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalId = $this.data("modal")
    $(modalId).addClass("show");
    $("body").addClass("no-scroll");
    
    setTimeout(function () {
      $(modalId).find(".modal__dialog").css({
        transform: "rotateX(0deg)"
      })
    }, 200);
  
  //  СТРЕЛКИ СЛАЙДЕРА

$('.work__slider').slick({
 
  infinite:false,

 slidesToShow: 1,
 slidesToScroll: 1, 
 dots: true,  
 
});
  
  });

  modalClose.on("click", function (event) {
    event.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents(".modal")

    modalParent.find(".modal__dialog").css({
      transform: "rotateX(90deg)"
    });


    setTimeout(function () {
      modalParent.removeClass("show");
      $("body").removeClass("no-scroll");
    }, 1000);
    $('.work__slider').slick('unslick');
  });

  $(".modal").on("click", function (event) {
    let $this = $(this);

    $this.find(".modal__dialog").css({
      transform: "rotateX(90deg)"
    });

    setTimeout(function () {
      $this.removeClass("show");
      $("body").removeClass("no-scroll");

    }, 1000);
    $('.work__slider').slick('unslick');
  });

  $(".modal__dialog").on("click", function (event) {
    event.stopPropagation();
  });

// mobile  nav
  const navToggle=$("#navToggle");
  const nav=$("#nav");

  navToggle.on("click",function(event){
    event .preventDefault();
    nav .toggleClass("show");
    $('.nav__link').on('click', function(){
      $('.header__top-nav').removeClass('show');
      $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $("#nav"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
              $('.header__top-nav').removeClass('show');
        }
      });
  });

  })
  $("#nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
    
});
});