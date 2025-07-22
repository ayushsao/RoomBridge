import dotenv from 'dotenv';

dotenv.config();
const sendTokenResponse = (user, statusCode, res) => {
   //generating token
    const token = user.getSignedJwtToken();
    
    const cookieExpiresIn = parseInt(process.env.JWT_COOKIE_EXPIRES_IN) || 7;
  
    res.cookie('token', token, {
      expires: new Date(Date.now() + cookieExpiresIn * 24 * 60 * 60 * 1000), 
      httpOnly: true, 
      secure: process.env.NODE_ENV === 'PRODUCTION'
    });
  
    user.password = undefined;
  
    res.status(statusCode).json({
      success: true,
      token,
      data: {
        user
      }
    });
  };
  
  export default sendTokenResponse;
  