"use client"

import { CheckCircle } from "lucide-react"

export default function About() {
  const achievements = [
    { title: "Years in Business", value: "1+" },
    { title: "Projects Completed", value: "40+" },
    { title: "Happy Customers", value: "1500+" },
    { title: "KW Installed", value: "125+" },
  ]

  return (
    <section id="about" className="py-12 md:py-16 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 text-balance">
              About Nirma Solar Solutions
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-3 md:mb-4 leading-relaxed">
              We are Rajasthan's trusted solar installation partner, specializing in PM Suryaghar Yojana implementations.
              With over 25 years of experience in govt contracts now dealing in Solar Installation, we've helped thousands of families with the power of
              solar energy while maximizing government subsidies.
            </p>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Our mission is to make solar energy accessible and affordable for every household. We provide end-to-end
              solutions from consultation to maintenance, ensuring your investment in solar energy is smooth and
              rewarding.
            </p>

            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              {[
                "MNRE Certified Installation Partner",
                "PM Suryaghar Yojana Authorized",
                "25-Year Warranty on All Systems",
                "5-Year Company Warranty",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {achievements.map((item, i) => (
              <div key={i} className="bg-background border border-border p-4 md:p-6 rounded-lg text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{item.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
