import React from 'react';
import Swal from 'sweetalert2'
const Add = () => {
    const handleSubmit=e=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const chef=form.chef.value;
        const supplier=form.supplier.value;
        const taste=form.taste.value;
        const category=form.category.value;
        const details=form.details.value;
        const photoUrl=form.photo.value;
        const newData={name,chef,supplier,taste,category,details,photoUrl}
        console.log(newData)
        // send to server
        fetch('http://localhost:5000/add',{
            method:'POST',
            headers:{
            'content-type':'application/json',
        },
        body:JSON.stringify(newData)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                Swal.fire({
                    title:'Success',
                    text:'Data Inserted Successfully!',
                    icon:'success'
                })
            }
        })
    }
    return (
        <div className='text-center'>
                <h2 className='text-4xl font-bold mt-5'>Add New Cofee</h2>
<form onSubmit={handleSubmit}>
    <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name"/>
        </div>
        <div>
            <label htmlFor="chef" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chef</label>
            <input type="text" id="chef" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div>
            <label htmlFor="supplier" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Supplier</label>
            <input type="text" id="supplier" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required/>
        </div>  
        <div>
            <label htmlFor="taste" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Taste</label>
            <input type="text" id="taste" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
        </div>
        <div>
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
            <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required/>
        </div>
        <div>
            <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
            <input type="text" id="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
        </div>
    </div>
    <div className="mb-6">
        <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">photo url</label>
        <input type="url" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
    </div> 

    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm btn btn-block  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </div>
    );
};

export default Add;