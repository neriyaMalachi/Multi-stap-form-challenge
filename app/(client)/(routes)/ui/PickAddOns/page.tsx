"use client";
import { userStore } from "@/context/store";
import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
const Page = () => {
  type TG = {
    title: string;
    description: string;
    priceMonth: Number;
    priceyeare: Number;
    selected: boolean;
    id: number;
  };
  const user = userStore((state: any) => state.user);
  const UpdateUser = userStore((user: any) => user.updateName);

  const [typeGaming, setTypeGaming] = useState<TG[]>([
    {
      title: "Online service",
      description: " Access to multiplayer games",
      priceMonth: 1,
      priceyeare: 10,
      selected: false,
      id: 1,
    },
    {
      title: "larger storage",
      description: " Extra 1TB of cloud save",
      priceMonth: 2,
      priceyeare: 20,
      selected: false,
      id: 2,
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      priceMonth: 2,
      priceyeare: 20,
      selected: false,
      id: 3,
    },
  ]);
  console.log(user.Price);

  return (
    <div className="body flex justify-center bg-slate-200 h-[573px] -mt-6 ">
      <div className="card bg-white w-[90%] h-[380px] rounded-xl -mt-[19%]">
        <div className="h-[30%]  flex flex-col p-6">
          <h1 className="font-Ubuntu-Bold text-2xl">Pick add-ons</h1>
          <p className="mt-4 text-slate-400">
            Add ons help enhance your gaming experience.
          </p>
        </div>
        <div className="typesSelecte flex flex-col justify-evenly mt-4 items-center h-[65%]">
          {typeGaming.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  item.selected
                    ? setTypeGaming((limitSelect: TG[]) =>
                        limitSelect.map((select) =>
                          item.id === select.id
                            ? { ...select, selected: false }
                            : select
                        )
                      )
                    : setTypeGaming((limitSelect: TG[]) =>
                        limitSelect.map((select) =>
                          item.id === select.id
                            ? { ...select, selected: true }
                            : select
                        )
                      );

                  switch (item.title) {
                    case "Online service": {
                      !user.OnlineService
                        ? (UpdateUser({
                            OnlineService: true,
                          }),
                          user.month
                            ? UpdateUser({
                                Price: item.priceMonth + user.Price,
                              })
                            : UpdateUser({
                                Price: item.priceyeare + user.Price,
                              }))
                        : (UpdateUser({
                            OnlineService: false,
                          }),
                          user.month
                            ? UpdateUser({
                                Price: -item.priceMonth ,
                              })
                            : UpdateUser({
                                Price: -item.priceyeare ,
                              }));
                      return;
                    }
                    case "larger storage": {
                      console.log(item.title);

                      !user.largerStorage
                        ? UpdateUser({
                            largerStorage: true,
                          })
                        : UpdateUser({
                            largerStorage: false,
                          });
                      return;
                    }
                    case "Customizable profile": {
                      console.log(item.title);

                      !user.CustomizableProfile
                        ? UpdateUser({
                            CustomizableProfile: true,
                          })
                        : UpdateUser({
                            CustomizableProfile: false,
                          });
                      return;
                    }
                    default:
                      console.log("Error in pickAddOns !!!");
                  }
                }}
                className={`${
                  item.selected
                    ? "border border-blue-600 bg-blue-50"
                    : "border border-slate-400"
                }  flex items-center w-[93%] p-3 rounded-md  `}
              >
                <div className="flex  justify-between  w-full items-center">
                  <div className="flex items-center ">
                    <button
                      className={`${
                        item.selected
                          ? " bg-blue-800 text-white "
                          : "bg-white text-white border"
                      } p-1 rounded-md font-Ubuntu-Bold`}
                    >
                      <IoMdCheckmark />
                    </button>
                  </div>
                  <div className="w-[60%]">
                    <h1 className="font-Ubuntu-Bold text-sm">{item.title}</h1>
                    <p className="text-xs text-slate-400">{item.description}</p>
                  </div>
                  <div className="">
                    <p className="text-sm">
                      +$
                      {user.yeare
                        ? item.priceyeare.toString()
                        : item.priceMonth.toString()}
                      /{user.yeare ? "yr" : "mo"}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page;
