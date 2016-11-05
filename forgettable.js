/*
	Forgettable JS v1.0
	Curtis Rodgers
	https://github.com/C-Rodg/Forgettable-JS
	License: MIT
*/

// get Element method
function get(selector){
	// Call get function so `this` refers to get
	if(!(this instanceof get)){
		return new get(selector);
	}

	let elements = document.querySelectorAll(selector);
	if(elements.length === 1){
		this.element = elements[0];
	} else {
		this.element = elements;
	}
	return this;
};

// Method to select single node
get.prototype.select = function(node) {
	if(this.element.length > 0){
		this.element = this.element[node];
	}
	return this;
};

// Select single node


// Extend method
get.prototype.get = function(url, async, callback){
	let request = new XMLHttpRequest();
	request.open('GET', url, async);
	request.onreadystatechange = function() {
		console.log(this.status);
		callback(request.responseText);
	};
	request.send();
	return request;
};


// Don't extend this way -- NEEDS TO BE REMOVED
const forget = {
	// AJAX 
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
		return request;
	},

	// ANIMATIONS


	// UTILITIES
	removeClass : (element, class) => {

	}
};

export default forget;