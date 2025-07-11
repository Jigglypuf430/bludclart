const overlay    = document.querySelector('.holo-overlay');
const turbulence = document.getElementById('turbulence');
const qrContainer = document.getElementById('qr-code');

// Pan holo texture on device tilt
window.addEventListener('deviceorientation', evt => {
  const x = evt.gamma  || 0;
  const y = evt.beta   || 0;
  overlay.style.backgroundPosition =
    `${50 + x/3}% ${50 + y/3}%`;
});

// Animate liquid shimmer filter
let frame = 0;
(function animate() {
  frame += 0.02;
  const fx = 0.01 + 0.005 * Math.sin(frame);
  const fy = 0.02 + 0.005 * Math.cos(frame);
  turbulence.setAttribute('baseFrequency', `${fx} ${fy}`);
  requestAnimationFrame(animate);
})();

// Generate QR code for card number
if (qrContainer && window.QRCode) {
  new QRCode(qrContainer, {
    text: '132842687',
    width: 80,
    height: 80,
    correctLevel: QRCode.CorrectLevel.H
  });
}
