# At Least One

## When to use

Used to validate that a date constucted using the service manual [date input](https://service-manual.nhs.uk/design-system/components/date-input) is valid in the given format. 

## How to use

- Ensure that you have an instance of the validator on the page. 

- Add the validator for the field: 
  ` nhsValidator.AtLeastOne['{Day field}', '{Month field}', '{Year field}', '{Error message}', {instance of validator});`

For example:

```
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="example-hint" role="group">
    <legend class="nhsuk-fieldset__legend nhsuk-label--l">
      <h1 class="nhsuk-fieldset__heading">
        What is your date of birth?
      </h1>
    </legend>
    <div class="nhsuk-hint" id="example-hint">
      For example, 15 3 1984
    </div>

    <div class="nhsuk-date-input" id="example">
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="example-day">
            Day
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="example-day" name="example-day" type="text" pattern="[0-9]*" inputmode="numeric">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="example-month">
            Month
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="example-month" name="example-month" type="text" pattern="[0-9]*" inputmode="numeric">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="example-year">
            Year
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4" id="example-year" name="example-year" type="text" pattern="[0-9]*" inputmode="numeric">
        </div>
      </div>
    </div>
  </fieldset>
</div>

<script>
  var validator = new nhsValidator.FormValidator(document.forms[0]);

  nhsValidator.Date('example-day', 'example-month', 'example-year', 'YYYY-MM-DD', validator)
</script>
```
