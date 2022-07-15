var oval = document.querySelector('#oval')
var control = false;
oval.onclick = nightmode
function nightmode() {
	if (control) {
oval.style.marginLeft = '4px'
document.querySelector('#company-info').style.backgroundColor = ''
document.querySelector('#block1').style.backgroundColor = ''
document.querySelector('#main').style.backgroundColor = ''
document.querySelector('footer').style.backgroundColor = ''
document.querySelector('body').style.backgroundColor = ''
document.querySelector('#top-image').style.border = ''
document.querySelector('#post').style.color = ''
document.querySelector('#site_button').style.backgroundColor = ''
document.querySelector('#site_button').style.color = ''
document.querySelector('#text').style.color = ''
document.querySelectorAll('#heading')[0].style.color = ''
document.querySelectorAll('#heading')[1].style.color = ''
document.querySelector('#position').style.color = ''
document.querySelector('#site_button').onmouseover = function(){
	document.querySelector('#site_button').style.backgroundColor = '#ccccff'
}

document.querySelector('#site_button').onmouseleave = function(){
	document.querySelector('#site_button').style.backgroundColor = '#F4F6F8'
}

control = !control
	} else {
oval.style.marginLeft = '30px'
document.querySelector('#company-info').style.backgroundColor = '#19202D'
document.querySelector('#block1').style.backgroundColor = '#19202D'
document.querySelector('#main').style.backgroundColor = '#19202D'
document.querySelector('footer').style.backgroundColor = '#19202D'
document.querySelector('body').style.backgroundColor = '#121721'
document.querySelector('#post').style.color = 'white'
document.querySelector('#top-image').style.border = '#121721 solid 1px'
document.querySelector('#site_button').style.backgroundColor = '#404040'
document.querySelector('#site_button').style.color = 'white'
document.querySelector('#text').style.color = 'white'
document.querySelectorAll('#heading')[0].style.color = 'white'
document.querySelectorAll('#heading')[1].style.color = 'white'
document.querySelector('#position').style.color = 'white'
document.querySelector('#site_button').onmouseover = function(){
	document.querySelector('#site_button').style.backgroundColor = '#585858'
}

document.querySelector('#site_button').onmouseleave = function(){
	document.querySelector('#site_button').style.backgroundColor = '#404040'
}
control = !control

}


}


var logo = document.getElementById('logo')
var background = document.getElementById('logo-block')
var text = document.getElementById('text')
var time = document.getElementById('time')
var contract = document.getElementById('contract')
var position = document.getElementById('position')
var description = document.getElementById('description')
var content = document.getElementById('content')
var list1 = document.querySelectorAll('li')[0]
var list2 = document.querySelectorAll('li')[1]
var list3 = document.querySelectorAll('li')[2]
var list4 = document.querySelectorAll('li')[3]
var list5 = document.querySelectorAll('li')[4]
var list6 = document.querySelectorAll('li')[5]
var list7 = document.querySelectorAll('li')[6]
var list8 = document.querySelectorAll('li')[7]
var content1 = document.getElementsByTagName('p')[4]
var post = document.getElementById('post')
var email = document.getElementById('email')
var loc = document.getElementById('location')
var siteButton = document.getElementById('site_button')
var applyButton = document.getElementById('apply-button')
var applyButton1 = document.getElementById('apply-button2')



for (const job of jobs){
	if (job.id === 3) {
		logo.src = job.logo
		background.style.backgroundColor = job.logoBackground
		text.textContent = job.company
		time.textContent = job.postedAt
		contract.textContent = job.contract
		position.textContent = job.position
		description.textContent = job.description
		content.textContent = job.requirements.content
		list1.textContent = job.requirements.items[0]
		list2.textContent = job.requirements.items[1]
		list3.textContent = job.requirements.items[2]
		list4.textContent = job.requirements.items[3]
		list5.textContent = job.role.items[0]
		list6.textContent = job.role.items[1]
		list7.textContent = job.role.items[2]
		list8.textContent = job.role.items[3]
		content1.textContent = job.role.content
		post.textContent = job.position
		email.textContent = job.company+'.com'
		loc.textContent = job.location
		siteButton.addEventListener('click',()=>{window.open(job.website)})
		applyButton.addEventListener('click',()=>{window.open(job.apply)})
		applyButton1.addEventListener('click',()=>{window.open(job.apply)})





	}

}





