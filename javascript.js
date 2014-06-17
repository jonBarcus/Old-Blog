var myPortfolio = {

	onReady: function(){
		myPortfolio.hideResume();
		$("#resume").click(myPortfolio.showResume);
		$("#projects").click(myPortfolio.showProjects);
	},
	
	hideResume: function(){
		$("#resume-pdf").hide();
	},
		
	showResume: function(){
		$("#resume").toggleClass("menu-expanded");
		$("#resume-pdf").slideToggle();
	},
	
	showProjects: function(){
		$("#projects").toggleClass("menu-expanded");
	}	
	
	
}

$(document).ready(myPortfolio.onReady);