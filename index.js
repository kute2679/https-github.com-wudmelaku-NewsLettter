
  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.form-control');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', function() {
      const searchTerm = this.value.trim().toLowerCase();

      cards.forEach(function(card) {
        const title = card.querySelector('.card-title').textContent.trim().toLowerCase();

        if (title.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });



