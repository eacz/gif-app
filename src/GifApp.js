import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import Category from './components/Category';

const GifApp = () => {
    const [categories, setCategories] = useState(['Naruto']);

    return (
        <>
            <h2>GifApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {categories.map((category) => (
                    <Category key={category} category={category} />
                ))}
            </ol>
        </>
    );
};

export default GifApp;
