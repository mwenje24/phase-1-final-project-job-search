
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
	console.log(data)
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

function openJobAdvert(){
	document.getElementById("job-advert").style.display="block";
}
function closeJobAdvert(){
	document.getElementById("job-advert").style.display="none";
}
function formSubmision(){
	const form = document.querySelector('submitrequest')
	form.addEventListener('submit', (e) =>{
		e.preventDefault()
		return alert('Your rewuest has been submitted successfully')
	})
}

// document.getElementById("submitrequest")