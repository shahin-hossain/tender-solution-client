import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateTender = () => {

    const tender = useLoaderData();
    const { _id, scope, caller, schedulePrice, security, method } = tender;
    const navigate = useNavigate();

    const handleUpdateTender = event => {
        event.preventDefault();
        const form = event.target;
        const scope = form.scope.value;
        const caller = form.caller.value;
        const schedulePrice = form.schedule.value;
        const security = form.security.value;
        const method = form.method.value;

        const updateTender = { scope, caller, schedulePrice, security, method };

        fetch(`http://localhost:5000/tender/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTender)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Tender is Updated",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                    navigate('/')
                }
            })


    }
    return (
        <div>
            <h2 className='text-3xl text-center'>Update Tender</h2>
            <form onSubmit={handleUpdateTender} className="card-body">
                {/* scope & caller */}
                <div className='flex'>
                    <div className="form-control w-full  me-2">
                        <label className="label">
                            <span className="label-text">Scope of Tender</span>
                        </label>
                        <textarea name='scope' defaultValue={scope} placeholder="Enter Tender Scope Information" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ms-2">
                        <label className="label">
                            <span className="label-text">Caller</span>
                        </label>
                        <textarea name="caller" defaultValue={caller} placeholder="Enter Tender Caller Information" className="input input-bordered" required />

                    </div>
                </div>
                {/* Schedule & Security Money */}
                <div className='flex'>
                    <div className="form-control w-full  me-2">
                        <label className="label">
                            <span className="label-text">Schedule</span>
                        </label>
                        <input type='number' name='schedule' defaultValue={schedulePrice} placeholder="BDT" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ms-2">
                        <label className="label">
                            <span className="label-text">Security Money</span>
                        </label>
                        <input type='text' name='security' defaultValue={security} placeholder="BDT" className="input input-bordered" />

                    </div>

                </div>
                <div className='flex gap-4 '>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text me-1">Govt.</span>
                            <input type="radio" name="method" value='govt' className="radio" defaultChecked={method === 'govt'} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text me-1">Pvt.</span>
                            <input type="radio" name="method" value='pvt' className="radio" defaultChecked={method === 'pvt'} />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text me-1">NGO</span>
                            <input type="radio" name="method" value='ngo' className="radio" defaultChecked={method === 'ngo'} />
                        </label>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input type='submit' className="btn btn-primary" value='Update Tender' />
                </div>
            </form>
        </div>
    );
};

export default UpdateTender;