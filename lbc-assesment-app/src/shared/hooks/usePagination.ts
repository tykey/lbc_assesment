import { useState } from 'react'

export function usePagination(maxItems: number, pageSize: number) {
  const numberOfPages = Math.ceil(maxItems / pageSize)

  const [currPage, setCurrPage] = useState<number>(1)

  const onClickPreviousPage = () => {
    setCurrPage((prev) => Math.max(prev - 1, 1))
  }

  const onClickNextPage = () => {
    setCurrPage((prev) => Math.min(prev + 1, numberOfPages))
  }

  const onPageChange = (page: number) => {
    setCurrPage(page)
  }

  return {
    currPage,
    numberOfPages,
    onClickPreviousPage,
    onClickNextPage,
    onPageChange,
  }
}
