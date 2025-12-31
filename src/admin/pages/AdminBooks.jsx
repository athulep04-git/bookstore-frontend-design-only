import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { Button, Card } from "flowbite-react";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

function AdminBooks() {
  return (
    <div>
      <div>
        <AdminHeader />
        <section>
          <div class="flex  ...">
            <div class="w-64  ...">
              <AdminSideBar />
            </div>
            <div class="w-2/3 ...">
              <div>
                <h1 className='text-center text-2xl my-5'> All books</h1>
                <div className="ps-10">
                  <Tabs aria-label="Full width tabs" variant="fullWidth">
                    <TabItem active title="BookList" icon={HiUserCircle}>

                      <div class="flex flex-wrap ">
                        <div class="basis-2xs">
                          <Card
                            className="w-50 m-5 !bg-amber-50"     >
                            <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" width={'150px'} alt="" />
                            <h5 className=" font-bold tracking-tight text-gray-900">
                              The Lost World Illustrated Abridged Classics - English
                              236 MRP: 295 20% OFF
                            </h5>

                          </Card>
                        </div>
                        <div class="basis-2xs">
                          <Card
                            className="w-50 m-5 !bg-amber-50"     >
                            <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" width={'150px'} alt="" />
                            <h5 className=" font-bold tracking-tight text-gray-900">
                              The Lost World Illustrated Abridged Classics - English
                              236 MRP: 295 20% OFF
                            </h5>

                          </Card>
                        </div>
                        <div class="basis-2xs">
                          <Card
                            className="w-50 m-5 !bg-amber-50"     >
                            <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" width={'150px'} alt="" />
                            <h5 className=" font-bold tracking-tight text-gray-900">
                              The Lost World Illustrated Abridged Classics - English
                              236 MRP: 295 20% OFF
                            </h5>

                          </Card>
                        </div>
                        <div class="basis-2xs">
                          <Card
                            className="w-50 m-5 !bg-amber-50"     >
                            <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" width={'150px'} alt="" />
                            <h5 className=" font-bold tracking-tight text-gray-900">
                              The Lost World Illustrated Abridged Classics - English
                              236 MRP: 295 20% OFF
                            </h5>

                          </Card>
                        </div>
                        <div class="basis-2xs">
                          <Card
                            className="w-50 m-5 !bg-amber-50"     >
                            <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" width={'150px'} alt="" />
                            <h5 className=" font-bold tracking-tight text-gray-900">
                              The Lost World Illustrated Abridged Classics - English
                              236 MRP: 295 20% OFF
                            </h5>

                          </Card>
                        </div>
                      </div>

                    </TabItem>
                    <TabItem title="Users" icon={MdDashboard}>
                      <div class="flex flex-wrap ">
                        <div class="basis-2xs">
                          <Card
                            className="flex justify-evenly w-50 m-5 !bg-amber-50"     >
                            <div className='basis-4xs'>
                              <p>ID : 675987090789</p>
                              <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" className='rounded-full' width={'50px'} alt="" />

                            </div>
                            <div className='basis-4xs'>
                              <h5 className=" font-bold tracking-tight text-gray-900">
                                Manu
                              </h5>
                              <h6>manu@gmail.com</h6>
                            </div>

                          </Card>

                        </div>
                        <div class="basis-2xs">
                          <Card
                            className="flex justify-evenly w-50 m-5 !bg-amber-50"     >
                            <div className='basis-4xs'>
                              <p>ID : 675987090789</p>
                              <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" className='rounded-full' width={'50px'} alt="" />

                            </div>
                            <div className='basis-4xs'>
                              <h5 className=" font-bold tracking-tight text-gray-900">
                                Manu
                              </h5>
                              <h6>manu@gmail.com</h6>
                            </div>

                          </Card>

                        </div>
                        <div class="basis-2xs">
                          <Card
                            className="flex justify-evenly w-50 m-5 !bg-amber-50"     >
                            <div className='basis-4xs'>
                              <p>ID : 675987090789</p>
                              <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" className='rounded-full' width={'50px'} alt="" />

                            </div>
                            <div className='basis-4xs'>
                              <h5 className=" font-bold tracking-tight text-gray-900">
                                Manu
                              </h5>
                              <h6>manu@gmail.com</h6>
                            </div>

                          </Card>

                        </div>
                        <div class="basis-2xs">
                          <Card
                            className="flex justify-evenly w-50 m-5 !bg-amber-50"     >
                            <div className='basis-4xs'>
                              <p>ID : 675987090789</p>
                              <img src="https://cdn.fcglcdn.com/brainbees/images/products/583x720/8801697a.webp" className='rounded-full' width={'50px'} alt="" />

                            </div>
                            <div className='basis-4xs'>
                              <h5 className=" font-bold tracking-tight text-gray-900">
                                Manu
                              </h5>
                              <h6>manu@gmail.com</h6>
                            </div>

                          </Card>

                        </div>
                      </div>
                    </TabItem>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AdminBooks
