import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import { lightBlue } from '@material-ui/core/colors';

class ToDoInput extends Component {
    render() {
        const {
            item,
            classes,
            changeHaldler,
            handleSubmit,
            editItem
        } = this.props;
        
        return (
            <React.Fragment>
                <form onSubmit={handleSubmit} noValidate autoComplete="off">
                    <h1 className={classes.title}> Todo Input </h1>
                    <Card className={classes.todoForm} style={{padding: '50px'}}> 
                        <TextField 
                            name="title"
                            id="outlined-basic" 
                            label="Outlined" 
                            variant="outlined"
                            className="title-field"
                            value={item}
                            onChange={changeHaldler}
                        />
                        <Button 
                            type="submit" 
                            variant="contained"
                            className="input-btn"
                            disabled={!item ? true : false}
                            style={{
                                width:"66%", 
                                marginTop:"30px",
                                color: "#ffff",
                                backgroundColor: !editItem ? lightBlue[700] : green[500]
                            }}
                            >
                           {!editItem ? "ADD ITEM" : "EDIT ITEM"} 
                        </Button>
                    </Card>
                </form>
            </React.Fragment>
        )
    }
}
export default ToDoInput;