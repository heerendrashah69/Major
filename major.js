function init(){
    gsap.registerPlugin(ScrollTrigger);

    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
    
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
        
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
    

}
var a = -200
setInterval(function(){
    if(a >= -1200){
        gsap.to("#inner h1",{
            opacity:1
        })
        gsap.to("#inner h1",{
            opacity:1,
            delay:1,
            y:a+"%"
        })
    } else{
        a = 0
        gsap.to("#inner h1",{
            opacity:0,
            duration:0,
            y:"0%"
        })
    }
    a -= 200
},2000)




init()


gsap.from("#nav",{
    y:-100,
    duration:0.8,
    delay:0.2,
    opacity:0
})
gsap.from("#gola",{
    y:-500,
    duration:1.2,
    delay:0.6,
    opacity:0
})
gsap.from("#platform",{
    y:200,
    duration:0.9,
    delay:0,
    opacity:0
})
gsap.from("#page1>h1",{
    y:15,
    duration:1,
    delay:0.2,
    opacity:0
})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top -5%",
        scrub:3
    }
})
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        // markers:true,
        start:"top -525%",  
        end:"top -545%",
        // 600 625
        scrub:3
    }
})

tl.to("#gola",{
    left:"90%",
    rotate:540,
    top:"70vh",
    duration:2
},"anim1")

tl.to("#platform",{
        rotate: 18,
 },"anim1")
tl.to("#page2-in h1",{
    delay:0.7,
    onUpdate:function(){
        $('#page2-in h1').textillate({ in: { effect: 'fadeInUp' } });
    }
 },"anim1")

 

tl2.to("#platform",{
    rotate:0
},"anim1")

tl.to("#page2-circle svg .snake__text-path",{
    onStart:function snake(){
        var a = document.querySelector("#page2-circle svg .snake__text-path")
        var b = 100
        if(b>0){
            setInterval(() => {
                a.setAttribute("startOffset",`${b--}%`)
            },50);
        }
    }
},"anim1")

tl2.to("#safed-gola",{
    scale:10
},"anim2")

tl2.to("#page5 h1",{
    delay:3,
    onUpdate:function(){
        $('#page5 h1').textillate({ in: { effect: 'fadeInUp' } });
    }
 },"anim2")