var watchID = null;
        var xGauge;
        var yGauge;
        // Update acceleration every ... milliseconds
        var options = { frequency: 220 };
        var canvasWidth;
        var canvasHeight;
		var screenWidth;
		var xAcclerationOffset = 0;//used for resetting
		var yAcclerationOffset = 0;//used for resetting
		var resetPressed = false;
		var zeroRequested = true;
        var resetButton;
        var resetBackground;

        document.addEventListener("deviceready", onDeviceReady, false);

        $(function () {
            screenWidth = $(window).width();
            canvasWidth = screenWidth / 2 * 0.95;
            canvasHeight = $(window).height() * 0.95;
            resetButton = $("#reset_botton");
            resetBackground = $("#background_button");
            init();
            
        })

        function onDeviceReady() {
            startWatch();
        }

        function init() {
			resetBackground.css("width", screenWidth/6);
            let buttonWidth = parseInt(resetBackground.css("width"), 10);
			resetBackground.css("left", screenWidth/2 - buttonWidth/2);
			resetBackground.css("top", canvasHeight*0.85);
            
            resetButton.css("width", buttonWidth/2);
            resetButton.css("left", parseInt(resetBackground.css("left"), 10) + 2);
            resetButton.css("top", parseInt(resetBackground.css("top"), 10) + 2);
            
            let buttonMoveRange = buttonWidth/2+"px";
            $("#reset_botton").click(function(){
                $(this).animate({
                    left : zeroRequested? "+="+buttonMoveRange : "-="+buttonMoveRange
                }, 500, function() {
                    setZero();
                });
            });

            radialGaugeParams = new GaugeData(canvasWidth).radialGaugeParams;
			radialGaugeParams["renderTo"] = "x_canvas";
			radialGaugeParams["title"] = "Vertical";
            xGauge = new RadialGauge(radialGaugeParams).draw();

			radialGaugeParams["renderTo"] = "y_canvas";
			radialGaugeParams["title"] = "Horizontal";
            yGauge = new RadialGauge(radialGaugeParams).draw();
        }

        function startWatch() {
            watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        }

        function stopWatch() {
            if (watchID) {
                navigator.accelerometer.clearWatch(watchID);
                watchID = null;
            }
        }

        function onSuccess(acceleration) {
            if (resetPressed && zeroRequested) {
				xAcclerationOffset = acceleration.x;
				yAcclerationOffset = acceleration.y;
				resetPressed = false;
				zeroRequested = !zeroRequested;
				
			} else if (resetPressed && !zeroRequested) {
				xAcclerationOffset = 0;
				yAcclerationOffset = 0;
				resetPressed = false;
				zeroRequested = !zeroRequested;
			}
			xGauge.update({ value: (((acceleration.x - xAcclerationOffset) / 10) * 90).toFixed(1) });
            yGauge.update({ value: (((acceleration.y - yAcclerationOffset) / 10) * 90).toFixed(1) });

        }

        function onError() {
            alert('onError!');
        }
		
		function setZero(){
			resetPressed = true;
		}
		