window.addEventListener("scroll",  function() {
    var lamp=1;
    if(document.body.scrollTop>50){
        if(lamp){
            lamp=0;
            document.querySelector(".bg").style.opacity=1;
            document.querySelector(".bg").style.transition="1s";
            document.querySelector(".h3").style.display="block";
        }
    }else{
        if(lamp==1){
            document.querySelector(".bg").style.opacity=0;
            document.querySelector(".h3").style.display="none";
        }
    }
});