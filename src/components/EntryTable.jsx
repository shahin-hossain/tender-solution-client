import React, { useEffect, useState } from 'react';
import { FaEye, FaRegTrashAlt } from 'react-icons/fa';
import { BiEdit } from "react-icons/bi";
import Swal from 'sweetalert2';

const EntryTable = () => {
    const [tenders, setTenders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tenders')
            .then(res => res.json())
            .then(data => setTenders(data))
    }, [])

    const handleDelete = (id) => {

        Swal.fire({
            title: "Are you sure delete the Tender?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/tenders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        const remaining = tenders.filter(tender => tender._id !== id);
                        setTenders(remaining)
                        console.log(data)
                    })

            }
        });




    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-center mb-5'>Tender Table</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>

                        <tr className='bg-neutral text-white'>
                            <th>ID</th>
                            <th>Scope of Works</th>
                            <th>Caller</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {tenders.map(tender =>
                            <tr key={tender._id} className="bg-base-200">
                                <th>{tender._id.slice(18, 24)}</th>
                                <td>{tender.scope}</td>
                                <td>{tender.caller}</td>
                                <td className='flex gap-2'>
                                    <span><FaEye /></span>
                                    <span><BiEdit /></span>
                                    <span onClick={() => handleDelete(tender._id)}><FaRegTrashAlt /></span>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default EntryTable;