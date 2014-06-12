var myPortfolio = {

	onReady: function(){
		myPortfolio.hideResume();
		$("#resume").click(myPortfolio.showResume);	
	},
	
	hideResume: function(){
		$("#resume-pdf").hide();
	},
		
	showResume: function(){
		$("#resume").toggleClass("menu-expanded");
		$("#resume-pdf").slideToggle();
	}	
	
}

$(document).ready(myPortfolio.onReady);