import React from "react";
import {Card} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import EventList from "../../../components/EventList/EventList";
import {useNavigate} from "react-router-dom";

const EventsView = () => {

    const navigate = useNavigate();

    const routeChange = event => {
        const path = '/create';
        navigate(path);
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    const {t} = useTranslation();
    return (
        <>
            <div className='text-center mt-3'>
                <button className='button-30' role='button' onClick={routeChange}>
                    <Card.Title>{t('Add new event')}</Card.Title>
                </button>
            </div>
            <EventList/>
        </>
    );
};

export default EventsView;