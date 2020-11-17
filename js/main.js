


$(function(){
      $(".beforeafterdefault").cndkbeforeafter({
        mode:"drag",
        autoSliding:false,
        autoSlidingStopOnHover:true,
        theme:"dark",
        seperatorWidth:"4px",
        seperatorOpacity:"0.8",
        hoverEffect:false,
        showText:false,
        beforeTextPosition:"bottom-left",
        afterTextPosition:"bottom-right",
        beforeText:"BEFORE",
        afterText:"AFTER",
        

      });
    
    });
    


    $("ul.nav-tabs a").click(function (e) {
      e.preventDefault();  
        $(this).tab('show');
    });
    


   let ham = document.querySelector("#ham");
    
   ham.addEventListener("click", ()=>{
    document.querySelector(".menu").classList.toggle("active");
   })