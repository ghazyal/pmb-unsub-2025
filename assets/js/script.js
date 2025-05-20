const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

document.getElementById('faqSearch').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const items = document.querySelectorAll('#faqAccordion .accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-button').textContent.toLowerCase();
    if (header.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

