import React from "react";
import Header from "../components/Header";
import BookStoreFooter from "../../components/BookStoreFooter";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getAllBooksAPI } from "../../services/allAPIs";
function AllBooks() {
  const [token, setToken] = useState("");

    //3 assign api call,
    const[allBooks,setAllBooks]=useState({})
    const[tempBooks,setTempBooks]=useState({})
    useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);
  console.log(token);
  
    //1 funciton for api call
    const getAllBooks=async()=>{
      
      try{
        const reqheader={
          Authorization:`Bearer ${token}`
        };
        console.log(reqheader);
        
        const response = await getAllBooksAPI(reqheader)
        console.log(response);
        setAllBooks(response.data)
        setTempBooks(response.data)
        
      }
      catch(err){
        console.log("error"+err);
        
      }
    }
    console.log(allBooks);

    
     useEffect(()=>{
      getAllBooks()
     },[token])

     const handleFilter = (value) => {
    console.log(value);
    const result = tempBooks.filter(item=>item.category.toLowerCase().trim() ==value.toLowerCase().trim());
    console.log(result);
    // .toLowerCase().trim()
    setAllBooks(result)
};

  return (
    <div>
      <Header />

      <div>
        {token ? (
          <div>
            <h1 className="text-center mt-20 mb-5 text-4xl">Collections</h1>
            <section className="flex justify-center items-center">
              <input type="text" placeholder="Search" />{" "}
              <Button className="!bg-amber-950">Search</Button>
            </section>
            <section className="p-20">
              <div class="flex ...">
                <div class="w-64 flex-none ...">
                  <h1>Filters</h1>
                  <div className="my-3">
                    <input type="radio" onClick={()=>handleFilter("Literary Fiction")} name="filter" id="" />
                    <label htmlFor=""> Literary Fiction</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" onClick={()=>handleFilter("Philosophy")} name="filter" id="" />
                    <label htmlFor=""> Philosophy</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" onClick={()=>handleFilter("Thriller")} name="filter" id="" />
                    <label htmlFor="">Thriller</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" onClick={()=>handleFilter("Romance")} name="filter" id="" />
                    <label htmlFor=""> Romance</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" onClick={()=>handleFilter("Horror")} name="filter" id="" />
                    <label htmlFor=""> Horror</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" onClick={()=>handleFilter("Auto/Biography")} name="filter" id="" />
                    <label htmlFor=""> Auto/Biography</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" onClick={()=>handleFilter("Self-Help")} name="filter" id="" />
                    <label htmlFor=""> Self-Help</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" onClick={()=>handleFilter("Politics")} name="filter" id="" />
                    <label htmlFor=""> Politics</label>
                  </div>

                  <div className="my-3">
                    <input type="radio" onClick={()=>handleFilter("No-filter")} name="filter" id="" />
                    <label htmlFor=""> No-filter</label>
                  </div>
                </div>

                <div class="flex-1 ...">
                  <div className="flex flex-wrap justify-evenly items-center">
                    
                    {allBooks && allBooks.length>0?  allBooks.map(item=>(
                        <Card
                        className="max-w-sm py-20 px-10 shadow-2xl border-0 m-10"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        style={{
                          height: "500px",
                          backgroundColor: "wheat",
                        }}
                      >
                        <img
                          src={item.imageUrl}
                          style={{ height: "250px" }}
                          alt=""
                        />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {item.title}
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          {item.abstract}
                        </p>
                        <p>
                          <Link to={`/viewbook/${item._id}`}><Button>Know More</Button></Link>
                        </p>
                      </Card>
                    ))
                    
                    :"api error"

                    }
                      
                  
                  
                  </div>
                </div>
              </div>
            </section>

            <BookStoreFooter />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center mt-20">
            <h1 className="text-center text-3xl mb-6">
              Please login to view all books
            </h1>

            <img
              src="https://i.pinimg.com/originals/23/27/58/232758911e209e24258fed0dcb095398.gif"
              alt="Login required"
              className="w-64 h-64 object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default AllBooks;
