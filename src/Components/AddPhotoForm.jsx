import {useState} from "react";
import {useNavigate} from "react-router";

function AddPhotoForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        name: '',
        description: '',
        distance: ''
    });

    const [pendingResponse, setPendingResponse] = useState(false);
    const [fetchException, setFetchException] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setPendingResponse(true);
            const response = await fetch('http://145.24.223.230:8000/photos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
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
            <form method="post" onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3 mx-auto w-full">
                {
                    fetchException && (
                        <div>Failed to save discovery</div>
                    )
                }
                <div className="flex flex-col gap-1">
                    <label htmlFor="title" className="font-bold">Title</label>
                    <input type="text" name="title" id="title" value={formData.title} onChange={handleInputChange} className="border-2 border-gray-400 rounded py-2 px-4"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="font-bold">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} className="border-2 border-gray-400 rounded py-2 px-4"/>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="description" className="font-bold">Description</label>
                    <textarea name="description" id="description" rows="3" value={formData.description} onChange={handleInputChange} className="border-2 border-gray-400 rounded py-2 px-4 resize-y"></textarea>
                </div>
                <div className="flex flex-col gap-1">
                    <label htmlFor="distance" className="font-bold">Distance (light years)</label>
                    <input type="number" name="distance" id="distance" value={formData.distance} onChange={handleInputChange} className="border-2 border-gray-400 rounded py-2 px-4"/>
                </div>
                <input type="submit" value="Save photo" className="bg-black w-full block text-center text-white py-4 hover:bg-gray-800 cursor-pointer rounded"/>
            </form>
        )
    );
}

export default AddPhotoForm;