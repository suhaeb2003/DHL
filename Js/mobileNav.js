document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('menuIcon').addEventListener('click', function() {
      const menu = document.getElementById('MobileMenuBox');
      menu.classList.toggle('open');
    
      if (menu.classList.contains('open')) {
        this.classList.remove('fa-bars');
        this.classList.add('fa-xmark');
      } else {
        this.classList.remove('fa-xmark');
        this.classList.add('fa-bars');
      }
    });
  });


 
  const toggleBox = document.querySelectorAll("#MobileMeneItem");
const toggleItem = document.querySelectorAll(".toggle_item");
const togglIcon = document.querySelectorAll(".toggle-icon");

toggleItem.forEach((item, index) => {
  const icon = togglIcon[index];
  
  item.addEventListener("click", function () {
    // Close all boxes except the clicked one
    toggleBox.forEach((box, i) => {
      if (i !== index) {
        box.classList.remove("open");
        togglIcon[i].classList.remove("fa-chevron-up");
        togglIcon[i].classList.add("fa-chevron-down");
      }
    });

    // Toggle the clicked item
    toggleBox[index].classList.toggle("open");
    if (toggleBox[index].classList.contains("open")) {
      icon.classList.remove("fa-chevron-down");
      icon.classList.add("fa-chevron-up");
    } else {
      icon.classList.remove("fa-chevron-up");
      icon.classList.add("fa-chevron-down");
    }
  });
});

  
  