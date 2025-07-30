gsap.registerPlugin(ScrollTrigger);
 

gsap.to('#HeroText', {
        fontSize: "130px",
        scrollTrigger: {
         trigger:'#HeroText',
         start: "top 7%",      
         end: "top 0%",     
         scrub: true,            
        //  markers: true,
        }
});



gsap.to('#HeroImage', {
  rotate:-90,
  ease: 'power2.inOut',
  scrollTrigger: {
    trigger: '#HeroImage',
    start: 'top 14%',
    end: 'top 10%',
    scrub: true,
    // markers: true,
    pin:true,
  }
});


gsap.to("#content",{
  autoAlpha: 1,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#showcontent",
    start: "bottm 95%",
    end: "bottom 90%",
    scrub: true,
    // markers: true
  }
});


gsap.to("#HeroImage", { 
  y: 500,
  scrollTrigger: {
    trigger: "#showcontent",
    start: "top 99%",
    end: "top 40%",
    scrub: true,
    // markers: true
  }
  });

gsap.to("#HeroImage", { 
  padding:200,
  scrollTrigger: {
    trigger: "#product",
    start: "top 95%",
    end: "top 40%",
    scrub: true,
    // markers: true
  }
  });


