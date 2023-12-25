import React from 'react';
import MenuBar from '../components/MenuBar';
import EntryTable from '../components/EntryTable';

const Dashboard = () => {
    return (
        <div class="grid grid-cols-12 gap-4">
            <div class="col-span-3 bg-slate-900 w-full">
                <MenuBar />
            </div>
            <div class="col-span-9 bg-slate-700 w-full">
                <EntryTable />
            </div>
        </div>
    );
};

export default Dashboard;