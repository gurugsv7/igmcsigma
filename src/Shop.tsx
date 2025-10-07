// src/Shop.tsx
import React from "react";

import tshirtImg from "./images/tshirt.png";

const Shop: React.FC = () => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden relative">
    {/* Animated Background Pattern */}
    <div className="fixed inset-0 opacity-10 pointer-events-none z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,#00f7ff_0%,transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,#d94bff_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#00d9c0_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
    {/* Animated Stars */}
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`
          }}
        >
          <div className="w-1 h-1 bg-cyan-300 rounded-full shadow-[0_0_8px_2px_rgba(0,255,255,0.3)]" />
        </div>
      ))}
    </div>
    {/* Main Content */}
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mb-8 drop-shadow-2xl animate-gradient-x text-center">
        First time in IGMC&RI history! 🎉
      </h1>
      <div className="max-w-lg w-full flex flex-col items-center space-y-6 text-center">
        <div className="relative bg-gradient-to-br from-cyan-900/60 via-black/80 to-purple-900/60 border-2 border-cyan-400/30 rounded-3xl shadow-2xl p-6 flex flex-col items-center w-full overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute -inset-2 pointer-events-none z-0">
            <div className="w-full h-full bg-gradient-to-br from-cyan-400/10 via-purple-400/10 to-pink-400/10 blur-2xl rounded-3xl"></div>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-2 z-10 text-center">
            🔥 STRIATUM 3.O Official Merchandise is Here! 🔥
          </h2>
          <div className="mb-4 w-full flex flex-col items-center">
            <div className="w-full aspect-[5/4] sm:aspect-[4/3] md:aspect-[4/3] relative">
              <img
                src={tshirtImg}
                alt="Striatum T-shirt"
                className="w-full h-full object-cover rounded-xl bg-gray-800 z-10 animate-float border-2 border-cyan-400/20 shadow-lg"
                style={{ background: "radial-gradient(circle at 60% 40%, #4ef0f9 0%, transparent 70%)" }}
              />
            </div>
          </div>
          <div className="text-base text-cyan-200 font-semibold mb-2 text-center z-10">
            Presenting our Official STRIATUM T-shirt 👕— designed exclusively for this year’s event!
          </div>
          <ul className="text-sm text-purple-200 mb-3 text-center z-10 space-y-1">
            <li>✨ Stylish design</li>
            <li>✨ Premium Quality</li>
            <li>✨ Perfect keepsake of STRIATUM 2025</li>
          </ul>
          <div className="text-lg font-bold text-green-300 mb-1 z-10">💰 Price: ₹400 only</div>
          <div className="text-sm text-pink-200 mb-2 z-10">📅 Limited stock — grab yours before it’s gone!</div>
          <a
            href="https://forms.gle/HQLgRWK7AVQPC9Zb6"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 text-center z-10 shadow-lg hover:shadow-cyan-400/25 animate-pulse"
          >
            Fill out the form and confirm your order now 👇
          </a>
          <div className="mt-4 text-base text-purple-200 text-center z-10">
            Let’s wear our pride together this STRIATUM 3.O! 💜💪
          </div>
        </div>
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 rounded-xl p-4 text-center text-sm text-cyan-200 shadow mx-auto">
          <div className="font-semibold mb-1">For any Queries Contact:</div>
          <div>Lalithkumar <a href="tel:9345831990" className="underline">93458 31990</a></div>
          <div>Srihariharan <a href="tel:9597080790" className="underline">95970 80710</a></div>
        </div>
        <div className="mt-6 text-xs text-cyan-200/70 text-center max-w-md">
          More exclusive merchandise coming soon. Stay tuned!
        </div>
      </div>
    </div>
  </div>
);

export default Shop;
