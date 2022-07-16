import React from "react";
import {Form} from "react-bootstrap";

const AddEventPage = () => {
    return (
        <Form>
            <Form.Group className='mb-3' controlId='eventName'>
                <Form.Label>Event name</Form.Label>
                <Form.Control type='text' placeholder="Enter event name" />
            </Form.Group>
            <Form.Group className='mb-3' controlId='eventLocation'>
                <Form.Label>Event location</Form.Label>
                <Form.Control type='text' placeholder="Enter event location" />
            </Form.Group>
            <Form.Group className='mb-3' controlId='eventCategory'>
                <Form.Label>Select category</Form.Label>
                <Form.Select>
                    <option></option>
                    <option>Sports</option>
                    <option>Concerts</option>
                    <option>Festivals</option>
                    <option>Performing Arts</option>
                    <option>Conferences</option>
                    <option>Community</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3' controlId='eventPrice'>
                <Form.Label>Event price</Form.Label>
                <Form.Control type='text' placeholder="Enter event price" />
            </Form.Group>
            <Form.Group className='mb-3' controlId='eventStart'>
                <Form.Label>Start event date/time</Form.Label>
                <Form.Control type='text' placeholder="Enter start event date/time" />
            </Form.Group>
            <Form.Group className='mb-3' controlId='eventEnd'>
                <Form.Label>End event date/time</Form.Label>
                <Form.Control type='text' placeholder="Enter end event date time" />
            </Form.Group>
            <Form.Group className='mb-3' controlId='eventDescription'>
                <Form.Label>Event description</Form.Label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </Form.Group>
        </Form>
    );
};

export default AddEventPage;