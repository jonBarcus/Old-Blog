var myPortfolio = {

	onReady: function(){
		myPortfolio.hideResume();
		myPortfolio.hideContactLinks();
		$("#resume").click(myPortfolio.showResume);
		$("#projects").click(myPortfolio.showProjects);
		$("#contact").click(myPortfolio.showContact);
	},

	hideResume: function(){
		$("#resume-pdf").hide();
	},

	hideContactLinks: function(){
		$(".sub-menu").hide();
	},

	showResume: function(){
		$("#resume").toggleClass("menu-expanded");
		$("#resume-pdf").slideToggle();
	},

	showProjects: function(){
		$("#projects").toggleClass("menu-expanded");
	},

	showContact: function(){
		$("#contact").toggleClass("menu-expanded");
	}


}

$(document).ready(myPortfolio.onReady);
