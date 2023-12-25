import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div className='m-5 p-5'>
            <h2 className='text-3xl '>Actions Menus</h2>
            <Link to={'/add-tender'}><button className="btn btn-neutral">Add Tender</button></Link>
        </div>
    );
};

export default MenuBar;