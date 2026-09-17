document.getElementById('year').textContent = new Date().getFullYear();

const logoStyles = document.createElement('style');
logoStyles.textContent = `
.site-header .logo{display:flex;align-items:center;width:220px;height:82px;font-size:0;letter-spacing:0}
.site-header .logo span{display:none}
.site-header .logo .site-logo-image{display:block;width:220px;height:82px;object-fit:contain;background:#fff;border-radius:6px;padding:4px 8px}
@media(max-width:850px){.site-header .logo{width:175px;height:70px}.site-header .logo .site-logo-image{width:175px;height:70px;padding:4px 7px}}
`;
document.head.appendChild(logoStyles);

document.querySelectorAll('.site-header .logo').forEach((logo) => {
  const img = document.createElement('img');
  img.className = 'site-logo-image';
  img.src = 'images/pands-potable-water-logo.svg';
  img.alt = 'P&S Potable Water';
  logo.replaceChildren(img);
});
