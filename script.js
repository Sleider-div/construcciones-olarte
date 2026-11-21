// Reemplaza el valor de WHATSAPP_NUMBER por el número real, con código de país, sin + ni espacios.
const WHATSAPP_NUMBER = '573132082014';
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('quote-form').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('client').value.trim();
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value.trim();
  const message = `Hola, soy ${name}. Quiero cotizar el servicio de ${service}.\n\nDetalles: ${details}`;
  if (!WHATSAPP_NUMBER) {
    navigator.clipboard?.writeText(message).then(() => alert('Mensaje copiado. Falta configurar el número de WhatsApp del negocio.'))
      .catch(() => alert('Falta configurar el número de WhatsApp del negocio.'));
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
