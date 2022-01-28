
gsap.to('#ball',{y: 100, opacity: 0,duration:1});
gsap.fromTo('#ball', {opacity:0, y:20}, {opacity:1, y:0, duration:1});

const tl = gsap.timeline({defaults: {duration:0.75, ease:"power1.out"}})

tl.fromTo('#ball', {scale: 0},{scale:1, ease:"elastic.out(1, 0.4)", duration:1.5})

//Cookie jump
tl.fromTo('#ball', {y:0, rotation:'0deg'}, {y:-20, rotation:'-20deg',  yoyo:true, repeat:-1,})
//Fadding the cookie out
gsap.to('.title',{y: 100, opacity: 0,duration:1});
gsap.fromTo('.title', {opacity:0, y:20}, {opacity:1, y:0, duration:1});

// var tl = new TimelineLite()

// gsap.to("#ball", .5, {alpha:1} , "-=4.5")
//       gsap.to("#ball", 30.5, {rotation:1560, transformOrigin:"210px 100px", ease:Linear.easeNone}, "-=4")

      
//Cookie jump
tl.fromTo('#flame', {y:0, rotation:'0deg'}, {y:-20, rotation:'-35deg',  yoyo:true, repeat:-1,})
//Fadding the cookie out

// // Jquery

// $( function() {
//     $( "#tabs" ).tabs();
//   } );