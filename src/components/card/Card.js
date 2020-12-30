import React, { useState, useEffect } from "react";

function Card({employees}) {
  const [sortedemployees, updateSortedemployees] = useState([]);

  useEffect(() => updateSortedemployees(employees), [employees]);

  return (
    <div className="card text-center">
      <div className="card-header">
      </div>
      <div className="card-body"onClick={() => {
                const employeesCopy = [...employees];
                const updateSort = employeesCopy.sort((a, b) => {
                  const nameA = a.name.first;
                  const nameB = b.name.first;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedemployees(updateSort);
              }}></div>
              <div className="card-body" >
                {sortedemployees.map(
            ({
              location: { city, state, postcode },
              picture: { medium },
              cell,
              phone,
              email,
              name: { first, last}
            }) => (
              <div className= "" key = {first}>
                
              <ul>
                <img  src={medium} alt = {first + last}/>
                <h6>{first} {last}</h6>
                <p>Email: {email}</p>
                <p>Home: {phone}</p>
                <p>Cell: {cell}</p>
                <p>Address: {city}, {state} {postcode}</p>
                </ul>
                ---------------------------------------------------------
                
             </ div>
            )
          )}</div>
    </div>
  );
}

export default Card;

