import React, {useState} from 'react';
import './Contact.css';
const Contact = () => {

    const [formData, setFormData] = useState('');
    const [loading, setLoading] = useState(false);

    const contacts = {
        address: '213 Chevron Road, Lagos',
        number: '080 1234 5678',
        time: 'Mon - Sun 9:00am to 10:00pm',    
    }

    const handleChangeInput = (e) => {
        const {name, value} = e.target;
        setFormData({ ...formData, [name]: value});
    }

    const handleSubmit = () => {
        setLoading(true);
      }
  return (
    
    <>
        <div className='app__contact'>
            <h1>Contacts</h1>
            <p>{contacts.address}</p>
            <p>{contacts.number}</p>
            <p>{contacts.time}</p>

            <input type='text' placeholder='Your Name' name='name' 
             onChange={handleChangeInput} />

            <input type='number' placeholder='Number of Guests' name='number' 
             onChange={handleChangeInput} />

            <input type='date' placeholder='Date' name='date' 
             onChange={handleChangeInput} />
            
            <input type='time' placeholder='Time' name='time' 
             onChange={handleChangeInput} />

            <button type='button' onClick={handleSubmit}>{loading ? 'Reserved': 'RESERVATION'}</button>

            
        </div>
    </>
  )
}

export default Contact