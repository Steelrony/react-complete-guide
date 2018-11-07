import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Auxi from '../../../hoc/Auxi';

class Person extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props);            
    }
    
    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }
    
    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if(this.props.position === 0)
        this.inputElement.focus();
    }

    componentWillReceiveProps(nextProps) {
        console.log(' [UPDATE Persons.js] Inside componentWillReceiveProps', nextProps);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE Persons.js] Inside shouldComponentUpdate', nextProps, nextState);
    //     return nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked;
    //     // return false;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Person.js] Inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Person.js] Inside componentDidUpdate');
    }

    render() {
        console.log('[Person.js] Inside render()');
        return (
            <Auxi>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input 
                    ref={(inp) => {this.inputElement = inp}}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}/>
            </Auxi>
        )    
        // return [
        //     <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
        //     <p>{this.props.children}</p>,
        //     <input type="text" onChange={this.props.changed} value={this.props.name}/>
        // ]           
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);
