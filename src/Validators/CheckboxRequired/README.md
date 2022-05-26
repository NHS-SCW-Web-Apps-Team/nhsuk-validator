# Checkbox Required

## When to use

Used to validate that at least one checkbox has been checked when using the [checkbox component](https://service-manual.nhs.uk/design-system/components/checkboxes).

## How to use

- Ensure that you have an instance of the validator on the page. 

- Add the validator for the field: 
  `nhsValidator.CheckboxRequired('{Field name}', '{Error message}', {instance of validator});`

For example:

```
<div>
  <form>
    <fieldset class="nhsuk-fieldset" aria-describedby="example-hint">
      <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
        <h1 class="nhsuk-fieldset__heading">
          How would you like to be contacted?
        </h1>
      </legend>

      <div class="nhsuk-hint" id="example-hint">
        Select all options that are relevant to you.
      </div>

      <div class="nhsuk-checkboxes">

        <div class="nhsuk-checkboxes__item">
          <input class="nhsuk-checkboxes__input" id="example-1" name="example" type="checkbox" value="email">
          <label class="nhsuk-label nhsuk-checkboxes__label" for="example-1">
            Email
          </label>
        </div>

        <div class="nhsuk-checkboxes__item">
          <input class="nhsuk-checkboxes__input" id="example-2" name="example" type="checkbox" value="phone">
          <label class="nhsuk-label nhsuk-checkboxes__label" for="example-2">
            Phone
          </label>
        </div>

        <div class="nhsuk-checkboxes__item">
          <input class="nhsuk-checkboxes__input" id="example-3" name="example" type="checkbox" value="text message">
          <label class="nhsuk-label nhsuk-checkboxes__label" for="example-3">
            Text message
          </label>
        </div>

      </div>
    </fieldset>
  </form>  
</div>

<script>
  var validator = new nhsValidator.FormValidator(document.forms[0]);

  nhsValidator.CheckboxRequired('example','Please select at least one option', validator)
</script>
```
