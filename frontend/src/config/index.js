export const isTest=false;

//region:the user pool/s3 region
//IdentityPoolId: identity pool id
// UserPoolId: user pool id
// ClientId: app client id (under the user pool)
export const Cognito={
    region: 'us-east-2',
    IdentityPoolId: 'us-east-2:dc4a6ebf-14a7-4006-a359-db87748b7645',
    UserPoolId: 'us-east-2_pA0nTIDao',
    ClientId: '3mnffd5sfb9o60e0qhk4162dl0',
}

//bucketName: s3 bucket name
//apiEndPoint: api gateway endpoint url
export const S3={
    bucketName:'cloud-image-20170101',
    apiEndPoint:'https://qb2g376w1d.execute-api.us-east-2.amazonaws.com/test/s3'
}
