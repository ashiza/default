document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
    /*
	$("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active"); //Remove any "active" class
        $(this).addClass("active"); //Add "active" class to selected tab
        $(".tab_content").hide(); //Hide all tab content
        var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
        $(activeTab).fadeIn(); //Fade in the active content
        return false;
    });
	*/

	const tabs = document.querySelectorAll(".tabs li");
	const sections = document.querySelectorAll(".tab_content");

	tabs.forEach(tab => {
	  tab.addEventListener("click", e => {
		e.preventDefault();
		removeActiveTab();
		addActiveTab(tab);
	  });
	})

	const removeActiveTab = () => {
	  tabs.forEach(tab => {
		tab.classList.remove("active");
	  });
	  sections.forEach(section => {
		section.classList.remove("active");
	  });
	}

	const addActiveTab = tab => {
	  tab.classList.add("active");
	  const href = tab.querySelector("a").getAttribute("href");
	  const matchingSection = document.querySelector(href);
	  matchingSection.classList.add("active");
	}
});
