const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const sitePhone = '07301 227 021';
const siteEmail = 'sales@pandstankers.co.uk';

const logoStyles = document.createElement('style');
logoStyles.textContent = `
.site-header .logo{display:flex;align-items:center;width:200px;height:72px;font-size:0;letter-spacing:0;background:transparent;padding:0;border:0;border-radius:0}
.site-header .logo span{display:none}
.site-header .logo .site-logo-image{display:block;width:200px;height:72px;object-fit:contain;background:transparent;border-radius:0;padding:0}
.header-contact{display:flex;align-items:center;gap:14px;margin-left:18px;font-size:11px;font-weight:700;white-space:nowrap}
.header-contact a{opacity:1!important}
.header-contact .header-phone{color:#5ad5eb}
.footer-contact{display:flex;flex-direction:column;gap:5px;min-width:190px}
.footer-contact a{font-size:11px;font-weight:700;color:#d5e5eb}
.footer-contact small{font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:#7f99a7}
@media(max-width:1050px){.header-contact{display:none}}
@media(max-width:850px){.site-header .logo{width:165px;height:64px}.site-header .logo .site-logo-image{width:165px;height:64px}.footer-contact{min-width:0}}
`;
document.head.appendChild(logoStyles);

document.querySelectorAll('.site-header .logo').forEach((logo) => {
  const img = document.createElement('img');
  img.className = 'site-logo-image';
  img.src = 'images/pands-potable-water-logo.svg';
  img.alt = 'P&S Potable Water';
  logo.replaceChildren(img);
});

document.querySelectorAll('.site-header nav').forEach((nav) => {
  if (nav.querySelector('.header-contact')) return;
  const contact = document.createElement('div');
  contact.className = 'header-contact';
  contact.innerHTML = `<a class="header-phone" href="tel:+447301227021">${sitePhone}</a><a href="mailto:${siteEmail}">${siteEmail}</a>`;
  nav.appendChild(contact);
});

document.querySelectorAll('.footer-grid').forEach((footer) => {
  if (footer.querySelector('.footer-contact')) return;
  const contact = document.createElement('div');
  contact.className = 'footer-contact';
  contact.innerHTML = `<small>24/7 · 365 days</small><a href="tel:+447301227021">${sitePhone}</a><a href="mailto:${siteEmail}">${siteEmail}</a>`;
  footer.appendChild(contact);
});

if (!document.querySelector('link[rel="icon"]')) {
  const favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/svg+xml';
  favicon.href = 'favicon.svg';
  document.head.appendChild(favicon);
}

if (!document.querySelector('link[rel="canonical"]')) {
  const canonical = document.createElement('link');
  canonical.rel = 'canonical';
  canonical.href = window.location.origin + window.location.pathname;
  document.head.appendChild(canonical);
}

if (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html')) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'P&S Potable Water',
    url: window.location.origin + '/',
    telephone: '+44 7301 227 021',
    email: siteEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hallgrove Farm Industrial Estate, London Road',
      addressLocality: 'Bagshot',
      addressRegion: 'Surrey',
      postalCode: 'GU19 5HP',
      addressCountry: 'GB'
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'P and S Tankers Ltd',
      url: 'https://www.pandstankers.co.uk/'
    }
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
