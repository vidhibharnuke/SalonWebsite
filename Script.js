document.getElementById('appointmentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Appointment booked successfully!');
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Message sent successfully!');
});
