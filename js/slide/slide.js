document.addEventListener('DOMContentLoaded',function(){
  req=new XMLHttpRequest();
  req.open("GET",'/pruebas/titamedia/js/slides.json',true);
  req.send();
  req.onload=function(){
    json=JSON.parse(req.responseText);
    let ul = document.getElementById('slides');
    
    //For each slide in json
    json.slides.forEach(function(slide) {
    	//Add an li to the slides ul
    	let imageUrl = slide["image-url"];
    	let text = slide["text"];
    	let li = document.createElement('li');
    	li.className = "glide__slide";
    	li.style.backgroundImage = `url(${imageUrl})`;
    	li.innerHTML = `
    				<div class="overlay">
							<div class="container">
					  	  <section class="abstract">
									<h1>${text}</h1>
					  	  </section>
					  	</div>
						</div>`
			ul.appendChild(li);
			new Glide('.glide', {
				autoplay: 2000
			}).mount();

    });
    	
  };
});

	

			