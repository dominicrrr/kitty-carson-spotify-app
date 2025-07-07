import { Button } from "@/components/ui/button"
import { Footer } from "@/components/Footer"

const About = () => {
    return(
        <>
        <div className="h-screen w-screen">
                <div className="text-2xl font-bold">
                    About Page
                </div>
                <Button onClick={() => {console.log("i was clicked")}}>Click Here</Button>
            </div>
        <Footer />
        </>
    )
}

export default About