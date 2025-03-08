"use client";
import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { usePathname } from "next/navigation";

const Hero1 = () => {
  const canvasRef = useRef(null);  
  const pathname = usePathname(); // ✅ Replaces useLocation()
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    // Check if the user is coming back to the homepage
    if (pathname === "/" && sessionStorage.getItem("reloaded") === "false") {
      sessionStorage.setItem("reloaded", "true");
      window.location.reload();
    } else {
      sessionStorage.setItem("reloaded", "false");
    }

    const handleResize = () => {
      setShowScrollButton(window.innerWidth <= 480);
    };

    handleResize(); // Check on load
    window.addEventListener("resize", handleResize);

    
    
    // Initialize Google Analytics
    window.ga = window.ga || function() { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date;
    ga('create', 'UA-105392568-1', 'auto');
    ga('send', 'pageview');
    
    // We'll create a flag on the window object to prevent double initialization
    if (!window._fluidSimulationInitialized) {
      window._fluidSimulationInitialized = true;
      
      // Load Google Analytics script
      const gaScript = document.createElement("script");
      gaScript.src = "https://www.google-analytics.com/analytics.js";
      gaScript.async = true;
      document.head.appendChild(gaScript);
      
      // Load dat.gui.min.js and ensure it's only loaded once
      if (!document.querySelector('script[src="/dat.gui.min.js"]')) {
        const datGuiScript = document.createElement("script");
        datGuiScript.src = "/dat.gui.min.js";
        datGuiScript.async = true;
        document.head.appendChild(datGuiScript);
        
        // Load main script only after dat.gui is loaded
        datGuiScript.onload = () => {
          if (!document.querySelector('script[src="/script.js"]')) {
            const mainScript = document.createElement("script");
            mainScript.src = "/script.js";
            mainScript.async = false; // Setting to false to ensure proper execution order
            document.head.appendChild(mainScript);
          }
        };
      }
    }

    
      
    
    // We're not removing the scripts on unmount to prevent reinitialization issues
    // This is intentional to avoid the redeclaration error
    return () => window.removeEventListener("resize", handleResize);
  }, [pathname]);

  const handleScroll = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  
  
  return (
    <div className="fluid-hero-container">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>

      <div className="center-text">PIXAVIA</div>
      <div className="center-text1">Pixel Perfect Everytime</div>
      <canvas ref={canvasRef}></canvas>
      {/* Scroll Button for Mobile */}
      {showScrollButton && (
        <button className="scroll-button" onClick={handleScroll}>
          ↓
        </button>
      )}
      {/* Promo modal */}
      {/* <div className="promo">
        <div className="promo-middle">
          <div className="promo-content">
            <div className="promo-header">
              <span className="promo-close">&times;</span>
            </div>
            <div className="promo-body">
              <p>Try Fluid Simulation app!</p>
                 <div className="links-container">
                <a className="link" id="apple_link" target="_blank" rel="noreferrer">
                  <img className="/client01.png" alt="Download on the App Store" src="/app_badge.png" />
                </a>
                <a className="link" id="google_link" target="_blank" rel="noreferrer">
                  <img className="/client01.png" alt="Get it on Google Play" src="/gp_badge.png" />
                </a>
              </div> 
            </div>
          </div>
        </div>
      </div> */}

      <style jsx>{`
        /* Font face definition */

        .scroll-button {
          position: absolute;
          bottom: 60px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(255, 255, 255, 0.8);
          color: black;
          border: none;
          padding: 12px 16px;
          font-size: 20px;
          border-radius: 50%;
          cursor: pointer;
          z-index: 100;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          animation: bounce 1.5s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @media (min-width: 481px) {
          .scroll-button {
            display: none;
          }
        }

        @font-face {
          font-family: 'iconfont';
          src: url('/iconfont.ttf') format('truetype');
        }

        /* Global styles */
        :global(*) {
          user-select: none;
        }

        :global(html), :global(body) {
         
          background-color: #000;
        }

        :global(body) {
          margin: 0;
          position: relative;
          width: 100%;
          height: auto;
        }

        /* Component specific styles */
        .fluid-hero-container {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
        }

        canvas {
          width: 100%;
          height: 100%;
          background-color: black !important;
        }

        .center-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 8vw;
          font-weight: bold;
          color: rgba(255, 255, 255, 1); 
          pointer-events: none;
          font-family: Arial, sans-serif;
          z-index: 10;
        }
          .center-text1 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 140%);
          font-size: 2vw;
          font-weight: bold;
          color: rgba(255, 255, 255, 1); 
          pointer-events: none;
          font-family: Arial, sans-serif;
          z-index: 10;
        }
        @media (max-width: 480px){
        .center-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 16vw;
          font-weight: bold;
          color: rgba(255, 255, 255, 1); 
          pointer-events: none;
          font-family: Arial, sans-serif;
          z-index: 10;
        }
          .center-text1 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 160%);
          font-size: 4vw;
          font-weight: bold;
          color: rgba(255, 255, 255, 1); 
          pointer-events: none;
          font-family: Arial, sans-serif;
          z-index: 10;
        }
        
        }

        /* GUI styles */
        :global(.dg) {
          opacity: 0.9;
        }

        :global(.dg .property-name) {
          overflow: visible;
        }

        :global(.bigFont) {
          font-size: 150%;
          color: #8C8C8C;
        }

        :global(.cr.function.appBigFont) {
          font-size: 150%;
          line-height: 27px;
          color: #A5F8D3;
          background-color: #023C40;
        }

        :global(.cr.function.appBigFont .property-name) {
          float: none;
        }

        :global(.cr.function.appBigFont .icon) {
          position: sticky;
          bottom: 27px;
        }

        :global(.icon) {
          font-family: 'iconfont';
          font-size: 130%;
          float: right;
        }

        :global(.twitter:before) {
          content: 'a';
        }

        :global(.github:before) {
          content: 'b';
        }

        :global(.app:before) {
          content: 'c';
        }

        :global(.discord:before) {
          content: 'd';
        }

        /* Promo modal styles */
        .promo {
          display: none; /* Changed from 'table' to match original */
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: auto;
          color: lightblue;
          background-color: rgba(0,0,0,0.4);
          animation: promo-appear-animation 0.35s ease-out;
        }

        .promo-middle {
          display: table-cell;
          vertical-align: middle;
        }

        .promo-content {
          width: 80vw;
          height: 80vh;
          max-width: 80vh;
          max-height: 80vw;
          margin: auto;
          padding: 0;
          font-size: 2.8vmax;
          font-family: Futura, "Trebuchet MS", Arial, sans-serif;
          text-align: center;
          background-image: url("/promo_back.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 15px;
          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        }

        .promo-header {
          height: 10%;
          padding: 2px 16px;
        }

        .promo-close {
          width: 10%;
          height: 100%;
          text-align: left;
          float: left;
          font-size: 1.3em;
        }

        .promo-close:hover {
          cursor: pointer;
        }

        .promo-body {
          padding: 8px 16px 16px 16px;
          margin: auto;
        }

        .promo-body p {
          margin-top: 0;
          mix-blend-mode: color-dodge;
        }

        .link {
          width: 100%;
          display: inline-block;
        }

        .link img {
          width: 100%;
        }

        @keyframes promo-appear-animation {
          0% {
            transform: scale(2.0);
            opacity: 0;
          }
          100% {
            transform: scale(1.0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero1;