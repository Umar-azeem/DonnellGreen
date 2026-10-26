import MortgageCalculator from '@/components/mortgage-calculator'
import { CtaFooter } from '@/components/nerdstack/cta-footer'
import { Navbar } from '@/components/nerdstack/navbar'
import React from 'react'

function page() {
  return (
    <>
     <Navbar />
   <div className="mx-auto max-w-[1000px] py-20"> <MortgageCalculator /></div>
    <CtaFooter />
    </>
  )
}

export default page