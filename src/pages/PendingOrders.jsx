import React from "react";
import Navbar from "./Navbar";

export default function PendingOrders() {
  return (
    <div>
      <div className="flex flex-row sm:gap-10">
        <div className="sm:w-full sm:max-w-[18rem]">
          <Navbar />
        </div>
        <div class="flex w-full overflow-x-auto mt-10">
          <table class="table-zebra table text-center">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Phone No</th>
                <th>Customer Name</th>
                <th>Warranty Status</th>
                <th>Date Recevied</th>
                <th>Defective Item</th>
                <th>DOA</th>
                <th>Bag/Power Pack</th>
                <th>Power Pack</th>
                <th>Physical Damage</th>
                <th>Brand/Model</th>
                <th>Estimated Repair Cost</th>
                <th>Note</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Tax Accountant</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Tax Accountant</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Tax Accountant</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Tax Accountant</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td className="flex space-x-2">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-success">Complete</button>
                  <button className="btn btn-warning">Print</button>
                  <button className="btn btn-secondary">WhatsApp</button>
                </td>
              </tr>
              <tr>
                <th>2</th>
                <td>Tax Accountant</td>
                <td>Tax Accountant</td>
                {/* <td style={{ textAlign: "center" }}>Red</td> */}
                <td>Red</td>
                <td>Tax Accountant</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Tax Accountant</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td>Tax Accountant</td>
                <td>Tax Accountant</td>
                <td>Red</td>
                <td className="flex space-x-2">
                  <button className="btn btn-primary">Edit</button>
                  <button className="btn btn-success">Complete</button>
                  <button className="btn btn-warning">Print</button>
                  <button className="btn btn-secondary">WhatsApp</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
