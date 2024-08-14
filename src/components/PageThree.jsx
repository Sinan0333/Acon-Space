import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { validateDocuments } from '../Validation/pageThreeValidation';
import axios from 'axios';

function PageThree() {
    const navigate = useNavigate()
    const [error,setError] = useState("")

    const [gstNumber,setGstNumber] = useState("")
    const [panNumber,setPanNumber] = useState("")
    const [tanNumber,setTanNumber] = useState("")
    const [Agreement,setAgreement] = useState("")


    const handleSubmit = ()=>{

        const errors = validateDocuments(gstNumber,panNumber,tanNumber,Agreement)

        if(Object.keys(errors).length === 0){
            setError("")
            // Calling  the api
            // axios.post("api/companyDocuments",{gstNumber,panNumber,tanNumber,Agreement}).then(()=>navigate("/confirm-details")).catch((err)=>console.log(err))
            navigate("/confirm-details")
        }else{
            const arrayOfErrors = Object.values(errors)
            setError(arrayOfErrors)
        }
    }
    return (
        <div className="mx-auto bg-white rounded-md">
            <div className='w-full h-10 bg-slate-900 flex items-center justify-center'>
                <h1 className='text-white text-center font-semibold'>Company Documents</h1>
            </div>
            <div className="w-[85%] h-32 mx-auto flex justify-center border-b-2 mb-4">
                <div className='w-1/3 flex items-center'>
                    <div className='w-48  text-center'>
                        <div className='w-8 h-8 rounded-full border-gray-950 border flex justify-center items-center mx-auto cursor-pointer' onClick={()=>navigate("/company-details")}>1</div>
                        <p className='mx-auto'>Company Details</p>
                    </div>
                    <hr className='w-full text-slate-900'/>
                </div>
                <div className='w-1/3 flex items-center'>
                    <div className='w-60  text-center'>
                        <div className='w-8 h-8 rounded-full bg-slate-900 text-white  flex justify-center items-center mx-auto cursor-pointer' onClick={()=>navigate("/company-documents")}>2</div>
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
    
          <div className="grid grid-cols-2 gap-6 gap-x-20 mx-5 xl:mx-10 mt-16">
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">GST No.</label>  
                <div className="flex items-center">
                    <label className="bg-gray-800 text-white py-2 px-4 rounded-l cursor-pointer w-36">
                        <input
                        type="file"
                        className="hidden"
                        onChange={(e)=>setGstNumber(e.target.files[0])}
                        />
                        Choose File
                    </label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-r py-2 px-4 w-full text-gray-500"
                        placeholder="Upload GST"
                        readOnly
                    />
                </div>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Company PAN Number</label>  
                <div className="flex items-center">
                    <label className="bg-gray-800 text-white py-2 px-4 rounded-l cursor-pointer w-36">
                        <input
                        type="file"
                        className="hidden"
                        onChange={(e)=>setPanNumber(e.target.files[0])}
                        />
                        Choose File
                    </label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-r py-2 px-4 w-full text-gray-500"
                        placeholder="Upload GST"
                        readOnly
                    />
                </div>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Company TAN Number</label>  
                <div className="flex items-center">
                    <label className="bg-gray-800 text-white py-2 px-4 rounded-l cursor-pointer w-36">
                        <input
                        type="file"
                        className="hidden"
                        onChange={(e)=>setTanNumber(e.target.files[0])}
                        />
                        Choose File
                    </label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-r py-2 px-4 w-full text-gray-500"
                        placeholder="Upload GST"
                        readOnly
                    />
                </div>
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Agreement Document</label>  
                <div className="flex items-center">
                    <label className="bg-gray-800 text-white py-2 px-4 rounded-l cursor-pointer w-36">
                        <input
                        type="file"
                        className="hidden"
                        onChange={(e)=>setAgreementDocument(e.target.files[0])}
                        />
                        Choose File
                    </label>
                    <input
                        type="text"
                        className="border border-gray-300 rounded-r py-2 px-4 w-full text-gray-500"
                        placeholder="Upload GST"
                        readOnly
                    />
                </div>
            </div>
            <p className='text-red-500'>{error}</p>
          </div>
          <div className="text-center mt-16">
            <button className="bg-orange-500 text-white py-2 px-8 rounded-md" onClick={handleSubmit}>NEXT</button>
          </div>
        </div>
      );
}

export default PageThree
