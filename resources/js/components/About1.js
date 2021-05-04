import React,{useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Parallax, Background } from 'react-parallax'
import about1Img from './about1.jpg'
import { Container, Row, Col } from 'react-grid-system'
import { Button } from 'bootstrap'

const useStyles = makeStyles({
    About_container: {
        display:'inline-block',
        
        opacity: '1',
        position: 'relative',
        flexDirection: 'row',
        width:'100%',
        margin:'0',
    },
    About_img: {
        position: 'relative',
        maxwidth: 'auto',
        height: '54vh',
    },
    About_title: {
        width: '100%',
        color: 'rgba(0,0,0,1)',
        position: 'relative',
        fontFamily: 'Arial Black',
        fontWeight: 'Bold',
        fontSize: '40px',
        opacity: '1',
        textAlign: 'left',
        paddingLeft: '20px',
        
    },
    About_text :{
        width: '100%',
        position: 'relative',
        fontFamily: 'Arial',
        fontWeight: 'Regular',
        fontSize: '20px',
        opacity: '1',
        textAlign: 'justify',
        textJustify: 'inter-word',
        marginTop: '2vh',
        height: '30vh',
        paddingLeft: '20px',
        overflow:'auto',
        
        
    },
    About_line:{
        borderBottom: '23px ridge #ED2E20',
        width:'75%',
        height: '5%',
        top: '100px',
        left: '950px',
        margin: '0px'
    },
    About_left:{
        
        position:'absolute',
        background: 'white',
        
    },
    About_right:{
        
        background: 'white',
        position:'absolute',
        
        
    },
    About_row:{
        margin: '80px'
    }

  });


const About1 = ({title='default'}) => {

    const [word, setWord] = useState('');

    const classes = useStyles();
    return (
        <div>
            <Container fluid className={classes.About_container}>
                <Row fluid='md' className={classes.About_row}>
                    <Col md={7} className={classes.About_left}>
                        <Parallax className={classes.About_img} bgImage={about1Img} strength={600}>        
                        </Parallax>
                    </Col>
                    <Col md={5} className={classes.About_right}>
                            <Row className={classes.About_title} style={{marginTop: '30px'}}>ACADEMIC</Row>
                            <Row className={classes.About_title} style={{top: '' }}>EXCELLENCE<hr className={classes.About_line} ></hr></Row>
                            <Row className={classes.About_text}> Eu consequat sunt consectetur eu reprehenderit labore. Sint do nulla dolore irure aliquip. Minim quis veniam nulla cillum consequat quis ea Lorem sit Lorem officia. Reprehenderit amet do laboris commodo consequat fugiat pariatur id sit dolore velit. Nisi do enim dolore reprehenderit do dolor. Eu irure sint duis ut do elit mollit veniam esse.</Row>  
                    </Col>
                </Row>
            </Container>
            <Container fluid className={classes.About_container}>
                <Row fluid='md' className={classes.About_row}>
                    <Col md={5} className={classes.About_left}>
                            <Row className={classes.About_title} style={{marginTop: '30px'}}>ACADEMIC</Row>
                            <Row className={classes.About_title} style={{top: ''}}>{title}<hr className={classes.About_line}  align='right'></hr></Row>
                            <Row className={classes.About_text}>  Eu consequat sunt consectetur eu reprehenderit labore. Sint do nulla dolore irure aliquip. Minim quis veniam nulla cillum consequat quis ea Lorem sit Lorem officia. Reprehenderit amet do laboris commodo consequat fugiat pariatur id sit dolore velit. Nisi do enim dolore reprehenderit do dolor. Eu irure sint duis ut do elit mollit veniam esse.</Row>
                    </Col>
                    <Col md={7} className={classes.About_right}>
                    <Parallax className={classes.About_img} bgImage={about1Img} strength={600}>        
                        </Parallax>
                    </Col>
                </Row>
            </Container>
            <Container fluid className={classes.About_container}>
                <Row fluid='md' className={classes.About_row}>
                    <Col md={7} className={classes.About_left}>
                        <Parallax className={classes.About_img} bgImage={about1Img} strength={600}>        
                        </Parallax>
                    </Col>
                    <Col md={5} className={classes.About_right}>
                        <Row className={classes.About_title} style={{marginTop: '30px'}}>{word}</Row>
                        <Row className={classes.About_title} style={{top: ''}}>EXCELLENCE<hr className={classes.About_line}></hr></Row>
                        <Row className={classes.About_text}>Laboris veniam magna labore minim non qui dolore incididunt non minim fugiat nostrud amet. Exercitation officia incididunt qui occaecat pariatur non nostrud pariatur qui ad id. Exercitation labore id eu quis veniam. Tempor non officia aliqua amet sunt enim pariatur ad ad tempor. Eu consequat sunt consectetur eu reprehenderit labore. Sint do nulla dolore irure aliquip. Minim quis veniam nulla cillum consequat quis ea Lorem sit Lorem officia. Reprehenderit amet do laboris commodo consequat fugiat pariatur id sit dolore velit. Nisi do enim dolore reprehenderit do dolor. Eu irure sint duis ut do elit mollit veniam esse.</Row>
                    </Col>
                </Row>
            </Container>
            <input onChange={event=> setWord(event.target.value)}></input>
        </div>
    )
}

export default About1
