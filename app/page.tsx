import { GraduationCap, Code, Database, Activity, Puzzle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 极致悬浮居中胶囊 Navbar */}
      <nav className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md border border-zinc-800 rounded-full px-2 py-1.5 md:py-2 w-max max-w-[90vw]">
        <div className="flex items-center justify-center space-x-1 sm:space-x-4">
          <a 
            href="#work" 
            className="px-3 md:px-4 py-2 rounded-full text-white text-xs md:text-sm font-medium hover:text-yellow-100 hover:bg-zinc-800/80 transition-colors"
          >
            WORK
          </a>
          <a 
            href="/about" 
            className="px-3 md:px-4 py-2 rounded-full text-white text-xs md:text-sm font-medium hover:text-yellow-100 hover:bg-zinc-800/80 transition-colors"
          >
            ABOUT
          </a>
          <a 
            href="https://www.linkedin.com/in/weijia-li-stella/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-medium hover:bg-yellow-100 transition-colors"
          >
            LET'S CONNECT!
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center w-full px-6 lg:px-8 pt-32 md:pt-48 pb-12 overflow-hidden">
        
        {/* 大标题部分：现在是唯一的居中容器 */}
        <div className="text-center z-20 w-full max-w-6xl mx-auto px-4 md:px-0">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-medium mb-4">
            Hi! I'm{' '}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-pink-300 whitespace-nowrap">
              Weijia (Stella)
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-tight text-white max-w-2xl mx-auto">
            I craft AI-driven products for intuitive health routines
          </h2>
        </div>

        {/* 灰色副标题 */}
        <div className="mt-8 md:mt-10 z-20 text-center w-full">
          <p className="text-base md:text-lg lg:text-xl text-zinc-400 mx-auto px-4">
            AI for Health M.S. in Sweden | Biotech & Neuroscience Background
          </p>
        </div>
        
      </section>

      {/* Projects Grid (保持不变) */}
      <section id="work" className="py-16 md:py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* MetaboFlow */}
            <div className="group">
              <a href="https://metaboflow.lovable.app" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="overflow-hidden rounded-3xl mb-4 md:mb-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" autoPlay loop muted playsInline src="/projects/metaboflow.mp4" />
                  </div>
                </div>
              </a>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Metabolic Health Tracker·BG/BP</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-zinc-800">AI agent</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-zinc-800">Metabolic Health</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-zinc-800">Rapid Prototyping</span>
              </div>
            </div>

            {/* DICOM Gateway */}
            <div className="group">
              <a href="https://github.com/Stellagagalwj/Hospital-DICOM-Router-Gateway" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="overflow-hidden rounded-3xl mb-4 md:mb-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" autoPlay loop muted playsInline src="/projects/DICOMRouterGatewaydemo.mp4" />
                  </div>
                </div>
              </a>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">DICOM Gateway - AWS S3 & GDPR</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-zinc-800">FastAPI</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-zinc-800">Docker</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-zinc-800">AWS S3</span>
              </div>
            </div>

            {/* Piggy Gym Timer */}
            <div className="group">
              <a href="https://piggy-gym-timer.vercel.app/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="overflow-hidden rounded-3xl mb-4 md:mb-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" autoPlay loop muted playsInline src="/projects/piggygym-demo.mp4" />
                  </div>
                </div>
              </a>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Pixel Piggy Gym Timer</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-zinc-800">Interactive UI</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-zinc-800">React Native</span>
              </div>
            </div>

            {/* Health Scanner */}
            <div className="group">
              <a href="https://pixel-health-card.vercel.app/" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="overflow-hidden rounded-3xl mb-4 md:mb-6 border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                    <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" autoPlay loop muted playsInline src="/projects/healthcheckdemo.mp4" />
                  </div>
                </div>
              </a>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Visual Health Scanner</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-zinc-800">React Native</span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 border border-zinc-600 rounded-full text-xs md:text-sm text-zinc-300 hover:bg-zinc-800">AI Diagnostics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Marquee (保持不变) */}
      <section className="py-8 overflow-hidden bg-zinc-950">
        <div className="relative">
          <div className="marquee-content animate-marquee flex items-center space-x-12 px-6">
            <div className="flex items-center space-x-3 text-gray-300 whitespace-nowrap">
              <GraduationCap className="w-6 h-6" />
              <span className="font-medium">M.S AI for Health @SU</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 whitespace-nowrap">
              <GraduationCap className="w-6 h-6" />
              <span className="font-medium">MPhil Life Science @HKUST</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 whitespace-nowrap">
              <Code className="w-6 h-6" />
              <span className="font-medium">FastAPI</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 whitespace-nowrap">
              <Code className="w-6 h-6" />
              <span className="font-medium">React Native & Next.js</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 whitespace-nowrap">
              <Database className="w-6 h-6" />
              <span className="font-medium">ML & NLP</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 whitespace-nowrap">
              <Puzzle className="w-6 h-6" />
              <span className="font-medium">UI/UX Design</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300 whitespace-nowrap">
              <Activity className="w-6 h-6" />
              <span className="font-medium">Data Analytics</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (保持不变) */}
      <footer className="py-12 px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-6 md:mb-0">
            © 2026 Weijia (Stella)
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/weijia-li-stella/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-black text-lg font-bold">in</span>
            </a>
            <a href="https://github.com/Stellagagalwj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <span className="text-black text-lg font-bold">gh</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}