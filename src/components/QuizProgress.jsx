import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
          marginTop: theme.spacing(2),
        },        
    },
}));

function QuizProgress(props) {
    const classes = useStyles();
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
      setCompleted(props.currentNumber * 10);
    }, [props.currentNumber]);
    
    return (
        <div className="container-fluid">
            <div className={classes.root}>
                <LinearProgress variant="determinate" value={completed}/>
            </div>
        </div>
    )
}

export default QuizProgress;