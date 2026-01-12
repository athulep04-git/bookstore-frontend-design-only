import React from "react";
import Header from "../components/Header";
import { Button } from "flowbite-react";
import EditProfile from "../components/EditProfile";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Card } from "flowbite-react";
import BookStoreFooter from "../../components/BookStoreFooter";
import { useEffect, useState } from "react";
import { addBookAPI } from "../../services/allAPIs";
// import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
// import { ChevronDownIcon } from '@heroicons/react/16/solid'
function Profile() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem("userDetails")));
    setToken(sessionStorage.getItem("token"));
  }, []);

  const [bookDetails, setbookDetails] = useState({
    title: "",
    author: "",
    noofpages: "",
    imageUrl: "",
    price: "",
    dprice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    UploadedImages: [],
  });

  //to hold image url
  const [preview, setPreview] = useState("");
  //to hold image list
  const [previewList, setPreviewList] = useState([]);
  const handleUpload = (e) => {
    //file format of uploaded image
    console.log(e.target.files[0]);
    //create a new array to hold 3  file item
    let imgArray = bookDetails.UploadedImages;
    imgArray.push(e.target.files[0]);
    console.log(imgArray);
    //update image file details into state
    setbookDetails({ ...bookDetails, UploadedImages: imgArray });
    //image file to url
    const url = URL.createObjectURL(e.target.files[0]);
    console.log(url);
    setPreview(url);

    //create preview list array
    let imageListArray = previewList;
    imageListArray.push(url);
    console.log(imageListArray);
    setPreviewList(imageListArray);
  };
  const handleAddBook = async () => {
    console.log(bookDetails);
    const {title,author,noofpages,imageUrl,price,dprice,abstract,publisher,language,isbn,category,UploadedImages}=bookDetails

    try{
        //req header
        const reqheader={
          Authorization:`Bearer ${token}`
        }
        //reqbody
        const reqbody=new FormData()
        // reqbody.append("title",title)
        for(let key in bookDetails){
            if(key!="UploadedImages"){
            reqbody.append(key,bookDetails[key])
          }
          else{
            bookDetails.UploadedImages.forEach(item=>(
              reqbody.append("UploadedImages",item)
            ))
          }
        }
        //api call
        const result=await addBookAPI(reqbody,reqheader)
        console.log(result);
        if(result.status==200){
          alert(result.data)
        }
        else{
          alert(result.response.data)
        }
        
    }
    catch(err){
      console.log("error",err);
      
      
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-amber-50 mt-40">
        <div className="bg-amber-950 pt-32 pb-16 mt-40 relative">
          <div className="absolute -top-24 left-24 p-2 bg-amber-50 border-2 border-amber-50 rounded-full">
            <img
              src={user.profile}
              referrerPolicy="no-referrer"
              alt=""
              className="rounded-full shadow-2xl "
              width={"160px"}
            />
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex ">
              <h1 className="text-center ms-25 text-amber-50 font-bold text-3xl">
                {user.username}
              </h1>
              <img
                src="https://static.vecteezy.com/system/resources/previews/022/935/713/original/blue-checkmark-icon-approved-free-png.png"
                width={"45px"}
                alt=""
              />
            </div>
            <div className="">
              <EditProfile />
            </div>
          </div>
        </div>
      </div>

      <section>
        <section className="px-30 py-5 h-screen ">
          <div className="overflow-x-auto bg-amber-950 p-5 text-amber-50 rounded shadow">
            <Tabs aria-label="Full width tabs" variant="fullWidth">
              <TabItem active title="Sell Book" icon={HiUserCircle}>
                <form>
                  <div className="space-y-12">
                    <div className="border-b border-white/10 pb-12">
                      <h2 className="text-base/7 font-semibold text-white">
                        Book Information
                      </h2>

                      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                          <div className="mt-2">
                            <input
                              id="title"
                              name="title"
                              type="text"
                              placeholder="title"
                              onChange={(e) =>
                                setbookDetails({
                                  ...bookDetails,
                                  title: e.target.value,
                                })
                              }
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                          </div>

                          <div className="mt-2">
                            <input
                              id="author"
                              name="author"
                              type="text"
                              placeholder="author"
                              onChange={(e) =>
                                setbookDetails({
                                  ...bookDetails,
                                  author: e.target.value,
                                })
                              }
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                          </div>

                          <div className="mt-2">
                            <input
                              id="noofpages"
                              name="noofpages"
                              type="text"
                              placeholder="noofpages"
                              onChange={(e) =>
                                setbookDetails({
                                  ...bookDetails,
                                  noofpages: e.target.value,
                                })
                              }
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                          </div>

                          <div className="mt-2">
                            <input
                              id="imageUrl"
                              name="imageUrl"
                              type="text"
                              placeholder="imageUrl"
                              onChange={(e) =>
                                setbookDetails({
                                  ...bookDetails,
                                  imageUrl: e.target.value,
                                })
                              }
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                          </div>

                          <div className="mt-2">
                            <input
                              id="price"
                              name="price"
                              type="text"
                              placeholder="price"
                              onChange={(e) =>
                                setbookDetails({
                                  ...bookDetails,
                                  price: e.target.value,
                                })
                              }
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                          </div>

                          <div className="mt-2">
                            <input
                              id="dprice"
                              name="dprice"
                              type="text"
                              placeholder="discount price"
                              onChange={(e) =>
                                setbookDetails({
                                  ...bookDetails,
                                  dprice: e.target.value,
                                })
                              }
                              autoComplete="given-name"
                              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                          </div>
                          <div className="col-span-full">
                            <div className="mt-2">
                              <textarea
                                id="abstract"
                                name="abstract"
                                type="text"
                                placeholder="abstract"
                                onChange={(e) =>
                                  setbookDetails({
                                    ...bookDetails,
                                    abstract: e.target.value,
                                  })
                                }
                                rows={3}
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <div className="mt-2">
                            <input
                              id="publisher"
                              name="publisher"
                              type="text"
                              placeholder="publisher"
                              onChange={(e) =>
                                setbookDetails({
                                  ...bookDetails,
                                  publisher: e.target.value,
                                })
                              }
                              autoComplete="family-name"
                              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                          </div>

                          <div className="mt-2">
                            <input
                              id="language"
                              name="language"
                              type="text"
                              placeholder="language"
                              onChange={(e) =>
                                setbookDetails({
                                  ...bookDetails,
                                  language: e.target.value,
                                })
                              }
                              autoComplete="family-name"
                              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                          </div>

                          <div className="mt-2">
                            <input
                              id="isbn"
                              name="isbn"
                              type="text"
                              placeholder="isbn"
                              onChange={(e) =>
                                setbookDetails({
                                  ...bookDetails,
                                  isbn: e.target.value,
                                })
                              }
                              autoComplete="family-name"
                              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                          </div>

                          <div className="mt-2">
                            <input
                              id="category"
                              name="category"
                              type="text"
                              placeholder="category"
                              onChange={(e) =>
                                setbookDetails({
                                  ...bookDetails,
                                  category: e.target.value,
                                })
                              }
                              autoComplete="family-name"
                              className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                          </div>
                          <div className="ms-40 mt-4">
                            {
                              preview?
                              <label htmlFor="imgfile">
                              <input id="imgfile" type="file" hidden onChange={(e)=>handleUpload(e)}/>
                              <div className="flex justify-around flex-col">
                                <div className="flex justify-around my-5">
                                  <img src={preview}  width={"200px"} height={'100px'} alt="" className="me-10" />
                                  {previewList.length<3?  <img
                                src="https://png.pngtree.com/png-vector/20230410/ourmid/pngtree-add-button-vector-png-image_6697932.png"
                                width={"100px"}
                                height={"100px"}
                                alt=""
                              />
                              :""
                                  }   
                                </div>
                                
                               
                              
                              <div  className="flex justify-evenly flex-wrap">
                                {previewList&&previewList.map(item=>(
                                 
                                    <img src={item} width={"100px"} alt="" />
                                  
                                ))}
                              </div>
                              </div>
                            </label>
                            :
                              <label htmlFor="imgfile">
                              <input id="imgfile" type="file" hidden onChange={(e)=>handleUpload(e)}/>
                              <img
                                src="https://cdn1.iconfinder.com/data/icons/round-vol-4/512/uploading-512.png"
                                width={"200px"}
                                alt=""
                              />
                            </label>
                            }
                            
                          </div>
                          {/* <div className="mt-4 flex justify-center">
                            <label htmlFor="imgfile" className="cursor-pointer">
                              <input
                                id="imgfile"
                                type="file"
                                hidden
                                onChange={(e) => handleUpload(e)}
                              />

                              {preview ? 
                                <>
                                  <div className="flex items-center gap-4">
                                    <img
                                      src={preview}
                                      width="200"
                                    />
                                    <img
                                      src="https://png.pngtree.com/png-vector/20230410/ourmid/pngtree-add-button-vector-png-image_6697932.png"
                                      width="80"
                                      alt="add"
                                    />
                                  </div>
                                  <div className="mt-3 flex gap-2">
                                    {previewList&&previewList.map((item) => (
                                      <img
                                        src={item}
                                        width="80"
                                      />
                                    ))}
                                  </div>
                                </>
                            : 
                                <img
                                  src="https://cdn1.iconfinder.com/data/icons/round-vol-4/512/uploading-512.png"
                                  width="200"
                                  alt="upload"
                                />
                              }
                            </label>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="text-sm/6 font-semibold text-white"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddBook}
                      type="button"
                      className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </TabItem>
              <TabItem title="Book Status" icon={MdDashboard}>
                <Card href="#" className=" w-full ">
                  <div className="flex justify-evenly">
                    <div>
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                      status
                    </div>
                    <div>
                      <img
                        src="https://tse1.mm.bing.net/th/id/OIP.ntqPvGciO4KeXC1ve8cImgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                        width={"200px"}
                        alt=""
                      />
                    </div>
                  </div>
                </Card>
              </TabItem>
              <TabItem title="Purchase History" icon={HiAdjustments}>
                <Card href="#" className=" w-full ">
                  <div className="flex justify-evenly">
                    <div>
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                      status
                    </div>
                    <div>
                      <img
                        src="https://tse1.mm.bing.net/th/id/OIP.ntqPvGciO4KeXC1ve8cImgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
                        width={"200px"}
                        alt=""
                      />
                    </div>
                  </div>
                </Card>
              </TabItem>
            </Tabs>
          </div>
          {/* <div className="flex flex-row my-5">
  <div className="basis-2xs">
    <Button></Button>
  </div>
  <div className="basis-2xs">
     <Button></Button>
  </div>
  <div className="basis-2xs">
     <Button></Button>
  </div>

</div> */}
        </section>
      </section>
      <BookStoreFooter />
    </div>
  );
}

export default Profile;
