import React from 'react'
import MapIcon from '../../lib/icons/map-pin-simple-area-bold.svg';

const Bill = () => {
  return (
  
    <div
    className="max-w-xl  mx-auto  p-6 bg-white rounded shadow-[0px_8px_0px_0px_#1a202c] my-6"
    style={{ border: "3px solid #1a202c" }}
    id="invoice"
  >
    <div className="grid grid-cols-2 items-center">
      <div>
        <span
          style={{ color: "black" }}
          className="font-extrabold text-3xl text-black text-inherit align-middle"
        >
          Room
          <img src={MapIcon} alt="map" className="inline-block ml-1" />
          zy
        </span>
      </div>

      <div className="text-right">
        <p>Tailwind Inc.</p>
        <p className="text-gray-500 text-sm">sales@tailwindcss.com</p>
        <p className="text-gray-500 text-sm mt-1">+41-442341232</p>
        <p className="text-gray-500 text-sm mt-1">VAT: 8657671212</p>
      </div>
    </div>

    <div className="grid grid-cols-2 items-center mt-8">
      <div>
        <p className="font-bold text-gray-800">Bill to :</p>
        <p className="text-gray-500">
          Laravel LLC.
          <br />
          102, San-Fransico, CA, USA
        </p>
        <p className="text-gray-500">info@laravel.com</p>
      </div>

      <div className="text-right">
        <p className="">
          Invoice number:
          <span className="text-gray-500">INV-2023786123</span>
        </p>
        <p>
          Invoice date: <span className="text-gray-500">03/07/2023</span>
          <br />
          Due date:<span className="text-gray-500">31/07/2023</span>
        </p>
      </div>
    </div>

    <div className="-mx-4 mt-8 flow-root sm:mx-0">
      <table className="min-w-full">
        <thead className="border-b border-gray-300 text-gray-900">
          <tr>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
            >
              Items
            </th>
            
            <th
              scope="col"
              className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-0"
            >
              Amount
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="max-w-2/3 py-5 pl-4 pr-3 text-sm sm:pl-0">
              <div className="font-medium text-gray-900">
                E-commerce Platform
              </div>
              <div className="mt-1 truncate text-gray-500">
                Laravel based e-commerce platform.
              </div>
            </td>
           
            <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
              $5,000.00
            </td>
          </tr>

          <tr className="border-b border-gray-200">
            <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
              <div className="font-medium text-gray-900">Frontend Design</div>
              <div className="mt-1 truncate text-gray-500">
                Frontend design using Vue.js and Tailwind CSS.
              </div>
            </td>
           
            <td className="py-5 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-0">
              $5,000.00
            </td>
          </tr>
         
        </tbody>
        <tfoot>
          <tr>
            <th
              scope="row"
              colspan="3"
              className=" pl-4 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Subtotal
            </th>
            <th
              scope="row"
              className="pl-6 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
            >
              Subtotal
            </th>
            <td className="pl-3 pr-6 pt-6 text-right text-sm text-gray-500 sm:pr-0">
              $10,500.00
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              colspan="3"
              className=" pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Tax
            </th>
            <th
              scope="row"
              className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
            >
              Tax
            </th>
            <td className="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
              $1,050.00
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              colspan="3"
              className=" pl-4 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell sm:pl-0"
            >
              Discount
            </th>
            <th
              scope="row"
              className="pl-6 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
            >
              Discount
            </th>
            <td className="pl-3 pr-6 pt-4 text-right text-sm text-gray-500 sm:pr-0">
              - 10%
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              colspan="3"
              className=" pl-4 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell sm:pl-0"
            >
              Total
            </th>
            <th
              scope="row"
              className="pl-6 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
            >
              Total
            </th>
            <td className="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-0">
              $11,550.00
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>

  )
}

export default Bill