/*
	Forgettable JS v1.0
	Curtis Rodgers
	https://github.com/C-Rodg/Forgettable-JS
	License: MIT
*/

// Get elements main function
function get(selector){
	// Call get function so `this` refers to get
	if(!(this instanceof get)){
		return new get(selector);
	}
	let elements = document.querySelectorAll(selector);
	this.element = elements;
	return this;
};

// Method to select single node
get.prototype.select = function(nodeNum) {
	if(this.element.length > 0){
		this.element = this.element[nodeNum];
	}
	return this;
};

// GET URL
get.prototype.get = function(url, callback){
	let request = new XMLHttpRequest();
	request.open('GET', url, true);
	request.onload= function() {
		if(this.status >= 200 && this.status < 400){
			callback(this.response);
		} else {
			callback(this)
		}
	};
	request.send();
	return request;
};

// Promise-based GET request
get.prototype.getPromise = function(url) {
	const promise = new Promise(function(resolve, reject) {
		let request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.onload = function() {
			if(this.status >= 200 && this.status < 400){
				resolve(this.response);
			} else {
				reject(this)
			}
		};
		request.onerror = function(err) {
			reject(this);
		};
		request.send();
	});
	return promise;
};

// POST URL
get.prototype.post = function(url, callback){
	let request = new XMLHttpRequest();
	request.open('POST', url, true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	request.onload = function() {
		if(this.status >= 200 && this.status < 400){
			callback(this.response);
		} else {
			callback(this)
		}
	};
	request.onerror = function() {
		callback(this);
	}
	request.send();
	return request;
};

// Promise-based POST request
get.prototype.postPromise = function(url) {
	let promise = new Promise(function(resolve, reject) {
		let request = new XMLHttpRequest();
		request.open('POST', url, true);
		request.setRequestHeader('Content-Type', 'application/x-www-form-url-encoded; charset=UTF-8');
		request.onload = function() {
			if(this.status >= 200 && this.status < 400){
				resolve(this.response);
			} else {
				reject(this)
			}
		};
		request.onerror = function() {
			reject(this);
		}
		request.send();
	});
	return promise;
}


//export default get;