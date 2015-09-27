$(document).ready(function(){
	$("#homepage").show();
	$("#aboutpage").hide();
	$("#projectspage").hide();
	$("#otherpage").hide();

	$("#home").click(function(){
		$("#homepage").show();
		$("#aboutpage").hide();
		$("#projectspage").hide();
		$("#otherpage").hide();
	});

	$("#about").click(function(){
		$("#homepage").hide();
		$("#aboutpage").show();
		$("#projectspage").hide();
		$("#otherpage").hide();
	});

	$("#projects").click(function(){
		$("#homepage").hide();
		$("#aboutpage").hide();
		$("#projectspage").show();
		$("#otherpage").hide();
	});

	$("#other").click(function(){
		$("#homepage").hide();
		$("#aboutpage").hide();
		$("#projectspage").hide();
		$("#otherpage").show();
	});
});