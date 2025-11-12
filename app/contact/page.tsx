import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Get in touch with our team for a free consultation and site survey.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 flex-grow">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-background border border-border p-6 rounded-lg text-center">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground">+91-XXX-XXX-XXXX</p>
          </div>
          <div className="bg-background border border-border p-6 rounded-lg text-center">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground">info@solarflow.com</p>
          </div>
          <div className="bg-background border border-border p-6 rounded-lg text-center">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-bold text-foreground mb-2">Address</h3>
            <p className="text-muted-foreground">Gurgaon, Haryana, India</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
