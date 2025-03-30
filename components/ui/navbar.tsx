'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Moon, Sun, ChevronRight, ChevronDown } from 'lucide-react';
import { Button } from './button';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
      <Link href="/">  <div className="flex items-center gap-2 font-bold">
          {/* <div className="flex items-center justify-center rounded-lg size-8 bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
            <img src="" alt="Logo" className="w-6 h-6" />  
          </div> */}
          <span>Chatify</span>
        </div></Link>
        <nav className="hidden gap-8 md:flex">
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              Ai Agents
              <ChevronDown className="size-4" />
            </button>
            
            {isDropdownOpen && (
              <div 
                className="absolute left-0 w-[400px] mt-2 rounded-md shadow-lg top-full bg-background/95 backdrop-blur-lg ring-1 ring-black ring-opacity-5"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Link href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/30/02/20250330023613-DX96RLKK.json" className="block px-4 py-2 text-sm transition-colors rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
                        Customer Support
                      </Link>
                      <Link href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/29/14/20250329143542-Z0E6HD7F.json" className="block px-4 py-2 text-sm transition-colors rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
                        Web Master
                      </Link>
                      <Link href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/29/14/20250329143542-Z0E6HD7F.json" className="block px-4 py-2 text-sm transition-colors rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
                        Crypto master
                      </Link>
                    </div>
                    <div>
                      <Link href="https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/29/14/20250329140014-ALZ155N9.json" className="block px-4 py-2 text-sm transition-colors rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
                        Finance Master
                      </Link>
                      <Link href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/30/05/20250330052603-W344S3E8.json" className="block px-4 py-2 text-sm transition-colors rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
                        Maths Solutions
                      </Link>
                      <Link href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/03/30/03/20250330031951-ZDDN5ML3.json" className="block px-4 py-2 text-sm transition-colors rounded-md text-muted-foreground hover:bg-muted hover:text-foreground">
                        Healthcare specialist
                      </Link>
                    </div>
                  </div>
                  <hr className="my-4 border-border" />
                  <p className="text-sm text-center text-muted-foreground">More coming soon...</p>
                </div>
              </div>
            )}
          </div>    
        </nav>
        <div className="items-center hidden gap-4 md:flex">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link href="/aiagents">
            <Button className="rounded-full">
              Get Started
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {mounted && theme === "dark" ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
          </Button>
            <Link href="/aiagents">
              <Button className="rounded-full">
                Start Now
              </Button>
            </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
