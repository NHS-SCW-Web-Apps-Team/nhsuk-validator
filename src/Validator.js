import $ from 'jquery';
import {
    AddAttributeValue,
    RemoveAttributeValue
} from './Utilities';

export class FormValidator {

    constructor(form, options) {
        this.form = form;
        this.errors = [];
        this.validators = [];
        $(this.form).on('submit', $.proxy(this, 'onSubmit'));
        this.summary = (options && options.summary) ? $(options.summary) : $('.nhsuk-error-summary');
        this.originalTitle = document.title;
    };


    entityMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '/': '&#x2F;',
        '`': '&#x60;',
        '=': '&#x3D;'
    };

    escapeHtml(string) {

            if(String(string).includes("#39#")){
                 var apostrophe = String.fromCharCode(39);
                 var newString = String(string).replace("#39#",apostrophe);
                 return String(newString).replace(/[&<>"`=\/]/g, function fromEntityMap(s) {
                    return entityMap[s];
                });
            }else{

                return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
                    return entityMap[s];
                });
            }
    };

    resetTitle() {
        document.title = this.originalTitle;
    };

    updateTitle() {
        document.title = "" + this.errors.length + " errors - " + document.title;
    };

    showSummary() {
        this.summary.html(this.getSummaryHtml());
        this.summary.removeClass('nhsuk-u-visually-hidden');
        this.summary.attr('aria-labelledby', 'errorSummary-heading');
        this.summary.focus();
    };

    getSummaryHtml() {
        var html = '<h2 id="errorSummary-heading" class="nhsuk-error-summary__title">There is a problem</h2>';
        html += '<div class="nhsuk-error-summary__body">';
        html += '<ul class="nhsuk-list nhsuk-error-summary__list">';
        for (var i = 0, j = this.errors.length; i < j; i++) {
            var error = this.errors[i];
            html += '<li>';
            html += '<a href="#' + this.escapeHtml(error.fieldName) + '">';
            html += this.escapeHtml(error.message);
            html += '</a>';
            html += '</li>';
        }
        html += '</ul>';
        html += '</div>';
        return html;
    };

    hideSummary() {
        this.summary.addClass('nhsuk-u-visually-hidden');
        this.summary.removeAttr('aria-labelledby');
    };

    onSubmit(e) {
        this.removeInlineErrors();
        this.hideSummary();
        this.resetTitle();
        if (!this.validate()) {
            e.preventDefault();
            this.updateTitle();
            this.showSummary();
            this.showInlineErrors();
        }
    };

    showInlineErrors() {
        for (var i = 0, j = this.errors.length; i < j; i++) {
            this.showInlineError(this.errors[i]);
        }
    };

    showInlineError(error) {
        var errorSpanId = error.fieldName + '-error';
        var errorSpan = '<span class="nhsuk-error-message" id="' + errorSpanId + '">' + this.escapeHtml(error.message) + '</span>';
        var control = $("#" + error.fieldName);
        if (!control.length) {
            control = $("#" + error.fieldName + "-1");
        }
        var fieldContainer = control.parents(".nhsuk-form-group");
        var label = fieldContainer.find('label');
        var legend = fieldContainer.find("legend");
        var fieldset = fieldContainer.find("fieldset");
        fieldContainer.addClass('nhsuk-form-group--error');
        if (legend.length) {
            legend.after(errorSpan);
            fieldContainer.attr('aria-invalid', 'true');
            AddAttributeValue(fieldset[0], 'aria-describedby', errorSpanId);
        } else {
            label.after(errorSpan);
            control.attr('aria-invalid', 'true');
            AddAttributeValue(control[0], 'aria-describedby', errorSpanId);
        }
    };

    removeInlineErrors() {
        var error;
        var i;
        for (var i = 0; i < this.errors.length; i++) {
            this.removeInlineError(this.errors[i]);
        }
    };

    removeInlineError(error) {
        var control = $("#" + error.fieldName);
        if (!control.length) {
            control = $("#" + error.fieldName + "-1");
        }
        var fieldContainer = control.parents(".nhsuk-form-group");
        fieldContainer.find('.nhsuk-error-message').remove();
        fieldContainer.removeClass('nhsuk-form-group--error');
        fieldContainer.find("[aria-invalid]").attr('aria-invalid', 'false');
        var errorSpanId = error.fieldName + '-error';
        RemoveAttributeValue(fieldContainer.find('[aria-describedby]')[0], 'aria-describedby', errorSpanId);
    };

    addValidator(fieldName, rules) {
        this.validators.push({
            fieldName: fieldName,
            rules: rules,
            field: this.form.elements[fieldName]
        });
    };

    removeValidator(fieldName) {
        this.validators = this.validators.filter(function(obj) {
            return obj.fieldName !== fieldName
        });
    }

    validate() {
        this.errors = [];
        var validator = null,
            validatorReturnValue = true,
            i,
            j;
        for (i = 0; i < this.validators.length; i++) {
            validator = this.validators[i];
            for (j = 0; j < validator.rules.length; j++) {
                validatorReturnValue = validator.rules[j].method(validator.field,
                    validator.rules[j].params);

                if (typeof validatorReturnValue === 'boolean' && !validatorReturnValue) {
                    this.errors.push({
                        fieldName: validator.fieldName,
                        message: validator.rules[j].message
                    });
                    break;
                } else if (typeof validatorReturnValue === 'string') {
                    this.errors.push({
                        fieldName: validatorReturnValue,
                        message: validator.rules[j].message
                    });
                    break;
                }
            }
        }
        return this.errors.length === 0;
    };
}
