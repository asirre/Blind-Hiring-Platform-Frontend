import { CognitoUserPool } from "amazon-cognito-identity-js";


const poolData = {
  UserPoolId: REACT_APP_USER_POOL_ID,
  ClientId: REACT_APP_POOL_CLIENT_ID
}

export default new CognitoUserPool(poolData);