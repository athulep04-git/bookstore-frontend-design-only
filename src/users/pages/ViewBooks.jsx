import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import BookStoreFooter from "../../components/BookStoreFooter";
import { Button } from "flowbite-react";
import { useParams } from "react-router-dom";
import { paymentAPI, viewbookAPI } from "../../services/allAPIs";
import {loadStripe} from '@stripe/stripe-js';

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
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      console.log(reqHeader);
      const response = await viewbookAPI(id, reqHeader);
      console.log(response);
      if (response.status == 200) {
        const data = response.data.bookdata;
        setBookdata(data);
      }
    } catch (err) {
      console.log("error" + err);
    }
  };

  const makepayment=async()=>{
    alert("inside payment")
    console.log(bookdata);
    const stripe = await loadStripe('pk_test_51SplwxDkN1TTU90i0c3pJ5eJUfoTyyLYIbqOY44Jgt8LQDZVC3er0YNyF2Ucz9EVnG2WdTqkin4wrpPuMHsxJJmw00J4J5brV2');
    console.log(stripe);
    //make api call
    const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
    const reqBody={
      bookDetails:bookdata
    }
    try{
        const response= await paymentAPI(reqBody,reqHeader)
        console.log(response);
        const checkoutUrl=response.data.session.url;
        window.location.href=checkoutUrl;
        const sessionId= response.data.sessionID;
          stripe.initCheckout({
            sessionId:sessionId
          });
    }
    catch(err)
    {
      console.log(err);
      
    }
  }
  
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
              <Button onClick={makepayment}>Buy</Button>
            </div>
          </div>
        </div>
      </div>
      <BookStoreFooter />
    </div>
  );
}

export default ViewBooks;
