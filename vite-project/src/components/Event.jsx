// component that displays each event and details

const Event = ({event, handleDelete}) => {
    const aDelete = (id) => {
        // delete by id
        handleDelete(event.id);
    }

    return (
        <div className="flex gap-2 capitalize">
            <div className="flex gap-10">
                <h3>{event.name}</h3>
                <p>{event.location}</p>
                <p>{event.date}</p>
            </div>
            <button onClick={aDelete} className="w-24 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-red-100 border border-transparent font-semibold text-red-500 hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Delete</button>
        </div>
    )
}
export default Event;