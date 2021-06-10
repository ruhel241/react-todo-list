import React, { Component } from "react";
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { green } from '@material-ui/core/colors';
import IconButton from '@material-ui/core/IconButton';
class ToDoList extends Component {
    render(){
        const { 
            classes, 
            items, 
            clearItems, 
            handlerEditItem,
            handleDeleteItem 
        } = this.props;
       
        return (
            <React.Fragment>
                { items.length > 0 && (
                    <div>
                        <h1 className={classes.title}> Todo List </h1>
                        <Card className={classes.todoForm} style={{padding: '50px'}}> 
                            <TableContainer component={Paper}>
                                <Table className="" aria-label="simple table">
                                    <TableBody>
                                        {items.reverse().map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell component="th" scope="row">
                                                    {item.title}
                                                </TableCell>
                                                
                                                <TableCell align="right">
                                                    <IconButton 
                                                        style={{color: green[500]}} 
                                                        aria-label="edit"
                                                        onClick={()=> handlerEditItem(item.id)}
                                                    >
                                                        <EditIcon/>
                                                    </IconButton>
                                                    <IconButton 
                                                        color="secondary" 
                                                        aria-label="delete"
                                                        onClick={() => handleDeleteItem(item.id)}
                                                    >
                                                        <DeleteIcon/>
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                    
                            <Button 
                                onClick={clearItems} 
                                variant="contained" 
                                color="secondary" 
                                style={{width:"66%", marginTop:"30px"}}
                            >
                                CLEAR LIST
                            </Button>
                        </Card>
                    </div>
                )}
            </React.Fragment>
        )
    }
}
export default ToDoList;