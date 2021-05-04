import {Nav, NavDropdown, Button, Container, Row, Col, Modal} from 'react-bootstrap/'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Logo from './assets/img/banner.png';
import React, { useState, useCallback, useEffect } from "react";

const loginForm = () => {
    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')
    const [show, setshow] = useState(false)

    const handleClose = () => setshow(false);
    const handleShow = () => setshow(true);

    function onSubmitButton(e){
        e.preventDefault();
        console.log(name);
    }
    

    return (
        <div >
            <Button variant="primary" onClick={handleShow}>Login</Button>

            <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Login
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onSubmitButton}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default loginForm
