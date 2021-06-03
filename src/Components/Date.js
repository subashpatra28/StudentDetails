import React, { useState } from "react";
import DatePicker from "react-datepicker";

function Date() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="DatePicker">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText={"dd/mm/yyyy"}
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
}

export default Date;
