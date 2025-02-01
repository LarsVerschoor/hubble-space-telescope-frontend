function modalCloseButton({onClose}) {
    return (
        <div className="p-3">
            <button onClick={onClose} className="bg-black w-full p-4 text-white text-center hover:bg-gray-800 rounded">
                Close
            </button>
        </div>

    )
}

export default modalCloseButton;