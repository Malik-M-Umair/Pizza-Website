let index = 0;
let classname = document.querySelectorAll('.description'); 
let value=document.querySelectorAll('.description').innerHTML;


function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

function changecolor() {
  let colors = ["rgba(255, 166, 0, 0.527)", "lightblue", "lightgreen", "grey", "purple"];
  document.body.style.background = colors[index++];
  if (index > colors.length - 1) {
    index = 0;
  }
}


classname.forEach(classnam => {
  classnam.addEventListener('mouseover', function () {
    this.innerHTML = "Pizza Size:....<br>Pizza Rate:...<br>Pizza Flavour:...."; 
  });
});
classname.forEach(classnam => {
  classnam.addEventListener('mouseout', function () {
    this.innerHTML = "Add to Cart"; 
  });
});
