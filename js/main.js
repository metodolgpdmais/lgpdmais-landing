// Accordion da seção de Perguntas Frequentes
document.addEventListener('DOMContentLoaded', function () {
  var headers = document.querySelectorAll('.accordion-header');

  headers.forEach(function (header) {
    header.addEventListener('click', function () {
      var item = header.closest('.accordion-item');
      var content = item.querySelector('.accordion-content');
      var isOpen = header.getAttribute('aria-expanded') === 'true';

      // Fecha os outros itens (comportamento accordion)
      headers.forEach(function (other) {
        if (other !== header) {
          other.setAttribute('aria-expanded', 'false');
          var otherContent = other.closest('.accordion-item').querySelector('.accordion-content');
          otherContent.style.maxHeight = null;
        }
      });

      // Abre/fecha o atual
      header.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      if (isOpen) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
