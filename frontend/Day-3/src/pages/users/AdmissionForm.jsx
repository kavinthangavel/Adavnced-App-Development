// AdmissionForm.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/AdmissionForm.css';

const AdmissionForm = () => {
  const [fullName, setFullName] = useState('');
  const [gender, setGender] = useState('');
  const [dobDay, setDOBDay] = useState('');
  const [dobMonth, setDOBMonth] = useState('');
  const [dobYear, setDOBYear] = useState('');
  const [socialStatus, setSocialStatus] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [programInterested, setProgramInterested] = useState('');
  const [alternateEmail, setAlternateEmail] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');
  const [nationality, setNationality] = useState('');
  const [guardianName, setGuardianName] = useState('');
  const [guardianRelation, setGuardianRelation] = useState('');
  const [guardianMobileNumber, setGuardianMobileNumber] = useState('');
  const [howDidYouKnow, setHowDidYouKnow] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [pincode, setPincode] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission here, e.g., send data to backend
    console.log('Form submitted:', {
      fullName,
      gender,
      dobDay,
      dobMonth,
      dobYear,
      socialStatus,
      mobileNumber,
      programInterested,
      alternateEmail,
      aadhaarNumber,
      nationality,
      guardianName,
      guardianRelation,
      guardianMobileNumber,
      howDidYouKnow,
      addressLine1,
      addressLine2,
      pincode,
      state,
      district,
      city,
    });
  };

  return (
    <div className="admission-form-container">
      <h2>College Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Name *</label>
        <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        <label htmlFor="gender">Gender *</label>
        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">--Select--</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Transgender">Transgender</option>
        </select>

        <label>Date of Birth *</label>
        <div className="dob-selectors">
          <select value={dobDay} onChange={(e) => setDOBDay(e.target.value)} required>
            <option value="">--Day--</option>
            {/* Populate days dynamically */}
          </select>
          <select value={dobMonth} onChange={(e) => setDOBMonth(e.target.value)} required>
            <option value="">--Month--</option>
            {/* Populate months dynamically */}
          </select>
          <select value={dobYear} onChange={(e) => setDOBYear(e.target.value)} required>
            <option value="">--Year--</option>
            {/* Populate years dynamically */}
          </select>
        </div>

        <label htmlFor="mobileNumber">Registered Mobile No *</label>
        <input type="tel" id="mobileNumber" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />

        <label htmlFor="programInterested">Program Interested *</label>
        <input type="text" id="programInterested" value={programInterested} onChange={(e) => setProgramInterested(e.target.value)} required />

        <label htmlFor="alternateEmail">Alternate Email *</label>
        <input type="email" id="alternateEmail" value={alternateEmail} onChange={(e) => setAlternateEmail(e.target.value)} required />

        <label htmlFor="aadhaarNumber">Aadhaar Number</label>
        <input type="text" id="aadhaarNumber" value={aadhaarNumber} onChange={(e) => setAadhaarNumber(e.target.value)} />

        <label htmlFor="nationality">Nationality *</label>
        <select id="nationality" value={nationality} onChange={(e) => setNationality(e.target.value)} required>
          <option value="">--Select--</option>
          <option value="Indian">Indian</option>
          <option value="Others">Others</option>
        </select>

        <label htmlFor="guardianName">Parent’s / Guardian’s Name *</label>
        <input type="text" id="guardianName" value={guardianName} onChange={(e) => setGuardianName(e.target.value)} required />

        <label htmlFor="guardianRelation">Parent’s / Guardian’s Relation *</label>
        <input type="text" id="guardianRelation" value={guardianRelation} onChange={(e) => setGuardianRelation(e.target.value)} required />

        <label htmlFor="guardianMobileNumber">Parent’s / Guardian’s Mobile No *</label>
        <input type="tel" id="guardianMobileNumber" value={guardianMobileNumber} onChange={(e) => setGuardianMobileNumber(e.target.value)} required />

        <label htmlFor="howDidYouKnow">How did you come to know about us? *</label>
        <select id="howDidYouKnow" value={howDidYouKnow} onChange={(e) => setHowDidYouKnow(e.target.value)} required>
          <option value="">--Select--</option>
          {/* Add options for how they came to know us */}
        </select>

        <label htmlFor="addressLine1">Address Line 1 *</label>
        <input type="text" id="addressLine1" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} required />

        <label htmlFor="addressLine2">Address Line 2</label>
        <input type="text" id="addressLine2" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} />

        <label htmlFor="pincode">Pincode</label>
        <input type="text" id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />

        <label htmlFor="state">State *</label>
        <select id="state" value={state} onChange={(e) => setState(e.target.value)} required>
          <option value="">--Select--</option>
          {/* Add state options */}
        </select>

        <label htmlFor="district">District *</label>
        <select id="district" value={district} onChange={(e) => setDistrict(e.target.value)} required>
          <option value="">--Select--</option>
          {/* Add district options */}
        </select>

        <label htmlFor="city">City *</label>
        <select id="city" value={city} onChange={(e) => setCity(e.target.value)} required>
          <option value="">--Select--</option>
          {/* Add city options */}
        </select>
        <Link to="/pay" className="border border-blue-500 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold">Next</Link>
      </form>
    </div>
  );
};

export default AdmissionForm;
