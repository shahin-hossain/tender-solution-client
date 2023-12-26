import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <div className='m-5 p-5 border-r-2 bg-slate-300 h-full'>
            <h2 className='text-2xl mb-4  '>Actions Menus</h2>
            <Link to='/add-tender'><button className="btn btn-neutral">Add Tender</button></Link>
        </div>
    );
};

export default MenuBar;