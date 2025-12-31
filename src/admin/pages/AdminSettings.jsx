import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { Button, Card } from "flowbite-react";
function AdminSettings() {
  return (
   <div>
 <div>
<AdminHeader/>
    <section>
          <div class="flex  ...">
  <div class="w-64  ...">
    <AdminSideBar/>
  </div>
  <div class="w-2/3 ...">
   <div>
    <div className="min-h-screen w-full bg-white px-10 py-10">
      <h1 className="text-3xl font-semibold text-center mb-10">Settings</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Text */}
        <div className="text-justify text-gray-700 leading-relaxed font-light">
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
            id maxime quia asperiores in cupiditate voluptatum quisquam nemo
            vitae odio, facilis aperiam. Ipsum incidunt labore asperiores!
            Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed neque, facilis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
            id maxime quia asperiores in cupiditate voluptatum quisquam nemo
            vitae odio, facilis aperiam. Ipsum incidunt labore asperiores!
            Blanditiis soluta fuga aut? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Sed neque, facilis, consequatur quos eveniet
            inventore ipsam beatae iure fugiat eligendi quae laborum incidunt eum
            quis, est blanditiis exercitationem velit excepturi?
          </p>
        </div>

        {/* Right Side - Profile Card */}
        <div className="bg-blue-100 p-8 rounded-lg shadow-md flex flex-col items-center">
          {/* Image Section */}
          <div className="relative w-28 h-28 mb-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full rounded-full object-cover border border-gray-300"
            />
            <button className="absolute bottom-2 right-2 bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition">
              ✏️
            </button>
          </div>

          {/* Input Fields */}
          <div className="w-full flex flex-col gap-4 mb-6">
            <input
              type="text"
              placeholder="Ann"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="admin123"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="admin123"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-4 w-full justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-md transition">
              Reset
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-2 rounded-md transition">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  </div>
</div>
    </section>
    </div>
    </div>
  )
}

export default AdminSettings
