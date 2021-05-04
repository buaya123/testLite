import {Nav, NavDropdown, Button, Container, Row, Col, Modal} from 'react-bootstrap/'
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'
import axios from 'axios'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, BrowserRouter as Router , Redirect, useHistory } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Logo from './assets/img/banner.png';
import SoloLogo from './assets/img/logo.png'
import React, { useState, useCallback } from "react";


const useStyles = makeStyles((theme) => ({
    navbar: {
        width:'100%',
        position: 'absolute',
        zIndex: '10',
        background: ' white',
        top:'3vh',
        
    },

    Nav_opt: {
        height:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
    },


    logo: {
        alignItems: 'center',
        marginTop: '1vh',
        marginBottom: '1vh',
        width: '34vw',
        height: '9vh',
        objectFit: 'contain',
        
        
    },

    button: {
        alignItems: 'center',
        display: 'flex',
        height: '40px',
        marginTop: '20px',
    },
    login_row:{
        marginTop:'15px ',
        marginBottom:'15px ',
        width:'100%',
        display:'flex',
        flexDirection: 'row-reverse',
        position:'relative',
        height:'100%'
    },
    errNotice:{
        color:'red',
    }

  }));
 
//asdadsas

const NavbarComp = () => {
        const history = useHistory()
        const classes = useStyles();
        const [errNotice, seterrNotice] = useState("")

        const [idnum, setidnum] = useState('')
        const [pass, setpass] = useState('')

        const [show, setshow] = useState(false)
        const [hovering, setHovering] = useState(false);

        const handleMouseOver = useCallback(() => {
        setHovering(true);
        }, []);

        const handleMouseOut = useCallback(() => {
        setHovering(false);
        }, []);


        const handleClose = () => setshow(false);
        const handleShow = () => setshow(true);
        const headerss = {
            'Content-Type': 'text/plain;charset=utf-8',
            'Access-Control-Allow-Origin': true 
          }
        function onSubmitBtn(e){
            e.preventDefault();

            const json = JSON.stringify({
                id_num: idnum,
                pass: pass,
            });

            axios({
                method: 'post',
                url: 'login',
                data: json,
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                },
            }).then(function (response) {
                if(response.data.status == 1) history.push('/hello')
                
               seterrNotice(response.data.msg);
            }).catch(function (error) {
                console.log(error.response.data);
            });

            setidnum('')
            setpass('')
        }
    

    return (
        <div  className={classes.navbar} style={{opacity: hovering ? 1 : 0.5 , }} onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}>
            <Row style={{width:'100%'}}>
                <Col xs={5}>
                    <img src={ Logo } alt='logo' className={classes.logo}></img>
                </Col>
                <Col xs={5} style={{display:'flex',alignItems:'center'}}>
                    <Row style={{alignItems:'center',textAlign:'center',display:'flex',width:'100%',height:'100%'}}>        
                            <Col className={classes.Nav_opt}><Link  to='/'>Home</Link></Col>
                            <Col className={classes.Nav_opt}><Link to='/hello'>About</Link></Col>
                            <Col className={classes.Nav_opt}><Link to='/login'>Services</Link></Col>
                            <Col className={classes.Nav_opt}><Link to='#'>Contact Us</Link></Col>
                    </Row>
                </Col>
                <Col xs={2} style={{padding:'0',float:'right'}}>
                    <Row style={{alignItems:'center',textAlign:'center',display:'flex',width:'100%',height:'100%',float:'right'}}>
                        <Col xs={6}>
                            <Button className={classes.Nav_opt} style={{ margin:'0' ,width:'6vw'}} variant="outline-primary" className={classes.button} ><span style={{width:'100%',height:'100%'}}>Enroll</span></Button>
                        </Col>
                        <Col xs={6} style={{paddingRight:'0',}}>
                            <Button className={classes.Nav_opt} style={{ margin:'0',width:'6vw'}} variant="outline-primary" className={classes.button} onClick={handleShow}><span style={{width:'100%',height:'100%'}}>Login</span></Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div >
                <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" style={{overflow:'scroll'}}>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                        Login
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="show-grid" style={{height:'300px'}}>
                        <Container>
                            <Row md={6} >
                                <div style={{textAlign:'center',display:'block',width:'100%',margin:'auto',textAlign:'center'}}>
                                    <img src={SoloLogo} alt='logo' style={{}}></img>
                                </div>            
                            </Row>
                            <Row>
                                <Col  md={6}>
                                </Col>
                                <Col  md={6}>
                                <span className={classes.errNotice}>{errNotice}</span>
                                </Col>
                                
                            </Row>
                            <Row md={3} className='login_text' style={{ margin:'20px'}}>                
                                <Col md={6} >
                                    <span style={{float:'right'}}>
                                        ID Number:
                                    </span>
                                </Col>
                                <Col md={6} >
                                    <span style={{float:'left'}}>
                                        <input type="text" name="id_num" value={idnum} onChange={e=>setidnum(e.target.value)} />
                                    </span>
                                </Col>  
                            </Row>
                            <Row md={3} className='login_text' style={{ margin:'20px'}}>
                                <Col md={6} >
                                    <span style={{float:'right'}}>
                                        Password:
                                    </span>
                                </Col>
                                <Col md={6} >
                                    <span style={{float:'left'}}>
                                        <input type="text" name="password" value={pass} onChange={e=>setpass(e.target.value)}></input>
                                    </span>
                                </Col>
                            </Row>
                        </Container>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={handleClose}>Close</Button>
                        <Button onClick={onSubmitBtn}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}

export default NavbarComp