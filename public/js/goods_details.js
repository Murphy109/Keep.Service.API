window.onload=function() {
    var mySwiper = new Swiper('.swiper-container', {
        autoHeight: true,
    });
    window.addEventListener("scroll",  function() {
        var lamp=1;
        if(document.body.scrollTop>50){
            if(lamp){
                lamp=0;
                document.querySelector(".bg").style.opacity=1;
                document.querySelector(".bg").style.transition="1s";
                document.querySelector(".h3").style.display="block";
                document.querySelector(".cdup").style.background="inherit";
                document.querySelector(".home").style.background="inherit";
                document.querySelector(".share").style.background="inherit";
            }
        }else{
            if(lamp==1){
                document.querySelector(".bg").style.opacity=0;
                document.querySelector(".h3").style.display="none";
                document.querySelector(".cdup").style.background="#584f60";
                document.querySelector(".home").style.background="#584f60";
                document.querySelector(".share").style.background="#584f60";
            }
        }
    });
}