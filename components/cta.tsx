import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-primary text-primary-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-bold text-balance">Join Thousands of Happy Customers</h2>
        <p className="text-xl opacity-90">Start saving on electricity bills and help the environment today</p>
        <Link href="/contact">
          <Button
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Schedule Your Free Site Survey
          </Button>
        </Link>
      </div>
    </section>
  )
}
