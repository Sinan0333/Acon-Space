import React from 'react'

function PageFour() {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="bg-white w-full max-w-3xl shadow-md rounded p-6">
            <h2 className="text-xl font-semibold mb-4">Company Document</h2>
            
            <div className="flex justify-between mb-8">
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full">1</div>
                <span className="ml-2">Company Details</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full">2</div>
                <span className="ml-2">Company Documents</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 flex items-center justify-center bg-gray-300 rounded-full">3</div>
                <span className="ml-2">Confirm Details</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">GST No.</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company PAN Number</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company TAN Number</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Agreement Document</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>
            </div>
            
            <div className="text-center">
              <button className="bg-orange-500 text-white px-6 py-2 rounded">NEXT</button>
            </div>
          </div>
        </div>
      );
}

export default PageFour
