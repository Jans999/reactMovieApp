import React, { Component } from 'react';
import '../App.css';

class ErrorBoundary extends Component {

    state = {
        hasError: false
    }

    componentDidCatchError() {
        this.setState( {hasError: true} );
    }
    
    render() {
        if (this.state.hasError) {
            return <h2>Oh no! Something went wrong...</h2>
        } else {
            return this.props.children
        }
    }
}

export default ErrorBoundary;