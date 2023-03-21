import React from 'react';
import Person from './Person';

const Appp = () => {
  const people = [
    { name: 'John Doe', age: 25, hobbies: ['reading', 'coding', 'running'] },
    { name: 'Jane Smith', age: 16, hobbies: ['painting', 'dancing', 'singing'] },
    { name: 'Mike Johnson', age: 32, hobbies: ['swimming', 'hiking', 'traveling'] },
  ];

  return (
    <div>
      {people.map((person, index) => (
        <Person key={index} name={person.name} age={person.age} hobbies={person.hobbies} />
      ))}
    </div>
  );
};

export default Appp;
