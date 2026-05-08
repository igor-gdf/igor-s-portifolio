import React, { useState } from 'react';
import { 
  Sun, Moon, Menu, X, 
  Download, Mail, Server, Database, 
  Smartphone, Monitor, Code
} from 'lucide-react';

import { DiscordLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

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
      subtitle: 'O que eu faço',
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
      discord: 'Discord'
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
      subtitle: 'What I do',
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
      discord: 'Discord'
    },
    footer: {
      rights: '© 2026 Igor Gabriel. All rights reserved.'
    }
  }
};

const techStack = [
  'JavaScript', 'TypeScript', 'Python', 'PHP',
  'React', 'Next.js', 'React Native', 'Vite', 'Tailwind CSS', 'Bootstrap',
  'Node.js', 'CakePHP', 'Express.js', 'Flask', 'PostgreSQL', 'MySQL', 'SQLite', 'Sequelize',
  'Git', 'Docker', 'Vercel', 'Render', 'Figma'
];

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

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<'pt' | 'en'>('pt');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const t = translations[lang];

  const bgClass = isDark ? 'bg-[#121214]' : 'bg-gray-50';
  const textClass = isDark ? 'text-gray-100' : 'text-gray-900';
  const textMutedClass = isDark ? 'text-gray-400' : 'text-gray-600';
  const cardBgClass = isDark ? 'bg-[#202024]' : 'bg-white';
  const borderClass = isDark ? 'border-gray-800' : 'border-gray-300';
  const navBgClass = isDark ? 'bg-[#121214]/80' : 'bg-gray-50/80';
  const hoverBorderClass = isDark ? 'hover:border-gray-500' : 'hover:border-gray-600';
  const subtleHoverBgClass = isDark ? 'hover:bg-white/10' : 'hover:bg-black/10';
  const navDividerClass = isDark ? 'border-gray-700' : 'border-gray-300';

  const primaryTextClass = isDark ? 'text-red-500' : 'text-blue-500';
  const primaryBgClass = isDark ? 'bg-red-500' : 'bg-blue-500';
  const primaryHoverTextClass = isDark ? 'hover:text-red-400' : 'hover:text-blue-400';

  const toggleTheme = () => setIsDark(!isDark);
  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt');

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${bgClass} ${textClass}`}>
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b-2 ${borderClass} ${navBgClass} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('home')}>
              <span className="font-bold text-2xl italic tracking-tighter">
                Igor<span className={primaryTextClass}>-gdf</span>
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {Object.entries({
                home: t.nav.home,
                about: t.nav.about,
                services: t.nav.services,
                tech: t.nav.tech,
                projects: t.nav.projects
              }).map(([key, label]) => (
                <button key={key} onClick={() => scrollToSection(key)} className={`text-sm font-medium ${primaryHoverTextClass} transition-colors`}>
                  {label}
                </button>
              ))}
              
              <button 
                onClick={() => scrollToSection('contact')}
                className={`px-5 py-2 rounded-full border-2 ${borderClass} text-sm font-medium ${hoverBorderClass} transition-colors`}
              >
                {t.nav.contact}
              </button>

              <div className={`flex items-center space-x-3 border-l pl-6 ${navDividerClass}`}>
                <button onClick={toggleTheme} className={`p-2 rounded-full ${subtleHoverBgClass} transition-colors`} title="Toggle Theme">
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button onClick={toggleLang} className="p-2 rounded-full font-bold text-xs uppercase">{lang}</button>
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button onClick={toggleTheme} className="p-2 rounded-full"><Sun size={18} className={!isDark ? "hidden" : ""} /><Moon size={18} className={isDark ? "hidden" : ""} /></button>
                <button onClick={toggleLang} className="p-2 rounded-full font-bold text-xs uppercase">{lang}</button>
              </div>
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`p-2 ${textMutedClass} ${primaryHoverTextClass} transition-colors`}>
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className={`md:hidden border-t-2 ${borderClass} ${bgClass} absolute w-full left-0 shadow-xl transition-colors duration-300`}>
            <div className="px-4 pt-2 pb-6 space-y-2 mt-2">
              {['home', 'about', 'services', 'projects', 'tech', 'contact'].map((key) => (
                <button key={key} onClick={() => scrollToSection(key)} className={`w-full text-left px-3 py-2 rounded ${primaryHoverTextClass}`}>
                  {t.nav[key as keyof typeof t.nav]}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        <section id="home" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className={`w-32 h-32 rounded-full mb-8 overflow-hidden border-[5px] ${borderClass} shadow-lg relative bg-gray-800`}>
            <img 
              src={isDark 
                ? "/blacktheme.png" 
                : "/whitetheme.png"
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
            className={`px-8 py-3 rounded-full border-2 ${borderClass} font-medium ${subtleHoverBgClass} transition-colors`}
          >
            {t.hero.cta}
          </button>
        </section>

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
            className={`mt-12 px-8 py-3 rounded-full border-2 ${borderClass} font-medium ${subtleHoverBgClass} transition-colors inline-flex items-center gap-2`}
          >
            {t.about.resume}
            <Download size={18} />
          </a>
        </section>

        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.services.title}</h2>
            <p className={`text-sm ${primaryTextClass}`}>{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className={`lg:col-span-2 ${cardBgClass} rounded-2xl p-8 border-2 ${borderClass} flex flex-col md:flex-row items-center gap-8 group ${hoverBorderClass} transition-colors`}>
              <div className="flex-1">
                <div className={`w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6 ${primaryTextClass}`}>
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.services.fullstack}</h3>
                <p className={`text-sm leading-relaxed ${textMutedClass}`}>{t.services.fullstackDesc}</p>
              </div>
              <div className="w-full md:w-1/2 h-48 rounded-xl bg-gradient-to-br from-gray-800 to-black overflow-hidden relative">
                <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${isDark ? 'from-red-500' : 'from-blue-500'} to-transparent`}></div>
              </div>
            </div>

            <div className={`${cardBgClass} rounded-2xl p-8 border-2 ${borderClass} flex flex-col group ${hoverBorderClass} transition-colors`}>
              <div className={`w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6 ${primaryTextClass}`}>
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.backend}</h3>
              <p className={`text-sm leading-relaxed ${textMutedClass}`}>{t.services.backendDesc}</p>
            </div>

            <div className={`${cardBgClass} rounded-2xl p-8 border-2 ${borderClass} flex flex-col group ${hoverBorderClass} transition-colors`}>
              <div className={`w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6 ${primaryTextClass}`}>
                <Monitor size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t.services.frontend}</h3>
              <p className={`text-sm leading-relaxed ${textMutedClass}`}>{t.services.frontendDesc}</p>
            </div>

            <div className={`lg:col-span-2 ${cardBgClass} rounded-2xl p-8 border-2 ${borderClass} flex flex-col md:flex-row items-center gap-8 group ${hoverBorderClass} transition-colors`}>
              <div className="w-full md:w-1/2 h-48 rounded-xl bg-gradient-to-br from-gray-800 to-black overflow-hidden relative order-last md:order-first">
                 <div className={`absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] ${isDark ? 'from-red-500' : 'from-blue-500'} to-transparent`}></div>
                </div>
              <div className="flex-1">
                <div className={`w-12 h-12 rounded-lg bg-gray-500/10 flex items-center justify-center mb-6 ${primaryTextClass}`}>
                  <Smartphone size={24} />
                </div>
                <h3 className="text-xl font-bold mb-4">{t.services.database}</h3>
                <p className={`text-sm leading-relaxed ${textMutedClass}`}>{t.services.databaseDesc}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="tech" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.tech.title}</h2>
          <p className={`text-sm mb-12 ${primaryTextClass}`}>{t.tech.subtitle}</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) => (
              <div key={tech} className={`flex items-center gap-2 px-5 py-3 rounded-full border-2 ${borderClass} ${cardBgClass} ${hoverBorderClass} transition-colors cursor-pointer`}>
                <div className={`w-2 h-2 rounded-full ${primaryBgClass}`}></div>
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.projects.title}</h2>
            <p className={`text-sm ${primaryTextClass}`}>{t.projects.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {myProjects.map((project) => (
              <a key={project.id} href={project.url} target="_blank" rel="noreferrer" className="group cursor-pointer block">
                <div className={`w-full h-56 rounded-2xl mb-6 overflow-hidden border-2 ${borderClass} bg-gray-800 relative`}>
                </div>
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{project.tech}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{t.contact.title}</h2>
            <p className={`text-sm ${primaryTextClass}`}>{t.contact.subtitle}</p>
          </div>

          <div className="space-y-4">
            {[
              { name: t.contact.email, url: 'mailto:igorgabrielr.andrade@gmail.com', icon: <Mail size={20} /> },
              { name: t.contact.linkedin, url: 'https://linkedin.com/in/igorgdf11', icon: <LinkedinLogo size={20} weight="fill" /> },
              { name: t.contact.github, url: 'https://github.com/igorgdf11', icon: <GithubLogo size={20} weight="fill" /> },
              { name: t.contact.discord, url: 'https://discord.com/channels/@igor1106/', icon: <DiscordLogo size={20} weight="fill" /> }
            ].map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noreferrer" className={`flex items-center gap-3 p-3 rounded border-2 ${borderClass} ${cardBgClass} ${textMutedClass} ${primaryHoverTextClass} ${hoverBorderClass} transition-colors`}>
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className={`border-t-2 ${borderClass} py-8 mt-12 bg-black/5`}>
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className={`text-sm ${textMutedClass}`}>
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
