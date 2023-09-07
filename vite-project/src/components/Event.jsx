
const Event = ({event}) => {
    //add delete function
    const handleDelete = () => {

    }

    return (
        <div className="">
            <h3>{event.name}</h3>
            <p>{event.location}</p>
            <p>{event.date}</p>
            <button onClick={handleDelete} className="hover:border-2 border-red-700">Delete</button>
        </div>
    )
}
export default Event;