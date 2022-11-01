// GetStarted - A simple responsive Startpage
// Author: MrAlpha786 (github.con/MrAlpha786)

// Username
//document.getElementById("username").innerHTML = userName;

// Searchbar
const searchEngines = {
    Google: "https://www.google.com/search?q=",
    DuckDuckGo: "https://duckduckgo.com/?q=",
    Bing: "https://www.bing.com/search?q=",
    Yahoo: "https://search.yahoo.com/search?p="
};
const searchField = document.getElementById("search-field");
const clearFieldButton = document.getElementById("clear-field");


if (!Object.keys(searchEngines).includes(searchEngine)) {
    searchEngine = "Google"
}

var searchUrl = searchEngines[searchEngine];

searchField.placeholder = "Keresés " + searchEngine + "...";

// Check searchbar for keystrokes
searchField.addEventListener("keyup", function(event) {

    // If there is some text in searchbar, display clear-field button
    if (searchField.value != "") {
        clearFieldButton.style.visibility = "visible";
    } else {
        clearFieldButton.style.visibility = "hidden";
    }

    // If last keystroke was "Enter" treat it as search-button is clicked
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("search-button").click();

    }
});

// Clear text and keep searchbar in focus
function clearField() {
    searchField.value = "";
    clearFieldButton.style.visibility = "hidden";
    searchField.focus()
}

// Search query
function search() {
    if (searchField.value != "") {
        var val = searchField.value;
        window.open(searchUrl + val, "_self");
    }
    clearField();
}


// Show Scrollbar on scrolling
window.addEventListener('scroll', function showScrollbar(e) {
	//console.log(e.target);
	if(e.target!='#document'){
		if (e.target.classList.contains("visible-scrollbar") === false) {
			e.target.classList.add("visible-scrollbar");
			// Hide Scrollbar after 1.5s
			setTimeout(hideScrollbar, 1500, e);
		}
	}
}, true);

// Hide Scrollbar
function hideScrollbar(e) {
    e.target.classList.remove("visible-scrollbar");
}

// Check if dark-mode is enabled
if(localStorage.getItem('darkMode') == 'enabled'){
    document.body.classList.toggle("dark-mode");
}

// Toggle dark-mode of body
function toggleMode() {
    document.body.classList.toggle("dark-mode");

    // Save mode preference to local storage
    // It will keep dark-mode persistant across browser  sessions
    if(document.body.classList.contains("dark-mode")){
        localStorage.setItem('darkMode', 'enabled');
    }else{
        localStorage.setItem('darkMode', 'disabled');
    }
}

//tabok és tartalom
var tabs     = document.getElementById('tab-container');
var contents = document.getElementById('content-container');

for (let i=0; i<cards.length; i++)
{
	//tabok
	if(i==0) tabs.innerHTML+='<div class="tab active" data-tab="tab-'+i+'">'+cards[i].name+'</div>';
	else tabs.innerHTML+='<div class="tab" data-tab="tab-'+i+'">'+cards[i].name+'</div>';
	var tab = document.querySelectorAll('.tab');
	
	//content
	if(i==0) contents.innerHTML+='<div class="content active" data-tab="tab-'+i+'"></div>';
	else contents.innerHTML+='<div class="content" data-tab="tab-'+i+'"></div>';
	var sites = Object.keys(cards[i].bookmarks);
	var content = document.querySelectorAll('.content');
	for (let j=0; j<sites.length; j++){
        var a_link = document.createElement('a');
        a_link.innerHTML = sites[j];
        a_link.href = 'https://'+cards[i].bookmarks[sites[j]];
        content[i].appendChild(a_link);
    }
	tab[i].addEventListener('mouseenter', function(){
        for (let j=0; j<tab.length; j++){
            tab[j].classList.remove('active');
        }
        tab[i].classList.add('active');
        for (let j=0; j<content.length; j++){
            content[j].classList.remove('active');
        }
        content[i].classList.add('active');
    })
}