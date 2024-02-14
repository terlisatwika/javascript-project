const wrapper =document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options"),

// array of some countries
 letcountries = ["Afghanistan", "Algeria", "Argentina", 'Algeria","Australia", "Bangladesh","Thailand"]

function addCountry(selectedCountry) {
  options.innerHTML = "";
    countries.forEach(country => { 
      // if selected country and country value is  same then add selected class 
      let isSelected = country == selectedCountry ? "selected" : "";

    // adding each  country inside li and inserting all li inside options tag 
    let li ='<li onclick="updateName(this)" class=${isSelected}">${country}</li>';
    options.insertAdjacentHTML("beforeend",li);
    });
  } 
  addCountry();
function updateName(selectedLi) {
  searchInp.value = "";
  addCountry(selectedLi.innerText);
wrapper.classList.remove("active");

selectBtn.firstElementChild.innerText = selectedLi.innerText;
}
searchInp.addEventListener("Keyup",()=> {
  let arr = [];//creating empty array 
  let searchedval= searchInp.value.toLowerCase();
  //returning all countries from array which are start with user searched value
  // and mapping returned country with li and joining them
  arr = countries.filter(data =>{
    return data.toLowerCase().startsWith(searchedval);
  }).map(data => '<li onclick="updateName(this)">$(data)</li>').join("");
  options.innerHTML = arr ? arr :'<p>OOps! Country not found</p>';
});
selectBtn.addEventListener("click",()=> {
  wrapper.classList.toggle("active");

});

  



  



    
