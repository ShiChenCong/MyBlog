export default function find( type, classOrid) {
	switch (type) {
		case 'className':
			return document.getElementsByClassName(classOrid);

		case 'id':
			return document.getElementById(classOrid);

		case 'query':
			return document.querySelector(classOrid);

		case 'queryAll':
			return document.querySelectorAll(classOrid);

		default:
			return ''
	}
}
