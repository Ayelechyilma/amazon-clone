import axios from "axios";

const axiosInstance = axios.create({
	//local instance of firebase function
	// baseURL: "http://127.0.0.1:5001/clone-881d3/us-central1/api",

	//deployed version of firebase function
	baseURL: "https://api-ee5wgvvcia-uc.a.run.app/",

	//deployed version of amazon server on render.com
	// baseURL: "https://amazon-api-deploy1-msg0.onrender.com/",
});

export { axiosInstance };
