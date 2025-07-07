import { Footer } from "@/components/footer"
import type { FC, PropsWithChildren } from "react"

export const WithFooter: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
        <div className="flex-col w-100 h-100">
            {children}
            <Footer />
        </div>
    </>
  )
}
