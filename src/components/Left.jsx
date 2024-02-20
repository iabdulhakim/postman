import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequire } from "../redux/Require";

function Left() {
  const data = useSelector((state) => state.Require.requirs);
  const nameInp = useSelector((state) => state.Require.nameInp);

  const dispatch = useDispatch();
  const handleClick = () => {
    const payload = {
      id: Math.random() * 1000000,
      method: "GET",
      text: "New Request",
      new: true,
    };
    dispatch(addRequire(payload));
    nameInp.focus();
  };
  return (
    <div className="p-4 bg-slate-100 h-full border-r border-gray-400">
      <button
        onClick={handleClick}
        className="text-2xl font-bold text-slate-600 mb-4 "
      >
        + new
      </button>
      <div id="Requires" className="flex flex-col gap-2 ">
        {data &&
          data.map((d, i) => (
            <div
              className="flex items-center gap-2 p-2 bg-white rounded-md text-slate-700 border-slate-600 border font-semibold"
              key={d.id}
            >
              <span>{i + 1}</span>
              <span>{d.method}</span>
              <span>{d.text}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Left;
