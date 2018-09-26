import React from 'react';

import {inject, observer} from 'mobx-react';

import {Link} from 'react-router-3';

import Page from 'components/Page';

import buttons from 'styles/buttons.sass';

@inject('user') @observer
class New extends React.PureComponent {

  submitForm = (e) => {
    e.preventDefault();
          const {user} = this.props;


          user.create(
             this.email.value,
             this.password.value,
             this.password_confirm.value,

          );

  }


render(){
  const extras = <Link to='/users/sign_in'> want to login? </Link>
  return(

      <Page.Auth title ="Sign Up" extras={extras}>

      <form className='pure-form pure-form-stacked ' onSubmit={this.submitForm}>
        <lable> Email </lable>
        <input type='email' ref={node => {this.email = node;}}
              placeholder ='email' className=' pure-input-1'  />
        <lable> Password </lable>
        <input type='password' ref={node => {this.password = node;}}
               className=' pure-input-1' placeholder='Password' />

               <lable> Confirm Password </lable>
               <input type='password' ref={node => {this.password_confirm = node;}}
                      className=' pure-input-1' placeholder='Password confirmation'/>

        <button className={`pure-button pure-input-1 ${buttons.base}`}>
           Sign Up
        </button>



      </form>

      </Page.Auth>

  );
}

}



export default New;
