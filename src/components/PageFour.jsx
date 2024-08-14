import React from 'react'

function PageFour() {
    return (
        <div className=" mx-auto bg-white">
            <div className='w-full h-10 bg-slate-900 flex items-center justify-center'>
                <h1 className='text-white text-center font-semibold'>Confirm Details</h1>
            </div>
            <div className="w-[85%] h-32 mx-auto flex justify-center border-b-2 mb-4">
                <div className='w-1/3 flex items-center'>
                    <div className='w-48  text-center'>
                        <div className='w-8 h-8 rounded-full border-gray-950 border flex justify-center items-center mx-auto'>1</div>
                        <p className='mx-auto'>Company Details</p>
                    </div>
                    <hr className='w-full text-slate-900'/>
                </div>
                <div className='w-1/3 flex items-center'>
                    <div className='w-60  text-center'>
                        <div className='w-8 h-8 rounded-full border-gray-950 border flex justify-center items-center mx-auto'>2</div>
                        <p className='mx-auto'>Company Documents</p>
                    </div>
                    <hr className='w-full text-slate-900'/>
                </div>
                <div className='flex items-center'>
                    <div className='w-52  text-center'>
                        <div className='w-8 h-8 rounded-full bg-slate-900 text-white  flex justify-center items-center mx-auto'>3</div>
                        <p className='mx-auto'>Confirm Details</p>
                    </div>
                </div>
            </div>

            <div className='mx-5 xl:mx-10'>
            <h1 className='text-md font-bold mb-8 text-orange-500'>Company Details</h1>
                <div className="border-b-2 pb-8 mb-4">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-4">
                    <div className="flex justify-between">
                        <span>Company Name</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Owner Name</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Company Mailing Address</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Phone Number</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div className="flex justify-between">
                        <span>GST No.</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    <div className="flex justify-between">
                        <span>PAN Number</span>
                        <span>Lorem Ipsum</span>
                    </div>
                    </div>
                </div>
            
                <div className="border-b-2 pb-8 mb-4">
                    <h2 className="text-orange-600 text-lg font-semibold">Contact Person Details</h2>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-4">
                        <div className="flex justify-between">
                            <span>Name</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Designation</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Mail ID</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Phone Number</span>
                            <span>Lorem Ipsum</span>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 pb-8 mb-4">
                    <h2 className="text-orange-600 text-lg font-semibold">Company Details</h2>
                        <div className="flex justify-between">
                            <span>Office Address</span>
                            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took </span>
                        </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-4">
                        <div className="flex justify-between">
                            <span>County</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>City/State</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Pin Code</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Industry</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Website URL</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Description</span>
                            <span>Lorem Ipsum</span>
                        </div>
                    </div>
                </div>
                <div className="border-b-2 pb-8 mb-4">
                    <h2 className="text-orange-600 text-lg font-semibold">Company Documents</h2>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-4">
                        <div className="flex justify-between">
                            <span>GST No.</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>PAN Number</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Agreement Document</span>
                            <span>Lorem Ipsum</span>
                        </div>
                        <div className="flex justify-between">
                            <span>TAN Number</span>
                            <span>Lorem Ipsum</span>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-16 mb-16">
                    <button className="bg-orange-500 text-white py-2 px-8 rounded-md">Confirm Details</button>
                </div>
            </div>
        </div>
      );
}

export default PageFour
