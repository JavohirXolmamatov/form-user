import './Form.css';
import { useState } from 'react';

function Form({ userData }) {
  const [image, setImage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [from, setFrom] = useState('');
  const [job, setJob] = useState('');
  const [gender, setGender] = useState('');

  const FormClear = () => {
    setImage('');
    setFirstName('');
    setLastName('');
    setAge('');
    setFrom('');
    setJob('');
    setGender('');
  };

  const SetCard = (e) => {
    e.preventDefault();

    const formData = {
      image,
      firstName,
      lastName,
      age,
      from,
      job,
      gender,
    };

    userData(formData); // Send data to parent component
    FormClear(); // Clear the form after submission
  };

  return (
    <div className='form-container'>
      <div className="modal">
        <form action="#" onSubmit={SetCard}>
          <label>
            <span>Image url:</span>
            <input type="url" value={image} onChange={(e) => setImage(e.target.value)} required />
          </label>
          <label>
            <span>First Name:</span>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </label>
          <label>
            <span>Last Name:</span>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </label>
          <label>
            <span>Age:</span>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} required />
          </label>
          <label>
            <span>From:</span>
            <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} required />
          </label>
          <label>
            <span>Job:</span>
            <input type="text" value={job} onChange={(e) => setJob(e.target.value)} required />
          </label>
          <div className="radio">
            <span>Gender:</span>
            <label>
              <span>Male:</span>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === 'Male'}
                onChange={(e) => setGender(e.target.value)}
                required
              />
            </label>
            <label>
              <span>Female:</span>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === 'Female'}
                onChange={(e) => setGender(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
