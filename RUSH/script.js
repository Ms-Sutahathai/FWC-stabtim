document.addEventListener('DOMContentLoaded', () => {
  // สคริปต์เปลี่ยนสี Navbar เมื่อเลื่อนหน้าจอ ( Scroll Effect )
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = '#000';
    } else {
      navbar.style.backgroundColor = '#212529';
    }
  });
});