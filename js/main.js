AOS.init(
    
);

  // JavaScript for toggling views with animation
  const listViewBtn = document.getElementById('list-view-btn');
  const gridViewBtn = document.getElementById('grid-view-btn');
  const dashboardItems = document.getElementById('services-item-wrapper');

  if(listViewBtn){
    listViewBtn.addEventListener('click', () => {
      dashboardItems.classList.remove('card-view');
      dashboardItems.classList.add('list-view');
      gridViewBtn.classList.remove('active');
      listViewBtn.classList.add('active');
  });
   }
   if(gridViewBtn){
    gridViewBtn.addEventListener('click', () => {
        dashboardItems.classList.remove('list-view');
        dashboardItems.classList.add('card-view');
        listViewBtn.classList.remove('active');
        gridViewBtn.classList.add('active');
    });
   }



var services = new Swiper(".service-swiper", {
    slidesPerView: 2,
    grid: {
        rows: 2,
    },
    autoplay: {
    delay: 5000,
    },
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var announcement = new Swiper('.announcement-slider', {
    direction: 'horizontal',
    loop: true,
    speed: 500,

    // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    },
    loop: true,

    autoplay: {
    delay: 3000,
    },
   
});


 

// Tasks handle Events

// When the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Function to show details of the task
    function showTaskDetails(taskId) {
      // Hide all detail sections
      document.querySelectorAll('.detail-section').forEach(section => {
        section.style.display = 'none';
      });
      // Show the specified task's detail section
      const detailSection = document.getElementById('detail-section-' + taskId);
      if (detailSection) {
        detailSection.style.display = 'block';
      }
      // Add 'active' class to the clicked task and remove from others
      document.querySelectorAll('.task-item').forEach(item => {
        item.classList.remove('active');
      });
  
      if(document.querySelector(`[data-task-id="${taskId}"]`)){
        document.querySelector(`[data-task-id="${taskId}"]`).classList.add('active');
      }
      
    }
    
    // Initialize the view with the first task's details
    showTaskDetails('1');
    
    // Setup click event listeners for all task items
    document.querySelectorAll('.task-item').forEach(item => {
      item.addEventListener('click', function() {
        const taskId = this.getAttribute('data-task-id');
        showTaskDetails(taskId);
      });
    });
  });
  



  // Login Slider Background
document.addEventListener('DOMContentLoaded', function() {
  let slides = document.querySelectorAll('.slide');
 
  // Make sure there's at least one slide
  if (slides.length > 0) {
    let randomIndex = Math.floor(Math.random() * slides.length);

    // Add 'active-slide' class to randomly chosen slide to trigger animations
    slides[randomIndex].classList.add('active-slide');
  }



});


// Password Toggle Icon show and hide 
function togglePasswordVisibility() {
  var passwordField = document.getElementById("login-password");
  var toggleIcon = document.getElementById("togglePassword");

  if (passwordField.type === "password") {
      passwordField.type = "text";
      toggleIcon.classList.remove('fa-eye');
      toggleIcon.classList.add('fa-eye-slash');
  } else {
      passwordField.type = "password";
      toggleIcon.classList.remove('fa-eye-slash');
      toggleIcon.classList.add('fa-eye');
  }
}


document.addEventListener('DOMContentLoaded', function() {
  Fancybox.bind('[data-fancybox="gallery"]', {}); 
});