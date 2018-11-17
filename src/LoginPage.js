import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

const responseGoogle = response => {
	console.log(response);
};

const responseFacebook = response => {
	console.log(response);
};

const Login = () => {
	return (
		<div className="span-12">
			<div>
				<GoogleLogin
					clientId="peaceful-basis-222804"
					buttonText="Login"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
				/>
			</div>
			<br />
			<div>
				<FacebookLogin
					appId="290228931607041"
					autoLoad={true}
					fields="name,email,picture"
					callback={responseFacebook}
				/>
			</div>
		</div>
	);
};

export default Login;
