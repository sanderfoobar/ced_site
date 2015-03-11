$(document).ready(function(){
	// code sucks, we dont care
	var mousePos = { x: -1, y: -1 };
	var windowWidth = $( window ).width();

		$(document).mousemove(function(event) {
			mousePos.x = event.pageX;
			mousePos.y = event.pageY;
			var windowWidth = $(window).width();
			
			var pct = (mousePos.x / windowWidth) * 100;

			var pct2 = (pct / 100) * 100;
			var offset_front = (100 - pct2 )/5;
			var offset_middle = (100 - pct2 )/12;
			$('.img_front').css('background-position-x', '-' + offset_front + 'px');
			$('.img_middle').css('background-position-x', '-' + offset_middle + 'px');

		});
		
		function randRange(min, max) {
			return Math.random() * (max - min) + min;
		}
		
		var dinoWalking = false;
		function dinoWalk(){
			if(parseInt(randRange(1,3), 10) == 1) return;
			
			if(!dinoWalking){
				var offset = randRange(20, 100);
				var speed = randRange(1000, 2500);
				var easing = ['linear', 'swing', 'jswing', 'easeInOutCubic'];
				var easing = easing[randRange(0,3)];
				
				$('.img_dinolol').animate({
					left: '+=' + offset
				}, speed, easing, function(){
					var dino_x = $('.img_dinolol').css('left');

					if(parseInt(dino_x, 10) > $(window).width()){
						$('.img_dinolol').css('left', '-400');
					}
				});
			}
		}
		
		setTimeout(function(){
			setTimeout(function(){
				$('#cline1').css('display', 'block');
			}, 200);
			
			$('#cline1').textEffect({ effect: 'jumble', effectSpeed: 75});
		}, 300)
		
		setTimeout(function(){
			setTimeout(function(){
				$('#cline3').css('display', 'block');
			}, 200);
			
			$('#cline3').textEffect({ effect: 'jumble', effectSpeed: 80});
		}, 3100)
		
		setTimeout(function(){
			setTimeout(function(){
				$('#cline4').css('display', 'block');
			}, 200);
			
			$('#cline4').textEffect({ effect: 'jumble', effectSpeed: 80});
		}, 5100)
		
		setTimeout(function(){
			setTimeout(function(){
				$('#cline5').css('display', 'block');
			}, 500);
		}, 7300)
		
		setTimeout(function(){
			setTimeout(function(){
				$('#cline6').css('display', 'block');
			}, 200);
			
			$('#cline6').textEffect({ effect: 'jumble', effectSpeed: 80});
		}, 9000)
		
		setTimeout(function(){
			setTimeout(function(){
				$('#cline7').css('display', 'block');
			}, 1500);
		}, 10000)
		
		var caret_shows = true;
		setTimeout(function(){
			setInterval(function(){
				if (caret_shows){
					$('.caret').css('display', 'none');
					caret_shows = false;
				}
				else{
					$('.caret').css('display', 'block');
					caret_shows = true;
				}
			}, 800);

			$('#cline8').css('display', 'block');
		}, 12000);
		
		// dino walks o/
		setInterval(dinoWalk, 3000);
		
		// SNOW PIXELS awyes
		$(document).snowfall({image :"img/pixel.png", minSize: 8, maxSize:30, maxSpeed:1, flakeCount : 16});
});