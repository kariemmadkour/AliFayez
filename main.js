// ═══════════════════════════════════════════
// HEZB EL NAS — SITE LOGIC (i18n, reveal, nav)
// ═══════════════════════════════════════════

const T = {
  en: {
    'meta.title':          'Hezb El Nas — For All Egyptians',
    'brand.name':           'Hezb El Nas',
    'brand.full':           'HEZB EL NAS',
    'brand.slogan':         'For All Egyptians',
    'brand.tagline':        'A Voice for You, Not Against You',
    'loader.tagline':       'Preparing your experience',

    'nav.party':            'About the Party',
    'nav.fayez':            'Ali Fayez',
    'nav.initiatives':      'Initiatives',
    'nav.contact':          'Contact',
    'nav.cta':              'Follow Us',

    'hero.eyebrow':         'For All Egyptians',
    'hero.title1':          'Hezb',
    'hero.title2':          'El Nas',
    'hero.sub':             'A Voice for You, Not Against You',
    'hero.cta1':            'Learn More',
    'hero.cta2':            'Follow on Facebook',
    'hero.val1':             'Unity',
    'hero.val2':             'Transparency',
    'hero.val3':             'Participation',

    'marquee.text':         'حزب الناس',

    'party.eyebrow':        'Who We Are',
    'party.title':          'About <em>the Party</em>',
    'party.sub':            'A civic movement built on service, transparency, and unity — for every Egyptian, from every walk of life.',
    'party.p1':             'Hezb El Nas stands for a simple idea: politics should serve people, not the other way around. We work to give ordinary Egyptians a real voice in the decisions that shape their daily lives.',
    'party.p2':             'Our doors are open to all Egyptians regardless of background — because a party "for all Egyptians" only means something if it truly includes everyone.',
    'party.val1.title':     'Integrity',
    'party.val1.body':      'Accountable leadership and honest representation at every level.',
    'party.val2.title':     'Unity',
    'party.val2.body':      'Bringing Egyptians together across governorates, generations, and backgrounds.',
    'party.val3.title':     'Service',
    'party.val3.body':      'Community-first initiatives that respond to real, everyday needs.',
    'party.val4.title':     'Nation',
    'party.val4.body':      'A shared commitment to Egypt\'s progress and stability.',

    'fayez.eyebrow':        'Page & Media Manager',
    'fayez.title':          'Ali <em>Fayez</em>',
    'fayez.role':           'Page & Media Manager, Hezb El Nas',
    'fayez.badge':          'DRAFT — REPLACE WITH VERIFIED BIO',
    'fayez.bio1':           '[Add background / career summary here]',
    'fayez.bio2':           '[Add media & community engagement focus here]',
    'fayez.achTitle':       'Highlights',
    'fayez.ach1':           '[Add achievement here]',
    'fayez.ach2':           '[Add achievement here]',
    'fayez.ach3':           '[Add recognition or milestone here]',
    'fayez.note':           'This section is a placeholder — replace with Ali Fayez\'s verified biography, achievements, and photo before publishing.',

    'init.eyebrow':         'What We Do',
    'init.title':           'Our <em>Initiatives</em>',
    'init.sub':             'Ongoing programs that connect the party with the communities it serves.',
    'init.init1.title':     'Community Outreach',
    'init.init1.body':      'On-the-ground engagement in neighborhoods and governorates across Egypt.',
    'init.init2.title':     'Membership & Volunteering',
    'init.init2.body':      'Opportunities for citizens to join, organize, and contribute locally.',
    'init.init3.title':     'Media & Public Presence',
    'init.init3.body':      'Keeping the public informed through social media and public events.',

    'contact.eyebrow':      'Get in Touch',
    'contact.title':        'Contact & <em>Follow</em>',
    'contact.sub':          'For official inquiries, please reach out via our Facebook page.',
    'contact.fbParty':      'Official Facebook Page',
    'contact.fbPartySub':   'Hezb El Nas — updates & announcements',
    'contact.fbFayez':      'Ali Fayez',
    'contact.fbFayezSub':   'Page & Media Manager',
    'contact.linkLabel':    'Visit',

    'footer.tagline':       'A Voice for You, Not Against You.',
    'footer.col1':          'Explore',
    'footer.col2':          'Follow',
    'footer.copy':          '© 2026 Hezb El Nas. All rights reserved.',
    'footer.built':         'This is a placeholder website pending official party content.',
  },
  ar: {
    'meta.title':          'حزب الناس — لكل المصريين',
    'brand.name':           'حزب الناس',
    'brand.full':           'حزب الناس',
    'brand.slogan':         'لكل المصريين',
    'brand.tagline':        'صوت ليك، مش عليك',
    'loader.tagline':       'جاري تجهيز الموقع',

    'nav.party':            'عن الحزب',
    'nav.fayez':            'علي فايز',
    'nav.initiatives':      'المبادرات',
    'nav.contact':          'تواصل معنا',
    'nav.cta':              'تابعنا',

    'hero.eyebrow':         'لكل المصريين',
    'hero.title1':          'حزب',
    'hero.title2':          'الناس',
    'hero.sub':             'صوت ليك، مش عليك',
    'hero.cta1':            'اعرف أكتر',
    'hero.cta2':            'تابعنا على فيسبوك',
    'hero.val1':             'الوحدة',
    'hero.val2':             'الشفافية',
    'hero.val3':             'المشاركة',

    'marquee.text':         'Hezb El Nas',

    'party.eyebrow':        'مين إحنا',
    'party.title':          'عن <em>الحزب</em>',
    'party.sub':            'حركة مدنية قائمة على الخدمة والشفافية والوحدة — لكل مصري، من كل مكان.',
    'party.p1':             'حزب الناس بيؤمن بفكرة بسيطة: السياسة لازم تخدم الناس، مش العكس. بنشتغل عشان نديّ للمواطن المصري صوت حقيقي في القرارات اللي بتأثر على حياته اليومية.',
    'party.p2':             'أبوابنا مفتوحة لكل المصريين مهما كانت خلفياتهم — لأن حزب "لكل المصريين" لازم فعلاً يشمل الجميع.',
    'party.val1.title':     'النزاهة',
    'party.val1.body':      'قيادة مسؤولة وتمثيل صادق على كل المستويات.',
    'party.val2.title':     'الوحدة',
    'party.val2.body':      'بنجمع المصريين من كل المحافظات والأجيال والخلفيات.',
    'party.val3.title':     'الخدمة',
    'party.val3.body':      'مبادرات مجتمعية بتلبي احتياجات الناس الحقيقية واليومية.',
    'party.val4.title':     'الوطن',
    'party.val4.body':      'التزام مشترك بتقدم مصر واستقرارها.',

    'fayez.eyebrow':        'مدير الصفحة والإعلام',
    'fayez.title':          'علي <em>فايز</em>',
    'fayez.role':           'مدير الصفحة والإعلام، حزب الناس',
    'fayez.badge':          'مسودة — يرجى الاستبدال ببيانات موثقة',
    'fayez.bio1':           '[أضف نبذة عن الخلفية والمسيرة هنا]',
    'fayez.bio2':           '[أضف التركيز الإعلامي والمجتمعي هنا]',
    'fayez.achTitle':       'أبرز المحطات',
    'fayez.ach1':           '[أضف إنجازًا هنا]',
    'fayez.ach2':           '[أضف إنجازًا هنا]',
    'fayez.ach3':           '[أضف تكريمًا أو محطة مهمة هنا]',
    'fayez.note':           'هذا القسم مسودة مؤقتة — يجب استبداله بالسيرة الذاتية والإنجازات والصورة الموثقة لعلي فايز قبل النشر الرسمي.',

    'init.eyebrow':         'إيه اللي بنعمله',
    'init.title':           'مبادراتنا',
    'init.sub':             'برامج مستمرة بتربط الحزب بالمجتمعات اللي بيخدمها.',
    'init.init1.title':     'التواصل المجتمعي',
    'init.init1.body':      'تواجد ميداني في الأحياء والمحافظات في كل أنحاء مصر.',
    'init.init2.title':     'العضوية والتطوع',
    'init.init2.body':      'فرص للمواطنين للانضمام والتنظيم والمساهمة محليًا.',
    'init.init3.title':     'الإعلام والتواجد العام',
    'init.init3.body':      'إبقاء الجمهور على اطلاع من خلال وسائل التواصل والفعاليات العامة.',

    'contact.eyebrow':      'تواصل معنا',
    'contact.title':        'التواصل <em>والمتابعة</em>',
    'contact.sub':          'للاستفسارات الرسمية، برجاء التواصل معنا عبر صفحتنا على فيسبوك.',
    'contact.fbParty':      'الصفحة الرسمية على فيسبوك',
    'contact.fbPartySub':   'حزب الناس — أخبار وإعلانات',
    'contact.fbFayez':      'علي فايز',
    'contact.fbFayezSub':   'مدير الصفحة والإعلام',
    'contact.linkLabel':    'زيارة',

    'footer.tagline':       'صوت ليك، مش عليك.',
    'footer.col1':          'استكشف',
    'footer.col2':          'تابعنا',
    'footer.copy':          '© 2026 حزب الناس. جميع الحقوق محفوظة.',
    'footer.built':         'هذا موقع مؤقت في انتظار المحتوى الرسمي للحزب.',
  }
};

// ── CURRENT LANG (Arabic-first) ──
let currentLang = localStorage.getItem('hen-lang') || 'ar';

// ── APPLY LANGUAGE ──
function applyLang(lang) {
  const html = document.documentElement;
  const isAr = lang === 'ar';

  html.lang = lang;
  html.dir  = isAr ? 'rtl' : 'ltr';
  document.title = T[lang]['meta.title'];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key] !== undefined) el.textContent = T[lang][key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
  });

  document.querySelectorAll('.lang-pill__btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  localStorage.setItem('hen-lang', lang);
  currentLang = lang;
}

// ── LOADER ──
const loader = document.getElementById('loader');
window.addEventListener('load', () => {
  applyLang(currentLang);

  setTimeout(() => {
    loader.classList.add('done');
    setTimeout(() => loader.remove(), 800);
    document.querySelectorAll('.reveal-hero').forEach(el => el.classList.add('visible'));
  }, 1400);
});

// ── LANG TOGGLE CLICKS ──
document.querySelectorAll('.lang-pill__btn').forEach(btn => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

// ── NAV: scroll shadow ──
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── MOBILE NAV ──
const hamburger = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobileNav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('open');
});
document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('open');
  });
});

// ── REVEAL ON SCROLL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
