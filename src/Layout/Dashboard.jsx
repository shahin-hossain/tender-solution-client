import React from 'react';
import MenuBar from '../components/MenuBar';
import EntryTable from '../components/EntryTable';

const Dashboard = () => {
    return (
        <div className="grid grid-cols-12 gap-4 m-10">
            <div className="col-span-3  w-full">
                <MenuBar />
            </div>
            <div className="col-span-9  w-full">
                <EntryTable />
            </div>
        </div>
    );
};

export default Dashboard;