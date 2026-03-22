/* ═══════════════════════════════════════
   CONTACT.JS — Form Submission Handler
   Opens mailto: with filled data → triggers
   recruiter's email client to send to RK.
═══════════════════════════════════════ */
function submitContactForm(e) {
  e.preventDefault();

  const name    = document.getElementById('fc-name')?.value.trim()    || '';
  const email   = document.getElementById('fc-email')?.value.trim()   || '';
  const phone   = document.getElementById('fc-phone')?.value.trim()   || '';
  const subject = document.getElementById('fc-subject')?.value        || 'Portfolio Inquiry';
  const msg     = document.getElementById('fc-msg')?.value.trim()     || '';
  const status  = document.getElementById('form-status');

  // Validate
  if (!name || !email || !msg) {
    showStatus('⚠ Please fill all required fields.', 'warn');
    return;
  }
  if (!isValidEmail(email)) {
    showStatus('⚠ Please enter a valid email address.', 'warn');
    return;
  }

  // Build mailto body
  const bodyLines = [
    `Hello Ranjithkumar,`,
    ``,
    `You received a new message from your portfolio website.`,
    ``,
    `── SENDER DETAILS ──────────────────`,
    `Name    : ${name}`,
    `Email   : ${email}`,
    `Phone   : ${phone || 'Not provided'}`,
    `Subject : ${subject}`,
    ``,
    `── MESSAGE ─────────────────────────`,
    msg,
    ``,
    `── SENT VIA ─────────────────────────`,
    `Portfolio: ranjithkumar-portfolio.vercel.app`,
    `Time     : ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST`,
    `────────────────────────────────────`,
  ].join('\n');

  const mailTo = `mailto:ranjithrajendran2510@gmail.com`
    + `?subject=${encodeURIComponent(`[Portfolio] ${subject} — from ${name}`)}`
    + `&body=${encodeURIComponent(bodyLines)}`;

  // Open email client
  window.location.href = mailTo;

  // Show success
  showStatus('✅ Email client opened! Hit Send to deliver your message.', 'ok');

  // Reset form after short delay
  setTimeout(() => {
    document.getElementById('contactForm')?.reset();
    showStatus('', '');
  }, 5000);

  function showStatus(text, type) {
    if (!status) return;
    status.textContent = text;
    status.style.color = type === 'ok'   ? 'var(--accent-g)'
                       : type === 'warn' ? 'var(--accent-o)'
                       : 'var(--text-3)';
  }

  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  }
}
