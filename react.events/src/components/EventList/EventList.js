import {Button, Card, ListGroup} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchEvents} from '/projects/React.Events/react.events/src/redux/Slices/eventsSlice'

const EventList = () => {
    const {t} = useTranslation();
    const eventsState = useSelector((state) => state.eventsState)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEvents())
    }, [])

    return (
        <>
            <div className='displayEvents mt-5 '>
                {eventsState.isLoading && <span>Loading...</span>}
                {!eventsState.isLoading && eventsState.error ? <span>Error: {eventsState.error}</span> : null}
                {!eventsState.isLoading && eventsState.events.length ? (
                    <span>jjjjjj</span>
                ) : null}
            </div>
        </>
    );
}

export default EventList;