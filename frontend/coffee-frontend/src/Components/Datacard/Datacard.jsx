import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Datacard = ({oneData}) => {
    const {_id,name,category,supplier,details,photoUrl}=oneData;
    const handleDelete=_id=>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`http://localhost:5000/delete/${_id}`,{
                method:'DELETE'
              })
              .then(res=>res.json())
              .then(data=>{
                if(data.deletedCount>0){
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                      )
                }
              })
            }
          })
    }
    return (
        <div>

            <Link to="" className=" grid grid-cols-3 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className=" object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={photoUrl} alt=""/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                    </div>
                    <div className=" border flex flex-col justify-end ">
                        <button className="btn btn-primary">View</button>
                        <Link to={`/update/${_id}`}>
                        <button className="btn btn-secondary">Edit</button>
                        </Link>
                       
                        <button
                         onClick={()=>handleDelete(_id)}
                         className="btn btn-warning">Delete</button>
                    </div>
            </Link>

        </div>
    );
};

export default Datacard;