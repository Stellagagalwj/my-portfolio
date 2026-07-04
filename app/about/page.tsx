import { GraduationCap, Code, Database, Layout, Activity, Puzzle } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
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
      href="/about" 
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

      {/* About 内容主体 */}
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* 左侧：个人照片 (占据 5 列) */}
          <div className="md:col-span-5 order-2 md:order-1 mt-8 md:mt-0">
            {/* 照片占位：把 your-photo.jpg 换成你的真实照片路径 */}
            <div className="aspect-[3/4] rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative shadow-2xl">
              <img 
                src="/your-photo.jpg" 
                alt="Stella Li" 
                className="w-full h-full object-cover" 
              />
              {/* 如果暂时没有放照片，屏幕上会显示一个深灰色的高级占位框 */}
            </div>
          </div>

          {/* 右侧：文字介绍与教育背景 (占据 7 列) */}
          <div className="md:col-span-7 order-1 md:order-2 space-y-10">
            
            {/* 文字部分 */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-8">
                Beyond the Code
              </h1>
              
              <div className="text-zinc-400 space-y-5 leading-relaxed text-lg">
                <p>
                  Hi, I'm Weijia (Stella) Li. I am an interdisciplinary developer and researcher bridging the gap between rigorous scientific research and human-centric digital experiences. I am currently pursuing my Master's in AI for Health at Stockholm University.
                </p>
                <p>
                  With a foundation in Biotechnology and an MPhil in Neuroscience from HKUST, my journey began by solving complex challenges in labs. However, my passion for scalable impact led me to software development. Today, I translate medical and technical insights into accessible applications—from computer vision diagnostics to gamified behavioral health tools.
                </p>
                <p>
                  I believe the best health products are built by those who live the lifestyle. When I'm not architecting AI-driven applications or refining prompts, you can usually find me training for my next 10km run, pushing through a BodyPump class, or exploring museums across Europe.
                </p>
              </div>
            </div>

            {/* 教育背景部分 */}
            <div className="pt-8 border-t border-zinc-800/80">
              <h3 className="text-white font-medium mb-6 text-lg">Education</h3>
              <ul className="space-y-5 text-zinc-400 text-sm">
                <li>
                  <strong className="text-zinc-200 block text-base mb-0.5">Stockholm University</strong>
                  M.Sc. in AI for Health (Expected 2027)
                </li>
                <li>
                  <strong className="text-zinc-200 block text-base mb-0.5">HKUST</strong>
                  M.Phil in Neuroscience
                </li>
                <li>
                  <strong className="text-zinc-200 block text-base mb-0.5">SCUT</strong>
                  B.Sc. in Biotechnology
                </li>
              </ul>
            </div>

          </div>

        </div>
      </main>

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
  )
}