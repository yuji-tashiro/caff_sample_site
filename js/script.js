jQuery(function($) {
   $('.p-bg-slider').bgSwitcher({
      images: ['img/cafe_front.jpg','img/cafe_front1.jpg','img/cafe_front2.jpg'], // 切替背景画像を指定
      interval: 6000, // 背景画像を切り替える間隔を指定 3000=3秒
      loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
      shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
      effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
      duration: 2500, // エフェクトの時間を指定します。
      easing: "linear" // エフェクトのイージングをlinear,swingから指定
   });
   $(".c-hamburger--open").click(function(){
      $(".p-overlay").fadeToggle(200);
      $(this).toggleClass("c-hamburger--open").toggleClass("c-hamburger--close");
   });
   $('.p-overlay').on('click', function(){
      $(".p-overlay").fadeToggle(200);   
      $(".c-hamburger--open").toggleClass('c-hamburger--open').toggleClass('c-hamburger--close');
      open = false;
   });
});