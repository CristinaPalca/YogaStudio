const nav_burger_btn = document.querySelector("#nav_bar_btn");
const nav_close_btn = document.querySelector("#nav_close_btn");
const nav_links = document.querySelector("#nav_links");

nav_burger_btn.addEventListener("click", extend_navbar);
nav_close_btn.addEventListener("click", hide_navbar);

function extend_navbar(){
  console.log("btn clicked");
  nav_links.style.display = "block";
  nav_burger_btn.style.display = "none";
  nav_close_btn.style.display = "block";
}

function hide_navbar(){
  console.log(" close btn clicked");
  nav_links.style.display = "none";
  nav_burger_btn.style.display = "block";
  nav_close_btn.style.display = "none";
}

var count_prev = 0;
var prev_enabled = false;
var next_enabled = true;
var count_next = 0;
const sm_width = 90;
const lg_width = 30;
const max_width = 300;
var count_length = document.querySelectorAll(".gallery_image_wrapper").length;
var prev_btn = document.querySelector(".previous_btn");
var next_btn = document.querySelector(".next_btn");
var position = 0;
var gallery = document.querySelector(".gallery_wrapper");

window.addEventListener('load', updateBtns);

function updateBtns(){
    if(!prev_enabled){
      prev_btn.classList.add("disabled_btn");
    }else{
      prev_btn.classList.remove("disabled_btn");
    }
    if(!next_enabled){
      next_btn.classList.add("disabled_btn");
    }else{
      next_btn.classList.remove("disabled_btn");
    }
}

function previous_image(){
  if(window.innerWidth <= 576){
    if(prev_enabled){
      gallery.style.transform = `translateX(${sm_width*++position}vw)`;
      count_prev++;
      if(position === 0){
        prev_enabled = false;
      }else{
        prev_enabled = true;
      }
      if(position === -(count_length - 1)){
        next_enabled = false;
      }else{
        next_enabled = true;
      }
      updateBtns();
    }
  }else if (window.innerWidth < 1000){
    if(prev_enabled){
      gallery.style.transform = `translateX(${lg_width*++position}vw)`;
      count_prev++;
      if(position === 0){
        prev_enabled = false;
      }else{
        prev_enabled = true;
      }
      if(position === -(count_length - 3)){
        next_enabled = false;
      }else{
        next_enabled = true;
      }
      updateBtns();
    }
  } else{
    if(prev_enabled){
      gallery.style.transform = `translateX(${300*++position}px)`;
      count_prev++;
      if(position === 0){
        prev_enabled = false;
      }else{
        prev_enabled = true;
      }
      if(position === -(count_length - 3)){
        next_enabled = false;
      }else{
        next_enabled = true;
      }
      updateBtns();
    }
  }
}
function next_image(){
  if(window.innerWidth <= 576){
    if(next_enabled){
      gallery.style.transform = `translateX(${sm_width*--position}vw)`;
      count_next++;
      //gallery.style.transform = `translateX(-${sm_width*(++count_next - count_prev)}vw)`;
      if(position === -(count_length - 1)){
        next_enabled = false;
      }else{
        next_enabled = true;
      }
      if(position === 0){
        prev_enabled = false;
      }else{
        prev_enabled = true;
      }
      updateBtns();
    }
  }else if(window.innerWidth < 1000){
    if(next_enabled){
      gallery.style.transform = `translateX(${lg_width*--position}vw)`;
      count_next++;
      if(position === -(count_length - 3)){
        next_enabled = false;
      }else{
        next_enabled = true;
      }
      if(position === 0){
        prev_enabled = false;
      }else{
        prev_enabled = true;
      }
      updateBtns();
    }
  }else{
    if(next_enabled){
      gallery.style.transform = `translateX(${300*--position}px)`;
      count_next++;
      if(position === -(count_length - 3)){
        next_enabled = false;
      }else{
        next_enabled = true;
      }
      if(position === 0){
        prev_enabled = false;
      }else{
        prev_enabled = true;
      }
      updateBtns();
    }
  }
}
