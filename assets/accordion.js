(function(){
  var acc = document.getElementsByClassName("accordion__item");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      // this.querySelector('.panel').classList.toggle("open")
    });
  }
})();
