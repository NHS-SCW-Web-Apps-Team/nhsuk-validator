# Born before death

## When to use

Used to validate that with a set of date of birth and date of death fields that the death has not occured before their birth.

## How to use

- Ensure that you have an instance of the validator on the page. 

- Add the validator for the field: 
  `nhsValidator.BornBeforeDeath('{Date of death day field}','{Date of death month field}','{Date of death year field}', '{Date of birth day field}','{Date of birth month field}','{Date of birth year field}', {instance of validator})`

For example:
```
<div>
  <form>
    <div class="nhsuk-form-group">
      <div class="nhsuk-date-input" id="DoB">
        <div class="nhsuk-date-input__item">
          <div class="nhsuk-form-group">
            <label class="nhsuk-label nhsuk-date-input__label" for="DoB-day">
              Day
            </label>
            <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="DoB-day" name="DoB-day" type="text" pattern="[0-9]*" inputmode="numeric">
          </div>
        </div>
        <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="DoB-month">
            Month
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="DoB-month" name="DoB-month" type="text" pattern="[0-9]*" inputmode="numeric">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
       <div class="nhsuk-form-group">
         <label class="nhsuk-label nhsuk-date-input__label" for="DoB-year">
           Year
         </label>
         <input class="nhsuk-input nhsuk-date-input__input" id="DoB-year" name="DoB-year" type="text" pattern="[0-9]*" inputmode="numeric">
       </div>
      </div>
    </div>
    <div class="nhsuk-date-input" id="DoD">
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="DoD-day">
            Day
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="DoD-day" name="DoD-day" type="text" pattern="[0-9]*" inputmode="numeric">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="DoD-month">
            Month
          </label>
          <input class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2" id="DoD-month" name="DoD-month" type="text" pattern="[0-9]*" inputmode="numeric">
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="DoD-year">
            Year
          </label>
          <input class="nhsuk-input nhsuk-date-input__input" id="DoD-year" name="DoD-year" type="text" pattern="[0-9]*" inputmode="numeric">
        </div>
      </div>
    </div>
  </div>
  </form>
</div>

<script>
  var validator = new nhsValidator.FormValidator(document.forms[0]);

  nhsValidator.BornBeforeDeath('DoD-day','DoD-month','DoD-year', 'DoB-day','DoB-month','DoB-year', validator)
</script>
```
