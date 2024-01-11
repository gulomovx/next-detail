"use client";
import React from "react";
import { useEffect } from "react";
// import { data } from "@/constants/data";
import { data } from "@/constants/data";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { increment, decrement } from "@/redux/itemSlice";
import { useDispatch, useSelector } from "react-redux";
// import { render } from "react-dom";


const page = () => {
  const [item, setItem] = useState();
  const { id } = useParams();
  const dispatch=useDispatch()
  const amount = useSelector((state) => state.counter.data)
  const count = useSelector((state) => state.counter.amount)
  console.log('aaaa',amount);
  

  useEffect(() => {
    setItem(amount.find((i) => i.id ===+id));
  }, [amount]);
  return (
    <div className="w-full ">
      <h1 className="text-4xl text-center font-medium mt-8 ">
        Product details
      </h1>
      <div className="max-w-7xl mx-auto mt-36 grid grid-cols-2">
        <Image
          className=" w-[500px] h-[300px] object-cover p-8 border rounded-2xl"
          alt="img"
          src={item?.img}
          width={200}
          height={300}
        />
        <div className=" w-full">
          <p className="text-slate-600 text-2xl">{item?.feature}</p>
          <h1 className="text-4xl my-6 font-semibold flex items-center flex-row gap-8">
            {item?.name} ${item?.price -(item?.price*0.1)}{" "}
            <span className="line-through text-slate-500 text-3xl">
              ${item?.price}
            </span>{" "}
            <span className="text-orange-500 text-3xl">10 % off</span>
          </h1>
          <p className="text-slate-500 text-[18px]">{item?.text}</p>
          <p className="text-orange-500 text-[18px]">
            Special offer ends in 23:00:45 hours
          </p>
          <div className="flex items-center gap-8 mt-2">
            <h1 className="text-2xl">Quantity</h1>
            <div className="flex  items-center px-8 gap-4 bg-white shadow-2xl rounded-2xl border">
              <button onClick={()=>dispatch(increment(item.name))} className="text-2xl">+</button>
              <h1 className="">{ item?.amount}</h1>
              <button onClick={()=>dispatch(decrement(item.name))} className="text-2xl">-</button>
                      </div>
                      <div className="flex items-center gap-4">
                          <button className="bg-orange-400 text-white rounded-3xl py-2 px-6 text-lg">Add to wishlist</button>
                          <button className="bg-orange-400 text-white rounded-3xl py-2 px-6 text-lg">Add to cart</button>
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
