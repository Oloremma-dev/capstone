import React from 'react'
import { useState } from 'react'
import '../App.css'
import AboutAndInquiries from './AboutAndInquiries'


function BookingForm({ availableTimes, onTimeChange, dispatch, submitForm }) {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [useremail, setUserEmail] = useState('')
    const [usernumber, setUserNumber] = useState('')
    const [guestNumber, setGuestNumber] = useState('')
    const [resDate, setResDate] = useState('')
    const [specialRequest, setSpecialRequest] = useState('')
    const [resOccasion, setResOccasion] = useState('');
    const [resTime, setResTime] = useState('')

    const occasions = [
        "Birthday",
        "Anniversary",
        "Engagement",
        "Date",
        "Business Meal",
        "Other"
    ]

    const handleGuestNumber = (e) => {
        setGuestNumber(e.target.value)
    }


    const handleSelectedTime = (e) => {
        setResTime(e.target.value)
        onTimeChange(e.target.value)
    }


    const handleDateChange = (e) => {
        setResDate(e.target.value);
    }


    const handleSelectedOccasion = (e) => {
        setResOccasion(e.target.value);
    }


    const handleSpecialRequest = (e) => {
        setSpecialRequest(e.target.value)
    }


    const clearForm = (e) => {
        setFName("");
        setLName("");
        setUserEmail("");
        setUserNumber("");
        setGuestNumber("");
        setResTime("");
        setResDate("");
        setResOccasion("");
        setSpecialRequest("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstName', fName);
        formData.append('lastName', lName);
        formData.append('userEmail', useremail);
        formData.append('guestNumber', guestNumber);
        formData.append('phoneNumber', usernumber);
        formData.append('reservationDate', resDate);
        formData.append('reservationTime', resTime);
        formData.append('reservationOccasion', resOccasion);
        formData.append('specialRequest', specialRequest);

        submitForm(formData);

        clearForm();
        dispatch({ type: 'updateTimes', payload: availableTimes });
        console.log(`form submitted successfully`)
    }



    return (
        <div className="booking-form">
            <section className="title">
                <h1>Little Lemon</h1>
            </section>
            <div className='container'>
                <form method="POST" onSubmit={handleSubmit} >
                    <div>
                        <h2>Reserve Your Table</h2>
                        <div className="border"></div>
                    </div>
                    <div className='row row-cols-1 row-cols-sm-2'>


                        <div className=" user-details">
                            <label htmlFor='fName'>
                                First Name:
                            </label>
                            <input

                                type="text"
                                name='fname'
                                id="fName"
                                variant="filled"
                                required
                                value={fName}
                                onChange={(e) => {
                                    setFName(e.target.value)
                                }} />
                        </div>

                        <div className=" user-details">
                            <label htmlFor='lName'>
                                Last Name:
                            </label>
                            <input

                                type="text"
                                name='lname'
                                id="lName"
                                variant="filled"
                                required
                                value={lName}
                                onChange={(e) => {
                                    setLName(e.target.value)
                                }} />
                        </div>



                        <div className="user-details">
                            <label htmlFor='useremail'>
                                Email Address:
                            </label>
                            <input

                                type="text"
                                name='email'
                                id="useremail"
                                variant="filled"
                                required
                                minLength={4}
                                maxLength={200}
                                value={useremail}
                                onChange={(e) => {
                                    setUserEmail(e.target.value)
                                }} />

                        </div>



                        <div className=" user-details">
                            <label htmlFor='userNumber'>
                                Phone Number:
                            </label>
                            <input

                                type="tel"
                                name='tel'
                                id="userNumber"
                                variant="filled"
                                required
                                minLength={10}
                                maxLength={25}
                                placeholder="(xxx)-xxx-xxxx"
                                value={usernumber}
                                onChange={(e) => {
                                    setUserNumber(e.target.value)
                                }} />
                        </div>

                        <div className="user-details">
                            <label htmlFor='partySize'>
                                Party Size:
                            </label>
                            <input

                                type="number"
                                name='number'
                                id="partySize"
                                variant="filled"
                                min='1'
                                max='8'
                                value={guestNumber}
                                onChange={handleGuestNumber} />
                        </div>



                        <div className="user-details">
                            <label htmlFor="date">
                                Choose Date:
                            </label>
                            <input

                                type="date"
                                name='date'
                                id="date"
                                variant="filled"
                                required
                                value={resDate}
                                onChange={handleDateChange} />

                        </div>



                        <div className=" user-details">
                            <label htmlFor="time" >
                                Choose Time:
                            </label>
                            <select placeholder='Select option' name='time' required onChange={handleSelectedTime}>
                                {availableTimes.map((time) =>
                                    <option key={time} value={time}>
                                        {time}
                                    </option>)}
                            </select>

                        </div>



                        <div className=" user-details">
                            <label htmlFor='occasion' >
                                Occasion:
                            </label>
                            <select placeholder='Select option' name="occasion" value={resOccasion} onChange={handleSelectedOccasion}>
                                {occasions.map((occasion) =>
                                    <option key={occasion} value={occasion}>
                                        {occasion}
                                    </option>
                                )}
                            </select>
                        </div>

                        <div className="user-details">
                            <label htmlFor='specialrequests'>
                                Special Requests:
                            </label>
                            <textarea max='100' name="specialrequest" placeholder="Special requests..." value={specialRequest} onChange={handleSpecialRequest} />
                        </div>

                    </div>

                    <div>
                        <small>
                            <p className='notes'>
                                *Note: Please call #(xxx)-xxx-xxxx to make reservation for party of 8 people and up. Thank you for your cooperation. We look forward in speaking with you.
                            </p>
                        </small>
                    </div>
                    <button type="submit" aria-label="On Click" className='AvailabilityBtn' value="Check Availability" onSubmit={submitForm}>Book Table</button>
                </form>

            </div>
            <AboutAndInquiries />
        </div>
    )
}

export default BookingForm