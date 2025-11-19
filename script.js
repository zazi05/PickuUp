console.log('PickuUp script loaded');
const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
document.getElementById('rideform').addEventListener('submit', function(e) {
    e.preventDefault();
    const pickupLocation = document.getElementById('pickupLocation').value;
    alert('Ride requested from: ' + pickupLocation);
}   );
const driverStatus= document.createElement('div');
driverStatus.innerHTML= '<h2>Driver Status</h2><p>No active rides.</p>';
document.body.appendChild(driverStatus);   

let marker = L.marker([51.5, -0.09]).addTo(map);
setInterval(() => {
    const lat = 51.5 + (Math.random() - 0.5) * 0.1;
    const lon = -0.09 + (Math.random() - 0.5) * 0.1;
    marker.setLatLng([lat, lon]);
}, 5000);

document.getElementById('driverform').addEventListener('submit', function(e) {
    e.preventDefault();
    const driverName = document.getElementById('driverName').value;
    alert('Driver ' + driverName + ' is now available for rides.');
});

function updateDriverStatus(status) {
    driverStatus.innerHTML = '<h2>Driver Status</h2><p>' + status + '</p>';
}   
document.querySelectorAll('a{href^="#"}').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

}); 
// Enquiry form logic
const enquiryForm = document.getElementById('enquiryForm');
if (enquiryForm) {
  enquiryForm.addEventListener('submit', e => {
    e.preventDefault();
    const distance = parseFloat(enquiryForm.distance.value);
    let estimate = distance * 6; // simple rate
    const result = document.getElementById('result');
    result.style.display = 'block';
    result.textContent = `Estimated cost: ZAR ${estimate.toFixed(2)}`;
  });
}

// Contact form logic
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.getElementById('contactSuccess');
    success.style.display = 'block';
  });
}
