var i=1;
var mineralCount=1;
var maxIndexArr = 5;
let  SampleRandomArr = [];

function randomIntFromInterval(){ 
	do {
	    let num = Math.floor(Math.random() * 50 + 1);
		SampleRandomArr.push(num);
//	    SampleRandomArr.push(i);
//	    i++;
	    SampleRandomArr =  SampleRandomArr.filter((item, index) => {
	    return  SampleRandomArr.indexOf(item) === index;
	  });
	} while ( SampleRandomArr.length < maxIndexArr);
}

function randomIntFromIntervalPos(min, max) { 
	  return Math.floor(Math.random() * (max - min + 1) + min)
}

randomIntFromInterval();

var htm='<div class="row">'
			+'<div class="col-sm-1">'
			+'</div>'
			+'<div class="col-sm-2">'
			+'<strong><center><span>Select Mineral</span></center></strong>'
			+'</div>'
			+'<div class="col-sm-7">'
			+'<select class="custom-select" id="mineral"  >'
			+'<option>------ Select Mineral ------</option>'
	for(i=0;i<SampleRandomArr.length;i++){
			htm+='<option  value="'+ SampleRandomArr[i]+'">Mineral '+ SampleRandomArr[i] +'</option>'
		}
		htm+='</select>'			
			+'</div>'
			+'</div>'
			+'<div class="col-sm-2">'
			+'</div>'
			+'<center><p id="helpTip"></p></center>'
			+'<div class="row" id="info_div"  >'
			
// $("#main-div").html(htm);
var thoery='<div class="container col-sm-12"  id="theory">'
	+'<div class="card ">'
	+'<center><p class="blink"> Select mineral to start the simulation!!! </p></center>'
	+'<div class="card-header heading_div">'
	+'<b><center>Basics to know about minerals</center></b>'
	+'</div>'
	+'<div class="card-body">'
	+'<p><b>What are called minerals?</b><br>'
	+'A mineral is a naturally occurring inorganic solid, with a definite chemical composition, and an ordered atomic arrangement. This may seem a bit of a mouthful, but if you break it down it becomes' +' simpler. Minerals are naturally occurring. They are not made by humans. Minerals are inorganic.'
	+'</p>'
	+'<p><b>Different Types of Minerals</b><br>'
	+'<ul><li>Minerals are classified based on their crystal form and chemistry. Minerals are divided into two types namely <b>metallic</b> and <b>non-metallic</b>.<br>'
	+' <li>More than 4,000 naturally occurring minerals-inorganic solids that have a characteristic chemical composition and specific crystal structure-have been found on Earth.'
	+' <li>The five most common mineral groups in rock are the silicates, carbonates, sulfates, halides, and oxides. There are about 4000 known minerals in the Earth\'s crust, and about 92 % of them are'
	+' silicates. <li>The most abundant silicate is called plagioclase.</ul>'
	+'</p>'
	+'<p><b>Identification based on the various physical properties of minerals are as follows </b><br>'
	+'<ul>'
	+'<li>Form '
	+'<li>Colour '
	+'<li>Streak '
	+'<li>Luster '
	+'<li>Fracture '
	+'<li>Cleavage '
	+'<li>Hardness '
	+'<li>Specific Gravity (Density) '
	+'<li>Degree of Transparency '
	+'<li>Special Properties'
	+'</ul></p>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	$("#main-div").html(htm+thoery);	


var copyMineralid;

$(document).ready(function() {
	 
	 $('#myresult').hide();
	 $('#myimage').hide();
	 $('#originalName').hide();

	 $('#mineral').change(function(){
		 mineralSelect();
	 });
}); 
var temp=0;
var attemptCount=0;
function mineralSelect(){
	attemptCount=0;
		$("#helpTip").show();
		$('#info_div').html(""); 
		$('#myresult').show();
		$('#myimage').show();
		$('#originalName').show();
		$("#helpTip").html("Select correct name from selection box ");
		 $("#helpTip").addClass("blink");
		tempMasterJson.demo = masterJsonArr;
		
		var tempmineral=$('#mineral :selected').val();
		
	  var mineral=parseInt(tempmineral);
		for(i=0,j=1;i<tempMasterJson.demo.length;i++,j++){	
			 if(mineral==tempMasterJson.demo[i].mineralId){	
				 copyMineralid=i;
				 var text='<div class="col-lg-2  col-sm-12">'
					 	+'</div>'
					 	+'<div class="container col-lg-4 col-sm-12 imgLens">'
					 	+'<img id="myimage"  class="img-fluid myImage" style="background-repeat: no-repeat;" src="'+tempMasterJson.demo[i].src+'" width="500" height="300" ><br>'
					 	+'<br>'
					 	+'<br>'
					 	+'<div class="row" id="previewPanel" >'
					 	previewPanel();
					 	text+='</div>'
						+'<br>'
					 	+'<strong><b id="SelectOriginalName">what is the name of above Mineral ?</b></strong>'
					 	+'<br>'
					 	+'<br>'
					 	+'<select class="custom-select" id="originalName"  >'
					 	+'<option  value="">------Select original name of mineral ------</option>'
				for(i=0;i<tempMasterJson.demo.length;i++){	
					text+='<option  value="'+tempMasterJson.demo[i].mineralId+'">'+tempMasterJson.demo[i].originalName +'</option>'
				}
			 	text+='</select>'
				 	+'<br>'
				 	+'<br>'
				 	+'<div class=" " id="error" >'
		 			+'</div>'
					+'</div>'
				 	+'<div class="container  col-lg-4 col-sm-12 img-zoom-container">'
				 	+'<div id="myresult" class="container img-zoom-result"></div>'
				 	+'</div>'
				 	+'<div class="col-sm-1">'
		 			+'</div>'

		 		$('#info_div').html(text);
		 		imageZoom("myimage", "myresult");
		 		
			 }
		
			$('#originalName').change(function()
			{
				attemptCount++;
					temp=4-attemptCount;
								if(temp>1&& temp<4)
									{										
										$("#helpTip").html("Select correct name, You have only "+temp+" attempt !!!");
										$("#helpTip").addClass("blink");
										originalName();
									}
									else if(temp==1)
									{
										
										$("#helpTip").html("this is your last attempt !!!");
										$("#helpTip").addClass("blink");
										originalName();
									}
									else if(temp==0)
									{
										$("#helpTip").html("Name of selected mineral is - "+tempMasterJson.demo[copyMineralid].originalName);
										$("#helpTip").addClass("blink");
									
										originalName();
									}
									else if(temp<0)
									{
										originalName();
										
									}
						 	    	//$("#error").html(str1);
						 	
				
				
			});
		}
		
		function previewPanel(){
				
						if("src1" in tempMasterJson.demo[copyMineralid] ){
						text+='<div class="col-lg-2 " id="previewPanel1" >'
							+'<center><img id="preview1"  class=" img-fluid previewImg" src="'+tempMasterJson.demo[copyMineralid].src1+'" width="90" height="90" ></center>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src2" in tempMasterJson.demo[copyMineralid]){
							text+='<div class="col-lg-2 " id="previewPanel2" >'
							+'<center><img id="preview2"  class=" img-fluid previewImg"  style="background-repeat: no-repeat;" src="'+tempMasterJson.demo[copyMineralid].src2+'" width="90" height="90" ></center>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src3" in tempMasterJson.demo[copyMineralid]){
							text+='<div class="col-lg-2 " id="previewPanel3" >'
							+'<center><img id="preview3"  class="img-fluid previewImg"  style="background-repeat: no-repeat;"  src="'+tempMasterJson.demo[copyMineralid].src3+'" width="90" height="90" ></center>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src4" in tempMasterJson.demo[copyMineralid]){
							text+='<div class="col-lg-2  " id="previewPanel4" >'
							+'<center><img id="preview4"  class="img-fluid previewImg" style="background-repeat: no-repeat;"  src="'+tempMasterJson.demo[copyMineralid].src4+'" width="90" height="90" ></center>'
							+'</div>'
							$("#previewPanel").append(text);
						}
						if("src" in tempMasterJson.demo[copyMineralid] ){
							text+='<div class="col-lg-2 " id="previewPanel5" >'
								+'<center><img id="preview5"  class="img-fluid previewImg" style="background-repeat: no-repeat;" src="'+tempMasterJson.demo[copyMineralid].src+'" width="90" height="90" ></center>'
								+'</div>'
								$("#previewPanel").append(text);
							}
						
							
				
		}
		$('#preview1').click(function(){
			var images = $('#preview1').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview2').click(function(){
			var images = $('#preview2').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview3').click(function(){
			var images = $('#preview3').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview4').click(function(){
			var images = $('#preview4').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		$('#preview5').click(function(){
			var images = $('#preview5').attr('src');
			$('#myimage').attr("src",images);
			$('#myresult').css('background-image', 'url(' + images + ')');
		});
		
		function originalName(){
			$("#mineral").attr("disabled", true);
			for(i=0;i<tempMasterJson.demo.length;i++){
					var mineral=$('#mineral :selected').val();
					var originalName=$('#originalName :selected').val();
						 	if(mineral==originalName){
								$("#helpTip").hide();
						 		$('#info_div').html("");

						 		var text='<div class="container col-lg-5  col-sm-12" >'
						 				+'<div class="heading_div">'
						 				+'<b><center>'+tempMasterJson.demo[copyMineralid].originalName+'</center></b>'
						 				+'</div>'
						 				+'<div class="row " >'
						 				
						 				+'<div class="container col-lg-4 imgLens " id="imgScreen" >'
						 				+'<img id="myimage"  class="img-fluid myImage myImageScreen" src="'+tempMasterJson.demo[copyMineralid].src+'"   >'
						 				+'</div>'
						 				
						 				+'<div class="container  col-lg-7 col-sm-12 img-zoom-container">'
										+'<div id="myresult" class=" container img-zoom-result img-zoom-result-screen" style="margin-top:50px;" ></div>'
									 	+'</div>'
						 				+'</div>'
						 				+'<hr class="hrStyle">'
						 				+'<div class="row " >'
						 				+'<br>'
						 				
						 				+'<div class="col-lg-12 col-sm-12 " id="answerPanel" >'
						 				+'</div>'
						 				+'</div>'
						 				
						 				+'</div>'
						 				
						 			  	+'<div class="container col-lg-6 col-sm-12  ">'
						 				+'<div class="container heading_div">'
						 				+'<b><center>IDENTIFICATIONS OF MINERAL</center></b>'
						 				+'</div>'
						 			
						 				+'<div class="container col-lg-12 col-sm-12" style=" height: 700px; overflow-y: scroll;margin:10px;">'
			 			        var option=[];	
						 		var questionLength=tempMasterJson.demo[copyMineralid].question.length;
						 		
						 	for(var j=0;j<questionLength;j++){

				 				text+='<br><button type="button" class="btn btnStyle" id="questionNumBtn"  style="cursor: default;"><b>Question No - '+(j+1)+'</b></button><br>'
					 				+'<br><caption> <h5><b>'+tempMasterJson.demo[copyMineralid].question[j].question+'</b></h5></caption><br>'
					 				+'<b><div class="row">'
				 				
				 				option[0]=tempMasterJson.demo[copyMineralid].question[j].wrongAns1;
				 				option[1]=tempMasterJson.demo[copyMineralid].question[j].wrongAns2;
				 				option[2]=tempMasterJson.demo[copyMineralid].question[j].wrongAns3;
				 				
				 				const pos = randomIntFromIntervalPos(0, 3);

				 				text+='<div class="form-check">'
				 				var ans=tempMasterJson.demo[copyMineralid].question[j].correctAns;
				 				for(var op=0,p=0;op<4;op++){	
				 							if(pos==op){
				 								text+='<input class="form-check-input" type="radio" name="radioOption'+j+'" value="'+ans+'" id="radioOption" >'
				 									+'<b>'+ans+'</b></input><br>'
				 							}else{
				 								text+='<input class="form-check-input" type="radio" name="radioOption'+j+'" value="'+option[p]+'" id="radioOption" >'
				 									+'<b>'+option[p]+'</b></input><br>'
				 								p++;
				 							}
				 						}
				 				text+='</div></div></b>'
				 					}
						 		text+='<br><button type="button" class="btn btn-success "   id="smt" data-toggle="modal" data-target="#myModal"  >Submit</button></div>'
						 		+'</div>'
						 		
						 		
						 		$('#info_div').html(text);	
						 		
						 		imageZoomquestionnairePage("myimage", "myresult");
								
						 	}
						
						 
						 	
						} 
			$("#smt").click(function(){
				smtQuestion();
			});
}

function smtQuestion(){
	$('#answerPanel').show();
	var selected=[];
	var correctAnsCount=0;
	var wrongAnsCount=0;
	var notSelected=0;
	
	$("#helpTip").html("You need to perform the task for all the available minerals to complete the experiment. Find \"Click here to select next mineral\" button to continue.");
	$("#helpTip").addClass("blink");
	
	var questionLength=tempMasterJson.demo[copyMineralid].question.length;
	$("input[id='radioOption']").next().css('color', '#000');
	
	for(var z=0; z <questionLength ;z++){
		selected[z]= $("input[name='radioOption"+z+"']:checked").val();		
	}

	for(var j=0,k=0;j<questionLength;j++,k++){
	  
	   if(selected[j]==tempMasterJson.demo[copyMineralid].question[j].correctAns){
		   	correctAnsCount++;
		   	$("input[name='radioOption"+j+"']:checked").css('accent-color', 'green');
		   	$("input[name='radioOption"+j+"']:checked").next().css('color', 'green');
	   }else if(selected[j]==tempMasterJson.demo[copyMineralid].question[j].wrongAns1||selected[j]==tempMasterJson.demo[copyMineralid].question[j].wrongAns2||selected[j]==tempMasterJson.demo[copyMineralid].question[j].wrongAns3)
	   {
		   	wrongAnsCount++;
		    $("input[name='radioOption"+j+"']:checked").css('accent-color', 'red');
			$("input[name='radioOption"+j+"']:checked").next().css('color', 'red');
	   }else{
		   	notSelected++;
	   }
  }
	
	if(notSelected==questionLength){
		$("#helpTip").html("");
		// $("#helpTip").removeClass("blink");	
		$('#mineral :selected').attr('disabled', false);
		resultModal();
		$("#modalHeading").html("Alert");
		$("#AddResult").html('<strong>Please attempt all questions .</strong>');
		$("#ModalFooter").html('<button type="button" class="btn btn-primary"  data-dismiss="modal" >OK</button>');
	}else{
		$('#mineral :selected').attr('disabled', true);
		var answerPanel,AddResult;	
		resultModal();
		answerPanel='<button type="button" class="btn btn-success blink position"   id="selectAnotherMineral">Click here to select next mineral</button>'
			+'<div class="summary"><strong id="correctAns" enable="true">Correct Answer :'+correctAnsCount+' </strong><br>'
			+'<strong id="wrongAns">Wrong Answer : '+wrongAnsCount+'</strong><br>'
	  		+'<strong id="notSelected">Skipped Question : '+notSelected+' </strong><br>'
		  	+'</div>'
			
			$("#modalHeading").html("Selected mineral : " + tempMasterJson.demo[copyMineralid].originalName);
		AddResult='<p class="properties"></p>'
				  +'<p class="properties"><b>Chemical classification :</b> '+tempMasterJson.demo[copyMineralid].chemical_Classification+'</p>'
				  +'<p class="properties"><b>Colour :</b> '+tempMasterJson.demo[copyMineralid].colour+'</p>'
				  +'<p class="properties"><b>Streak :</b> '+tempMasterJson.demo[copyMineralid].streak+'</p>'
				  +'<p class="properties"><b>Luster :</b> '+tempMasterJson.demo[copyMineralid].luster+'</p>'
				  +'<p class="properties"><b>Mohs hardness :</b> '+tempMasterJson.demo[copyMineralid].mohs_Hardness+'</p>'
				  +'<p class="properties"><b>Cleavage :</b> '+tempMasterJson.demo[copyMineralid].cleavage+'</p>'
				  +'<p class="properties"><b>Diaphaneity :</b> '+tempMasterJson.demo[copyMineralid].diaphaneity+'</p>'
				  +'<p class="properties"><b>Gravity :</b> '+tempMasterJson.demo[copyMineralid].gravity+'</p>'
				  +'<p class="properties"><b>Chemical composition :</b> '+tempMasterJson.demo[copyMineralid].chemical_Composition+'</p>'
				  +'<p class="properties"><b>Special properties :</b> '+tempMasterJson.demo[copyMineralid].specialProperties+'</p>'
				 
		
		if(mineralCount != maxIndexArr){
			 	$("#answerPanel").html(answerPanel);
//			 	$("#modalHeading").html("Summary");
			 	$("#ModalFooter").html('<button type="button" class="btn btnStyle"  data-dismiss="modal" style="padding: 5px 20px;" >OK</button>');
			 	$("#AddResult").html(AddResult);
			  	$('#info_div').html();
			}else{
				$("#helpTip").html("");
				$("#helpTip").removeClass("blink");
				$("#answerPanel").html(answerPanel);
				$("#selectAnotherMineral").hide();
//				$("#modalHeading").html("Summary");
				$("#AddResult").html("<center><strong style='color:green;'>Congratulation!!<br> You have completed the experiment successfully.</strong></center><br/>" + AddResult);				
				$("#ModalFooter").html('<button type="button" class="btn btnStyle"  data-dismiss="modal" style="padding: 5px 20px;" >OK</button><button type="button" class="btn btnStyle"  data-dismiss="modal" id="refreshPage" style="padding: 5px 20px;" >Exit</button>');
			}
		}
	$("#refreshPage").click(function(){
		location.reload(true);
	 });	
	 
		$("#selectAnotherMineral").click(function(){
			mineralCount++;
			$("#mineral").attr("disabled", false);
			$("#helpTip").html("");
			$("#helpTip").removeClass("blink");
			$("#info_div").html("");
			$("#info_div").html(thoery);
		 });	
	}
}

function resultModal(){
	var modelAnswerPanel='<!-- Model for answer panel -->'
		+' <div class="modal fade" id="myModal">'
		+' <div class="modal-dialog">'
		+' <div class="modal-content">'
      
		+' <!-- Modal Header -->'
		+' <div class="modal-header modal_heading_div">'
		+'  <h4 class="modal-title" id="modalHeading">Confirmation Box</h4>'
		+'  <button type="button" class="close" data-dismiss="modal" style="color:#fff;">&times;</button>'
		+' </div>'
        
		+'<!-- Modal body -->'
		+' <div class="modal-body" id="modalBody">'
		+'  <b style="color:red" id="AddResult"></b>'
		+' </div>'
        
		+' <!-- Modal footer -->'
		+' <div class="modal-footer" id="ModalFooter">'
		
		+'  </div>'
		+' </div>'
		+' </div>'
		+' </div>'
		$('#info_div').append(modelAnswerPanel);
}

function imageZoom(imgID, resultID) {
	  var img, lens, result, cx, cy;
	  img = document.getElementById(imgID);
	  result = document.getElementById(resultID);
	  /* create lens: */
	  lens = document.createElement("DIV");
	  lens.setAttribute("class", "img-zoom-lens");

	  /* insert lens: */
	  img.parentElement.insertBefore(lens, img);
	  /* calculate the ratio between result DIV and lens: */
	  cx = result.offsetWidth / lens.offsetWidth;
	  cy = result.offsetHeight / lens.offsetHeight;
	  /* set background properties for the result DIV: */
	  result.style.backgroundImage = "url('" + img.src + "')";
	  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
	  /*
		 * execute a function when someone moves the cursor over the image, or
		 * the lens:
		 */
	  lens.addEventListener("mousemove", moveLens);
	  img.addEventListener("mousemove", moveLens);
	  /* and also for touch screens: */
	  lens.addEventListener("touchmove", moveLens);
	  img.addEventListener("touchmove", moveLens);
	  function moveLens(e) {
	    var pos, x, y;
	    /* prevent any other actions that may occur when moving over the image: */
	    e.preventDefault();
	    /* get the cursor's x and y positions: */
	    pos = getCursorPos(e);
	    /* calculate the position of the lens: */
	    x = pos.x - (lens.offsetWidth / 2);
	    y = pos.y - (lens.offsetHeight / 2);
	    /* prevent the lens from being positioned outside the image: */
	    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
	    if (x < 0) {x = 0;}
	    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
	    if (y < 0) {y = 0;}
	    /* set the position of the lens: */
	    lens.style.left = (x+5) + "px";
	    lens.style.top = (y+5) + "px";
	    /* display what the lens "sees": */
	    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
	  }
	  function getCursorPos(e) {
	    var a, x = 0, y = 0;
	    e = e || window.event;
	    /* get the x and y positions of the image: */
	    a = img.getBoundingClientRect();
	    /* calculate the cursor's x and y coordinates, relative to the image: */
	    x = e.pageX - a.left;
	    y = e.pageY - a.top;
	    /* consider any page scrolling: */
	    x = x - window.pageXOffset;
	    y = y - window.pageYOffset;
	    return {x : x, y : y};
	  }
}

function imageZoomquestionnairePage(imgID, resultID) {
	 var img, lens, result, cx, cy;
	  img = document.getElementById(imgID);
	  result = document.getElementById(resultID);
	  /* create lens: */
	  lens = document.createElement("DIV");
	  lens.setAttribute("class", "img-zoom-lens");

	  /* insert lens: */
	  img.parentElement.insertBefore(lens, img);
	  /* calculate the ratio between result DIV and lens: */
	  cx = result.offsetWidth / lens.offsetWidth;
	  cy = result.offsetHeight / lens.offsetHeight;
	  /* set background properties for the result DIV: */
	  result.style.backgroundImage = "url('" + img.src + "')";
	  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
	  /*
		 * execute a function when someone moves the cursor over the image, or
		 * the lens:
		 */
	  lens.addEventListener("mousemove", moveLens);
	  img.addEventListener("mousemove", moveLens);
	  /* and also for touch screens: */
	  lens.addEventListener("touchmove", moveLens);
	  img.addEventListener("touchmove", moveLens);
	  function moveLens(e) {
	    var pos, x, y;
	    /* prevent any other actions that may occur when moving over the image: */
	    e.preventDefault();
	    /* get the cursor's x and y positions: */
	    pos = getCursorPos(e);
	    /* calculate the position of the lens: */
	    x = pos.x - (lens.offsetWidth / 2);
	    y = pos.y - (lens.offsetHeight / 2);
	    /* prevent the lens from being positioned outside the image: */
	    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
	    if (x < 0) {x = 0;}
	    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
	    if (y < 0) {y = 0;}
	    /* set the position of the lens: */
	    lens.style.left = (x+5) + "px";
	    lens.style.top = (y+5) + "px";
	    /* display what the lens "sees": */
	    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
	  }
	  function getCursorPos(e) {
	    var a, x = 0, y = 0;
	    e = e || window.event;
	    /* get the x and y positions of the image: */
	    a = img.getBoundingClientRect();
	    /* calculate the cursor's x and y coordinates, relative to the image: */
	    x = e.pageX - a.left;
	    y = e.pageY - a.top;
	    /* consider any page scrolling: */
	    x = x - window.pageXOffset;
	    y = y - window.pageYOffset;
	    return {x : x, y : y};
	  
	  }
}
