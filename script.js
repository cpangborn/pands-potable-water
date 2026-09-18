const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const sitePhone = '07301 227 021';
const siteEmail = 'sales@pandstankers.co.uk';
const siteAddress = 'Hallgrove Farm Industrial Estate, London Road, Bagshot, Surrey, GU19 5HP';

const logoStyles = document.createElement('style');
logoStyles.textContent = `
.site-header .logo{display:flex;align-items:center;width:200px;height:72px;font-size:0;letter-spacing:0;background:transparent;padding:0;border:0;border-radius:0}
.site-header .logo span{display:none}
.site-header .logo .site-logo-image{display:block;width:200px;height:72px;object-fit:contain;background:transparent;border-radius:0;padding:0}
.header-contact{display:flex;align-items:center;gap:14px;margin-left:18px;font-size:11px;font-weight:700;white-space:nowrap}
.header-contact a{opacity:1!important}
.header-contact .header-phone{color:#5ad5eb}
.footer-contact{display:flex;flex-direction:column;gap:5px;min-width:220px}
.footer-contact a{font-size:11px;font-weight:700;color:#d5e5eb}
.footer-contact small{font-size:9px;letter-spacing:.1em;text-transform:uppercase;color:#7f99a7}
.footer-contact .footer-address{font-size:9px;font-weight:500;line-height:1.45;color:#8fa7b3;max-width:260px}
.footer-contact .footer-privacy{font-size:9px;font-weight:700;color:#8fa7b3;margin-top:4px}
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
  contact.innerHTML = `<small>24/7 · 365 days</small><a href="tel:+447301227021">${sitePhone}</a><a href="mailto:${siteEmail}">${siteEmail}</a><span class="footer-address">${siteAddress}</span><a class="footer-privacy" href="privacy.html">Privacy notice</a>`;
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
  const path = window.location.pathname.endsWith('/index.html') ? '/' : window.location.pathname;
  canonical.href = window.location.origin + path;
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


document.querySelectorAll('.site-header nav').forEach((nav) => {
  if (nav.querySelector('.mobile-menu-toggle')) return;
  const toggle = document.createElement('button');
  toggle.type = 'button';
  toggle.className = 'mobile-menu-toggle';
  toggle.setAttribute('aria-label', 'Open navigation menu');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', 'mobile-navigation');
  toggle.innerHTML = '<span></span><span></span><span></span>';
  nav.appendChild(toggle);

  const panel = document.createElement('div');
  panel.className = 'mobile-navigation';
  panel.id = 'mobile-navigation';
  panel.setAttribute('aria-hidden', 'true');
  panel.innerHTML = '<a href="services.html">Services</a><a href="sectors.html">Who we help</a><a href="about.html">About</a><a href="blog.html">Blog</a><a class="mobile-nav-cta" href="contact.html">Request water <span>→</span></a>';
  nav.appendChild(panel);

  const closeMenu = () => {
    toggle.classList.remove('is-open');
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation menu');
    panel.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('mobile-nav-open');
  };

  toggle.addEventListener('click', () => {
    const open = !panel.classList.contains('is-open');
    toggle.classList.toggle('is-open', open);
    panel.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    panel.setAttribute('aria-hidden', String(!open));
    document.body.classList.toggle('mobile-nav-open', open);
  });

  panel.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
});
