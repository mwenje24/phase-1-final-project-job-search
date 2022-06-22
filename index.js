
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '541d5ec278msh2c7308071d52b0ep112ed4jsnd97653c22b83',
		'X-RapidAPI-Host': 'job-vacancies.p.rapidapi.com'
	}
};

let fetchData = async() => {
	let res = await fetch('https://job-vacancies.p.rapidapi.com/vacancies/jora', options)
	let data = await res.json()
	data.map((dataValue) =>{
		const jobType = document.querySelector('#categories ul');
		const li = document.createElement('li');
		li.innerHTML = dataValue.title;
		jobType.appendChild(li);
	});
}
document.addEventListener('DOMContentLoaded', function() {
	fetchData();
});