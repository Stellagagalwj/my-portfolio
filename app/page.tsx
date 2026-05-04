import { GraduationCap, Code, Database, Layout, Activity, Puzzle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a 
                href="#work" 
                className="px-4 py-2 border border-zinc-600 rounded-full text-white hover:text-yellow-100 hover:border-zinc-500 transition-colors font-medium"
              >
                Work
              </a>
              <a 
                href="#about" 
                className="px-4 py-2 border border-zinc-600 rounded-full text-white hover:text-yellow-100 hover:border-zinc-500 transition-colors font-medium"
              >
                About
              </a>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-100 transition-colors">
              Let's Connect!
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-6 lg:px-8 pt-42">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-5xl font-medium mb-4">
              Hi! I'm{' '}
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-yellow-400">
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
              <h3 className="text-2xl font-bold mb-4">Photo Health Checker</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  React Native
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  AI Integration
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  Cross-platform
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
              <h3 className="text-2xl font-bold mb-4">Pixel Piggy Fitness Timer</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  UI/UX Design
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  Gamification
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  Frontend
                </span>
              </div>
            </div>

            {/* Project 3: Meal Planner */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-3xl mb-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <video 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  src="/projects/meal-planner.mp4"
                />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4">Meal Planner</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  React Native
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  AI Integration
                </span>
                <span className="px-4 py-2 border border-zinc-600 rounded-full text-sm text-zinc-300 hover:bg-zinc-800 transition-colors">
                  Cross-platform
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
              © 2026 Weijia (Stella) Portfolio
            </div>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <span className="text-black text-lg font-bold">in</span>
              </a>
              <a
                href="https://github.com"
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
