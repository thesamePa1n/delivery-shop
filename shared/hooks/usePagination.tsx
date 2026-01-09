'use client'

import { useState } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems: items.slice(startIndex, startIndex + itemsPerPage),
  };
}
