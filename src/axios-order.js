import axios from 'axios';

const instances =axios.create(
	{ baseURL:'https://myburgerreact-855a3.firebaseio.com/' }
);
export default instances;