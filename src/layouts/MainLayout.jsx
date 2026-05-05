import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Moon, Sun, Menu, Construction } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "../components/ui/Button";
import QuoteModal from "../components/QuoteModal";

const MainLayout = () => {
  const { theme, toggleTheme } = useTheme();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Construction className="w-8 h-8 text-primary transition-transform group-hover:scale-105" />
            <span className="font-semibold text-xl tracking-tight">Sadat Transport</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Fleet</Link>
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
            <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-muted transition-colors focus:outline-none">
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Button
              size="sm"
              className="text-yellow-300"
              onClick={() => setIsQuoteModalOpen(true)}
            >
              Get Quote
            </Button>
            <button className="md:hidden p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-auto py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Construction className="w-6 h-6" />
              <span className="font-semibold text-lg">Sadat Transport</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Premium heavy equipment rental for daily, weekly, and monthly needs.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Operations</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Mushahid</p>
              <p>Operations Manager</p>
              <p className="text-foreground font-medium mt-2">050-5426973</p>
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Fleet</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mobile Cranes</li>
              <li>Flat Trailers</li>
              <li>Manlifts</li>
              <li>Earthmoving (JCB, Bobcat)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <Button variant="outline" className="w-full" onClick={() => window.open("https://wa.me/971505426973", "_blank")}>WhatsApp Us</Button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-border text-xs text-muted-foreground flex justify-between">
          <p>© {new Date().getFullYear()} Sadat Transport. All rights reserved.</p>
          <p>Designed with Excellence.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;