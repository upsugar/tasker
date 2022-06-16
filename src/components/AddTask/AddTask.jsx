import React, { useState } from "react";
import {Button, Col, Container, Form, FormControl, Row} from "react-bootstrap";
import {v4 as uuidv4} from "uuid"
import s from "./AddTask.module.css"

function AddTask ({tasks, setTasks}) {

    const [value, setValue] = useState("")

    function saveTask() {
        setTasks(
            [...tasks, {
                id: uuidv4(),
                text: value,
                status: true
            }]
        )
        setValue('')
    }

    return (

        <div className={s.form}>
            <Container fluid>
            <Row>
                <Col sm={9}>
            <Form>
                <FormControl placeholder={"Enter a task"} value={value} onChange={ (e) =>setValue(e.target.value)}/>
            </Form>
                </Col>
                <Col>
            <div className={s.add}>
                <Button onClick={saveTask}>Add</Button>
            </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default AddTask;