export function logIn(){
	FB.login(response => {

		if(response.status === 'connected'){
			const context = this;
			context.setState({ user: response});
			window.token = response.authResponse.userID;
			
			FB.api('/me', 'get', response => {
				context.setState({ userName : response.name, buttonAction : 'btn-danger'});
			})
		}

	}, {scope: 'public_profile,email,publish_actions'});
}
export function logOut(){
	FB.logout(response => {

		if(response.status === 'unknown'){
			this.setState({ user : null, userName: null, buttonAction : 'btn-primary'});
		}
  	});
}
export function publishPost(messageContent){
		
		FB.api('/me/feed', 'post', {message: messageContent})
}