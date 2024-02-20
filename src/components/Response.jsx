import React from "react";

import hljs from "highlight.js";

function Response(Api) {
  console.log(Api.api);
  return (
    <div className="max-w-full border-t border-t-slate-300 mt-8 p-4">
      <h3 className="font-bold text-2xl mb-3">Response:</h3>
      {Api.api && (
        <div className="text-md">{hljs.highlight(`${Api.api}`, { language: "json" }).value}</div>
      )}
    </div>
  );
}

export default Response;
