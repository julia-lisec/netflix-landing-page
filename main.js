const tabItems = document.quereySelectorAll('.tab-item');
const tabContentItems = document.quereySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {

  // Add border to current tab
  this.classList.add('tab-border');

}

// Listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
