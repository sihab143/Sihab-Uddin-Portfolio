$(document).on("scroll", function(){
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = 100 * pixels / pageHeight;
  
  $("div.progress").css("width", progress + "%");
})


// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 100
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 1000,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 100,
    offset: '-=775',
    delay: (el, i) => 100 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  var tablinks = document.getElementsByClassName('tab-links');
  var tabcontents = document.getElementsByClassName('tab-contents');

  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove('active-link');
    }

    for(tabcontent of tabcontents){
      tabcontent.classList.remove('active-tab');
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');

  }


// navigation

// document.addEventListener("DOMContentLoaded", function(){
//   window.addEventListener('scroll', function() {
//       if (window.scrollY > 50) {
//         document.getElementById('navbar_top').classList.add('fixed-top');
//         // add padding top to show content behind navbar
//         navbar_height = document.querySelector('.navbar').offsetHeight;
//         document.body.style.paddingTop = navbar_height + 'px';
//       } else {
//         document.getElementById('navbar_top').classList.remove('fixed-top');
//          // remove padding top from body
//         document.body.style.paddingTop = '0';
//       } 
//   });
// }); 
// DOMContentLoaded  end


window.addEventListener('scroll', function(){
  var header = document.getElementById('nav-header');
  header.classList.toggle("sticky", window.scrollY > 0);
})


var sidemenu = document.getElementById('sidemenu');

function openmenu(){
  sidemenu.style.right = "0";
}

function closemenu(){
  sidemenu.style.right = "-100px";
}

var about = document.getElementById('about');
function aboutmenu(){
  about.style.paddingTop = "20px";
}

var services = document.getElementById('services');
 
function servicesmenu(){
  services.style.paddingTop = "85px";
}



// google sheet store contact form


const scriptURL = 'https://script.google.com/macros/s/AKfycbxtGWO--d3w2tn1gU5QoIJYUpuaHvLcNWkxReKvF6uwS1AvWpiDiCNdHmgiAteHvZEG/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
          msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })


  function sendEmail(){
              Email.send({
                    Host : "smtp.gmail.com", 
                    Username : "sohanur.sr63@gmail.com",
                    Password : "kflywyudzoqxozwx",
                    To : document.getElementById('email').value,
                    From : 'sohanur.sr63@gmail.com',
                    Subject : "This is the subject",
                    Body : "And this is the body"
                }).then(
                  message => alert("message")
            );
  }

  // Username : "jansara237@gmail.com",
  //Password : "8ADDB8540811A636B7C8CE33F597EA214308"

  // Password : "528CDE78AC8E6A42FE4292579D3A5F1B071B" 