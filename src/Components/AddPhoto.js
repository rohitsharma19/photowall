import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

class AddPhoto extends Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const post = {
            id: Number(new Date()),
            description: event.target.elements.description.value,
            imageLink: event.target.elements.link.value
        }
        this.props.startAddingPost(post)//   .addPost(post);
        this.props.history.push('/');
    }

    render(){
        return (
        <div>
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="link" name="link"/>
                    <input type="text" placeholder="Description" name="description"/>
                    <button>Post</button>
                </form>
            </div>
        </div>
        )
    }
}
//export default AddPhoto
export default withRouter(AddPhoto)
