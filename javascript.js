var myPortfolio = {

	onReady: function(){
		myPortfolio.hideResume();
		myPortfolio.hideContactLinks();
		$("#resume").hover(myPortfolio.showResume);
		$("#projects").hover(myPortfolio.showProjects);
		$("#contact").hover(myPortfolio.showContact);
		// $("#contact").hover(myPortfolio.showContactLinks);
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
		myPortfolio.showContactLinks();
	},

	showContactLinks: function(){
		$(".sub-menu").toggle();
	},

	goToOtherSite: function(){
		$("#linkedin").click(function(){
			window.open('linkedin.com/in/jonathanbarcus');
		});

	}


}

$(document).ready(myPortfolio.onReady);
