/*
	Forgettable JS v1.0
	Curtis Rodgers
	https://github.com/C-Rodg/Forgettable-JS
	License: MIT
*/

const forget = {
	get : (url, async, callback) => {
		let request = new XMLHttpRequest();
		request.open('GET', url, async);
		request.onreadystatechange = function(){
			if(this.status > 200 && this.status < 400) {
				callback(request.responseText);
			}
		}
		request.send();
		return request;
	},
	post : (url, data, async, callback) => {
		let request = new XMLHttpRequest();
		request.open('POST', url, async);
		request.onreadystatechange = function() {
			if(this.status > 200 && this.status < 400) {
				callback(request.responseText);
			}
		}
		request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
		request.send(data);
	}
};

export default forget;