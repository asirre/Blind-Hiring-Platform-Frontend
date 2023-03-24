import { CognitoUserPool } from "amazon-cognito-identity-js";


const poolData = {
  UserPoolId: 'eu-west-1_ly7Ew3uKn',
  ClientId: '48ocmmdsbd6ha1d8pbf27jgdei'
}

let userPool = new CognitoUserPool(poolData);
export default userPool;