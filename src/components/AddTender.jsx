import React from 'react';

const AddTender = () => {
    const handleAddTender = (event) => {
        event.preventDefault();
        const form = event.target;
        const method = form.value;

        console.log(method)
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
                        <input type='text' placeholder="BDT" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full ms-2">
                        <label className="label">
                            <span className="label-text">Security Money</span>
                        </label>
                        <input type='text' placeholder="BDT" className="input input-bordered" />

                    </div>

                </div>
                <div className='flex gap-4 '>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Govt.</span>
                            <input type="radio" name="radio" className="radio " checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Pvt.</span>
                            <input type="radio" name="radio" className="radio" checked />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">NGO</span>
                            <input type="radio" name="radio" value='ngo' className="radio" checked />
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