function PhotoCardDeleteButton({onDelete}) {
    return (
        <button onClick={onDelete} className="bg-red-700 p-2 rounded hover:bg-red-600">
            <img src="/icon_delete.svg" width="22px" alt="Delete this photo"/>
        </button>
    )
}

export default PhotoCardDeleteButton;