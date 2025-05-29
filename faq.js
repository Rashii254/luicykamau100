function toggleAccordion(button) {
  const item = button.closest('.accordion-item');
  item.classList.toggle('active');
}