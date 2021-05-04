import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { Container, Row, Col } from 'react-grid-system'


const useStyles = makeStyles({
    Video: {
        
        opacity: '0.5',
        position: 'relative',
        marginBottom:'0',
        width:'100%',
        objectFit: 'cover',
        position:'realtive'
        
      
    },
    Motto : {
        float:'left' , 
        position:'absolute',
        fontSize: '100px',
        lineHeight: '80px',
        position:'relative'
        
    },
    MottoDiv:{
        top:'500px',
        left:'10vw',
        width:'30vw',
        height:'30vh',
        position:'absolute',
        float:'right',
        zIndex:'20',
        
    }
  });


const VideoIndex = () => {
    const classes = useStyles();
    return (
        <div >
            <div className={classes.MottoDiv}>
                <h1 className={classes.Motto} >SCIENTIA</h1>
                <h1 className={classes.Motto} >VIRTUS</h1>
                <h1 className={classes.Motto} >DEVOTIO</h1>
            </div>
            
            <video className={classes.Video} autoPlay={true} width="100%" height="840px" muted>
                <source src="indexVid.mp4" type="video/mp4"></source>
                Your browser does not support the video tag.
            </video>
            
		</div>
    )
}

export default VideoIndex
