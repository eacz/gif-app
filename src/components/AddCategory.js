import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
    const [category, setCategory] = useState('');

    const handleChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!category) {
            return;
        }
        setCategories((categories) => [category, ...categories]);
        setCategory('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                id="name"
                value={category}
                placeholder="Name"
                onChange={handleChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
