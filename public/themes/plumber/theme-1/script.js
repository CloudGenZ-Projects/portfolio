document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadForm');
  const feedback = document.getElementById('formFeedback');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const service = document.getElementById('service').value;

      feedback.innerHTML = `<span style="color: #16a34a;">✓ Dispatch request received! Master technician en route to contact ${phone}.</span>`;
      form.reset();

      setTimeout(() => {
        feedback.innerHTML = '';
      }, 6000);
    });
  }
});
