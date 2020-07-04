// jshint esversion:6
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');



// slect tab content item
function selectItem(e) {
  // add border to current tab
  removeBorder();
  removeShowClass();
  this.classList.add('tab-border');
  const tabContentItem=document.getElementById(`${this.id}-content`);
  tabContentItem.classList.add('show');


}

tabItems.forEach(item => {
  item.addEventListener('click', selectItem);
});

function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShowClass(){
  tabContentItems.forEach(item=>item.classList.remove('show'));
}
