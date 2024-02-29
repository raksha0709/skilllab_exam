const Login = () => {
    const handleGoogleLogin = () => {
      
    };
  
    const handleFacebookLogin = () => {
      
    };
  
    return (
      <div>
        <h2>Login</h2>
        <GoogleLoginButton onClick={handleGoogleLogin} />
        <FacebookLoginButton onClick={handleFacebookLogin} />
      </div>
    );
  };
  
  export default Login;