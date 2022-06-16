import React, {useEffect, useState} from 'react';
import s from './TaskList.module.css'
import {ButtonGroup, Button, Form, FormControl} from "react-bootstrap";

function TaskList({ tasks, setTasks }) {

    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState()
    const [filter, setFilter] = useState(tasks)

    useEffect( () => {
        setFilter(tasks)
    }, [tasks])

    function taskFilter(status) {
        if(status === 'all') {
            setFilter(tasks)
        } else {
            let newTasks = [...tasks].filter( item => item.status === status)
            setFilter(newTasks)

        }
    }

    function deleteTask(id) {
        let newTasks = [...tasks].filter(item => item.id != id)
        setTasks(newTasks)

    }

    function completeTask(id) {
        let newTasks = [...tasks].filter(item => {
            if (item.id == id) {
                item.status = !item.status
            }
            return item
        })
        setTasks(newTasks)
    }

    function editTask(id, text) {
        setEdit(id)
        setValue(text)
    }

    function saveTask(id) {
        let newTask = [...tasks].map(item => {
            if (item.id == id) {
                item.text = value
            }
            return item
        })
        setTasks(newTask)
        setEdit(null)

    }

    return (
        <div>

            <ul className={"mt-3 list-group list-group-flush"}>

                {
                    filter.map( item => (
                        <div key={item.id} className={s.li}>
                            {
                                edit == item.id ?
                                    <div className={s.e_form}>
                                   <Form>
                                    <FormControl value={value} onChange={(e)=>setValue(e.target.value)}/>
                                   </Form>
                                    </div>
                                        :
                                <div>{item.title}</div>
                            }
                            {
                                edit == item.id

                                    ?

                                    <div className={s.apply}>
                                    <i className={"fas fa-download"} onClick={ ()=>saveTask(item.id)}></i>
                                    </div>

                                    :

                                <div className={s.b_block}>
                                    <div className={s.check}>
                                        <i className={ item.status ? "far fa-check-circle" : "fas fa-history"} onClick={ () => completeTask(item.id)}>
                                        </i>
                                    </div>

                                        <div className={s.text}>
                                            <li className={ !item.status ? s.completed : '' }>{item.text}</li>
                                        </div>

                                    <div className={s.edit}>
                                        <i className={"far fa-edit"} onClick={ () => editTask(item.id, item.text)}></i>
                                    </div>

                                    <div className={s.remove}>
                                        <i className={"far fa-trash-alt"} onClick={ () => deleteTask(item.id)}></i>
                                    </div>
                                </div>


                            }


                        </div>

                    ))
                }

            </ul>

            <div className={s.filter}>
            <ButtonGroup>
                <Button variant={"secondary"} onClick={ ()=>taskFilter('all')}>All</Button>
                <Button variant={"secondary"} onClick={ ()=>taskFilter(true)}>Active</Button>
                <Button variant={"secondary"} onClick={ ()=>taskFilter(false)}>Completed</Button>
            </ButtonGroup>
            </div>

        </div>

    );
}

export default TaskList;