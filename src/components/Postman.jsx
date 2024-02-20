import React, { useEffect, useState } from "react";
import Tab from "./Tab";
import Response from "./Response";
import { useDispatch } from "react-redux";
import { addNameInp, changeMetod, changeName } from "../redux/Require";

const options = [
  {
    text: "GET",
    color: "text-yellow-400",
  },
  {
    text: "POST",
    color: "text-red-500",
  },
  {
    text: "PUT",
    color: "text-blue-600",
  },
  {
    text: "DELETE",
    color: "text-green-500",
  },
];

function Postman() {
  const [API, setAPI] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const cahngeNameEl = document.getElementById("name");

    dispatch(addNameInp(cahngeNameEl));
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitEl = document.getElementById("Submit");
    const res = await fetch(submitEl.value);
    const data = await res.json();
    setAPI(data);
  };

  return (
    <div className="p-6">
      <input
        onChange={(e) => dispatch(changeName(e.target.value))}
        type="text"
        id="name"
        className="font-semibold border-2 pl-2  border-blue-500 rounded-md focus-within:border-2 focus-within:border-blue-500    text-lg  bg-inherit text-inhirit"
        defaultValue={"New Request"}
      />
      <form
        onSubmit={handleSubmit}
        className="mt-7 max-w-full flex gap-2 border items-center rounded-md p-1"
      >
        <select
          onChange={(e) => dispatch(changeMetod(e.target.value))}
          className="bg-white  p-1 pr-2 flex gap-2 text-inherit text-md font-semibold cursor-pointer "
        >
          {options.map((opt, i) => (
            <option
              key={i}
              className={`bg-white text-md cursor-pointer font-semibold ${opt.color} `}
              value={opt.text}
            >
              {opt.text}
            </option>
          ))}
        </select>
        <div className="h-[45px] flex justify-center w-[1px] bg-slate-300"></div>
        <input
          type="text"
          id="Submit"
          placeholder="Enter URL or paste the text"
          className="bg-white text-xl pl-2 flex h-[46px]  flex-1"
        />
        <button className="btn bg-blue-600 hover:bg-blue-300 text-lg text-white px-5 py-2 border border-blue-400">
          send
        </button>
      </form>
      <Tab />
      <Response api={API} />
    </div>
  );
}

export default Postman;
