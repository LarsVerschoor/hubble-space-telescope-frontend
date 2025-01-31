import {useState} from "react";
import {useNavigate} from "react-router";

function AddPhotoForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        distance: '',
        image: null
    });

    const [pendingResponse, setPendingResponse] = useState(false);
    const [fetchException, setFetchException] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleFileChange = (e) => {
        setFormData({...formData, image: e.target.files[0]});
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setPendingResponse(true);

            const newPhoto = new FormData();
            newPhoto.append('title', formData.title);
            newPhoto.append('description', formData.description);
            newPhoto.append('distance', formData.distance);
            newPhoto.append('image', formData.image);
            const response = await fetch('http://145.24.223.230:8000/photos/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                },
                body: newPhoto
            });

            if (response.status !== 201) {
                throw new Error(`${response.status}, ${response.statusText}`);
            }

            const createdDiscovery = await response.json();
            setPendingResponse(false);

            navigate(`/photos/${createdDiscovery.id}`);
        } catch (error) {
            setFetchException(true)
            setPendingResponse(false);
            console.error(error.message);
        }

    }

    return (
        pendingResponse ? (<div>Saving discovery...</div>) : (
            <form method="post" onSubmit={handleSubmit} className="my-8 flex flex-col gap-3 w-[600px] max-w-full">
                {
                    fetchException && (
                        <div>Failed to save discovery</div>
                    )
                }
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="font-bold">Title</label>
                    <input type="text" name="title" id="title" value={formData.title} onChange={handleInputChange}
                           className="border-2 border-gray-400 rounded py-2 px-3"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="description" className="font-bold">Description</label>
                    <textarea name="description" id="description" rows="3" value={formData.description}
                              onChange={handleInputChange}
                              className="border-2 border-gray-400 rounded py-2 px-3 resize-y"></textarea>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="distance" className="font-bold">Distance (light years)</label>
                    <input type="number" name="distance" id="distance" value={formData.distance}
                           onChange={handleInputChange} className="border-2 border-gray-400 rounded py-2 px-3"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="image" className="font-bold">Image</label>
                    <input type="file" name="image" id="image" onChange={handleFileChange} className="border-2 border-gray-400 rounded py-2 px-3"/>
                </div>
                <input type="submit" value="Save photo"
                       className="bg-black w-full block text-center text-white py-4 hover:bg-gray-800 cursor-pointer rounded"/>
            </form>
        )
    );
}

export default AddPhotoForm;