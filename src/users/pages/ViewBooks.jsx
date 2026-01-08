import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BookStoreFooter from "../../components/BookStoreFooter";
import { Button } from "flowbite-react";
import { useParams } from "react-router-dom";
import { viewbookAPI } from "../../services/allAPIs";

function ViewBooks() {
  const [token, setToken] = useState("");
  const [bookdata, setBookdata] = useState({});
  console.log(bookdata);

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);
  console.log(token);
  const { id } = useParams();
  console.log(id);
  const viewBookid = async () => {
    try {
      const reqheader = {
        Authorization: `Bearer ${token}`,
      };
      console.log(reqheader);
      const response = await viewbookAPI(id, reqheader);
      console.log(response);
      if (response.status == 200) {
        const data = response.data.bookdata;
        setBookdata(data);
      }
    } catch (err) {
      console.log("error" + err);
    }
  };
  useEffect(() => {
    viewBookid();
  }, [token]);

  return (
    <div>
      <Header />
      <div className="flex justify-evenly flex-wrap p-20 ">
        <div className="flex gap-10 shadow-2xl p-10 ">
          <div className="w-1/3  ...">
            <img src={bookdata.imageUrl} alt="" />
          </div>
          <div className="w-2/3 flex flex-wrap flex-col gap-5">
            <h1> {bookdata.title}</h1>
            <h3> Author :{bookdata.author} </h3>
            <h4> Price :{bookdata.price} </h4>
            <p> Description : {bookdata.abstract}</p>

            <div className="flex">
              <Button>back</Button>
              <Button>Buy</Button>
            </div>
          </div>
        </div>
      </div>
      <BookStoreFooter />
    </div>
  );
}

export default ViewBooks;
