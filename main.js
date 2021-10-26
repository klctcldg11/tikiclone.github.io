const defaultStopp = document.querySelector('.header-search-info')
const defaultStop = document.querySelector('.header-search-bar')
const openSearch = () => {
    document.querySelector('.header-search-info').classList.add('open')
}
const closeSearch = () => {
    document.querySelector('.header-search-info').classList.remove('open')
}

defaultStop.addEventListener('click', function (e) {
    e.stopPropagation()
})
defaultStopp.addEventListener('click', function (e) {
    e.stopPropagation()
})

// Slider 
var slideIndex = 1;
slideShow(slideIndex);

function plusSlides(n) {
    slideShow(slideIndex += n)
}

function currentSlides(n) {
    slideShow(slideIndex = n)
}

function slideShow(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides')
    var dots = document.getElementsByClassName('dot')
    if(n > slides.length) {slideIndex = 1}

    if(n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}
//Auto slide
var slideIndex = 1;
showSlide();

function showSlide() {
    var i;
    var slides = document.getElementsByClassName("mySlides")
    var dots = document.getElementsByClassName('dot')
    for ( i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "")
    }
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlide, 3000)
}
//CountDown
var countDownDate = new Date("Jan 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {
  // Get ngày hiện tại
  var now = new Date().getTime();
    
  //Khoảng cách thời gian cần
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("time-h").innerHTML = hours;
  document.getElementById("time-m").innerHTML = minutes;
  document.getElementById("time-s").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time-h").innerHTML = "00";
    document.getElementById("time-m").innerHTML = "00";
    document.getElementById("time-s").innerHTML = "00";
  }
}, 1000);
// Deal sale
$('.sale-items').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// Category 
$('.navigation-list').slick({
  slidesToShow: 10,
  slidesToScroll: 10
});

var filtered = false;

$('.js-filter').on('click', function(){
  if (filtered === false) {
    $('.filtering').slick('slickFilter',':even');
    $(this).text('Unfilter Slides');
    filtered = true;
  } else {
    $('.filtering').slick('slickUnfilter');
    $(this).text('Filter Slides');
    filtered = false;
  }
});