import AsideLayout from "@/components/AsideLayout"
import { FC } from "react"

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="py-2 border-b flex w-full mt-28">
      <AsideLayout />
      <main className="sticky h-screen items-center w-5/6 ">
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
