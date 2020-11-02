import React from "react"
import "styles.css"
import "tailwindcss/dist/base.css"
import AnimationRevealPage from "helpers/AnimationRevealPage"
import Header from "components/headers/light"
import Footer from "components/footers/MiniCenteredFooter"
import Contact from "components/forms/TwoColContactUsWithIllustrationFullForm"

function ContactUs() {
    document.title = "contact us | edge learning"
    return (
      <AnimationRevealPage disabled>
        <Header />
        <Contact />
        <Footer />
      </AnimationRevealPage>
    )
}
  
export default ContactUs