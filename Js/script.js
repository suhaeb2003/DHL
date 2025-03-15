const btnOne = document.querySelector(".btnOne");
const btnTwo = document.querySelector(".btnTwo");

const toggleShippingBtnClass = (activeBtn, inactiveBtn) => {
  inactiveBtn.classList.remove("shipping_btn");
  activeBtn.classList.add("shipping_btn");
};

btnOne.addEventListener("click", () => {
  toggleShippingBtnClass(btnOne, btnTwo);
});

btnTwo.addEventListener("click", () => {
  toggleShippingBtnClass(btnTwo, btnOne);
});


let flexSwitch=document.querySelector("#SwitchForChekbox");
const selectCountry = document.querySelector("#select_country");
const diselectCountry = document.querySelector("#diselect_country");
const selectCountryTo = document.querySelector("#select_countryTo");
const diselectCountryTo = document.querySelector("#diselect_countryTo");


// Ensure elements exist before adding event listener
if (flexSwitch && selectCountry && diselectCountry && selectCountryTo && diselectCountryTo) {
  flexSwitch.addEventListener("change", function () {
    const isChecked = this.checked;
    selectCountry.classList.toggle("d-none", !isChecked);
    selectCountry.classList.toggle("d-block", isChecked);
    diselectCountry.classList.toggle("d-none", isChecked);
    diselectCountry.classList.toggle("d-block", !isChecked);

    selectCountryTo.classList.toggle("d-block", !isChecked);
    selectCountryTo.classList.toggle("d-none", isChecked);
    diselectCountryTo.classList.toggle("d-block", isChecked);
    diselectCountryTo.classList.toggle("d-none", !isChecked);
  });
}


const newTab = document.querySelector("#newTab");
const selectBusinessCountry = document.querySelector("#SelectBusinessCountry");
const disSelectBusinessCountry = document.querySelector("#disSelectBusinessCountry");
const sbForTo = document.querySelector("#SBforTo");
const disSbForTo = document.querySelector("#DisSBforTo");

// Ensure elements exist before adding event listener
if (newTab && selectBusinessCountry && disSelectBusinessCountry && sbForTo && disSbForTo) {
  newTab.addEventListener("change", function () {
    const isChecked = this.checked;

    // Toggle country selection visibility
    selectBusinessCountry.classList.toggle("d-none", !isChecked);
    selectBusinessCountry.classList.toggle("d-block", isChecked);
    disSelectBusinessCountry.classList.toggle("d-none", isChecked);
    disSelectBusinessCountry.classList.toggle("d-block", !isChecked);

    // Toggle SBforTo visibility
    sbForTo.classList.toggle("d-none", isChecked);
    sbForTo.classList.toggle("d-block", !isChecked);
    disSbForTo.classList.toggle("d-none", !isChecked);
    disSbForTo.classList.toggle("d-block", isChecked);
  });
}

const openLbox = document.querySelectorAll("#openLBox"); // Query all openLBox elements
const closeLbox = document.querySelector("#closeChangeLocation"); // Query closeLBox element
const CLSection = document.querySelector("#ChangeLocation"); // Query the ChangeLocation section


openLbox.forEach(button => {
  button.addEventListener("click", () => {
    CLSection.style.display = (CLSection.style.display === "block") ? "none" : "block";
  });
});

closeLbox.addEventListener("click", () => {
  CLSection.style.display = "none";
});

