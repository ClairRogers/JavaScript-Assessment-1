//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
me.name = 'Clair Rogers'
me.age = 25
me['hair color'] = 'Brown'



//2. Iterate over the object to console.log the propery or key names. 

console.log(Object.getOwnPropertyNames(me))