import React from 'react'

function PageOne() {
  return (
    <div className="min-h-screen bg-gray-100">

      <header className="w-full h-14 bg-gray-900 flex items-center justify-end">
        <nav className="flex space-x-4 text-white  w-1/4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Projects</a>
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </header>
      <header className="bg-gray-800 text-white py-4 px-10 flex justify-between">
        <h1 className="text-2xl font-bold">Logo</h1>
          <div className="flex items-center space-x-4">
            <nav className="flex space-x-4">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Projects</a>
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Contact</a>
            </nav>
          </div>
      </header>

      <main className="mx-10  mt-8">
        <div className="bg-white p-6 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-orange-500">Companies</h2>
            <div>
              <input type="text" className="border border-orange-500 rounded px-2 py-1 mr-2" placeholder="Search"/>
              <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Add Company</button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded shadow">
              <img src="/images/construction.jpg" alt="Company Name" className="w-full"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Company Name</h3>
              </div>
            </div>
            <div className="bg-white rounded shadow">
              <img src="/images/construction.jpg" alt="Company Name" className="w-full"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Company Name</h3>
              </div>
            </div>
            <div className="bg-white rounded shadow">
              <img src="/images/construction.jpg" alt="Company Name" className="w-full"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Company Name</h3>
              </div>
            </div>
            <div className="bg-white rounded shadow">
              <img src="/images/construction.jpg" alt="Company Name" className="w-full"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Company Name</h3>
              </div>
            </div>
            <div className="bg-white rounded shadow">
              <img src="/images/construction.jpg" alt="Company Name" className="w-full"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Company Name</h3>
              </div>
            </div>
            <div className="bg-white rounded shadow">
              <img src="/images/construction.jpg" alt="Company Name" className="w-full"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Company Name</h3>
              </div>
            </div>
            <div className="bg-white rounded shadow">
              <img src="/images/construction.jpg" alt="Company Name" className="w-full"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Company Name</h3>
              </div>
            </div>
            <div className="bg-white rounded shadow">
              <img src="/images/construction.jpg" alt="Company Name" className="w-full"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold">Company Name</h3>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-orange-500 text-white flex justify-between py-4 mt-8 px-10">
        <h1 className="text-2xl font-bold">Logo</h1>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded-full bg-white"></div>
          <div className="w-5 h-5 rounded-full bg-white"></div>
          <div className="w-5 h-5 rounded-full bg-white"></div>
          <div className="w-5 h-5 rounded-full bg-white"></div>
        </div>
      </footer>
    </div>
  )
}

export default PageOne
