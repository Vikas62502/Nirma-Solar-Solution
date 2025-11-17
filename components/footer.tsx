import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary/10 border-t border-border mt-16 md:mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          <div>
            <Link href="/" className="text-xl md:text-2xl font-bold text-primary mb-4 inline-block">
              Nirma Solar
            </Link>
            <p className="text-muted-foreground text-xs md:text-sm">
              Transforming homes with clean, sustainable solar energy solutions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-3 md:mb-4 text-sm md:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs md:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-3 md:mb-4 text-sm md:text-base">Contact Info</h4>
            <ul className="space-y-2 md:space-y-3 text-xs md:text-sm">
              <li className="flex gap-2 text-muted-foreground">
                <Phone className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0 mt-0.5" />
                <span>+91-9929095985</span>
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <Mail className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0 mt-0.5" />
                <span>www.nirmasolarsolutions.com</span>
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <MapPin className="w-3 md:w-4 h-3 md:h-4 flex-shrink-0 mt-0.5" />
                <span>Jaipur, Rajasthan</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-3 md:mb-4 text-sm md:text-base">Certifications</h4>
            <ul className="space-y-2 text-xs md:text-sm text-muted-foreground">
              <li>PM Suryaghar Certified</li>
              <li>5-Year Company Warranty</li>
              <li>Ministry Approved</li>
              <li>25-Year Warranty</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 md:pt-8">
          <p className="text-center text-xs md:text-sm text-muted-foreground">
            &copy; {currentYear} Nirma Solar Solutions. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
