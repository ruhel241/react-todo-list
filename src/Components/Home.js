import React, { Component } from "react";
import ToDoList from './ToDoList';
import ToDoInput from './ToDoInput';
import Container from '@material-ui/core/Container';
import { withStyles } from "@material-ui/core/styles";
import { v4 as uuidv4 } from 'uuid';

const useStyles = theme => ({
    todoForm: {
       display: 'flex',
       alignItems: 'center',
       flexDirection: 'column'
    },
    title: {
        textAlign: "center"
    }
});

class Home extends Component {
    state = {
        items: [],
        item: '',
        id: uuidv4(),
        editItem: false
    };

    componentDidMount() {
        const getItems = JSON.parse(localStorage.getItem('react-todo-list-data')) || [];
        this.setState({
            items: getItems
        })
    }
    
    changeHaldler = (e) => {
        this.setState({
            item: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { 
            id: this.state.id,
            title: this.state.item
        };
        const updateItems = [...this.state.items, newItem]
        this.setState({
            items: updateItems,
            item: '',
            id: uuidv4(),
            editItem: false
        }, () => {
            localStorage.setItem('react-todo-list-data', JSON.stringify(this.state.items));
        })
    }

    clearItems = () => {
        this.setState({
            items: []
        },() => {
            localStorage.setItem('react-todo-list-data', JSON.stringify(this.state.items))
        })
    }
    
    handlerEditItem = (id) => {
       const filterItem =  this.state.items.filter(item => item.id !== id)
       const findItem = this.state.items.find(item => item.id === id);
       this.setState({
            items: filterItem,
            item: findItem.title,
            id: id,
            editItem: true
       }); 
    }

    handleDeleteItem = (id) => {
      const filterItem = this.state.items.filter(item => item.id !== id);
      this.setState({
        items: filterItem,
      },() => {
        localStorage.setItem('react-todo-list-data', JSON.stringify(this.state.items));
      })
    }
   
    render() {
        const {classes} = this.props;
      
        return (
            <React.Fragment>
                <Container style={{width: '50%'}}>
                    <ToDoInput 
                        classes={classes}
                        item={this.state.item}
                        editItem={this.state.editItem}
                        changeHaldler={this.changeHaldler}
                        handleSubmit={this.handleSubmit}
                    />
                    <ToDoList
                        classes={classes} 
                        items={this.state.items}
                        clearItems={this.clearItems}
                        handlerEditItem={this.handlerEditItem}
                        handleDeleteItem={this.handleDeleteItem}
                    />
                </Container>
            </React.Fragment>
        )
    }
}
export default withStyles(useStyles, { withTheme: true }) (Home)