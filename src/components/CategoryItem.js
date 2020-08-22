import React from 'react';

const CategoryItem = ({ url, title }) => {
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={url} alt={title} />
        </div>
    );
};


export default CategoryItem;
