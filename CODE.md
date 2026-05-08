import React, { useState } from 'react';
import { 
  Sun, Moon, Languages, Menu, X, 
  Download, ArrowUpRight, Github, Linkedin, 
  Instagram, Mail, Server, Database, 
  Smartphone, Layout, Monitor, Code
} from 'lucide-react';

const translations = {
  pt: {
    nav: { home: 'Home', about: 'Sobre', services: 'Serviços', projects: 'Projetos', tech: 'Tecnologias', contact: 'Fale comigo' },
    hero: {
      name: 'Igor Gabriel',
      role: 'Desenvolvedor Web Full Stack',
      desc: 'Sou um desenvolvedor Full Stack apaixonado por engenharia de software e arquitetura de sistemas, dedicado a construir aplicações web modernas e escaláveis.',
      cta: 'Fale comigo'
    },
    about: {
      title: 'Sobre mim',
      subtitle: 'Quem sou eu',
      p1: 'Olá! Sou desenvolvedor Full Stack com formação técnica em Informática para Internet pelo IFRN e atualmente graduando em Bacharelado em Tecnologia da Informação na UFRN (Metrópole Digital).',
      p2: 'Possuo experiência no desenvolvimento e manutenção de aplicações web em ambiente de produção, utilizando tecnologias do ecossistema JavaScript e PHP em aplicações estruturadas com frameworks como CakePHP e Express.js.',
      p3: 'Tenho forte base em integração com bancos de dados relacionais, organização de aplicações seguindo o padrão arquitetural MVC, consumo e criação de APIs RESTful, além da utilização de ambientes containerizados com Docker.',
      resume: 'Baixar Currículo'
    },
    services: {
      title: 'Meus serviços',
      subtitle: 'O que eu faço (Baseado no meu CV)',
      fullstack: 'Desenvolvimento Full Stack',
      fullstackDesc: 'Desenvolvimento de ponta a ponta, integrando interfaces dinâmicas com back-ends robustos utilizando JavaScript, PHP e seus ecossistemas.',
      backend: 'Back-end & APIs',
      backendDesc: 'Criação de APIs RESTful escaláveis e seguras, estruturadas em MVC com Node.js (Express), Python (Flask) ou PHP (CakePHP).',
      frontend: 'Front-end Moderno',
      frontendDesc: 'Construção de interfaces fluidas, responsivas e otimizadas utilizando React, Next.js, Tailwind CSS e Bootstrap.',
      database: 'Bancos de Dados',
      databaseDesc: 'Modelagem, integração e gerenciamento de dados complexos utilizando bancos relacionais como PostgreSQL e MySQL.',
      mobile: 'Desenvolvimento Mobile',
      mobileDesc: 'Participação e criação de aplicativos multiplataforma para Android e iOS utilizando React Native.'
    },
    tech: {
      title: 'Minhas tecnologias',
      subtitle: 'Ferramentas e linguagens que utilizo'
    },
    projects: {
      title: 'Meus projetos',
      subtitle: 'Direto do meu GitHub',
    },
    contact: {
      title: 'Contatos Profissionais',
      subtitle: 'Vamos conversar sobre negócios',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'E-mail',
      whatsapp: 'WhatsApp'
    },
    footer: {
      rights: '© 2026 Igor Gabriel. Todos os direitos reservados.'
    }
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', projects: 'Projects', tech: 'Technologies', contact: 'Contact me' },
    hero: {
      name: 'Igor Gabriel',
      role: 'Full Stack Web Developer',
      desc: 'I am a Full Stack developer passionate about software engineering and system architecture, dedicated to building modern and scalable web applications.',
      cta: 'Contact me'
    },
    about: {
      title: 'About me',
      subtitle: 'Who am I',
      p1: 'Hi! I am a Full Stack developer with a technical degree in Internet Informatics from IFRN and currently pursuing a Bachelor\'s in Information Technology at UFRN (Digital Metropolis).',
      p2: 'I have experience developing and maintaining web applications in production environments, using technologies from the JavaScript and PHP ecosystems in structured applications with frameworks like CakePHP and Express.js.',
      p3: 'I have a strong foundation in relational database integration, MVC architectural patterns, building and consuming RESTful APIs, and using containerized environments with Docker.',
      resume: 'Download Resume'
    },
    services: {
      title: 'My services',
      subtitle: 'What I do (Based on my CV)',
      fullstack: 'Full Stack Development',
      fullstackDesc: 'End-to-end development, integrating dynamic interfaces with robust back-ends using JavaScript, PHP, and their ecosystems.',
      backend: 'Back-end & APIs',
      backendDesc: 'Building scalable and secure RESTful APIs structured in MVC with Node.js (Express), Python (Flask), or PHP (CakePHP).',
      frontend: 'Modern Front-end',
      frontendDesc: 'Building fluid, responsive, and optimized interfaces using React, Next.js, Tailwind CSS, and Bootstrap.',
      database: 'Databases',
      databaseDesc: 'Modeling, integrating, and managing complex data using relational databases like PostgreSQL and MySQL.',
      mobile: 'Mobile Development',
      mobileDesc: 'Creating cross-platform applications for Android and iOS using React Native.'
    },
    tech: {
      title: 'My technologies',
      subtitle: 'Tools and languages I use'
    },
    projects: {
      title: 'My projects',
      subtitle: 'Straight from my GitHub',
    },
    contact: {
      title: 'Professional Contacts',
      subtitle: 'Let\'s talk about business',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      email: 'E-mail',
      whatsapp: 'WhatsApp'
    },
    footer: {
      rights: '© 2026 Igor Gabriel. All rights reserved.'
    }
  }
};

const techStack = [
  'JavaScript', 'PHP', 'Python', 'React', 'Next.js', 
  'Node.js', 'Express.js', 'CakePHP', 'Flask', 
  'React Native', 'PostgreSQL', 'MySQL', 'Docker', 'Git'
];

// Dados extraídos diretamente do seu GitHub
const myProjects = [
  {
    id: 1,
    title: "Xuxa's Salon",
    descPt: "Sistema de gerenciamento e agendamento de um salão de beleza.",
    descEn: "Management and scheduling system for a beauty salon.",
    tech: "Vue.js",
    url: "https://github.com/igor-gdf/Xuxa-s-Salon"
  },
  {
    id: 2,
    title: "Blog to Dev",
    descPt: "Plataforma de blog focada em desenvolvimento.",
    descEn: "Blog platform focused on development.",
    tech: "PHP",
    url: "https://github.com/igor-gdf/blog-to-dev"
  },
  {
    id: 3,
    title: "App & API Mensagens",
    descPt: "Aplicação alimentada por uma API própria de mensagens.",
    descEn: "Application powered by its own messaging API.",
    tech: "JavaScript",
    url: "https://github.com/igor-gdf/app-mensagens"
  },
  {
    id: 4,
    title: "API SOC",
    descPt: "API RESTful para sistema de gerenciamento.",
    descEn: "RESTful API for management system.",
    tech: "JavaScript / Node",
    url: "https://github.com/igor-gdf/API-SOC"
  },
  {
    id: 5,
    title: "Federal's Indie",
    descPt: "Integração de front-end com API (Projeto Acadêmico).",
    descEn: "Front-end and API integration (Academic Project).",
    tech: "JavaScript",
    url: "https://github.com/igor-gdf/Federl-s_api"
  },
  {
    id: 6,
    title: "LoveYuu",
    descPt: "Um site romântico minimalista com carrossel de fotos e player Spotify.",
    descEn: "Minimalist romantic website with photo carousel and Spotify player.",
    tech: "HTML / CSS",
    url: "https://github.com/igor-gdf/loveyuu-igor_loh"
  }
];

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState('pt');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[lang];

  // Theme Classes
  const bgClass = isDark ? 'bg-[#121214]' : 'bg-gray-50';
  const textClass = isDark ? 'text-gray-100' : 'text-gray-900';
  const textMutedClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBgClass = isDark ? 'bg-[#202024]' : 'bg-white';
  const borderClass = isDark ? 'border-gray-800' : 'border-gray-200';
  const navBgClass = isDark ? 'bg-[#121214]/80' : 'bg-gray-50/80';

  // Color Classes (Red for Dark, Blue for Light)
  const primaryTextClass = isDark ? 'text-red-500' : 'text-blue-500';
  const primaryBgClass = isDark ? 'bg-red-500' : 'bg-blue-500';
  const primaryHoverTextClass = isDark ? 'hover:text-red-400' : 'hover:text-blue-400';

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt');

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${bgClass} ${textClass}`}>
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${borderClass} ${navBgClass} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="font-bold text-2xl italic tracking-tighter">
                Igor<span className={primaryTextClass}>-gdf</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries({
                home: t.nav.home,
                about: t.nav.about,
                services: t.nav.services,
                projects: t.nav.projects,
                tech: t.nav.tech
              }).map(([key, label]) => (
                <button key={key} onClick={() => scrollToSection(key)} className={`text-sm font-medium ${primaryHoverTextClass} transition-colors`}>
                  {label}
                </button>
              ))}
              
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-5 py-2 rounded-full border ${borderClass} text-sm font-medium hover:border-gray-400 transition-colors`}
              >
                {t.nav.contact}
              </button>

              {/* Toggles */}
              <div className="flex items-center space-x-3 border-l pl-6 border-gray-700">
                <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-500/10 transition-colors" title="Toggle Theme">
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button onClick={toggleLang} className="p-2 rounded-full hover:bg-gray-500/10 transition-colors flex items-center gap-1" title="Toggle Language">
                  <Languages size={18} /> <span className="text-xs font-bold uppercase">{lang}</span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button onClick={toggleTheme} className="p-2 rounded-full"><Sun size={18} className={!isDark ? "hidden" : ""} /><Moon size={18} className={isDark ? "hidden" : ""} /></button>
                <button onClick={toggleLang} className="p-2 rounded-full font-bold text-xs uppercase">{lang}</button>
              </div>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 ${textMutedClass} hover:${primaryTextClass} transition-colors`}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className={`md:hidden border-t ${borderClass} ${bgClass} absolute w-full left-0 shadow-xl transition-colors duration-300`}>
            <div className="px-4 pt-2 pb-6 space-y-2 mt-2">
              {['home', 'about', 'services', 'projects', 'tech', 'contact'].map((key) => (
                <button
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${textMutedClass} ${primaryHoverTextClass} ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-200'} transition-colors`}
                >
                  {t.nav[key]}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="pt-20">
        
        {/* HERO SECTION */}
        <section id="home" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className={`w-32 h-32 rounded-full mb-8 overflow-hidden border-4 ${borderClass} shadow-lg relative bg-gray-800`}>
            {/* Foto de Perfil (Muda com o tema) */}
            <img 
              src={isDark 
                ? "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                : "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              }
              alt="Igor Gabriel" 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
            {t.hero.name}
          </h1>
          <h2 className={`text-xl md:text-2xl font-semibold mb-6 ${primaryTextClass}`}>
            {t.hero.role}
          </h2>
          <p className={`text-base md:text-lg mb-10 max-w-2xl leading-relaxed ${textMutedClass}`}>
            {t.hero.desc}
          </p>
          <button 
            onClick={() => scrollToSection('contact')}
            className={`px-8 py-3 rounded-full border ${borderClass} font-medium hover:bg-gray-500/10 transition-colors`}
          >
            {t.hero.cta}
          </button>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.about.title}</h2>
          <p className={`text-sm mb-12 ${primaryTextClass}`}>{t.about.subtitle}</p>
          
          <div className={`space-y-6 text-left md:text-center leading-relaxed ${textMutedClass}`}>
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <a 
            href="/Igor_Gabriel_Rocha_de_Andrade_FlowCV_Resume.pdf" 
            download
            className={`mt-12 px-8 py-3 rounded-full border ${borderClass} font-medium hover:bg-gray-500/10 transition-colors inline-flex items-center gap-2`}
          >
            {t.about.resume}
            <Download size={18} />
          </a>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.services.title}</h2>
            <p className={`text-sm ${primaryTextClass}`}>{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Service 1 - Wide (Full Stack) */}
            <div className={`lg:col-span-2 ${cardBgClass} rounded-2xl p-8 border ${borderClass} flex flex-col md:flex-row items-center gap-8 group hover:border-gray-500 transition-colors`}>
              <div className="flex-1">
                <div className={`w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6 ${primaryTextClass}`}>
                  <Layout size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.services.fullstack}</h3>
                <p className={`text-sm leading-relaxed ${textMutedClass}`}>{t.services.fullstackDesc}</p>
              </div>
              <div className="w-full md:w-1/2 h-48 rounded-xl bg-gradient-to-br from-gray-800 to-black overflow-hidden relative">
                <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${isDark ? 'from-red-500' : 'from-blue-500'} to-transparent`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code size={64} className="text-white/50" />
                </div>
              </div>
            </div>

            {/* Service 2 - Square (Backend) */}
            <div className={`${cardBgClass} rounded-2xl p-8 border ${borderClass} flex flex-col group hover:border-gray-500 transition-colors`}>
              <div className={`w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6 ${primaryTextClass}`}>
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.backend}</h3>
              <p className={`text-sm leading-relaxed ${textMutedClass}`}>{t.services.backendDesc}</p>
            </div>

            {/* Service 3 - Square (Frontend) */}
            <div className={`${cardBgClass} rounded-2xl p-8 border ${borderClass} flex flex-col group hover:border-gray-500 transition-colors`}>
              <div className={`w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6 ${primaryTextClass}`}>
                <Monitor size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.frontend}</h3>
              <p className={`text-sm leading-relaxed ${textMutedClass}`}>{t.services.frontendDesc}</p>
            </div>

            {/* Service 4 - Square (Database) */}
            <div className={`${cardBgClass} rounded-2xl p-8 border ${borderClass} flex flex-col group hover:border-gray-500 transition-colors`}>
              <div className={`w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6 ${primaryTextClass}`}>
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.database}</h3>
              <p className={`text-sm leading-relaxed ${textMutedClass}`}>{t.services.databaseDesc}</p>
            </div>

            {/* Service 5 - Wide (Mobile) */}
            <div className={`lg:col-span-2 ${cardBgClass} rounded-2xl p-8 border ${borderClass} flex flex-col md:flex-row items-center gap-8 group hover:border-gray-500 transition-colors`}>
              <div className="w-full md:w-1/2 h-48 rounded-xl bg-gradient-to-br from-gray-800 to-black overflow-hidden relative order-last md:order-first">
                 <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${isDark ? 'from-red-500' : 'from-blue-500'} to-transparent`}></div>
                 <div className="absolute inset-0 flex items-center justify-center">
                  <Smartphone size={64} className="text-white/50" />
                </div>
              </div>
              <div className="flex-1">
                <div className={`w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6 ${primaryTextClass}`}>
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.services.mobile}</h3>
                <p className={`text-sm leading-relaxed ${textMutedClass}`}>{t.services.mobileDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* TECH SECTION */}
        <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.tech.title}</h2>
          <p className={`text-sm mb-12 ${primaryTextClass}`}>{t.tech.subtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div key={tech} className={`flex items-center gap-2 px-5 py-3 rounded-full border ${borderClass} ${cardBgClass} hover:border-gray-400 transition-colors cursor-pointer`}>
                <div className={`w-2 h-2 rounded-full ${primaryBgClass}`}></div>
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.projects.title}</h2>
            <p className={`text-sm ${primaryTextClass}`}>{t.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((project) => (
              <a key={project.id} href={project.url} target="_blank" rel="noreferrer" className="group cursor-pointer block">
                <div className={`w-full h-56 rounded-2xl mb-6 overflow-hidden border ${borderClass} bg-gray-800 relative`}>
                   {/* Placeholder baseado no index para diferenciar imagens */}
                   <img 
                    src={`https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&sig=${project.id}`} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Badge de Tecnologia */}
                  <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full bg-black/60 text-white backdrop-blur-sm border ${borderClass}`}>
                    {project.tech}
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div className="pr-4">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-current transition-colors">
                      {project.title}
                    </h3>
                    <p className={`text-sm ${textMutedClass} line-clamp-2`}>
                      {lang === 'pt' ? project.descPt : project.descEn}
                    </p>
                  </div>
                  <button className={`w-10 h-10 rounded-full flex-shrink-0 ${primaryBgClass} flex items-center justify-center text-white shadow-lg transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform`}>
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION (Profissionais) */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.contact.title}</h2>
            <p className={`text-sm ${primaryTextClass}`}>{t.contact.subtitle}</p>
          </div>

          <div className="space-y-4">
            {[
              { name: t.contact.email, url: 'mailto:igorgabrielr.andrade@gmail.com', icon: <Mail size={20} /> },
              { name: t.contact.linkedin, url: 'https://linkedin.com/in/igorgdf11', icon: <Linkedin size={20} /> },
              { name: t.contact.github, url: 'https://github.com/igorgdf11', icon: <Github size={20} /> },
              { name: t.contact.whatsapp, url: 'https://wa.me/5584987133128', icon: <Smartphone size={20} /> }
            ].map((link, index) => (
              <a 
                key={index} 
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-between p-5 rounded-xl border ${borderClass} ${cardBgClass} hover:border-gray-400 group transition-colors`}
              >
                <div className="flex items-center gap-4">
                  <div className={textMutedClass}>{link.icon}</div>
                  <span className="font-medium">{link.name}</span>
                </div>
                <ArrowUpRight size={20} className={`${textMutedClass} group-hover:${primaryTextClass} transition-colors`} />
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* FOOTER (Contatos Pessoais / Redes Sociais) */}
      <footer className={`border-t ${borderClass} py-8 mt-12 bg-black/5`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className={`text-sm ${textMutedClass}`}>
            {t.footer.rights}
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className={`text-xs uppercase tracking-widest font-bold ${textMutedClass}`}>Socials</span>
            <div className="flex items-center space-x-4">
              <a href="#" target="_blank" rel="noreferrer" title="Instagram" className={`w-12 h-12 rounded-full border ${borderClass} flex items-center justify-center ${textMutedClass} hover:${primaryTextClass} hover:border-current transition-colors`}>
                <Instagram size={20} />
              </a>
              {/* Você pode adicionar outras redes sociais pessoais aqui futuramente (Twitter, etc) */}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}