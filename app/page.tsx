import { GraduationCap, Code, Database, Layout, Activity, Puzzle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Navbar */}
      {/* 真·悬浮胶囊 Navbar */}
    {/* 极致悬浮居中胶囊 Navbar */}
<nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md border border-zinc-800 rounded-full px-2 py-2">
  <div className="flex items-center justify-center space-x-2 sm:space-x-4">
    <a 
      href="#work" 
      className="px-4 py-2 rounded-full text-white text-sm font-medium hover:text-yellow-100 hover:bg-zinc-800/80 transition-colors"
    >
      WORK
    </a>
    <a 
      href="#about" 
      className="px-4 py-2 rounded-full text-white text-sm font-medium hover:text-yellow-100 hover:bg-zinc-800/80 transition-colors"
    >
      ABOUT
    </a>
    <a 
      href="https://www.linkedin.com/in/weijia-li-stella/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-100 transition-colors"
    >
      LET'S CONNECT!
    </a>
  </div>
</nav>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 lg:px-8 pt-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-5xl font-medium mb-4">
              Hi! I'm{' '}
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-pink-300">
                Weijia (Stella)
              </span>
            </h1>
            <h2 className="text-5xl lg:text-5xl font-medium tracking-tight mb-6 leading-tight text-white max-w-2xl mx-auto">
              I craft AI-driven products for intuitive health routines
            </h2>
            <p className="text-lg lg:text-xl text-zinc-400 max-w-2xl mx-auto">
              AI for Health M.S. in Sweden | Biotech & Neuroscience Background
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Project 1: Photo Health Checker */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  src="/projects/healthcheckdemo.mp4"
                />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Visual Health Scanner</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  React Native
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  AI Diagnostics
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  LLM API Integration
                </span>
              </div>
            </div>

            {/* Project 2: Pixel Pig Fitness Timer */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  src="/projects/piggygym-demo.mp4"
                />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Pixel Piggy Gym Timer</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  Interactive UI
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  React Native
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  Fitness Tracking
                </span>
              </div>
            </div>

            {/* Project 3: MetaboFlow */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  src="/projects/metaboflow.mp4"
                />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">MetaboFlow</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  AI agent
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  Patient-Centric Design
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  Rapid Prototyping
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Marquee Skills Section */}
      <section className="py-8 overflow-hidden bg-zinc-950">
        <div className="relative">
          <div className="marquee-content animate-marquee">
            <div className="flex items-center space-x-12 px-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <GraduationCap className="w-6 h-6" />
                <span className="text-base font-medium">M.S AI for Health @SU</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <GraduationCap className="w-6 h-6" />
                <span className="text-base font-medium">MPhil Life Science @HKUST</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Code className="w-6 h-6" />
                <span className="text-base font-medium">React Native & Next.js</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Database className="w-6 h-6" />
                <span className="text-base font-medium">Machine Learning & NLP</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Puzzle className="w-6 h-6" />
                <span className="text-base font-medium">UI/UX & Product Design</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Activity className="w-6 h-6" />
                <span className="text-base font-medium">Data Mining & Analytics</span>
              </div>
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-12 px-6">
              <div className="flex items-center space-x-3 text-gray-300">
                <GraduationCap className="w-6 h-6" />
                <span className="text-base font-medium">M.S AI for Health @SU</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <GraduationCap className="w-6 h-6" />
                <span className="text-base font-medium">MPhil Life Science @HKUST</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Code className="w-6 h-6" />
                <span className="text-base font-medium">React Native & Next.js</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Database className="w-6 h-6" />
                <span className="text-base font-medium">Machine Learning & NLP</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Puzzle className="w-6 h-6" />
                <span className="text-base font-medium">UI/UX & Product Design</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Activity className="w-6 h-6" />
                <span className="text-base font-medium">Data Mining & Analytics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Social Media Icons */}
      <footer className="py-12 px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2026 Weijia (Stella)
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/weijia-li-stella/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <span className="text-black text-lg font-bold">in</span>
              </a>
              <a
                href="https://github.com/Stellagagalwj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <span className="text-black text-lg font-bold">gh</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
