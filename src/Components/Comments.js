import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'


class Comments extends Component {
    
    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        ///console.log("handleSubmit")
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        //this.props.addComment(comment, this.props.id);
        this.props.startAddingComment(comment, this.props.id);
        event.target.elements.comment.value='';
    }
    
    render(){
        console.log(this.props.comments)
        return (
            
            <div className="comment">

                <form className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Comment" name="comment"/>
                    <input type="submit" hidden/>
                </form>
                {
                    this.props.comments.map((comment,index) => {
                        return (
                            <p key={index}>{comment}</p>
                        )
                    })
                }
            </div>
        )
    }
}

export default withRouter(Comments)