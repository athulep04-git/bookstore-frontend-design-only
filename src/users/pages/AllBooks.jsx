import React from "react";
import Header from "../components/Header";
import BookStoreFooter from "../../components/BookStoreFooter";
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function AllBooks() {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);
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
                    <input type="radio" name="" id="" />
                    <label htmlFor=""> Literary Fiction</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" name="" id="" />
                    <label htmlFor=""> Philosophy</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" name="" id="" />
                    <label htmlFor="">Thriller</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" name="" id="" />
                    <label htmlFor=""> Romance</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" name="" id="" />
                    <label htmlFor=""> Horror</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" name="" id="" />
                    <label htmlFor=""> Auto/Biography</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" name="" id="" />
                    <label htmlFor=""> Self-Help</label>
                  </div>
                  <div className="my-3">
                    <input type="radio" name="" id="" />
                    <label htmlFor=""> Politics</label>
                  </div>

                  <div className="my-3">
                    <input type="radio" name="" id="" />
                    <label htmlFor=""> No-filter</label>
                  </div>
                </div>

                <div class="flex-1 ...">
                  <div className="flex flex-wrap justify-evenly items-center">
                    <Link to={"/viewBook/56879"}>
                      <Card
                        className="max-w-sm py-20 px-10 shadow-2xl border-0 m-10"
                        imgAlt="Meaningful alt text for an image that is not purely decorative"
                        style={{
                          height: "450px",
                          backgroundColor: "wheat",
                        }}
                      >
                        <img
                          src="https://openclipart.org/image/2400px/svg_to_png/219894/antiFlash-icons-book.png"
                          style={{ height: "300px", width: "300px" }}
                          alt=""
                        />
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          Noteworthy technology acquisitions 2021
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                          Here are the biggest enterprise technology
                          acquisitions of 2021 so far, in reverse chronological
                          order.
                        </p>
                      </Card>
                    </Link>
                    <Card
                      className="max-w-sm py-20 px-10 shadow-2xl border-0 m-10"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      style={{
                        height: "450px",
                        backgroundColor: "wheat",
                      }}
                    >
                      <img
                        src="https://openclipart.org/image/2400px/svg_to_png/219894/antiFlash-icons-book.png"
                        style={{ height: "300px", width: "300px" }}
                        alt=""
                      />
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </Card>
                    <Card
                      className="max-w-sm py-20 px-10 shadow-2xl border-0 m-10"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      style={{
                        height: "450px",
                        backgroundColor: "wheat",
                      }}
                    >
                      <img
                        src="https://openclipart.org/image/2400px/svg_to_png/219894/antiFlash-icons-book.png"
                        style={{ height: "300px", width: "300px" }}
                        alt=""
                      />
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </Card>
                    <Card
                      className="max-w-sm py-20 px-10 shadow-2xl border-0 m-10"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      style={{
                        height: "450px",
                        backgroundColor: "wheat",
                      }}
                    >
                      <img
                        src="https://openclipart.org/image/2400px/svg_to_png/219894/antiFlash-icons-book.png"
                        style={{ height: "300px", width: "300px" }}
                        alt=""
                      />
                      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                      </p>
                    </Card>
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
