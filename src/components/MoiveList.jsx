import React from 'react';
import Image from "../assets/react.svg"

export default function MoiveList() {
  return (
    <div>
       <div className="list flex flex-wrap gap-6">
        <div className="bg-slate-950 px-4 rounded-md">
            <img src={Image} alt="poster" />
            <p>moive title</p>
            <p>description ...</p>
            <p>*****</p>
            <button>add cart</button>
        </div>
        </div>
    </div>
  )
}
