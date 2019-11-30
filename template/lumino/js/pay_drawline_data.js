var randomScalingFactor = function(){ return Math.round(Math.random()*1000)};
	
	var lineChartData = {
		//labels : ["January","February","March","April","May","June","July"],
		labels :["","","","","",""],
		datasets : [
			{
				label: "My First dataset",
				fillColor : "rgba(48, 164, 255, 0)",
			 	strokeColor : "rgba(48, 164, 255, 1)",
			 	pointColor : "rgba(48, 164, 255, 1)",
				pointStrokeColor : "#fff",
				pointHighlightFill : "#fff",
				pointHighlightStroke : "rgba(220,220,220,1)",
				//data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
				data: [500,500,500,500,500,500]
			},
			// {
			// 	label: "My Second dataset",
			// 	fillColor : "rgba(220,220,220,0.2)",
			// 	strokeColor : "rgba(220,220,220,1)",
			// 	pointColor : "rgba(220,220,220,1)",
			// 	pointStrokeColor : "#fff",
			// 	pointHighlightFill : "#fff",
			// 	pointHighlightStroke : "rgba(48, 164, 255, 1)",
			// 	//data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			// 	data: [600,600,600,600,600,600,600]
			// },
			// {
			// 	label: "My Third dataset",
			// 	fillColor : "rgba(48, 164, 255, 0.2)",
			// 	strokeColor : "rgba(48, 164, 255, 1)",
			// 	pointColor : "rgba(48, 164, 255, 1)",
			// 	pointStrokeColor : "#fff",
			// 	pointHighlightFill : "#fff",
			// 	pointHighlightStroke : "rgba(48, 164, 255, 1)",
			// 	//data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
			// 	data: [550,550,550,550,550,550,550]
			// }
		]

	}
		
