function locoani() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });


  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
locoani();

const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});

function cursor() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      top: dets.y,
      left: dets.x,
    })
  })
}
cursor()

function navbar() {
  gsap.to(".navc", {
    y: -100,
    duration: 1,
    scrollTrigger: {
      trigger: "nav",
      scroller: ".main",
      start: "top 0",
      end: "top -100%",
      scrub: true
    }
  })
  gsap.to("nav i", {
    display: "block",
    scrollTrigger: {
      scroller: ".main",
      trigger: "nav",
      start: "top -15%",
      end: "top -20%",
      scrub: true
    }
  })
}
navbar()

function page1() {
  gsap.to(".page1", {
    filter: "blur(20px)",
    transform: "scaleX(0.85)",
    scrollTrigger: {
      scroller: ".main",
      trigger: ".page1",
      // markers: true,
      start: "top 0",
      end: "top -50%",
      scrub: true,
    }
  })
}
page1()

function page2() {
  gsap.to(".page2-c-left-image", {
    
    transform: "translateY(-50%) translateX(69%)",
    duration: 10,
    repeat: -1,
    ease: "none",
  })
}
page2()


function page4() {
  var tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page4",
      scroller: ".main",
      start: "top -20%",
      end: "top -21%",
      // markers:true,
      scrub: 3,
      pin: true
    }
  })
  tl4.to(".page4content", {
    transform: "translateX(-70%)",
  }, "okay")
  tl4.to(".page4 .slider-in", {
    x: 650,
  }, "okay")
}
page4()

function page5() {
  document.querySelector(".page6box3in").addEventListener("mousemove", function (dets) {
  document.querySelector(".page6box3").style.background = `conic-gradient(at ${dets.x}% ${dets.y}%,rgb(255, 167, 183),rgb(117, 188, 250),rgb(50, 204, 251),rgb(161, 255, 161),rgb(255, 255, 163),rgb(141, 235, 136),rgb(199, 134, 196),rgb(232, 178, 108),rgb(255, 167, 183)`
})
}
page5()