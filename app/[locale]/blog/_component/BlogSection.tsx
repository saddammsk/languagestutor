'use client'
import React, { useEffect, useState } from 'react'
import Asidebar from './Asidebar'
import { urlFor } from '../../../lib/sanityImage'
import { useGlobalContext } from '../../../context/GlobalContext'
import { BlogCard } from '../../../components/BlogCard'
import SortByBlog from '../../../components/SortByBlog'
import { useLocale, useTranslations } from 'next-intl'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination"

const BlogSection = () => {
  const { filteredBlog } = useGlobalContext()
  const [loading, setLoading] = React.useState(true)
  const t = useTranslations()
  const locale = useLocale()
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6

  const getLocalizedText = (field: { en: string; ar: string } | string | undefined, fallback: string = '') => {
    if (!field) return fallback
    if (typeof field === 'string') return field
    if (typeof field === 'object' && field.en && field.ar) {
      return locale === 'ar' ? field.ar : field.en
    }
    return fallback
  }

  const totalPages = Math.ceil(filteredBlog.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentBlogs = filteredBlog.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (filteredBlog) {
      setLoading(false)
    } else {
      setLoading(true)
    }
  }, [filteredBlog])

  useEffect(() => {
    setCurrentPage(1)
  }, [filteredBlog])

  const getPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)
      
      let startPage = Math.max(2, currentPage - 1)
      let endPage = Math.min(totalPages - 1, currentPage + 1)
      
      if (currentPage <= 3) {
        endPage = 4
      }
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3
      }
      if (startPage > 2) {
        pages.push('ellipsis-start')
      }
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i)
      }
      if (endPage < totalPages - 1) {
        pages.push('ellipsis-end')
      }
      pages.push(totalPages)
    }
    
    return pages
  }

  return (
    <section className='lg:py-20 py-10'>
      <div className="w-full max-w-[1340px] px-5 mx-auto">
        <div className="w-full flex lg:flex-row flex-col gap-8">
          <Asidebar/>
          <div className="lg:w-[calc(100%_-_212px)] w-full">
            <div className="w-full flex items-center justify-between gap-5 mb-6">
              <h3 className='text-lg lg:block hidden text-neutral2 font-semibold'>
                <span>{t('all_blogs')}</span>
                <span className="text-sm text-gray-500 ml-2">
                  ({filteredBlog.length} {t('blogs')})
                </span>
              </h3>
              <SortByBlog/>
            </div>
            
            {/* Blog Grid */}
            <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4 mb-8">
              {currentBlogs.map((blog: any) => (
                <BlogCard 
                  key={blog._id}
                  href={`/blog/${blog.slug}`}
                  img={urlFor(blog?.mainImage).width(400).url()} 
                  authorImage={urlFor(blog?.writer?.image).width(400).url()} 
                  title={getLocalizedText(blog?.title, 'Untitled Blog')} 
                  authorName={getLocalizedText(blog?.writer?.name, 'Unknown Author')} 
                  blogCategory={getLocalizedText(blog?.blogCategory[0]?.title, 'Uncategorized')} 
                  createdAt={blog?.createdAt} 
                  description={getLocalizedText(blog?.description, 'No description available')} 
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                  
                  {getPageNumbers().map((page, index) => (
                    <PaginationItem key={index}>
                      {page === 'ellipsis-start' || page === 'ellipsis-end' ? (
                        <PaginationEllipsis />
                      ) : (
                        <PaginationLink
                          isActive={currentPage === page}
                          onClick={() => handlePageChange(page as number)}
                          className="cursor-pointer"
                        >
                          {page}
                        </PaginationLink>
                      )}
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}

            {loading && (
              <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="animate-pulse bg-white rounded-xl shadow p-4 flex flex-col gap-4 min-h-[320px] border border-neutral4"
                  >
                    <div className="bg-gray-200 h-[224px] w-full rounded-lg" />
                    <div className="h-6 bg-gray-200 rounded w-3/4" />
                    <div className="h-4 bg-gray-200 rounded w-1/2" />
                    <div className="flex gap-2 mt-auto">
                      <div className="h-4 w-12 bg-gray-200 rounded" />
                      <div className="h-4 w-16 bg-gray-200 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection