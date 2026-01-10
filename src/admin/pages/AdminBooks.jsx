import { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSideBar from '../components/AdminSideBar'
import { Card } from "flowbite-react";
import { TabItem, Tabs } from "flowbite-react";
import { HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { booklistAPI, userlistAPI } from '../../services/allAPIs';

function AdminBooks() {
  const [token, setToken] = useState("");
  const [users,setUsers]=useState([])
  const[allBooks,setAllBooks]=useState([])
  useEffect(() => {
      setToken(sessionStorage.getItem("token"));
    }, []);
    console.log(token);
  
  const userlist=async()=>{
       const reqheader = {
        Authorization: `Bearer ${token}`,
      };
      const response= await userlistAPI(reqheader)
      console.log(response); 
      if(response.status==200){
        const data=response.data.allUsers
        setUsers(data)
        
      }
  }
  const getAllBooks=async()=>{
        
        try{
          const reqheader={
            Authorization:`Bearer ${token}`
          };
          console.log(reqheader);
          
          const  booklist= await booklistAPI(reqheader)
          console.log(booklist);
          setAllBooks(booklist.data)
          
        }
        catch(err){
          console.log("error"+err);
          
        }
      }
      console.log(allBooks);
      
  
  useEffect(()=>{
    getAllBooks()
    userlist()
  },[token])

  console.log(users);
  
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
                      <div className="flex flex-wrap">
                        {
                          allBooks.length === 0 ? (
                            <p className="text-center w-full">No books found</p>
                          ) : (
                            allBooks.map(book => (
                              <div key={book._id} className="basis-1/4">
                                <Card className="w-50 m-5 !bg-amber-50">
                                  <img src={book.imageUrl} width="150" alt={book.title} />
                                  <h5 className="font-bold text-gray-900">
                                    {book.title}
                                  </h5>
                                  <p>
                                    MRP: {book.price}  
                                    <br />
                                    Offer: {book.dprice}
                                  </p>
                                </Card>
                              </div>
                            ))
                          )
                        }
                      </div>
                    </TabItem>

                    <TabItem title="Users" icon={MdDashboard}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">

                        {
                          users.length==0?
                          <p className="text-center w-full"> no user found</p>
                          :
                          users.map(item=>(
                          <div className="basis-2xs">
                          <Card  key={item._id}
                            className="flex justify-evenly w-80 m-5 !bg-amber-50"     >
                            <div className='basis-4xs'>
                              <p>ID :{item._id}</p>
                             
                              <img src={item.profile?item.profile:"https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?semt=ais_hybrid&w=740&q=80"} className='rounded-full'height={'50px'} width={'50px'} alt="" />

                            </div>
                            <div className='basis-4xs'>
                              <h5 className=" font-bold tracking-tight text-gray-900">
                                {item.username}
                              </h5>
                              <h6>{item.email}</h6>
                            </div>

                          </Card>
                        </div>
                          ))
                        
                          }
                        
                        
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
