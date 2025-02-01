function modalCloseIcon({onClose}) {
    return (
        <button onClick={onClose} className="bg-black p-2 hover:bg-gray-800 rounded">
            <img src="/icon_close.svg" width="22px" alt="Close pop-up"/>
        </button>
    )
}

export default modalCloseIcon;