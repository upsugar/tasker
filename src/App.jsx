import React, { useState } from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import Header from './components/Header/Header';
import AddTask from './components/AddTask/AddTask';
import TaskList from './components/TaskList/TaskList';
import  s from './App.css'


function App() {
    
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Create an app",
            status: false
        },
        {
            id: 2,
            text: "Set up",
            status: false
        },
        {
            id: 3,
            text: "Cover by tests",
            status: false
        },
        {
            id: 4,
            text: "Present",
            status: true
        }
    ])


    return (
      <Container>
          <Row>
              <Col xs></Col>
                  <Col lg={6}>
                    <Header />
                      <div className={s.card}>
                          <Card style={{background: "#3450A1"}} className={"p-2"}>
                              <AddTask tasks={tasks} setTasks={setTasks}/>
                              <TaskList tasks={tasks} setTasks={setTasks}/>
                          </Card>
                      </div>
                  </Col>
              <Col xs></Col>
          </Row>
      </Container>
  );
}

export default App;
