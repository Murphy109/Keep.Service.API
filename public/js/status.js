window.onload=function(){
    var mySwiper1 = new Swiper ('.swiper-container1', {
        autoHeight: true
    });
    var mySwiper2 = new Swiper ('.swiper-container2', {
        autoplay:3000,
        loop:true
    });

    window.addEventListener("touchend",  function() {
        var lis = document.querySelector(".status_nav").childNodes[1].childNodes;
        var lisArr = [];
        //console.log(lis)
        for (var i = 0; i < lis.length; i++) {
            if (lis[i].nodeType == 1) {
                lisArr.push(lis[i]);
            }
        }
        for (var j = 0; j < lisArr.length; j++) {

            lisArr[j].style.borderBottom = "0.08rem solid #fff";
            if(j==mySwiper1.activeIndex){
                lisArr[mySwiper1.activeIndex].style.borderBottom = "0.08rem solid #584f60";
            }
        };
        jQuery(".status_nav ul").on("click","li",function(){
            jQuery(this).css("border-bottom", "0.06rem solid #584f60");
            jQuery(this).siblings().css("border-bottom", "0.06rem solid #fff");
            var num=jQuery(this).index();
            mySwiper1.slideTo(num, 1000, false);
        })
    });
};
