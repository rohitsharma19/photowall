import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Photo extends Component {
    render(){
      //const post = this.props.post;
      return(
        
          <figure className="figure">
            <Link to={`/single/${this.props.post.id}`}><img className="photo" src = {this.props.post.imageLink} alt = {this.props.post.description}></img></Link>
            <figcaption><p>{this.props.post.description}</p></figcaption>
            <div className="button-container">
                <button onClick = { () => {
                    //this.props.onRemovePhoto(this.props.post);
                    //this.props.removePost(this.props.index);
                    this.props.startRemovingPost(this.props.index, this.props.post.id)
                    this.props.history.push('/');
                }}>Remove</button>

                <Link className="button" to={`/single/${this.props.post.id}`}>
                    <div className="comment-count">
                        <div className="speech-bubble"></div>
                        {this.props.comments[this.props.post.id] ? this.props.comments[this.props.post.id].length : 0}
                    </div>
                </Link>
            </div>
          </figure>
      );
    }
}

Photo.propTypes = {
    post: PropTypes.object.isRequired,

};

export default Photo;  