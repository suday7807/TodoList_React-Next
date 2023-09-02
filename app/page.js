"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandlier = (i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1)
    setMainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className=" flex items-center justify-between mb-5">
          <div className=" flex items-center justify-between w-2/3">
            <h5 className=" text-2xl font-semibold">{t.title}</h5>
            <h6 className=" text-lg font-medium">{t.desc}</h6>
          </div>
          <button onClick={()=>{
          deleteHandlier(i)
        }}  className=" bg-red-400 py-2 px-4 font-bold rounded">Delete</button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className=" text-white bg-black p-5 font-bold text-center text-5xl">
        Uday's Todo list
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className=" border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Task here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className=" border-zinc-800 border-4 m-5 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className=" text-2xl px-4 py-2 rounded m-5 text-white bg-black  font-bold">
          Add Task
        </button>
      </form>
      <hr />
      <div className=" bg-slate-200 p-8 ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
