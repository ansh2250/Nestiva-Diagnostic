document.querySelectorAll('.readMoreBtn').forEach(button => {
  button.addEventListener('click', function() {
    const text = this.previousElementSibling;
    const dots = text.querySelector('.dots');
    const moreText = text.querySelector('.more');

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      moreText.style.display = "none";
      this.innerHTML = "Read More";
    } else {
      dots.style.display = "none";
      moreText.style.display = "inline";
      this.innerHTML = "Read Less";
    }
  });
});

document.querySelector('.hover-trigger').addEventListener('mouseenter', function () {
    var myModal = new bootstrap.Modal(document.getElementById('hoverModal'));
    myModal.show();
  });

// enquiry form

$(window).load(function(){
  $('button[type="button"]').click(function(){
    			var a = confirm("are you sure?");
    			//alert(a);
    			if (a === true){
    				$('#enquiry-form')[0].reset();
    			}
    		});
			$('#enquiry-form').submit(function() {
			    alert("Form submitted Successfully!!");
    		});
})

// package button - package page

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('bookModal');
  const packageSelect = document.getElementById('package');

  modal.addEventListener('show.bs.modal', function (event) {
    // Get the button that triggered the modal
    const button = event.relatedTarget;
    
    // Extract info from data-* attributes
    const packageName = button.getAttribute('data-package');
    
    // Update the select dropdown value
    if (packageName) {
      packageSelect.value = packageName;
    }
  });
}); 

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 5,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000, // 4 seconds
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {   // For screens 640px and larger
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {   // For screens 768px and larger
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {  // For screens 1024px and larger
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {  // For screens 1200px and larger
      slidesPerView: 4,
      spaceBetween: 25,
    },
  }
});