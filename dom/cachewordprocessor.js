function getLocalStorage() {
	if(typeof localStorage == "object") 
	{
		return localStorage;
	} else if (typeof globalStorage == "object")
	{
		return globalStorage[location.host];
	} else {
		throw new Error("Local storage not available");
	}
}

function ProcessorDocument(title)
{
	this.title = title;
	this.documentBody = null;
}

ProcessorDocument.prototype = {
	constructor: ProcessorDocument,
	save : function(element) {
		this.documentBody = element.outerHTML;
		getLocalStorage().setItem(this.title, this.documentBody);
	},
	get : function(title) {
		var myvar = getLocalStorage()[title];
		this.title = title;
		this.documentBody = myvar;
		return myvar.toString();
	},
	remove : function(title) {
		getLocalStorge().setItem(title, null);
	}
};

