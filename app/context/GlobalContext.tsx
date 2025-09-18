'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface GlobalContextType {
  isOpenForm: boolean
  setIsOpenForm: (isOpenForm: boolean) => void
  filteredCourses: any[]
  setFilteredCourses: (courses: any[]) => void
  filteredBlog: any[]
  setFilteredBlog: (blog: any[]) => void

}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenForm, setIsOpenForm] = useState<boolean>(false)
  const [filteredCourses, setFilteredCourses] = useState<any[]>([])
  const [filteredBlog, setFilteredBlog] = useState<any[]>([])

  return (
    <GlobalContext.Provider
      value={{
        isOpenForm,
        setIsOpenForm,
        filteredCourses,
        setFilteredCourses,
        filteredBlog,
        setFilteredBlog,
  
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobalContext must be used within GlobalProvider')
  }
  return context
}
