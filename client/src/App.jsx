import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { FaHistory } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { useEffect } from 'react';
import axios from 'axios';

function App() {
  const [books, setBooks] = React.useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://musical-space-chainsaw-745gggp9rvrhrqg7-3000.app.github.dev/books', { withCredentials: true });
      setBooks(response.data);
    })();
  })

  return (
    <>
      <div className="w-fit sm:w-[80%] mx-auto py-6 shadow-2xl mt-6">
        {/* title  */}
        <h1 className="text-3xl text-center font-display">
          Library Management System
        </h1>

        <div className="px-6 mt-3 flex gap-8 justify-between">
          <div className='flex gap-3 justify-center items-center'>
            <div>
              <button className='border flex gap-2 items-center text-sm px-2 py-1 rounded-md cursor-pointer bg-primary text-white font-bold'>
                <FaHome />
                <h2>Home</h2>
              </button>
            </div>
            <div>
              <button className='border flex gap-2 items-center text-sm px-2 py-1 rounded-md cursor-pointer bg-primary text-white font-bold'>
                <FaHistory />
                <h2>Recent Books</h2>
              </button>
            </div>
          </div>
          <div>
            <button className='border flex gap-2 items-center text-sm px-2 py-1 rounded-md cursor-pointer bg-primary text-white font-bold'>
              <FaCartShopping />
              <h2>Cart</h2>
            </button>
          </div>
        </div>

        <div className="px-6 max-h-112.5 overflow-auto">
          <table className="w-full border-collapse border-2 mt-4">
            <thead>
              <tr className="font-body text-left bg-secondary text-white">
                <th className="py-1 px-3"></th>
                <th className="py-1 px-3">SR.</th>
                <th className="py-1 px-3">Book ID</th>
                <th className="py-1 px-3">Book Name</th>
                <th className="py-1 px-3">Auther</th>
                <th className="py-1 px-3">Price</th>
                <th className="py-1 px-3">Pages</th>
                <th className="py-1 px-3">Availability</th>
              </tr>
            </thead>

            <tbody>
              {
                books.map((book, index) => (
                  <tr key={book.id} className="font-body border-t-2 hover:bg-gray-200 cursor-pointer">
                    <td className="py-1 px-3">
                      <input type="checkbox" />
                    </td>
                    <td className="py-1 px-3">{index + 1}</td>
                    <td className="py-1 px-3">{book.id}</td>
                    <td className="py-1 px-3">{book.name}</td>
                    <td className="py-1 px-3">{book.auther}</td>
                    <td className="py-1 px-3">₹ {book.price}</td>
                    <td className="py-1 px-3">{book.pages}</td>
                    <td className="py-1 px-3">{book.availability}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
