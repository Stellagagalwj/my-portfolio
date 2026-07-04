export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* 极致悬浮居中胶囊 Navbar */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-black/80 backdrop-blur-md border border-zinc-800 rounded-full px-2 py-2">
        <div className="flex items-center justify-center space-x-2 sm:space-x-4">
          <a 
            href="/" 
            className="px-4 py-2 rounded-full text-white text-sm font-medium hover:text-yellow-100 hover:bg-zinc-800/80 transition-colors"
          >
            Work
          </a>
          <a 
            href="/about" 
            className="px-4 py-2 rounded-full text-white text-sm font-medium hover:text-yellow-100 hover:bg-zinc-800/80 transition-colors"
          >
            About
          </a>
          <a 
            href="https://www.linkedin.com/in/weijia-li-stella/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-yellow-100 transition-colors"
          >
            Let's Connect!
          </a>
        </div>
      </nav>

      {/* About 内容主体（加了 pt-32 把内容往下推，避免被悬浮导航栏挡住） */}
      <main className="pt-32 pb-24 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* 左侧：文字介绍 */}
          <div className="md:col-span-7 space-y-6">
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

          {/* 右侧：技能标签 / 照片占位 */}
          <div className="md:col-span-5 space-y-8 mt-4 md:mt-0">
            {/* 照片占位：把 your-photo.jpg 换成你的真实照片路径 */}
            {/* <div className="aspect-square rounded-2xl bg-zinc-800/50 border border-zinc-700 overflow-hidden">
              <img src="/your-photo.jpg" alt="Stella Li" className="w-full h-full object-cover" />
            </div> */}

            <div>
              <h3 className="text-white font-medium mb-4 text-lg">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["AI Product Development", "React Native", "Next.js", "Computer Vision", "Digital Biomarkers", "Neuroscience", "Prompt Engineering", "UI/UX"].map((skill) => (
                  <span key={skill} className="px-3 py-1 border border-zinc-700 rounded-full text-zinc-300 text-sm hover:border-zinc-500 hover:text-white transition-colors cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-medium mb-4 text-lg">Education</h3>
              <ul className="space-y-3 text-zinc-400 text-sm">
                <li>
                  <strong className="text-zinc-200 block text-base">Stockholm University</strong>
                  M.Sc. in AI for Health (Expected 2027)
                </li>
                <li>
                  <strong className="text-zinc-200 block text-base">HKUST</strong>
                  M.Phil in Neuroscience
                </li>
                <li>
                  <strong className="text-zinc-200 block text-base">SCUT</strong>
                  B.Sc. in Biotechnology
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      {/* 底部 Footer (如果你主页有 Footer，直接复制过来替换这里) */}
      <footer className="border-t border-zinc-800 py-8 text-center text-zinc-500 text-sm">
        <p>© {new Date().getFullYear()} Weijia (Stella) Li. All rights reserved.</p>
      </footer>
    </div>
  )
}