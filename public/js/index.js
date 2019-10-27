const postBtn = document.getElementById("send_post");
const getBtn = document.getElementById("send_get");

postBtn.addEventListener("click", sendPost);
getBtn.addEventListener("click", sendGet);

async function sendPost() {
	try {
		const url = '/post';
		const data = {
			some: 'data'
		};

		const response = await fetch(url, {
			method: 'POST',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const json = await response.json();
		console.log('Success: ', JSON.stringify(json));
	} catch (error) {
		console.error('Error: ', error);
	}
}
async function sendGet() {
	try {
		const url = '/get'

		const response = await fetch(url);

		const json = await response.json();
		console.log('Success: ', JSON.stringify(json));

	} catch (error) {
		console.error('Error: ', error);
	}
}
