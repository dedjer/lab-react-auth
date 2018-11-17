import React from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";

const responseGoogle = response => {
	console.log(response);
};

const responseFacebook = response => {
	console.log(response);
};

const LoginPage = () => {
	return (
		<div className="span-12">
			<div>
				<GoogleLogin
					clientId=""
					buttonText="Login"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
				/>
			</div>
			<br />
			<div>
				<FacebookLogin
					appId=""
					autoLoad={true}
					fields="name,email,picture"
					callback={responseFacebook}
				/>
			</div>
		</div>
	);
};

export default LoginPage;
