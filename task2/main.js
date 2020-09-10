
function getJSON(file) {
	return new Promise((resolve,reject)=>{
	return fetch(file).then(response=>{
		if (response.ok) {
			resolve(response.json());
		}else{
			reject(new Error('error'));
		}
	})
	})
}

getJSON("main.json").then(d=>{
	// console.log(d)
	student_details(d.Students);
})

var main=document.querySelector(".container");
document.getElementById("app").innerHTML=`
	<div class="navbar navbar-inverse navbar-fixed-top">
			<div class="container-fluid">
				 <header class="navbar-header">
					<a class='navbar-brand' href='main.html'>Students profile</a>
				</header>
				<ul class='nav navbar-nav navbar-right'>
						<li><a href='#'><span class='glyphicon glyphicon-user'></span>Sign In</a></li>
						<li><a href='#'><span class='glyphicon glyphicon-upload'></span>Add Student Profile</a></li>
						<li>
							<form class='navbar-form' action='#' method='POST'>
								<input type='text' class='form-control' placeholder='Search for a Profile'>
								<button type='submit' class='btn btn-primary'>
									<span class='glyphicon glyphicon-search'></span>
								</button>
							</form>
						</li>
				</ul> 
			</div>
		</div>
		<div class='container-fluid'>
			<div class='jumbotron jumbotron-image shadow text-white' style="background-image: 
			url(https://image.shutterstock.com/image-photo/blurred-photo-shot-graduation-hats-260nw-1024051090.jpg)">
				<div class='nav navbar'>
					<h1 class='text-center'>Student profiles</h1>
					<p class='text-center'>Providing complete student profiles</p>
				</div>
			</div>
			<div>	
			<div class="container-fluid">
			<div class='jumbotron jumbotron-image shadow text-white' style="background-image:
			url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRGA2jnB-03o2ixBqx_hM8xcqbKb4vVXJ4vSA&usqp=CAU)">
				<h2 style="text-align:center;">About us:</h2>
				<p style="text-align:center;">Providing resume or profiles of experienced and freshers of every domain</p>
			</div>
			</div>
`
function student_details(t) {
	for( var i in t)
	{
		var el = document.createElement("div");
	  	el.className ="col-sm-4";
	  	el.id = "card" + i;
	  	el.innerHTML = `<div class="container">
		  <div class="row">
			  <div class="col-sm-4">
					<div class="thumbnail"><img src="`+t[i].photo+`" width="50%" heigth="70px" class="card-img">
						<div class="card-body">
							<h1 class="card-title">`+t[i].name+`</h1>
							<h3 class="card-text">`+t[i].role+`</h3>
							<h3 class="card-text">`+t[i].experience+`</h3>
							<a href="`+t[i].link+`" class="btn btn-primary" role="button">View Resume</a>
						</div>
					</div>
			  	</div>
			  
			  </div>`;
			  container.append(el);
	}
}
