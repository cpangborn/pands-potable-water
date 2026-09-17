document.getElementById('year').textContent = new Date().getFullYear();

const logoStyles = document.createElement('style');
logoStyles.textContent = `
.site-header .logo{display:flex;align-items:center;width:200px;height:72px;font-size:0;letter-spacing:0;background:transparent;padding:0;border:0;border-radius:0}
.site-header .logo span{display:none}
.site-header .logo .site-logo-image{display:block;width:200px;height:72px;object-fit:contain;background:transparent;border-radius:0;padding:0}
@media(max-width:850px){.site-header .logo{width:165px;height:64px}.site-header .logo .site-logo-image{width:165px;height:64px}}
`;
document.head.appendChild(logoStyles);

document.querySelectorAll('.site-header .logo').forEach((logo) => {
  const img = document.createElement('img');
  img.className = 'site-logo-image';
  img.src = 'images/pands-potable-water-logo.svg';
  img.alt = 'P&S Potable Water';
  logo.replaceChildren(img);
});
