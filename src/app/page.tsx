"use client";
import { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaRegMoon, FaSun   } from 'react-icons/fa';

const navLinks = [
  { name: 'Anasayfa', href: '#' },
  { name: 'Projeler', href: '#projects' },
  { name: 'Hakkımda', href: '#about' },
];

const profileImg = 'https://placehold.co/240x240?text=Profil'; // Buraya kendi fotoğrafını ekleyebilirsin

const projects = [
  {
    title: 'Sendapex',
    desc: 'Sendapex için geliştirilen websitesi.',
    image: 'https://placehold.co/400x240?text=Blog',
    link: '#',
  },
  {
    title: 'Portfolyo Sitesi',
    desc: 'Modern ve responsive portfolyo sitesi.',
    image: 'https://placehold.co/400x240?text=Portfolio',
    link: '#',
  },
  {
    title: 'To-Do Uygulaması',
    desc: 'React ile yapılmış yapılacaklar listesi uygulaması.',
    image: 'https://placehold.co/400x240?text=To-Do',
    link: '#',
  },
];

const skills = [
  'React',
  'Next.js',
  'Tailwind CSS',
  'TypeScript',
  'JavaScript',
  'Figma',
  'Node.js',
];

const companies = ['Sendapex', 'Bigs Studios', 'TVekstra', 'ICMS'];
const experienceDetails = [
  <div>
    <h4 className="font-bold text-lg mb-1">Front-end Developer @ Sendapex</h4>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
      <li>Muhasebe, iç talep, iş akışı ve destek sistemi modüllerinin arayüzlerinin geliştirilmesi</li>
      <li>Maliyet, fiyat ve prim yönetimi modülleri için arayüz geliştirme.</li>
      <li>Gümrük işlemleri otomasyonu ve raporlama modülleri için arayüz geliştirme.</li>
      <li>Operasyonel süreçlerin analizi, iyileştirilmesi ve geliştirilmesi.</li>
    </ul>
  </div>,
  <div>
    <h4 className="font-bold text-lg mb-1">Game Developer/UI-UX @ Bigs Studios</h4>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
      <li>Hyper-casual ve hybrid-casual oyunların geliştirilmesi .</li>
      <li>Oyunlarda UI ve UX geliştirme.</li>
      <li>Pazarlama operasyonları faaliyetleri</li>
      <li>Oyunlara reklam API entegrasyonları yapma</li>
    </ul>
  </div>,
  <div>
    <h4 className="font-bold text-lg mb-1">Frontend Developer @ TVekstra</h4>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
      <li>Adreslenebilir TV projelerinde ihtiyaç duyulan arayüzlerin geliştirilmesi.</li>
      <li>Şirketin kurumsal arayüz ihtiyaçlarının geliştirilmesi.</li>
    </ul>
  </div>,
  <div>
    <h4 className="font-bold text-lg mb-1">Frontend Developer @ ICMS</h4>
    <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
      <li>Tüm uygulamalar için önyüz tasarımlarının yapılması.</li>
      <li>Bir video paylaşım platformu için eksik arayüz iyileştirmelerinin tamamlanması.</li>
      <li>Özelleştirilebilir video oynatıcı, oynatma listesi oluşturma ve canlı yayın gibi web yayıncılığı arayüz ihtiyaçlarının iyileştirilmesi.</li>
      <li>Vanilla JS kullanılarak Smart TV'ler için HBB TV uyumlu bir istemci ve EPG uygulamasının geliştirilmesi.</li>
      <li>D-Smart Go projesinin arayüz geliştirmesine yardımcı olmak</li>
      <li>TV8.5 ve TV8 INT için Smart TV'lerde bölgesel hedefleme, interaktif reklam tasarımı ve reyting ölçümü için özel bir web uygulamasının geliştirilmesi.</li>
    </ul>
  </div>,
];

const Home = () => {
  // Aktif menü için scroll takibi
  const [active, setActive] = useState('Home');
  // Tema için state
  const [theme, setTheme] = useState('light');
  const [selectedCompany, setSelectedCompany] = useState(0);

  useEffect(() => {
    // Tema tercihini localStorage'dan al
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (savedTheme) setTheme(savedTheme);
    // Scroll ile aktif link belirleme
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = [
        { name: 'Anasayfa', id: undefined },
        { name: 'Projeler', id: 'projects' },
        { name: 'Hakkımda', id: 'about' },
      ];
      let current = 'Anasayfa';
      for (let i = 1; i < sections.length; i++) {
        const el = sections[i].id ? document.getElementById(sections[i].id as string) : null;
        if (el && el.offsetTop - 80 <= scrollY) {
          current = sections[i].name;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Tema değiştirici
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  // Tüm sayfada smooth scroll
  if (typeof window !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={
      'min-h-screen font-sans ' +
      (theme === 'dark'
        ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white'
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 text-black')
    }>
      {/* Navbar */}
      <nav className={
        'w-full flex items-center justify-between px-8 py-5 sticky top-0 z-30 border-b ' +
        (theme === 'dark' ? 'bg-white/10 backdrop-blur-md border-gray-800' : 'bg-white/80 backdrop-blur-md border-gray-100')
      }>
        <span className="font-extrabold text-xl tracking-tight">SalihBDR<span className="text-indigo-600">.</span></span>
        <div className="flex gap-8 items-center">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={e => handleSmoothScroll(e, link.href)}
              className={`font-medium text-base px-1 transition-colors hover:text-indigo-600 ${active === link.name ? 'text-indigo-600' : theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button onClick={toggleTheme} className="text-xl text-gray-500 hover:text-indigo-600 transition-colors p-2 rounded-full">
          {theme === 'dark' ? <FaSun /> : <FaRegMoon />}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-4 md:px-16 gap-12 bg-white dark:bg-transparent">
        {/* Sol: Başlık ve Butonlar */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl py-12">
          <p className="text-lg text-indigo-600 dark:text-white mb-2">Merhaba, ben Salih <span className="inline-block">👋</span></p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 leading-tight">
            <span className="text-indigo-600">Front</span>end<br />
            <span className="text-gray-900 dark:text-white">Developer</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 mt-2">"Kullanıcı odaklı, modern ve responsive web arayüzleri geliştiriyorum."</p>
          <div className="flex gap-4">
            <a href="mailto:salihbozdemir1@gmail.com" className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition">İletişime Geç</a>
            <a href="#projects" onClick={e => handleSmoothScroll(e, '#projects')} className="bg-white border border-gray-300 dark:bg-gray-900 dark:border-gray-700 text-gray-800 dark:text-gray-100 font-semibold px-6 py-3 rounded-lg shadow hover:border-indigo-600 hover:text-indigo-600 transition">Projeleri Gör</a>
          </div>
        </div>
        {/* Sağ: Profil Fotoğrafı */}
        <div className="flex-1 flex items-center justify-center py-12">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-[270px] h-[270px] rounded-full border-2 border-indigo-200 dark:border-indigo-400"></span>
            <img src={profileImg} alt="Profil" className="w-60 h-60 object-cover rounded-full z-10 grayscale" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">Projelerim</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <div key={i} className={
              'rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 group ' +
              (theme === 'dark' ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-200')
            }>
              <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover group-hover:opacity-90 transition" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{proj.title}</h3>
                <p className="text-gray-700 dark:text-gray-400 mb-4">{proj.desc}</p>
                <a href={proj.link} className="text-indigo-500 hover:underline">Projeye Git</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 flex justify-center items-center bg-gradient-to-br from-indigo-100/60 via-white to-indigo-200/40 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="w-full max-w-5xl rounded-2xl shadow-2xl bg-white dark:bg-gray-900 p-10 flex flex-col md:flex-row gap-10">
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <h2 className="text-4xl font-extrabold mb-2 text-black dark:text-white">Ben <span className="text-indigo-600">Kimim</span></h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Arayüz geliştirme alanında dört yıldan fazla deneyime sahibim.</p>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">My Stack:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">React/Vue</span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Next.js</span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Tailwind</span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">TypeScript</span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Asp.net MVC</span>
                <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">Bootstrap/T</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <span className="font-semibold mb-2 text-gray-800 dark:text-gray-200 text-[6em]">?</span>
            <div className="w-full flex items-center justify-center">
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-4 flex justify-center items-center bg-gradient-to-br from-indigo-100/60 via-white to-indigo-200/40 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="w-full max-w-5xl rounded-2xl shadow-2xl bg-white dark:bg-gray-900 p-10 flex flex-col gap-10">
          <h2 className="text-4xl font-extrabold mb-6 text-black dark:text-white">Deneyim<span className="text-indigo-600">.</span></h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-row md:flex-col gap-4 md:w-1/4">
              {companies.map((company, idx) => (
                <button
                  key={company}
                  onClick={() => setSelectedCompany(idx)}
                  className={`text-left px-4 py-2 rounded-lg font-semibold transition-colors text-base ${selectedCompany === idx ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200' : 'text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-800'}`}
                >
                  {company}
                </button>
              ))}
            </div>
            <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow flex flex-col gap-2">
              {experienceDetails[selectedCompany]}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-4 flex justify-center items-center bg-gradient-to-br from-indigo-100/60 via-white to-indigo-200/40 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="w-full max-w-5xl rounded-2xl shadow-2xl bg-white dark:bg-gray-900 p-10">
          <h2 className="text-4xl font-extrabold mb-8 text-black dark:text-white">Skills<span className="text-indigo-600">.</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Web Design</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-base list-disc list-inside">
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>Wireframing</li>
                <li>User Research</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Frontend</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-base list-disc list-inside">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Backend</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-base list-disc list-inside">
                <li>PostgreSQL</li>
                <li>Vercel</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Soft Skills</h3>
              <ul className="text-gray-600 dark:text-gray-300 text-base list-disc list-inside">
                <li>İletişim</li>
                <li>Takım Çalışması</li>
                <li>Problem Çözme</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Call-to-Action */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Birlikte çalışalım mı?</h2>
        <p className="text-lg text-gray-300 mb-6">Projeleriniz veya işbirliği için bana ulaşabilirsiniz.</p>
        <a href="mailto:salih@example.com" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition">İletişime Geç</a>
      </section>

      {/* Footer */}
      <footer className="text-center p-8 text-gray-500">
        <p>&copy; 2025 Salih Bozdemir. Tüm hakları saklıdır.</p>
        <p className="mt-2 text-xs">Made with ❤️ by Salih</p>
      </footer>
    </div>
  );
};

export default Home;