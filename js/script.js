$(window).scroll(() => {
    if ($(window).scrollTop() >= 30){
        $("nav").addClass("shadow-lg")
    }else{
        $("nav").removeClass("shadow-lg")
    }
})

$("#openNavBtn").on('click', () => {
    console.log("asdasd");
    $("#navContainer")
        .removeClass("left-full")
        .addClass("left-0");
});

$("#closeNavBtn").on('click', () => {
    $("#navContainer")
        .removeClass("left-0")
        .addClass("left-full");
});

AOS.init();

// Logo
gsap.from("#logo",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
})

// nav menu
gsap.from("header ul li",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
    stagger:0.3,
})

// toggle btn
gsap.from("#openNavBtn",{
    opacity:0,
    y:-10,
    delay:1,
    duration:0.5,
})

// main heading
gsap.from("section",{
    opacity:0,
    y:20,
    delay:2,
    duration:0.5,
})
