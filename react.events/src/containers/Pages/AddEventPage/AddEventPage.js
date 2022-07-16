// import React from "react";
// import {Form} from "react-bootstrap";
// import {useSelector} from 'react-redux'
// import {useState} from 'react'
//
// const AddEventPage = () => {
//     const [name, setName] = useState('');
//     const [location, setLocation] = useState('');
//     const [category, setCategory] = useState('');
//     const [price, setPrice] = useState('');
//     const [startEventDateTime, setStartEventDateTime] = useState('');
//     const [endEventDateTime, setEndEventDateTime] = useState('');
//     const [description, setDescription] = useState('');
//     const eventsList = useSelector((state) => state.events.value)
//     return (
        // <Form>
        //     <Form.Group className='mb-3' controlId='eventName'>
        //         <Form.Label>Event name</Form.Label>
        //         <Form.Control type='text' placeholder="Enter event name"
        //                       onChange={(event) => {
        //                           setName(event.target.value)
        //                       }}/>
        //     </Form.Group>
        //     <Form.Group className='mb-3' controlId='eventLocation'>
        //         <Form.Label>Event location</Form.Label>
        //         <Form.Control type='text' placeholder="Enter event location"
        //                       onChange={(event) => {
        //                           setLocation(event.target.value)
        //                       }}/>
        //     </Form.Group>
        //     <Form.Group className='mb-3' controlId='eventCategory'>
        //         <Form.Label>Select category</Form.Label>
        //         <Form.Select onChange={(event) => {
        //             setCategory(event.target.value)
        //         }}>
        //             <option></option>
        //             <option>Sports</option>
        //             <option>Concerts</option>
        //             <option>Festivals</option>
        //             <option>Performing Arts</option>
        //             <option>Conferences</option>
        //             <option>Community</option>
        //         </Form.Select>
        //     </Form.Group>
        //     <Form.Group className='mb-3' controlId='eventPrice'>
        //         <Form.Label>Event price</Form.Label>
        //         <Form.Control type='text' placeholder="Enter event price"
        //                       onChange={(event) => {
        //                           setPrice(event.target.value)
        //                       }}/>
        //     </Form.Group>
        //     <Form.Group className='mb-3' controlId='eventStart'>
        //         <Form.Label>Start event date/time</Form.Label>
        //         <Form.Control type='text' placeholder="Enter start event date/time"
        //                       onChange={(event) => {
        //                           setStartEventDateTime(event.target.value)
        //                       }}/>
        //     </Form.Group>
        //     <Form.Group className='mb-3' controlId='eventEnd'>
        //         <Form.Label>End event date/time</Form.Label>
        //         <Form.Control type='text' placeholder="Enter end event date time"
        //                       onChange={(event) => {
        //                           setEndEventDateTime(event.target.value)
        //                       }}/>
        //     </Form.Group>
        //     <Form.Group className='mb-3' controlId='eventDescription'>
        //         <Form.Label>Event description</Form.Label>
        //         <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
        //                   onChange={(event) => {
        //                       setDescription(event.target.value)
        //                   }}></textarea>
        //     </Form.Group>
        // </Form>
    // );
// };
//
// export default AddEventPage;