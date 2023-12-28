import React from "react";
import { GoVerified, GoUnverified } from "react-icons/go";
import { MdPending } from "react-icons/md";

export default function BasicModal({ showModal, setShowModal, user, handleVerify }: any) {

  return (
    <>
      {showModal ? (
        <>
          <div
            className=" justify-start items-start flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none" >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg  flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold flex justify-start item-start">
                    <div> {user.firstName} {user.lastName} </div>
                    <div> {user.status === "VERIFIED" ?
                      <GoVerified title="VERIFIED" size={20} className="text-blue-600 font-bold" /> :
                      user.status === "PENDING_VERIFICATION" ?
                        <MdPending title="PENDING VERIFICATION" size={20} className="text-yellow-600 font-bold" /> :
                        <GoUnverified title="UNVERIFIED" size={20} className="text-gray-600 font-bold" />} </div>
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className=" p-6 flex flex-col justify-start">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Email: {user.email}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Gender: {user.gender}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Marital Status: {user.maritalStatus}
                  </p>
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Role: {user?.role}
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}>
                    Close
                  </button>
                  {
                    user?.status === "UNVERIFIED" || user?.status === "PENDING_VERIFICATION" ?
                      <button
                      onClick={()=> handleVerify()}
                        className="bg-sky-800 text-white active:bg-sky-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button">
                        VERIFY USER
                      </button> : null
                  }

                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}