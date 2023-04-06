import React, { useEffect, useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI } from './bookingAPI.js'
import { useNavigate } from 'react-router-dom';


function Main() {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'updateTimes':
                return action.payload;
            default:
                return state;
        }
    }

    const [availableTimes, dispatch] = useReducer(reducer, []);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const availableTimes = await fetchAPI(new Date());
            dispatch({ type: 'updateTimes', payload: availableTimes });
        };
        fetchData();
    }, []);

    const handleTimeChange = (selectedTime) => {
        const fetchAPI = availableTimes.filter(time => time !== selectedTime);
        dispatch({ type: 'updateTimes', payload: fetchAPI });
    }

    const submitForm = async formData => {
        try {
            const response = await submitAPI(formData);
            if (response.ok) {
               navigate('./confirmation');
            } else {
                console.log(`form submission failed with status ${response.status}`);
            }
        } catch (error) {
            console.log(`form submission failed with error: ${error}`);
        }
    };

    const submitAPI = async formData => {
        const response = await fetch('http://localhost:3001/BookingForm', {
            method: "POST",
            body: formData,
        });
        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`);
        }
        return response;
    };



    return (
        <div>
            <BookingForm
                availableTimes={availableTimes}
                onTimeChange={handleTimeChange}
                dispatch={dispatch}
                submitForm={submitForm}
            />
        </div>
    )
}


export default Main