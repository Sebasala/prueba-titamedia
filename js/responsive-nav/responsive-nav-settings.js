window.onload = function() {
	var nav = responsiveNav(".nav-collapse", { 
	  insert: "after", // String: Insert the toggle before or after the navigation
	  customToggle: "toggle-nav", // Selector: Specify the ID of a custom toggle
	  closeOnNavClick: true, // Boolean: Close the navigation when one of the links are clicked
	});
};