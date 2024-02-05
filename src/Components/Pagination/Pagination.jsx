import React from 'react';

const Pagination = ({handleNext, page, handlePrev}) => {
    return (
        <div>
            <p onClick={handlePrev}>Prev</p>
            {page}
            <p onClick={handleNext}>Next</p>
        </div>
    );
};

export default Pagination;