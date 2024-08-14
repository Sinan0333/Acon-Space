import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PageTwo() {

    const navigate = useNavigate()

    const [companyName,setCompanyName] = useState("")
    const [ownerName,setOwnerName] = useState("")
    const [mailingAddress,setMailingAddress] = useState("")
    const [companyPhone,setCompanyPhone] = useState("")
    const [gstNumber,setGstNumber] = useState("")
    const [panNumber,setPanNumber] = useState("")

    const [name,setName] = useState("")
    const [designation,setDesignation] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")

    const [office,setOffice] = useState("")
    const [country,setCountry] = useState("")
    const [city,setCity] = useState("")
    const [pincode,setPincode] = useState("")
    const [industry,setIndustry] = useState("")
    const [webUrl,setWebUrl] = useState("")
    const [description,setDescription] = useState("")

    const handleSubmit = ()=>{
        navigate("/company-documents")
    }
    

    return (
        <div className="mx-auto bg-white rounded shadow pb-10">
            <div className='w-full h-10 bg-slate-900 flex items-center justify-center'>
                <h1 className='text-white text-center font-semibold'>Company Details</h1>
            </div>
            <div className="w-[85%] h-32 mx-auto flex justify-center border-b-2 mb-4">
                <div className='w-1/3 flex items-center'>
                    <div className='w-48  text-center'>
                        <div className='w-8 h-8 rounded-full bg-slate-900 text-white flex justify-center items-center mx-auto cursor-pointer' onClick={()=>navigate("/company-details")}>1</div>
                        <p className='mx-auto'>Company Details</p>
                    </div>
                    <hr className='w-full text-slate-900'/>
                </div>
                <div className='w-1/3 flex items-center'>
                    <div className='w-60  text-center'>
                        <div className='w-8 h-8 rounded-full  border-gray-950 border flex justify-center items-center mx-auto cursor-pointer' onClick={()=>navigate("/company-documents")}>2</div>
                        <p className='mx-auto'>Company Documents</p>
                    </div>
                    <hr className='w-full text-slate-900'/>
                </div>
                <div className='flex items-center'>
                    <div className='w-52  text-center'>
                        <div className='w-8 h-8 rounded-full border-gray-950 border  flex justify-center items-center mx-auto cursor-pointer' onClick={()=>navigate("/confirm-details")}>3</div>
                        <p className='mx-auto'>Confirm Details</p>
                    </div>
                </div>
            </div>
            <div className='mx-5 xl:mx-10'>
                <h1 className='text-md font-bold mb-8 text-orange-500'>Company Details</h1>
                <div className="grid grid-cols-2 gap-x-8 mb-8 border-b-2 pb-8 ">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                        <input value={companyName} onChange={(e)=>setCompanyName(e.target.value)}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Owner Name</label>
                        <input value={ownerName} onChange={(e)=>setOwnerName(e.target.value)}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Company Mailing Address</label>
                        <input value={mailingAddress} onChange={(e)=>setMailingAddress(e.target.value)}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                        <input value={companyPhone} onChange={(e)=>setCompanyPhone(e.target.value)}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">GST No</label>
                        <input value={gstNumber} onChange={(e)=>setGstNumber(e.target.value)}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">PAN Number</label>
                        <input value={panNumber} onChange={(e)=>setPanNumber(e.target.value)}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                </div>

                <h1 className='text-md font-bold mb-8 text-orange-500'>Contact Personal Details</h1>
                <div className="grid grid-cols-2 gap-x-8 mb-8 border-b-2 pb-8">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Name</label>
                        <input value={name} onChange={(e)=>setName(e.target.value)}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Designation</label>
                        <input value={designation} onChange={(e)=>setDesignation(e.target.value)}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email ID</label>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                        <input value={phone} onChange={(e)=>setPhone(e.target.value)}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                </div>
        
                <h1 className='text-md font-bold mb-8 text-orange-500'>Address</h1>
                <div className=" mb-8 ">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Office</label>
                        <input value={office} onChange={(e)=>setOffice(e.target.value)}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded"
                        />
                    </div>
                   
                    <div className='grid grid-cols-2 gap-x-8'>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Country</label>
                            <input value={country} onChange={(e)=>setCountry(e.target.value)}
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">City / State</label>
                            <input value={city} onChange={(e)=>setCity(e.target.value)}
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Pin Code</label>
                            <input value={pincode} onChange={(e)=>setPincode(e.target.value)}
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Industry</label>
                            <input value={industry} onChange={(e)=>setIndustry(e.target.value)}
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Website URL</label>
                            <input value={webUrl} onChange={(e)=>setWebUrl(e.target.value)}
                            type="url"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-semibold mb-2">Description</label>
                            <input value={description} onChange={(e)=>setDescription(e.target.value)}
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded"
                            />
                        </div>
                    </div>
                </div>
        
                <div className="text-center mt-10">
                    <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600" onClick={handleSubmit}>Next</button>
                </div>
          </div>
        </div>
      );
}

export default PageTwo
