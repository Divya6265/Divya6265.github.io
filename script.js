let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function moveslide(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function slideno(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("frame");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var btn = document.getElementById('send');
btn.addEventListener('click', function(e){
    e.preventDefault();
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('messg').value;
    var body = 'name: ' +name+ '<br/> email: ' +email +'<br/> Message:' + message
    Email.send({
        Host : "smtp.gmail.com",
        Username : "receiver.sender2023@gmail.com",
        Password : "Divya@123",
        To : 'receiver.sender2023@gmail.com',
        From : email,
        Subject : "This is the subject",
        Body : body
    }).then(
      message => alert(message)
    );
})
