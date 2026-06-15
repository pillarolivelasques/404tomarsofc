const stars = document.querySelectorAll('.scene rect[fill="#999"]');

stars.forEach(star => {
  setInterval(() => {
    star.style.opacity = Math.random() > 0.5 ? '0.3' : '1';
  }, Math.random() * 2000 + 1000);
});
