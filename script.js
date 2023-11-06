const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;

function cricleskew() {
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove", function (dets) {
        this.clearTimeout(timeout)

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;
        criclemousefollower(xscale, yscale);
        this.setTimeout(function () {
            timeout = document.querySelector("#maincricle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;
        }, 100);

    })
}
cricleskew();
function fristpageanim() {
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut

    })

        .to(".boundingelem", {
            y: 0,
            ease: Expo.easeInOut,
            duration: 2,
            delay: -1,
            stagger: .2
        })


        .from("#herofooter", {
            y: 10,
            opacity: 0,
            duration: 1.5,
            Delay: -1,
            ease: Expo.easeInOut
        })
}

function criclemousefollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
        document.querySelector("#maincricle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}
criclemousefollower();
fristpageanim();

document.querySelectorAll(".element").forEach(function (element) {
    var rotate = 0;
    var diffrot = 0;

    element.addEventListener("mouseleave", function (details) {
         gsap.to(element.querySelector("img"),{
             opacity: 0,
             ease: Power3,
             duration: 0.5,
         })
     })
    element.addEventListener("mousemove", function (details) {
        var diff = details.clientY - element.getBoundingClientRect().top;
        diffrot = details.clientX - rotate;
         rotate = details.clientX;

        gsap.to(element.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
             left: details.clientX,
                rotate: gsap.utils.clamp(-20, 20, diffrot),
        })
    })
});