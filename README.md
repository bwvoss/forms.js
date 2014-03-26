[![Build Status](https://travis-ci.org/MikeDanaher/forms.js.svg?branch=master)](https://travis-ci.org/MikeDanaher/forms.js)

# FormsJS

Working with entire HTML forms can be tedius and time consuming. Many of the tools that exist today are built for individual form elements (text boxes, radio buttons, check boxes, etc). FormsJS is the tool that works across the entire form. Using FormsJS, entire forms can be populated with default data, validated across all fields, and serialized as an object to be passed to the server.

## Configuration

FormsJS is configured with the use of a config file. This file consists of an array of objects, with each object representing a different form element. Currently, the configuration requires the following information:

* type: Designates the type of the element. Current values can be: 'text', 'radio', 'checkbox', or 'select'
* name: The HTML name attribute of the field. Can be any string, but must be unique within the form.
* value (optional): Any default value you would like to use when pre-populating the form.
* validations (optional): An array of validation objects to specify how to validate each element. This can consist of zero or more objects.
  * type: The type of validation to be performed. Current options are:
    * 'required' - Field must be filled out in some way.
    * 'email' - Value must match the email regular expression.
    * 'minLength' - Characters must meet a minimum length (specified with a 'length' attribute, see below).
    * 'maxLength' - Characters must not exceed a maximum length (also specified with a 'length' attribute).
    * 'regExp' - A custom regular expression to be used to validate the field (specified with a 'pattern' attribute).
    * 'customMatcher' - A custom function to be used for validation (specified with a 'matcher' attribute).
  * length: A number to designate the length for use with min and max length.
  * pattern: A regular expression to match against (see phone example below).
  * matcher: A function to use with a custom matcher. Will be passed the current value of the field and should return true or false (see phone type example below).
  * errorMessage: A string to represent a customs error message to display to the user when validation is false.

## Usage

Download the forms.js file and add to the HTML form page.

Initialize a new form object and pass in the config object: form = new FormsJs.Form(config)

Call each of the following methods on the form object as necessary:

* populate() - Populates the form with the default values from the config file.
* isValid() - Validates the form using the validations from the config and returns true or false.
* serialize() - Loops through all the form elements and returns an object with the names and values of every element.
* errors() - Returns an object with the names of each errored element and the custom error message related to the error. Returns an empty object if no errors exist.
* clear() - Clears the form.

## Dependencies

FormsJS requires jQuery and Underscore and should be loaded before FormsJS.

## Sample Configuration Object

````javascript
var config = [
  {
    type: "text",
    name: "firstName",
    value: "My First Name",
    validations: [
      {
        type: "required",
        errorMessage: "This field is required"
      },
      {
        type: "minLength",
        length: 3,
        errorMessage: "You must have at least 3 characters"
      }
    ]
  },
  {
    type: "text",
    name: "email",
    value: "me@example.com",
    validations: [
      {
        type: "email",
        errorMessage: "Please enter a valid email address"
      }
    ]
  },
  {
    type: "text",
    name: "phone",
    value: "123-456-7890",
    validations: [
      {
        type: "regExp",
        pattern: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/,
        errorMessage: "Please enter a valid phone number as ###-###-####"
      }
    ]
  },
  {
    type: "select",
    name: "phoneType",
    validations: [
      {
        type: "customMatcher"
        matcher: function(value) {
          otherField = $('[name=phone]').val();
          if (otherField === '') {
            return true;
          } else if (value !== '') {
            return true;
          } else {
            return false;
          }
        },
        errorMessage: "Phone type is required when phone is entered"
      }
    ]
  },
  {
    type: "radio",
    name: "gender",
    validations: [
      {
        type: "required",
        errorMessage: "This field is required"
      }
    ]
  },
  {
    type: "checkbox",
    name: "interests",
    value: ["Ruby","Python","Java"],
  },
  {
    type: "select",
    name: "browser",
    value: "",
    validations: [
      {
        type: "required",
        errorMessage: "This field is required"
      }
    ]
  }
]
````

