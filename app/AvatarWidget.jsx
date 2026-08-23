'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AvatarWidget() {
  // 定义三种状态的图片路径
  const frames = [
    '/avatar-open.png',
    '/avatar-half.png', 
    '/avatar-closed.png'
  ];

  const [currentFrame, setCurrentFrame] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 1. 实现随机眨眼逻辑 (Timer)
  useEffect(() => {
    // 只有在没被 Hover 的时候才随机眨眼
    if (isHovered) return;

    let timeout;
    
    const blink = () => {
      // 动画序列：半闭 -> 全闭 -> 半闭 -> 睁眼
      setCurrentFrame(1); 
      setTimeout(() => setCurrentFrame(2), 50);  // 50ms 后全闭
      setTimeout(() => setCurrentFrame(1), 100); // 100ms 后半闭
      setTimeout(() => setCurrentFrame(0), 150); // 150ms 后睁眼

      // 安排下一次随机眨眼 (2秒 到 6秒 之间)
      const nextBlink = Math.random() * 4000 + 2000;
      timeout = setTimeout(blink, nextBlink);
    };

    // 启动循环
    timeout = setTimeout(blink, 2000);

    return () => clearTimeout(timeout); // 清理定时器
  }, [isHovered]);

  // 2. 悬停状态处理
  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentFrame(0); // 鼠标移上去时强制睁眼看着用户
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative inline-block w-48 h-48 group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3. 头顶的像素风/毛玻璃对话气泡 */}
      <div 
        className={`absolute -top-12 left-1/2 -translate-x-1/2 
                    bg-white/80 backdrop-blur-sm border border-white/40 
                    px-4 py-2 rounded-2xl shadow-xl z-20 whitespace-nowrap
                    transition-all duration-300 ease-in-out origin-bottom
                    ${isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-4'}`}
      >
      </div>

      {/* 4. 人物图片展示 */}
      <div className="relative w-full h-full z-10 drop-shadow-[0_10px_10px_rgba(0,0,0,0.15)] transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105">
         <Image 
           src={frames[currentFrame]}
           alt="My 3D Avatar"
           fill
           className="object-contain"
           priority
         />
      </div>
    </div>
  );
}