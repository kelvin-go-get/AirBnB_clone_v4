(document).ready(function () {
  const selectedAmenities = {};
  $('li input[type="checkbox"]').change(function () {
    if (this.checked) {
             amenities[this.dataset.name] = this.dataset.id;
   } else {
           delete amenities[this.dataset.name];
    }
    $(".amenities h4").text(Object.keys(amenities).sort().join(", "));
 });
});
