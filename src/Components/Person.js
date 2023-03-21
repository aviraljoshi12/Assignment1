import React from 'react';

const Person = ({ name, age, hobbies }) => {
  const displayName = name.length > 8 ? name.substring(0, 6) : name;

  return (
    <div>
      <p>Learn some information about this person</p>
      <h3>{age >= 18 ? 'You can drive!' : 'You must be 18'}</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
      <p>Name: {displayName}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Person;
