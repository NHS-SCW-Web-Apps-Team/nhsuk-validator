# At Least One

## When to use

Used to validate that at least one of a set of input fields have been filled out. Not recommended for use.

## How to use

- Ensure that you have an instance of the validator on the page. 

- Add the validator for the field: 
  ` nhsValidator.AtLeastOne[{Array of field and values}], '{Error message}', {instance of validator});`

For example:
```
<div>
  <form>
    <div class="nhsuk-form-group">
      <label class="nhsuk-label" for="example1">
        What is your name?
      </label>
      <input class="nhsuk-input" id="example1" name="example1" type="text">
    </div>
    <div class="nhsuk-form-group">
      <label class="nhsuk-label" for="example2">
        What is your name?
      </label>
      <input class="nhsuk-input" id="example2" name="example2" type="text">
    </div>
    <div class="nhsuk-form-group">
      <label class="nhsuk-label" for="example3">
        What is your name?
      </label>
      <input class="nhsuk-input" id="example3" name="example3" type="text">
    </div>
  </form>
</div>

<script>
  var validator = new nhsValidator.FormValidator(document.forms[0]);

  nhsValidator.AtLeastOne(['example1', 'example2', 'example3'], 'Please fill in at least one of the fields', validator)
</script>
```
