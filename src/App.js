import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Card from "./components/card/Card";
import { getEmployees } from "./utils/API";
import Col from "./components/col/Col";
import Row from "./components/row/Row";


function App() {
  const [initialEmployees, updateAvailableEmployees] = useState([]);
  const [employeesToRender, updateEmployeesToRender] = useState([]);

  useEffect(() => {
    getEmployees().then(({ data: { results } }) => updateAvailableEmployees(results));
  }, []);

  return (
    <div className="App">
<<<<<<< HEAD
      <h1>Employee Directory</h1>
      <p>
       PLease enter an employees first name: 
      <FilterInput employees={initialEmployees} updateEmployees={updateEmployeesToRender} />
      </p>
      <Row>
        
        <Col size="md-12">
      <Card employees={employeesToRender} />
      </Col>
      </Row>
=======
>>>>>>> 854f273a7a6419ceb6701f7bf507bf53e6f06ec9
    </div>
  );
}

export default App;
//test