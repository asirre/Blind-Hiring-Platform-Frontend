import { CognitoUserPool } from "amazon-cognito-identity-js";


const poolData = {
  UserPoolId: 'eu-west-1_ly7Ew3uKn',
  ClientId: '48ocmmdsbd6ha1d8pbf27jgdei'
}

export default new CognitoUserPool(poolData);