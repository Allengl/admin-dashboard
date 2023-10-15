'use client'

import { ContextProvider } from "@/contexts/ContextProvider"
import { SessionProvider } from "next-auth/react"
import { FC } from "react"

interface ProviderProps {
  children: React.ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
  return (
    <SessionProvider>
      <ContextProvider>
        {children}
      </ContextProvider>
    </SessionProvider>
  )
}

export default Provider
