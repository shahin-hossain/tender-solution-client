import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const AddTender = () => {
    const navigate = useNavigate();

    const handleAddTender = (event) => {
        event.preventDefault();
        const form = event.target;
        const scope = form.scope.value;
        const caller = form.caller.value;
        const schedulePrice = form.schedule.value;
        const security = form.security.value;
        const method = form.method.value;

        const newTender = { scope, caller, schedulePrice, security, method }

        fetch('http://localhost:5000/tenders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTender)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: "Entry added successfully!",
                        text: "Go to another new entry",
                        icon: "success"
                    });
                    navigate('/')
                }
            })
    }
    return (
        <div>
            <h2>Add New Tender</h2>
            <form onSubmit={handleAddTender} className="card-body">
                {/* scope & caller */}
                <div className='flex'>
                    <div className="form-control w-full  me-2">
                        <label className="label">
                            <span className="label-text">Scope of Tender</span>
                        </label>
                        <textarea name='scope' placeholder="Enter Tender Scope Information" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ms-2">
                        <label className="label">
                            <span className="label-text">Caller</span>
                        </label>
                        <textarea name="caller" placeholder="Enter Tender Caller Information" className="input input-bordered" required />

                    </div>
                </div>
                {/* Schedule & Security Money */}
                <div className='flex'>
                    <div className="form-control w-full  me-2">
                        <label className="label">
                            <span className="label-text">Schedule</span>
                        </label>
                        <input type='number' name='schedule' placeholder="BDT" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ms-2">
                        <label className="label">
                            <span className="label-text">Security Money</span>
                        </label>
                        <input type='text' name='security' placeholder="BDT" className="input input-bordered" />

                    </div>

                </div>
                <div className='flex gap-4 '>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text me-1">Govt.</span>
                            <input type="radio" name="method" className="radio" value='govt' defaultChecked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text me-1">Pvt.</span>
                            <input type="radio" name="method" value='pvt' className="radio" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text me-1">NGO</span>
                            <input type="radio" name="method" value='ngo' className="radio" />
                        </label>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type='submit' className="btn btn-primary" value='Add Tender' />
                </div>
            </form>
        </div>
    );
};

export default AddTender;