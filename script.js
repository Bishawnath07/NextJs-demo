// for navbar 

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


//


document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".nav-links");
  
    burger.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  });
  
  // for taps 

  function openTab(tabId) {
    const tabs = document.getElementsByClassName('tab');
    for (const tab of tabs) {
      tab.classList.remove('active');
    }
    const cards = document.getElementsByClassName('card');
    for (const card of cards) {
      card.style.display = 'none';
    }
    document.getElementById(tabId).style.display = 'block';
    document.querySelector(`[onclick="openTab('${tabId}')]`).classList.add('active');
  }

  //  for navPills

  var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.backgroundColor="#9c27b0";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
// showPanel(0,'#fff');






