// set the value of the element turbulenceBaseSeedRange to a random number between 0 and 100
document.getElementById("turbulenceBaseSeedRange").value = Math.floor(
  Math.random() * 1000
);
// set each atrribute of the filter of the svg element to the values of the corresponding range inputs based on the data-filter-id and data-filter-attr attributes and set the output element's value to the value of the range input when the input's value changes
const sliders = document.querySelectorAll(".slider__range");
const filter = document.querySelector(".filter");
sliders.forEach((slider) => {
  // set the output element to the value of the range input
  const output = slider.parentNode.querySelector("output");
  output.value = slider.value;
  const filterId = slider.dataset.filterId;
  const filterAttr = slider.dataset.filterAttr;
  const filterElement = filter.querySelector(`#${filterId}`);
  filterElement.setAttribute(filterAttr, slider.value);
  slider.addEventListener("input", function () {
    output.value = this.value;
    filterElement.setAttribute(filterAttr, this.value);
  });
});