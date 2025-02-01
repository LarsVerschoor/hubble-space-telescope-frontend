import {useState} from "react";

function EditPhotoForm({photo, onSubmit}) {
    const [formData, setFormData] = useState({
        title: photo.title,
        description: photo.description,
        distance: photo.distance
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    return (
        <form method="post" onSubmit={(e) => {e.preventDefault(); onSubmit(formData)}} className="my-8 flex flex-col gap-3 w-[600px] max-w-full">
            <div className="flex flex-col gap-1">
                <label htmlFor="title" className="font-bold">Title</label>
                <input type="text" name="title" id="title" value={formData.title} onChange={handleInputChange} className="border-2 border-gray-400 rounded py-2 px-3"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="description" className="font-bold">Description</label>
                <textarea name="description" id="description" rows="3" value={formData.description} onChange={handleInputChange} className="border-2 border-gray-400 rounded py-2 px-3 resize-y"></textarea>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="distance" className="font-bold">Distance (light years)</label>
                <input type="number" name="distance" id="distance" value={formData.distance} onChange={handleInputChange} className="border-2 border-gray-400 rounded py-2 px-3"/>
            </div>
            <input type="submit" value="Edit photo" className="bg-black w-full block text-center text-white py-4 hover:bg-gray-800 cursor-pointer rounded"/>
        </form>

    );
}

export default EditPhotoForm;