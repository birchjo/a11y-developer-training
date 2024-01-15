(function () {
  const form_id = "contact_form";
  const $form = document.querySelector(`#${form_id}`);
  const $input = document.querySelectorAll(
    `#${form_id} input[type=text], #${form_id} input[type=email], #${form_id} input:checked`
  );

  let getFormData = function () {
    let data = [];

    $input.forEach(function (item, index) {
      data.push(item.value);
    });

    return data;
  };

  // Handle submission
  $form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from submitting
    let form_data = getFormData();

    console.log("Form submitted!", form_data);
  });
})();
