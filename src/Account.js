import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from './views/UserPool';

const AccountContext = createContext();

const Account = (props) => {

  const getSession = async() => {
    return await new Promise((resolve,reject)=> {
      const user = Pool.getCurrentUser();
      if(user){
        user.getSession(async (err, session) => {
          if (err){
            reject();
          }
          else {
            resolve(session);
            // const attributes = await new Promise((resolve,reject) =>{
            //   user.getUserAttributes((err,attributes) => {
            //     if (err)
            //     {
            //       reject(err);
            //     }
            //     else{
            //       const results = {};
                  
            //       for (let att of attributes) {
            //         const {Name, Value} = att;
            //         results[Name] = Value;
            //       }

            //       resolve(results);
            //     }
            //   });
            // });
          }
        })
      }
      else{
        reject();
      }
    });
   };

  const authenticate = async (Username,Password) => {
    return await new Promise((resolve,reject) => {
      
    const user = new CognitoUser({
        Username,
        Pool
    });
  
    const authdetails = new AuthenticationDetails({
        Username,
        Password
    });
  
    user.authenticateUser(authdetails, {
        onSuccess: (data) => {
            console.log("Success: ", data);
            resolve(data);
        },
        onFailure: (err) => {
            console.log("Failure: ", err);
            reject(err);
        },
        newPasswordRequired: (data) => {
            console.log("new Pass required ", data);
            resolve(data);
        }
    });
    });
  };


  const signout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  }

  return (
    <AccountContext.Provider value={{ authenticate, getSession, signout }}>
      {props.children}
    </AccountContext.Provider>
  )

};

export {Account,AccountContext};