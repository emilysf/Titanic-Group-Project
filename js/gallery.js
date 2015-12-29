// Images Array

var images = new Array();

	images[0] = new Image();
	images[0].src = 'img/survivor/hart.jpg';

	images[1] = new Image();
	images[1].src = 'img/survivor/collyer.jpg';

	images[2] = new Image();
	images[2].src = 'img/survivor/shutes.jpg';

	images[3] = new Image();
	images[3].src = 'img/survivor/thayer.jpg';

	images[4] = new Image();
	images[4].src = 'img/survivor/dean.jpg';
	
	images[5] = new Image();
	images[5].src = 'img/survivor/asplund.jpg';


// Names Array
var names = new Array();
	names[0] = "Eva Hart, age 7, second class passenger";
	names[1] = "Charlotte Collyer, age 31, second class passenger";
	names[2] = "Elizabeth Shutes, age 40, first class passenger ";
	names[3] = "Jack Thayer, age 17, first class passenger";
	names[4] = "Elizabeth Dean, 2 months, third class passenger ";
	names[5] = "Lilian Asplund,  age 5, third class passenger";



// Captions Array

var captions = new Array();

	captions[0] = "Hart was a second-class passenger with her parents and lost her father in the tragedy. She went on to live a vibrant life, and spoke frequently about the sinking of Titanic and her approach to life. Hart states, 'People I meet always seem surprised that I do not hesitate to travel by train, car, airplane or ship when necessary. It is almost as if they expect me to be permanently quivering in my shoes at the thought of a journey. If I acted like that I would have died of fright many years ago—life has to be lived irrespective of the possible dangers and tragedies lurking round the corner.'";
	
	captions[1] = "Collyer was rescued by Carpathia and when it arrived in New York City days after the sinking she started a frantic search for her family. She said 'There was scarcely anyone who had not been separated from husband, child or friend. Was the last one among the handful saved? … I had a husband to search for; a husband whom in the greatness of my faith, I had believed would be found in one of the boats. He was not there.'  ";
	captions[2] = "Elizabeth didn’t react until she heard someone say 'We can keep the water out for a while'. Once she heard this she grabbed a coat and slippers, then her and her friend went up to the top deck. Men watched as their wives and children were put into lifeboats. Brave men helped her and her friend on to the life boats without trying to save themselves. Her life boat had 36 people in it. When the boat was lowered to the sea there was a lot of confusion, seamen were all shouting different things and the ropes were not lowering at the same level making the life boat nearly capsized in midair. Finally, the boat touched the water and they started drifting away from the Titanic. ";
	captions[3] = "Seventeen-year-old Jack was traveling in Europe with his parents and a maid named Margaret Fleming. Thayer and his parents are heading to New York. To save himself from the sinking Titanic, Jack jumped into the water and swam to a capsized lifeboat and was rescued by lifeboat 12. Nearly all those who lived did so by boarding lifeboats. Jack was one of only about 40 survivors of those who jumped or fell into the water. He later recalled that the cries of hundreds of people in the water reminded him of the high-pitched hum of locusts in his native Pennsylvania.";
	captions[4] = "Dean was the last remaining survivor of the sinking of the RMS Titanic on 15 April 1912.And at only 2 months old, she was also the youngest passenger aboard. Her father died with the sinking of the titanic, while her mother survived.";
	captions[5] = "Asplund boarded the Titanic with her parents and four brothers. During the sinking of the ship Lillian, her mother and brother, Felix, were loaded into Lifeboat No. 15. Lillian later recalled, 'my mother said she would rather stay with him [my father] and go down with the ship, but he said the children should not be alone.' Asplund's father and brothers, Filip, Clarence and Carl, perished in the sinking. Asplund was one of the last three living survivors of the sinking of the RMS Titanic on April 15, 1912. She was the last American survivor, and also the last survivor with actual memories of the disaster.";



// Replace Image + Caption

		function makeLarge1(event) { // hart
		event.preventDefault();
				var contentDiv = document.getElementById('content');
								while(contentDiv.hasChildNodes()) {
							contentDiv.removeChild(contentDiv.lastChild);
					}

				var textDiv = document.getElementById('text');
								while(textDiv.hasChildNodes()) {
							textDiv.removeChild(textDiv.lastChild);
					}
				
				var titleDiv = document.getElementById('title');
								while(titleDiv.hasChildNodes()) {
							titleDiv.removeChild(titleDiv.lastChild);
					}

				var image1 = images[0];
					contentDiv.appendChild(image1);
					
				var Break = document.createElement('br');
						contentDiv.appendChild(Break);
						
				var name1 = document.createTextNode(names[0]);
					titleDiv.appendChild(name1);			
						
				var caption1 = document.createTextNode(captions[0]);
					textDiv.appendChild(caption1);
			}


			
		function makeLarge2(event) { // collyer
		event.preventDefault();
				var contentDiv = document.getElementById('content');
								while(contentDiv.hasChildNodes()) {
							contentDiv.removeChild(contentDiv.lastChild);
					}

				var textDiv = document.getElementById('text');
								while(textDiv.hasChildNodes()) {
							textDiv.removeChild(textDiv.lastChild);
					}
				
				var titleDiv = document.getElementById('title');
								while(titleDiv.hasChildNodes()) {
							titleDiv.removeChild(titleDiv.lastChild);
					}	
					
						
				var image1 = images[1];
					contentDiv.appendChild(image1);
				var Break = document.createElement('br');
						contentDiv.appendChild(Break);
				var name1 = document.createTextNode(names[1]);
					titleDiv.appendChild(name1);		
				var caption1 = document.createTextNode(captions[1]);
					textDiv.appendChild(caption1);			
			}					
			
		function makeLarge3(event) {  // thayer
		event.preventDefault();
				var contentDiv = document.getElementById('content');
								while(contentDiv.hasChildNodes()) {
							contentDiv.removeChild(contentDiv.lastChild);
					}

				var textDiv = document.getElementById('text');
								while(textDiv.hasChildNodes()) {
							textDiv.removeChild(textDiv.lastChild);
					}
					
				var titleDiv = document.getElementById('title');
								while(titleDiv.hasChildNodes()) {
							titleDiv.removeChild(titleDiv.lastChild);
					}	
						
				var image1 = images[2];
					contentDiv.appendChild(image1);

				var Break = document.createElement('br');
						contentDiv.appendChild(Break);
						
				var name1 = document.createTextNode(names[2]);
					titleDiv.appendChild(name1);		

				var caption1 = document.createTextNode(captions[2]);
					textDiv.appendChild(caption1);
			}	
			
		function makeLarge4(event) { // shutes
		event.preventDefault();
				var contentDiv = document.getElementById('content');
								while(contentDiv.hasChildNodes()) {
							contentDiv.removeChild(contentDiv.lastChild);
					}

				var textDiv = document.getElementById('text');
								while(textDiv.hasChildNodes()) {
							textDiv.removeChild(textDiv.lastChild);
					}
					
				var titleDiv = document.getElementById('title');
								while(titleDiv.hasChildNodes()) {
							titleDiv.removeChild(titleDiv.lastChild);
					}	
						
				var image1 = images[3];
					contentDiv.appendChild(image1);
				var Break = document.createElement('br');
						contentDiv.appendChild(Break);
						
				var name1 = document.createTextNode(names[3]);
					titleDiv.appendChild(name1);		
				var caption1 = document.createTextNode(captions[3]);
					textDiv.appendChild(caption1);
			}	
			
		function makeLarge5(event) {  // dean
		event.preventDefault();
				var contentDiv = document.getElementById('content');
								while(contentDiv.hasChildNodes()) {
							contentDiv.removeChild(contentDiv.lastChild);
					}

				var textDiv = document.getElementById('text');
								while(textDiv.hasChildNodes()) {
							textDiv.removeChild(textDiv.lastChild);
					}
					
				var titleDiv = document.getElementById('title');
								while(titleDiv.hasChildNodes()) {
							titleDiv.removeChild(titleDiv.lastChild);
					}	
						
				var image1 = images[4];
					contentDiv.appendChild(image1);
				var Break = document.createElement('br');
						contentDiv.appendChild(Break);
						
				var name1 = document.createTextNode(names[4]);
					titleDiv.appendChild(name1);		
				var caption1 = document.createTextNode(captions[4]);
					textDiv.appendChild(caption1);
			}
			
			
			
		function makeLarge6(event) {  // asplund
		event.preventDefault();
				var contentDiv = document.getElementById('content');
								while(contentDiv.hasChildNodes()) {
							contentDiv.removeChild(contentDiv.lastChild);
					}

				var textDiv = document.getElementById('text');
								while(textDiv.hasChildNodes()) {
							textDiv.removeChild(textDiv.lastChild);
					}
					
				var titleDiv = document.getElementById('title');
								while(titleDiv.hasChildNodes()) {
							titleDiv.removeChild(titleDiv.lastChild);
					}	
						
				var image1 = images[5];
					contentDiv.appendChild(image1);
				var Break = document.createElement('br');
						contentDiv.appendChild(Break);
						
				var name1 = document.createTextNode(names[5]);
					titleDiv.appendChild(name1);		
				var caption1 = document.createTextNode(captions[5]);
					textDiv.appendChild(caption1);
			}				
			
					
			
			
			function init() {
				var img1 = document.getElementById('img1');
					img1.addEventListener('click',makeLarge1,false);
				var img2 = document.getElementById('img2');
					img2.addEventListener('click',makeLarge2,false);
				var img3 = document.getElementById('img3');
					img3.addEventListener('click',makeLarge3,false);
				var img4 = document.getElementById('img4');
					img4.addEventListener('click',makeLarge4,false);
				var img5 = document.getElementById('img5');
					img5.addEventListener('click',makeLarge5,false);
				var img6 = document.getElementById('img6');
					img6.addEventListener('click',makeLarge6,false);
			}

			window.addEventListener('load',init,false);
			
// JavaScript Document