var verticalnav=document.getElementById('verticalnav');

var pull=document.getElementById('pull');
pull.addEventListener('click',pullnavbar);

var verticalnavFlag=true;
function pullnavbar()
{
    if(verticalnavFlag)
     {  
        verticalnav.style.left=0+"px";
        verticalnavFlag=false;
        pull.textContent="<<<";
     } 

     else {
            verticalnavFlag=true;
            verticalnav.style.left=-140+"px";
            pull.textContent=">>>";
          }  

}

var footer=document.getElementById('subs');
footer.style.left=(window.innerWidth/2)-(footer.getBoundingClientRect().width/2)+"px";

var flipcard=document.getElementsByClassName("flip-card")[0];



var img=document.getElementById('img'); //525 642
if(window.innerWidth<525 && window.innerHeight<642)
{
   //alert(window.innerWidth+"  "+ window.innerHeight)
   flipcard.style.width=(window.innerWidth/2)+"px";
   img.style.width=(window.innerWidth/2)+"px";
}
 































var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

