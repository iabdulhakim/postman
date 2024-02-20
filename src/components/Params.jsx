import React from "react";

function Params() {
  return (
    <div className="mt-6">
      <div className="overflow-x-auto w-[900px] text-[#000]">
        <table className="table w-full text-inherit border border-black">
          <thead>
            <tr>
              <th className="border border-black"></th>
              <th className="text-black border-r border-r-black">Key</th>
              <th className="text-black border-r border-r-black">Value</th>
              <th className="text-black">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-black"></th>
              <td className="border-r border-r-black ">
                <input
                  type="text"
                  className="text-slate-600 bg-white w-full"
                  defaultValue={"Key"}
                />
              </td>
              <td className="border-r border-r-black ">
                <input
                  type="text"
                  className="text-slate-600 bg-white w-full"
                  defaultValue={"Value"}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="text-slate-600 bg-white w-full"
                  defaultValue={"Description"}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Params;
