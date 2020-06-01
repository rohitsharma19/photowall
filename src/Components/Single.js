import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render(){
        //console.log(this.props.comments);
        const {match, posts} = this.props;
        const id = Number(match.params.id);
        const post = posts.find((post) => post.id===id);
        const comments = this.props.comments[id] || []
        const index = this.props.posts.findIndex((post) => post.id === id)
        if(this.props.loading === true){
            return <div className="loader">...Loading </div>
        }
        else if(post){
            return (
                <div id="Single" className="single-photo">
                    <Photo post={post} {...this.props} index={index}/>
                    {/* <Comments addComment={this.props.addComment} comments={comments} id={id}/> */}
                    <Comments {...this.props} comments={comments} id={id}/>
                </div>
            )
        }
        else{
            return <h1>No Post Found...</h1>
        }
        
    }
}

export default withRouter(Single)