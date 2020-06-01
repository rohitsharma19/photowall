import React, {Component} from 'react';
import Photowall from './Photowall';
//import Title from './Title';
import AddPhoto from './AddPhoto';
import {Route, Link} from 'react-router-dom';
//import { connect } from 'react-redux';
//import { removePost } from '../redux/actions';
import Single from './Single';

class Main extends Component {

    state = {
      loading : true
    }

    componentDidMount(){
      this.props.startLoadingPosts().then(()=>{
        this.setState({loading: false});
      });
      this.props.startLoadingComments();
    }

    render(){
      //console.log("Inside render");  
      //console.log(this.props.posts);
      return ( 
      <div>
        <h1><Link to="/"> Photowall </Link></h1>
        <Route exact path="/" render={() => (
            <div>
                <Photowall {...this.props}/>
            </div>
        )}/>
        <Route exact path="/AddPhoto" render={(history) => (
            <AddPhoto {...this.props}/>
        )}/>
        <Route path="/single/:id" render={(params) => (
            <Single loading={this.state.loading} {...this.props} {...params}/>
        )

        }/>

      </div> 
      )
    }
  }

export default Main;  