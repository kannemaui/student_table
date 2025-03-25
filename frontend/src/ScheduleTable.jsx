// Frontend: React + Vite
// Install dependencies: axios, react
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ScheduleTable.css';

const ScheduleTable = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/schedule')
      .then(response => setSchedule(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <table className="schedule-table">
      <thead>
        <tr>
          <th>Subject description</th>
          <th>Day</th>
          <th>Time</th>
          <th>Room</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((item, index) => (
          <tr key={index}>
            <td>{item.subject_description}</td>
            <td>{item.day}</td>
            <td>{item.time}</td>
            <td>{item.room}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScheduleTable;