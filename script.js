document.addEventListener('DOMContentLoaded',function(){
	const toggleBtn=document.querySelector(".toggle-btn");
	const icon=document.querySelector(".toggle-btn i");
	const body=document.body;
	const saveTheme=localStorage.getItem('theme');
	const systemPreferDark=window.matchMedia('(prefers-color-scheme:dark)').matches;

	if(saveTheme==='dark' || (!saveTheme && systemPreferDark)){
		enableDarkMode();
	}
	toggleBtn.addEventListener('click' , function(){
		if(body.getAttribute('data-theme')==='dark'){
			disableDarkMode();
		}
		else{
			enableDarkMode();
		}
	});

	function enableDarkMode() {
		body.setAttribute('data-theme','dark');
		icon.classList.remove('fa-moon');
		icon.classList.add('fa-sun');
		localStorage.setItem('theme','dark');
	}
		function disableDarkMode() {
		body.setAttribute('data-theme','light');
		icon.classList.remove('fa-sun');
		icon.classList.add('fa-moon');
		localStorage.setItem('theme','light');
	}

	window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change',e=>{

		const newColorScheme = e.matches ? 'dark' : 'light';
		if (newColorScheme==='dark') {
			enableDarkMode();
		}
		else
		{
			disableDarkMode();
		}

	});

	const followBtn = document.querySelector('.following-btn');
	followBtn.addEventListener('click',function(){
		const isFollowing = this.textContent==='Folowing';
		this.textContent=isFollowing?'Follow':'Folowing';
		this.style.backgroundColor=isFollowing?'var(--highlight)' : 'var(--bg-color)';
		if (!isFollowing) {
			this.style.color='var(--text-dark)';
		}
		else{
			this.style.color='white';
		}
	});

	const backBtn = document.querySelector('.backbtn');
	backBtn.addEventListener('click',function(){
		console.log('Navigating back..');
		window.history.back()
	})

	const tabs = document.querySelectorAll('.icons > div');

	tabs.forEach(tab => {
	  tab.addEventListener('click', function () {    
	    tabs.forEach(t => t.classList.remove('active'));    
	    this.classList.add('active');
	    console.log(
	      `Switched to ${this.querySelector('i').classList[1]} view`
	    );
	  });
	});

	

})