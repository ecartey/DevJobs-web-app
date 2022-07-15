const section = document.querySelector('section')

for (const job of jobs){
    const block1 = document.createElement('div');
    const image = document.createElement('div');
    const logo = document.createElement('img');
    const sblock = document.createElement('div');
    const label1 = document.createElement('label');
    const label2 = document.createElement('label');
    const link = document.createElement('a');
    const position = document.createElement('h2');
    const label3 = document.createElement('label');
    const location = document.createElement('p');

	label1.textContent = job.postedAt
	label1.style.color = '#6E8098'
	label2.textContent = job.contract
	label2.style.color = '#6E8098'
	label2.style.marginLeft = '20px'
	label3.textContent = job.company
	label3.style.color = '#6E8098'
	position.textContent = job.position
	location.textContent = job.location
	logo.src = job.logo
	logo.style.marginTop = '15px'
	image.style.backgroundColor = job.logoBackground
	image.style.width = '50px'
	image.style.height = '50px'
	image.style.borderRadius = '15px'
	image.style.marginLeft = '10px'
	image.style.marginTop = '-25px'
	image.style.textAlign = 'center'
    sblock.style.marginTop = '24px'
    sblock.style.marginLeft = '10px'
    block1.style.backgroundColor = 'white'
    block1.style.borderRadius = '6px'
    block1.className = 'gridBlock'

	link.setAttribute("href", job.jobinfo);
	link.setAttribute("target", "blank");

	section.appendChild(block1)
	block1.appendChild(image)
	block1.appendChild(sblock)
	block1.appendChild(location)
	image.appendChild(logo)
	sblock.appendChild(label1)
	sblock.appendChild(label2)
	sblock.appendChild(link)
	sblock.appendChild(label3)
	link.appendChild(position)

}

$(document).ready(function(){
  $(".gridBlock").hide();
  $(".gridBlock").slice(0, 12).show();
  $("#load-button").on("click", function(e){
    e.preventDefault();
    $(".gridBlock:hidden").slice(0, 3).show();
    if($(".content:hidden").length == 0) {
      $("#load-button").text("No Content");
    }
  });
  
})


var search = document.querySelector('#search-button');
var checkbox = document.querySelector('#Full-time');
checkbox.addEventListener('change',function() {
    	this.value = this.checked ? 'Full Time': 'on';
})
search.onclick = filter_jobs
function filter_jobs() {

	var filterInput = document.querySelector('#Filter-input').value
    var locationInput = document.querySelector('#location-input').value
    var fullTime = document.querySelector('#Full-time').value
    
    console.log(fullTime)
    if ((filterInput ==='') && (locationInput ==='') && (fullTime==='on')) { 
    section.innerHTML = '';
    for (const job of jobs){
    const block1 = document.createElement('div');
    const image = document.createElement('div');
    const logo = document.createElement('img');
    const sblock = document.createElement('div');
    const label1 = document.createElement('label');
    const label2 = document.createElement('label');
    const link = document.createElement('a');
    const position = document.createElement('h2');
    const label3 = document.createElement('label');
    const location = document.createElement('p');

	label1.textContent = job.postedAt
	label1.style.color = '#6E8098'
	label2.textContent = job.contract
	label2.style.color = '#6E8098'
	label2.style.marginLeft = '20px'
	label3.textContent = job.company
	label3.style.color = '#6E8098'
	position.textContent = job.position
	location.textContent = job.location
	logo.src = job.logo
	logo.style.marginTop = '15px'
	image.style.backgroundColor = job.logoBackground
	image.style.width = '50px'
	image.style.height = '50px'
	image.style.borderRadius = '15px'
	image.style.marginLeft = '10px'
	image.style.marginTop = '-25px'
	image.style.textAlign = 'center'
    sblock.style.marginTop = '24px'
    sblock.style.marginLeft = '10px'
    block1.style.backgroundColor = 'white'
    if (oval.style.marginLeft=='30px') {block1.style.backgroundColor = '#19202D';position.style.color='white'}
    block1.style.borderRadius = '6px'
    block1.className = 'gridBlock'

	link.setAttribute("href", job.jobinfo);
	link.setAttribute("target", "blank");

	section.appendChild(block1)
	block1.appendChild(image)
	block1.appendChild(sblock)
	block1.appendChild(location)
	image.appendChild(logo)
	sblock.appendChild(label1)
	sblock.appendChild(label2)
	sblock.appendChild(link)
	sblock.appendChild(label3)
	link.appendChild(position)

    }

    } else {section.innerHTML = ''}
  
	
	const filtered_jobs = jobs.filter(job => {
		return ((job.company.toUpperCase() === filterInput.toUpperCase()&&job.contract===fullTime&&job.location.toUpperCase()===locationInput.toUpperCase()) || (job.position.toUpperCase()===filterInput.toUpperCase()&&job.contract===fullTime&&job.location.toUpperCase()===locationInput.toUpperCase()))
	})

	for (const job of filtered_jobs){
  
    const block1 = document.createElement('div');
    const image = document.createElement('div');
    const logo = document.createElement('img');
    const sblock = document.createElement('div');
    const label1 = document.createElement('label');
    const label2 = document.createElement('label');
    const link = document.createElement('a');
    const position = document.createElement('h2');
    const label3 = document.createElement('label');
    const location = document.createElement('p');



	label1.textContent = job.postedAt
	label1.style.color = '#6E8098'
	label2.textContent = job.contract
	label2.style.color = '#6E8098'
	label2.style.marginLeft = '20px'
	label3.textContent = job.company
	label3.style.color = '#6E8098'
	position.textContent = job.position
	location.textContent = job.location
	logo.src = job.logo
	logo.style.marginTop = '15px'
	image.style.backgroundColor = job.logoBackground
	image.style.width = '50px'
	image.style.height = '50px'
	image.style.borderRadius = '15px'
	image.style.marginLeft = '10px'
	image.style.marginTop = '-25px'
	image.style.textAlign = 'center'
    sblock.style.marginTop = '24px'
    sblock.style.marginLeft = '10px'
    block1.style.backgroundColor = 'white'
    if (oval.style.marginLeft=='30px') {block1.style.backgroundColor = '#19202D';position.style.color='white'}
    block1.style.borderRadius = '6px'
    block1.className = 'gridBlock'

	link.setAttribute("href", job.jobinfo);
	link.setAttribute("target", "blank");

	section.appendChild(block1)
	block1.appendChild(image)
	block1.appendChild(sblock)
	block1.appendChild(location)
	image.appendChild(logo)
	sblock.appendChild(label1)
	sblock.appendChild(label2)
	sblock.appendChild(link)
	sblock.appendChild(label3)
	link.appendChild(position)

    }

    


}



var oval = document.querySelector('#oval')
var control = false;
oval.onclick = nightmode


function nightmode() {
	if (control) {
oval.style.marginLeft = '4px'
document.querySelectorAll('.gridBlock')[0].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[1].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[2].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[3].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[4].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[5].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[6].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[7].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[8].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[9].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[10].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[11].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[12].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[13].style.backgroundColor = 'white'
document.querySelectorAll('.gridBlock')[14].style.backgroundColor = 'white'
document.querySelector('body').style.backgroundColor = ''
document.querySelector('#Filter-bar').style.backgroundColor = ''
document.querySelector('#location-bar').style.backgroundColor = ''
document.querySelector('#search').style.backgroundColor = ''
document.getElementById('search-bar').style.backgroundColor = ''
document.querySelector('#Filter-input').style.backgroundColor = ''
document.querySelector('#Filter-input').style.color = ''
document.querySelector('#location-input').style.color = ''
document.querySelector('#location-input').style.backgroundColor = ''
document.querySelectorAll('h2')[0].style.color = ''
document.querySelectorAll('h2')[1].style.color = ''
document.querySelectorAll('h2')[2].style.color = ''
document.querySelectorAll('h2')[3].style.color = ''
document.querySelectorAll('h2')[4].style.color = ''
document.querySelectorAll('h2')[5].style.color = ''
document.querySelectorAll('h2')[6].style.color = ''
document.querySelectorAll('h2')[7].style.color = ''
document.querySelectorAll('h2')[8].style.color = ''
document.querySelectorAll('h2')[9].style.color = ''
document.querySelectorAll('h2')[10].style.color = ''
document.querySelectorAll('h2')[11].style.color = ''
document.querySelectorAll('h2')[12].style.color = ''
document.querySelectorAll('h2')[13].style.color = ''
document.querySelectorAll('h2')[14].style.color = ''
document.querySelector('#top-image').style.border = ''
document.querySelector('#fulltimetxt').style.color = ''

control = !control
	} else {
		oval.style.marginLeft = '30px'
document.querySelectorAll('.gridBlock')[0].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[1].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[2].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[3].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[4].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[5].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[6].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[7].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[8].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[9].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[10].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[11].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[12].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[13].style.backgroundColor = '#19202D'
document.querySelectorAll('.gridBlock')[14].style.backgroundColor = '#19202D'
document.querySelector('body').style.backgroundColor = '#121721'
document.querySelector('#Filter-bar').style.backgroundColor = '#19202D'
document.querySelector('#location-bar').style.backgroundColor = '#19202D'
document.querySelector('#search').style.backgroundColor = '#19202D'
document.getElementById('search-bar').style.backgroundColor = 'grey'
document.querySelector('#Filter-input').style.backgroundColor = '#19202D'
document.querySelector('#Filter-input').style.color = 'white'
document.querySelector('#location-input').style.color = 'white'
document.querySelector('#location-input').style.backgroundColor = '#19202D'
document.querySelectorAll('h2')[0].style.color = 'white'
document.querySelectorAll('h2')[1].style.color = 'white'
document.querySelectorAll('h2')[2].style.color = 'white'
document.querySelectorAll('h2')[3].style.color = 'white'
document.querySelectorAll('h2')[4].style.color = 'white'
document.querySelectorAll('h2')[5].style.color = 'white'
document.querySelectorAll('h2')[6].style.color = 'white'
document.querySelectorAll('h2')[7].style.color = 'white'
document.querySelectorAll('h2')[8].style.color = 'white'
document.querySelectorAll('h2')[9].style.color = 'white'
document.querySelectorAll('h2')[10].style.color = 'white'
document.querySelectorAll('h2')[11].style.color = 'white'
document.querySelectorAll('h2')[12].style.color = 'white'
document.querySelectorAll('h2')[13].style.color = 'white'
document.querySelectorAll('h2')[14].style.color = 'white'
document.querySelector('#fulltimetxt').style.color = 'white'
$("h2").hover(function(){
  $(this).css("color", "#6E8098");
  }, function(){
  $(this).css("color", "white");
});

document.querySelector('#top-image').style.border = '#121721 solid 1px'
control = !control
	}


}


var filter = document.querySelector('#filter-logo')
var control1 = true;
filter.onclick = displaymode

function displaymode() {
	if (control1) {

section.style.marginTop = '350px'

control1 = !control1

	} else {
section.style.marginTop = ''

control1 = !control1
}
}

