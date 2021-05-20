//header
const header = document.querySelector("#header");

//content
const h1Line = document.querySelectorAll(".line span");
const contentP = document.querySelector(".content-inner p");
const contentButton = document.querySelector(".content-inner .btn-row");

//image
const butterfly = document.querySelector("#butterfly");
const beeInsect = document.querySelector("#beeInsect");
const bee1Insect = document.querySelector("#bee1Insect");

const bannerTL = gsap.timeline();

bannerTL
.from(header, {
    delay: -0.2,
    y: 16,
    opacity: 0,
    duration: 0.8,
    ease: "power3.inOut"
})
.from(h1Line, {
    delay: -0.4,
    y: 80,
    duration: 0.8,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  })
  .from([contentP, contentButton], {
    delay: -0.6,
    y: 40,
    duration: 0.8,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 0.2
    }
  });

gsap.from(butterfly, {
  delay: 1.2,
  x: -200,
  skewX: 2,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out"
});

gsap.from([beeInsect, bee1Insect], {
  delay: 1.4,
  x: -160,
  skewX: 6,
  duration: 0.8,
  opacity: 0,
  ease: "power3.out",
  stagger: {
    amount: 0.2
  }
});