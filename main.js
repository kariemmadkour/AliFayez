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
    'hero.status':          'Under Establishment',
    'hero.title1':          'Hezb',
    'hero.title2':          'El Nas',
    'hero.sub':             'A Voice for You, Not Against You',
    'hero.cta1':            'Learn More',
    'hero.cta2':            'Follow on Facebook',
    'hero.stat1Num':        '500+',
    'hero.stat1Label':      'Founding Members',
    'hero.stat2Num':        '9.2K',
    'hero.stat2Label':      'Facebook Followers',
    'hero.stat3Num':        '9+',
    'hero.stat3Label':      'Governorates & Growing',

    'marquee.text':         'حزب الناس',

    'party.eyebrow':        'Who We Are',
    'party.title':          'About <em>the Party</em>',
    'party.sub':            'A centrist reform party — currently under establishment — uniting Egyptians from every governorate and every walk of life.',
    'party.p1':             'On the day of its founding conference, Hezb El Nas held the first meeting of its founding body, bringing together more than 500 founding members and activists from governorates across Egypt — including Beheira, Fayoum, Beni Suef, Assiut, Alexandria, Dakahlia, Sohag, Giza, Cairo, and others.',
    'party.p2':             'The conference brought together media and press figures, doctors, lawyers, executives, university professors, young people, farmers, professionals, and women — a real reflection of Egyptian society, and living proof that Hezb El Nas is a party for all Egyptians.',
    'party.val1.title':     'National Participation',
    'party.val1.body':      'A political home for every Egyptian, from every governorate and walk of life.',
    'party.val2.title':     'Rule of Law',
    'party.val2.body':      'Political work grounded in respect for the constitution and the law.',
    'party.val3.title':     'Competence & Transparency',
    'party.val3.body':      'Responsible leadership built on merit and open accountability.',
    'party.val4.title':     'Service to the Nation',
    'party.val4.body':      'Serious, continuous work to serve Egypt and its citizens.',

    'fayez.eyebrow':        'Deputy of the Founders',
    'fayez.title':          'Ali Fayez <em>Al-Farjani</em>',
    'fayez.role':           'Deputy of the Founders, Hezb El Nas',
    'fayez.bio1':           'Counselor Ali Fayez Al-Farjani is a lawyer before the Court of Appeal, a television and radio program host (on El Shams and El Mehwar channels), and a PhD researcher in Law, holding master\'s degrees in Media and in Political Communication.',
    'fayez.bio2':           'He also chairs the Ali Fayez Charitable Foundation and is affiliated with the Nasser Higher Military Academy. As Deputy of the Founders of Hezb El Nas, he represents the party\'s founding body and has led its official announcements, including its first founding conference and the upcoming Services Card initiative.',
    'fayez.achTitle':       'Highlights',
    'fayez.ach1':           'Lawyer before the Court of Appeal & PhD researcher in Law',
    'fayez.ach2':           'TV & radio program host — El Shams and El Mehwar channels',
    'fayez.ach3':           'Chairman, Ali Fayez Charitable Foundation',
    'fayez.ach4':           'Deputy of the Founders — led Hezb El Nas\'s first founding conference',
    'fayez.note':           'Biography sourced from Ali Fayez\'s official Facebook profile.',

    'init.eyebrow':         'Official Initiative',
    'init.title':           'The <em>Services Card</em> System',
    'init.sub':             'A digital membership system announced by the party: each membership card carries a QR code granting access to a growing network of everyday service discounts — to be activated once the party\'s official founding is complete.',
    'init.quote':           '— As announced by Counselor Ali Fayez Al-Farjani, Deputy of the Founders.',
    'init.tier1.title':     'VIP Card',
    'init.tier1.sub':       'Founding Members',
    'init.tier1.body':      '100% access to the full services network.',
    'init.tier2.title':     'B Card',
    'init.tier2.sub':       'Participating Members',
    'init.tier2.body':      '75% access to the services network.',
    'init.tier3.title':     'C Card',
    'init.tier3.sub':       'Affiliated Members',
    'init.tier3.body':      '50% access to the services network.',
    'init.benefitsTitle':   'What the Network Covers',
    'init.benefit1':        'Private hospitals — consultations & operations',
    'init.benefit2':        'Labs & radiology centers',
    'init.benefit3':        'Contracted doctors across specialties',
    'init.benefit4':        'Restaurants, markets & hypermarkets',
    'init.benefit5':        'Clothing & essentials stores',
    'init.benefit6':        'Social & sports clubs',
    'init.benefit7':        'Resorts, trips & recreation',
    'init.benefit8':        'Student transportation support',

    'contact.eyebrow':      'Get in Touch',
    'contact.title':        'Contact & <em>Follow</em>',
    'contact.sub':          'For official inquiries, please reach out via our Facebook page.',
    'contact.fbParty':      'Official Facebook Page',
    'contact.fbPartySub':   'Hezb El Nas — updates & announcements',
    'contact.fbFayez':      'Ali Fayez',
    'contact.fbFayezSub':   'Deputy of the Founders',
    'contact.linkLabel':    'Visit',
    'contact.phoneLabel':   'Official Contact',
    'contact.phone':        '+20 120 106 8035',
    'contact.locationLabel':'Based In',
    'contact.location':     'Giza, Cairo, Egypt',

    'footer.tagline':       'A Voice for You, Not Against You.',
    'footer.col1':          'Explore',
    'footer.col2':          'Follow',
    'footer.copy':          '© 2026 Hezb El Nas. All rights reserved.',
    'footer.built':         'Content sourced from the party\'s official Facebook page.',
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
    'hero.status':          'تحت التأسيس',
    'hero.title1':          'حزب',
    'hero.title2':          'الناس',
    'hero.sub':             'صوت ليك، مش عليك',
    'hero.cta1':            'اعرف أكتر',
    'hero.cta2':            'تابعنا على فيسبوك',
    'hero.stat1Num':        '+500',
    'hero.stat1Label':      'عضو مؤسس',
    'hero.stat2Num':        '9.2K',
    'hero.stat2Label':      'متابع على فيسبوك',
    'hero.stat3Num':        '+9',
    'hero.stat3Label':      'محافظات وفي ازدياد',

    'marquee.text':         'Hezb El Nas',

    'party.eyebrow':        'مين إحنا',
    'party.title':          'عن <em>الحزب</em>',
    'party.sub':            'حزب إصلاحي وسطي — تحت التأسيس حاليًا — بيجمع المصريين من كل محافظة وكل قطاع.',
    'party.p1':             'شهد حزب الناس انطلاقةً حقيقية لمسيرته بعقد المؤتمر الأول للهيئة التأسيسية، بحضور تجاوز 500 من الأعضاء المؤسسين والفاعلين من مختلف محافظات الجمهورية، وفي مقدمتها: البحيرة، الفيوم، بني سويف، أسيوط، الإسكندرية، الدقهلية، سوهاج، الجيزة، والقاهرة، إلى جانب محافظات أخرى.',
    'party.p2':             'ضمّ المؤتمر نخبةً من القيادات الإعلامية والصحفية، والأطباء، ورجال القانون، والقيادات التنفيذية، وأساتذة الجامعات، والشباب، والفلاحين، والمهنيين، والسيدات — في صورة تعكس التنوع الحقيقي للمجتمع المصري، وتؤكد أن حزب الناس هو حزب لكل المصريين.',
    'party.val1.title':     'المشاركة الوطنية',
    'party.val1.body':      'بيت سياسي لكل مصري، من كل محافظة وكل قطاع.',
    'party.val2.title':     'احترام الدستور والقانون',
    'party.val2.body':      'عمل سياسي قائم على احترام الدستور والقانون.',
    'party.val3.title':     'الكفاءة والشفافية',
    'party.val3.body':      'قيادة مسؤولة قائمة على الكفاءة والشفافية.',
    'party.val4.title':     'خدمة الوطن والمواطن',
    'party.val4.body':      'عمل جاد ومستمر لخدمة الوطن والمواطن.',

    'fayez.eyebrow':        'وكيل المؤسسين',
    'fayez.title':          'علي فايز <em>الفرجاني</em>',
    'fayez.role':           'وكيل المؤسسين، حزب الناس',
    'fayez.bio1':           'المستشار علي فايز الفرجاني محامٍ بالاستئناف العالي، ومقدّم برامج على قناتي الشمس والمحور، وباحث دكتوراة في القانون، حاصل على ماجستير في الإعلام وماجستير في الاتصال السياسي.',
    'fayez.bio2':           'كما يشغل منصب رئيس مؤسسة علي فايز الخيرية، وهو منتسب لأكاديمية ناصر العسكرية. وبصفته وكيل المؤسسين لحزب الناس، يمثل الهيئة التأسيسية للحزب وتصدّر إعلاناته الرسمية، ومنها المؤتمر الأول لتأسيس الحزب ومبادرة منظومة كارت الخدمات المرتقبة.',
    'fayez.achTitle':       'أبرز المحطات',
    'fayez.ach1':           'محامٍ بالاستئناف العالي وباحث دكتوراة في القانون',
    'fayez.ach2':           'مقدّم برامج على قناتي الشمس والمحور',
    'fayez.ach3':           'رئيس مؤسسة علي فايز الخيرية',
    'fayez.ach4':           'وكيل المؤسسين — قاد المؤتمر الأول لتأسيس حزب الناس',
    'fayez.note':           'السيرة الذاتية منقولة عن الصفحة الرسمية لعلي فايز على فيسبوك.',

    'init.eyebrow':         'مبادرة رسمية',
    'init.title':           'منظومة <em>كارت الخدمات</em>',
    'init.sub':             'منظومة عضوية إلكترونية أعلن عنها الحزب: كل كارنيه عضوية يحمل QR Code يتيح الاستفادة من شبكة متنامية من الخصومات الخدمية اليومية — يبدأ تفعيلها فور استكمال إجراءات تأسيس الحزب رسميًا.',
    'init.quote':           '— كما أعلن المستشار علي فايز الفرجاني، وكيل مؤسسي حزب الناس.',
    'init.tier1.title':     'بطاقة VIP',
    'init.tier1.sub':       'الأعضاء المؤسسين',
    'init.tier1.body':      'استفادة كاملة 100% من شبكة الخدمات.',
    'init.tier2.title':     'بطاقة B',
    'init.tier2.sub':       'الأعضاء المشاركين',
    'init.tier2.body':      'استفادة بنسبة 75% من شبكة الخدمات.',
    'init.tier3.title':     'بطاقة C',
    'init.tier3.sub':       'الأعضاء المنتسبين',
    'init.tier3.body':      'استفادة بنسبة 50% من شبكة الخدمات.',
    'init.benefitsTitle':   'مجالات الخدمة',
    'init.benefit1':        'المستشفيات الخاصة — الكشف والعمليات',
    'init.benefit2':        'معامل التحاليل والأشعة',
    'init.benefit3':        'أطباء متعاقدون بمختلف التخصصات',
    'init.benefit4':        'المطاعم والماركت والهايبر ماركت',
    'init.benefit5':        'محلات الملابس والاحتياجات الأساسية',
    'init.benefit6':        'الأندية الاجتماعية والرياضية',
    'init.benefit7':        'المصايف والرحلات والخدمات الترفيهية',
    'init.benefit8':        'دعم مواصلات الطلبة',

    'contact.eyebrow':      'تواصل معنا',
    'contact.title':        'التواصل <em>والمتابعة</em>',
    'contact.sub':          'للاستفسارات الرسمية، برجاء التواصل معنا عبر صفحتنا على فيسبوك.',
    'contact.fbParty':      'الصفحة الرسمية على فيسبوك',
    'contact.fbPartySub':   'حزب الناس — أخبار وإعلانات',
    'contact.fbFayez':      'علي فايز',
    'contact.fbFayezSub':   'وكيل المؤسسين',
    'contact.linkLabel':    'زيارة',
    'contact.phoneLabel':   'التواصل الرسمي',
    'contact.phone':        '+20 120 106 8035',
    'contact.locationLabel':'المقر',
    'contact.location':     'الجيزة، القاهرة، مصر',

    'footer.tagline':       'صوت ليك، مش عليك.',
    'footer.col1':          'استكشف',
    'footer.col2':          'تابعنا',
    'footer.copy':          '© 2026 حزب الناس. جميع الحقوق محفوظة.',
    'footer.built':         'المحتوى منقول عن الصفحة الرسمية للحزب على فيسبوك.',
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
