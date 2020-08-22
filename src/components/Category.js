import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

const Category = ({ category }) => {
    const { data: gifs, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="animate__animated animate__bounce">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-container">
                {gifs.map((gif) => (
                    <CategoryItem key={gif.id} {...gif} />
                ))}
            </div>
        </>
    );
};

Category.propTypes = {
    category: PropTypes.string.isRequired,
};

export default Category;
