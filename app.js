import React, { useState } from 'react';
import barberData from './barber.json';

function App() {

  const barber = barberData[0];
  const [selectedDate, setSelectedDate] = useState("2026-01-05");

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>

      <header>
        <img src={barber.photo} alt={barber.name} style={{ width: '150px', borderRadius: '50%' }} />
        <h1>{barber.name} - {barber.category}</h1>
        <p>⭐ {barber.rating} ({barber.reviews} rəy) | Təcrübə: {barber.experience} il</p>
        <p>📍 Ünvan: {barber.location}</p>
      </header>

      <hr />

      <section>
        <h3>Xidmətlər</h3>
        <ul>
          {barber.services.map((service, index) => (
            <li key={index}>
              {service.name}: <strong>{service.price} AZN</strong>
            </li>
          ))}
        </ul>
      </section>

      <hr />

      <section>
        <h3>Mövcud Vaxtlar ({selectedDate})</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {barber.schedule[selectedDate].map((slot, index) => (
            <button
              key={index}
              disabled={slot.booked}
              style={{
                padding: '10px',
                backgroundColor: slot.booked ? '#ccc' : '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: slot.booked ? 'not-allowed' : 'pointer'
              }}
            >
              {slot.time} {slot.booked ? "(Dolu)" : "(Boş)"}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;