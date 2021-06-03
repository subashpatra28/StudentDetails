import React, {useState} from "react";
import "../index.css";
import Date from './Date'
import 'react-datepicker/dist/react-datepicker.css'
import uuid from 'uuid/v4'

export default function Form() {

    const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div class="form-container">
      <form class="register-form">
        <input
          id="name"
          class="form-field"
          type="text"
          placeholder="Name"
          name="Name"
        />
        <input
          id="student id"
          class="form-field"
          type="number"
          placeholder="Student Id"
          name="student id"
        />
        <input
          id="standard"
          class="form-field"
          type="number"
          placeholder="Standard"
          name="standard"
        />
        <input
          id="address"
          class="form-field"
          type="text"
          placeholder="Address"
          name="address"
        />
        <Date
          id="dob"
          class="form-field"
          type="text"
          placeholder="Date-Of-Birth"
          name="dob"
        />
        <select id="sport" class="form-field" placeholder="Sport Activity" name="sport">
          <option value="">Hockey</option>
          <option value="">Tennis</option>
          <option value="">Football</option>
          <option value="">BasketBall</option>
          <option value="">Cricket</option>
        </select>
        <button class="form-field" type="submit">
          Submit
        </button>
        <button class="form-field" type="submit" >
            List
        </button>
      </form>
    </div>
  );
}
