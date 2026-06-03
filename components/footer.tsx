import { LDSLogo } from "./lds-logo"
import { Linkedin, Instagram, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/30 py-16 px-6 md:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-1 md:col-span-2">
            <LDSLogo className="mb-5" />
            <p className="text-muted-foreground mb-5 max-w-md leading-relaxed">
              Premium digital agency crafting high-end branding and web experiences for ambitious entrepreneurs and growth-driven businesses.
            </p>
            <p className="text-sm text-primary italic">
              &ldquo;Build. Grow. Dominate.&rdquo;
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="mailto:hello@likamdigital.studio"
                aria-label="Email"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">Services</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Website Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Digital Strategy
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm tracking-wide uppercase">Company</h3>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LIKAM DIGITAL STUDIO. All rights reserved.</p>
          <p>
            Founded by{" "}
            <span className="text-foreground font-medium">Sidiki Koné</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
