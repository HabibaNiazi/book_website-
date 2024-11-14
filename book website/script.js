function rate(stars) {
  const allStars = document.querySelectorAll('.star');
  allStars.forEach(star => star.classList.remove('clicked'));
  for (let i = 0; i < stars; i++) {
    allStars[i].classList.add('clicked');
  }
  console.log('Rated:', stars);
}
