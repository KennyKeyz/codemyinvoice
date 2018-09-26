import React from 'react';
import {Link} from 'react-router-3';
import {observer,inject} from 'mobx-react';
import classNames from 'classnames';
import styles from './index.sass';

@inject('user') @observer
class Member extends React.Component {
  signOut = (e) =>{

    e.preventDefault();
    const {user}= this.props;
    user.destroySession();
  }


render(){
  return(
    <ul className='pure-menu-list'>


        <li className='pure-menu-item'>
        <Link to='/users/sign_in' className={classNames('pure-menu-link',styles.links)}>{this.props.user.email}</Link>
          </li>

            <li className='pure-menu-item'>
        <a href='#' onClick={this.signOut} className={classNames('pure-menu-link',styles.links)}> Sign Out </a>
                 </li>

    </ul>
  );

}


}


export default Member;
