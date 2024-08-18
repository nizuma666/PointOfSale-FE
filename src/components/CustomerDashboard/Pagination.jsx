import React from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className="px-1 py-1 bg-white border rounded-md"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <MdNavigateBefore />
      </button>
      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          className={`px-3 py-1 border rounded-md ${
            currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className="px-1 py-1 bg-white border rounded-md"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <MdNavigateNext />
      </button>
    </div>
  );
};

export default Pagination;
