fetch('https://www.arbeitnow.com/api/job-board-api')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));