import React from 'react'

function PageTwo() {
    return (
        <div className="mx-auto bg-white rounded shadow pb-10">
            <div className='w-full h-10 bg-slate-900 flex items-center justify-center'>
                <h1 className='text-white text-center font-semibold'>Company Details</h1>
            </div>
            <div className="w-[85%] h-32 mx-auto flex justify-center border-b-2 mb-4">
                <div className='w-1/3 flex items-center'>
                    <div className='w-48  text-center'>
                        <div className='w-8 h-8 rounded-full bg-slate-900 text-white flex justify-center items-center mx-auto'>1</div>
                        <p className='mx-auto'>Company Details</p>
                    </div>
                    <hr className='w-full text-slate-900'/>
                </div>
                <div className='w-1/3 flex items-center'>
                    <div className='w-60  text-center'>
                        <div className='w-8 h-8 rounded-full border-gray-950 border  flex justify-center items-center mx-auto'>2</div>
                        <p className='mx-auto'>Company Documents</p>
                    </div>
                    <hr className='w-full text-slate-900'/>
                </div>
                <div className='flex items-center'>
                    <div className='w-52  text-center'>
                        <div className='w-8 h-8 rounded-full border-gray-950 border  flex justify-center items-center mx-auto'>3</div>
                        <p className='mx-auto'>Confirm Details</p>
                    </div>
                </div>
            </div>
            <div className='mx-5 xl:mx-10'>
                <h1 className='text-md font-bold mb-8 text-orange-500'>Company Details</h1>
                <div className="grid grid-cols-2 gap-x-8 mb-8 border-b-2 pb-8 ">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Owner Name</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Company Mailing Address</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">GST No</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">PAN Number</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                </div>

                <h1 className='text-md font-bold mb-8 text-orange-500'>Contact Personal Details</h1>
                <div className="grid grid-cols-2 gap-x-8 mb-8 border-b-2 pb-8">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Designation</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email ID</label>
                        <input
                        type="email"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                </div>
        
                <h1 className='text-md font-bold mb-8 text-orange-500'>Address</h1>
                <div className=" mb-8 ">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Office</label>
                        <input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                   
                    <div className='grid grid-cols-2 gap-x-8'>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Country</label>
                            <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">City / State</label>
                            <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Pin Code</label>
                            <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Industry</label>
                            <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Website URL</label>
                            <input
                            type="url"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Description</label>
                            <input
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                    </div>
                </div>
        
                <div className="text-center mt-10">
                    <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Next</button>
                </div>
          </div>
        </div>
      );
}

export default PageTwo
