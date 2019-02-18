window.onload = function(){

	
	//contact section click events
	const contactBtn = document.getElementById("contactButton");
	const cardContainer = document.getElementById("contactCardContainer");
	const contactCard = document.getElementById("contactCard");
	const cardX = document.getElementById("XButton");
	contactBtn.addEventListener("click", (e) => {
		cardContainer.style.display = "block";
		contactCard.style.display = "inline-block";
	});
	cardContainer.addEventListener("click", (e) => {
		cardContainer.style.display = "none";
		contactCard.style.display = "none";
	});
	cardX.addEventListener("click", (e) => {
		cardContainer.style.display = "none";
		contactCard.style.display = "none";
	});


/*	// menu button navigation events
	const menuButton = document.getElementById("menuBtn");
	const navBox = document.getElementById("navigator");
	const menuLinks = document.querySelectorAll(".menuClick");
	menuButton.addEventListener("click", (e) => {
		if(navBox.style.display === ""){
			navBox.style.display = "block";
		}else if(navBox.style.display === "block"){
			navBox.style.display = "";
		}
		//menuLinesArray.forEach((el)=>{
				//if(el.style.backgroundColor ==="#000"){
				//	el.style.backgroundColor = "#fff";
				//}	
			//});

	});

	menuLinks.forEach((link)=>{
			link.addEventListener("click",(e)=>{
				navBox.style.display = "";
				console.log("done");
			});
	});
*/
	//menu button color changing bewtwen black and white when background environment is white or black
	const isInView = (el)=>{
		let bounding = el.getBoundingClientRect();
		return (
			bounding.top >= 0 &&
			bounding.left >= 0 &&
			bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)&&
			bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	};
	const headr = document.getElementById("header");
	const foot = document.getElementById("contactSection");
	const jMark = document.getElementById("jMarker");
	const sections = document.querySelectorAll("section.environment");
	const firstTBox = document.getElementById("firstTraitBox");
	const siblingTBoxes = document.querySelectorAll('.trait_box[data-idx="animate"]');
	const menuLines = document.querySelectorAll("span.line_color");

	const sectionElems = [...sections];
	const menuLinesArray = [...menuLines];
	const traitBoxesArray = [...siblingTBoxes];
	window.addEventListener("scroll",function(e){
		e.preventDefault();
		if(window.pageYOffset <= header.scrollHeight && navBox.style.display ===""){
			menuLinesArray.forEach((el)=>{
				el.style.backgroundColor = "#fff";
			});
		}

		if(window.pageYOffset > header.scrollHeight  && navBox.style.display ===""){ 
			menuLinesArray.forEach((el)=>{
				el.style.backgroundColor = "#000";
			});
		}
		if(isInView(jMark)){
			menuLinesArray.forEach((el)=>{
				el.style.backgroundColor = "#fff";
			});
		}

	});
	
			
		// menu button navigation events
	const menuButton = document.getElementById("menuBtn");
	const navBox = document.getElementById("navigator");
	const menuLinks = document.querySelectorAll(".menuClick");
	menuButton.addEventListener("click", (e) => {
		if(navBox.style.display === ""){
			navBox.style.display = "block";
		}else if(navBox.style.display === "block"){
			navBox.style.display = "";
		}
////////
		menuLinesArray.forEach((el)=>{
				el.style.backgroundColor = "#fff";
			});
	});
	menuLinks.forEach((link)=>{
		link.addEventListener("click",(e)=>{
			navBox.style.display = "";
		});
	});	
		
	///////

	//projectbox events hovering and showing project
	const labelAndImageBoxes = document.querySelectorAll(".hoverclass");
	const hiddenDivs = document.querySelectorAll(".zidx_move");

	labelAndImageBoxes.forEach((el)=>{

		let elData = el.getAttribute("data-idx");
		let hiddenDiv = document.getElementById(elData);
		let hdElems = hiddenDiv.children;
		let liboxes =[...labelAndImageBoxes];
		  
		el.addEventListener("mouseenter", ()=>{	
			liboxes.filter( otherEls => otherEls.getAttribute("data-idx") !== el.getAttribute("data-idx")).forEach((oE)=>{
				oE.style.display = "block";
				//console.log(oE.style);
			});
			const newArray = [...hdElems];
			const hiddenDivsCollection =[...hiddenDivs];

			hiddenDivsCollection.filter(otherHds=>otherHds.getAttribute("data-idx") !== el.getAttribute("data-idx")).forEach((oHd)=>{
				oHd.style.display = "none";
				console.log(oHd.style.display);
			});
			//console.log(el);
			hiddenDiv.style.display = "block"; 
			//hiddenDiv.addEventListener("mouseenter", ()=>{ //hiddenDiv as the element
				let opacityEmpty = 1;
				let opacityFill = 0;
				let posYDown = -50;
				let posYUp = 50;
				let intervID = setInterval(() => { 
					if(posYDown == 0){
						for(let child of hdElems){
							child.style.opacity="1"; 
						}
						clearInterval(intervID);
					} else{
						opacityEmpty -= .01; //.01
						opacityFill += .01; //.01
						posYDown += 2; //2
						posYUp -=2 //2
					//	el.style.display=""; not necesarry
						newArray.forEach((el)=>{el.style.opacity=opacityFill +"";});
						newArray.filter(el => el.className !== newArray[3].className).forEach((child)=>{child.style.top=posYDown+"px";});
						hdElems[3].style.top = posYUp  +"px";						
					}					
				},0);


			//});		
			//hiddenDiv.style.display = "block"; 
			hiddenDiv.addEventListener("mouseleave",()=>{ //hiddenDiv "mouseleave"
				//hiddenDiv.style.display="";
				el.style.display="auto";
				//console.log(el.style.display);
				//console.log(el.style);
				newArray.forEach((el)=>{el.style.opacity="";});				
				newArray.filter(el => el.className !== newArray[3].className).forEach((child)=>{child.style.top="-50px";});
				hdElems[3].style.top ="50px";	
				hiddenDiv.style.display="";	
			});			
		});
		
	});  

	//for email displayionh and link
	const shownEmailHolder = document.getElementById("shownEmail");
	const emailLink = document.getElementById("emailsymbol");
	const email = function(first,second,subject){
		this.fhalf = first;
		this.shalf = second;
		this.subject = subject;
	};
	email.prototype.displayEmail = function (){
		shownEmailHolder.innerHTML = this.fhalf + "@" + this.shalf;
	}
	email.prototype.setAttLink = function(){
		emailLink.setAttribute("href", "mailto:"+this.fhalf+"@"+this.shalf+"?subject="+this.subject);
	} 
	let myEmail = new email("emora7","gmail.com","Hello, I'm reaching you from your portfolio site.");
	myEmail.displayEmail();
	myEmail.setAttLink();



	//slide in animation evenets on scroll by adding and removing a class name to elements

	const sectTitles = document.querySelectorAll(".section_title");
	const sectTitlesElems = [...sectTitles];
	console.log(sectTitlesElems);
	




};