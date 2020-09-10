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
getJSON("ramya.json").then(d=>{
    navbar_resume(d.arjun);
    career_objective(d.arjun);
    edu_details(d.edu);
    internship(d.intern);
    training(d.train);
    project_details(d.project);
    addi(d.addi);
});

function navbar_resume(t){
    for(var i in t){
        document.getElementById("nav").innerHTML=`
        <div class="row">
        <div class="col-sm-8">
            <h1>`+t[i].name+`</h1>
        </div>
        <div class="col-sm-4" >
            <p style="font-size: 13px;"><br><b>Address:</b><br>
            `+t[i].address.join(" ")+`</p>
            <p style="font-size: 13px;"><b>Phone:<b><br>
            `+t[i].phone+`</p>
            <p style="font-size: 13px;"><b>Email:</b><br>
            `+t[i].email+`</p>
        </div>
        </div>
		<div class="navbar navbar-inverse navbar-fixed-top">
			<div class="container-fluid">
				<header class="navbar-header">
					<a class='navbar-brand' href='main.html'>Students profile</a>
				</header>
			</div>
        </div>
        `
    }
    }
function career_objective(t){
    for(var i in t){
        document.getElementById("container").innerHTML=`
        <h2 >Career Objective</h2><hr>
        <p>`+t[i].co.join(" ")+`</p>
    `
}
}
function edu_details(x){
    var h = document.createElement("h2");
    h.textContent="Education"
    container.appendChild(h);
    container.appendChild(document.createElement("hr"))
    var table = document.createElement("table");
    var row="";
    for(var j in x){
    row +="<tr><td>"+x[j].grade+"</td><td>"+x[j].spcial+"</td><td>"+x[j].insti.join(" ")+"</td><td>"+x[j].gpa+"</td><td>"+x[j].pyear+"</td></tr>";	
    }
    table.innerHTML=row;
    container.appendChild(table);
}
function internship(t){
    var d = document.createElement("h2");
    d.textContent=t.l.join(" ");
    container.appendChild(d);
    container.appendChild(document.createElement("hr"));
    var p = document.createElement("h4");
    p.textContent=t.he;
    container.appendChild(p);
    var ul = document.createElement("ul");
    var li=document.createElement("li");
    li.textContent=t.l1.join(" ");
    container.appendChild(li);
    var li=document.createElement("li");
    li.textContent=t.l2.join(" ");
    container.appendChild(li);
    var li=document.createElement("li");
    li.textContent=t.l3.join(" ");
    container.appendChild(li);
}
function training(t){
    var h = document.createElement("h2");
    h.textContent="Technical Profile";
    container.appendChild(h);
    container.appendChild(document.createElement("hr"));
    var u=document.createElement("ul");
    var l=document.createElement("li");
    l.textContent=t.lang1.join(" ");
    container.appendChild(l);
    var l=document.createElement("p");
    l.textContent=t.lang.join(" ");
    container.appendChild(l);
    var l=document.createElement("li");
    l.textContent=t.OS1.join(" ");
    container.appendChild(l);
    var l=document.createElement("p");
    l.textContent=t.OS.join(" ");
    container.appendChild(l);
    var l=document.createElement("li");
    l.textContent=t.tools1.join(" ");
    container.appendChild(l);
    var l=document.createElement("p");
    l.textContent=t.tools.join(" ");
    container.appendChild(l);
    var l=document.createElement("li");
    l.textContent=t.web1.join(" ");
    container.appendChild(l);
    var l=document.createElement("p");
    l.textContent=t.web.join(" ");
    container.appendChild(l);
}
function project_details(t){
    var h=document.createElement("h2")
    h.textContent="Projects";
    container.appendChild(h);
    container.appendChild(document.createElement("hr"));
    var d =document.createElement("h4");
    d.textContent=t.mini1.join(" ");
    container.appendChild(d);
    var d =document.createElement("p");
    d.textContent=t.mini.join(" ");
    container.appendChild(d);
    var d =document.createElement("h4");
    d.textContent=t.capstone1.join(" ");
    container.appendChild(d);
    var d =document.createElement("p");
    d.textContent=t.capstone.join(" ");
    container.appendChild(d);
}
function addi(t){
    var d=document.createElement("h2");
    d.textContent=t.l.join(" ");
    container.appendChild(d);
    var d=document.createElement("li");
    d.textContent=t.l1.join(" ");
    container.appendChild(d);
    var d=document.createElement("li");
    d.textContent=t.l2.join(" ");
    container.appendChild(d);
    var d=document.createElement("li");
    d.textContent=t.l3.join(" ");
    container.appendChild(d);
}