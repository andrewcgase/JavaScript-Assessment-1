//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

me['name'] = 'Andrew Gase'
me.age=24
me['hair color'] = 'blond'

//2. Iterate over the object to console.log the propery or key names. 

for(var key in me){
	console.log(key)
}