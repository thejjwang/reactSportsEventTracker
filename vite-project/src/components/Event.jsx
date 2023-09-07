
const Event = ({event}) => {

    return (
        <div>
            <h3>{event.name}</h3>
            <p>{event.location}</p>
            <p>{event.date}</p>
            <button>Delete</button>
        </div>
    )
}
export default Event;