import React, {Component} from 'react';
import Photo from './Photo';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class Photowall extends Component {

    render(){
      
      //const posts =  this.props.posts;
      
      return(
        <div>
            {/* <button className="addIcon"></button> */}
            {/* <a className="addIcon" onClick={this.props.onNavigate} href="#AddPhoto"> </a> */}
            <Link className="addIcon" to="/AddPhoto"></Link>
            <div className="photoGrid">
            {this.props.posts
            .sort(function(x,y){
                return y.id - x.id
            })
            .map((post, index) => {
                return <Photo post={post} key={index} {...this.props} index={index}/>
            })}
            </div>
        </div>  
      );
    }
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,

};

export default Photowall;  