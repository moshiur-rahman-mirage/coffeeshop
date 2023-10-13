import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const loadedData = useLoaderData();
    console.log(loadedData)
    const { _id, name, category, supplier, details, photoUrl, taste, chef } = loadedData;
    const handleUpdate = e => {
        e.preventDefault();
        console.log(_id);
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form.photo.value;
        const updatedData = { name, chef, supplier, taste, category, details, photoUrl }
        // console.log(updatedData)
        fetch(`http://localhost:5000/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedData)

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Data updated Successfully!',
                        icon: 'success'
                    })
                }
            })
    }
    return (
        <div>
            {name}
            <form onSubmit={handleUpdate}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={name} />
                    </div>
                    <div>
                        <label htmlFor="chef" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Chef</label>
                        <input type="text" id="chef" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={chef} />
                    </div>
                    <div>
                        <label htmlFor="supplier" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Supplier</label>
                        <input type="text" id="supplier" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={supplier} />
                    </div>
                    <div>
                        <label htmlFor="taste" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Taste</label>
                        <input type="text" id="taste" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={taste} />
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <input type="text" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={category} />
                    </div>
                    <div>
                        <label htmlFor="details" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
                        <input type="text" id="details" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={details} />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">photo url</label>
                    <input type="url" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={photoUrl} />
                </div>

                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm btn btn-block  text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
            </form>

        </div>

    );
};

export default Update;