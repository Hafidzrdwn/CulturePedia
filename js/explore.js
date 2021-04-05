$(document).ready(function(){

    $(".page-scroll").on("click", function (e) {
        //ambil isi href
        let tujuan = $(this).attr("href");
    
        //tangkap elemen yang dituju
        let elemenTujuan = $(tujuan);
    
        //pindahkan scroll
        $("html, body").animate(
          {
            scrollTop: elemenTujuan.offset().top,
          },
        800
        );
    
        e.preventDefault();
      });
    
      $(document).on('click','.nav-link',function(){
        $(this).addClass('active').siblings().removeClass('active');
      });



});