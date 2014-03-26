# FormsJS

Working with entire HTML forms can be tedius and time consuming. Many of the tools that exist today are built for individual form elements (text boxes, radio buttons, check boxes, etc). FormsJS is the tool that works across the entire form. Using FormsJS, entire forms can be populated with default data, validated across all fields, and serialized as an object to be passed to the server. 

## Configuration

FormsJS is configured with the use of a config file. This file consists of an array of objects, with each object representing a different form element. Currently, the configuration requires the following information:

* type: Designates the type of the element. Current values can be: 'text', 'radio', 'checkbox', or 'select'
* name: The name HTML attribute of your field. Can be any string, but must be unique within your form.
* value: Any default value you would like to use when pre-populating your form (optional)
* validations: An array of validation objects to specify how to validate each element. This can consist of zero or more objects.
  * type: The type of validation to be performed. Current options are:
    * 'required' - Field must be filled out in some way
    * 'email' - Value must match the email regular expression
    * 'minLength' - Characters must meet a minimum length (specified with a 'length' attribute, see below)
    * 'maxLength' - Characters must not exceed a maximum length (also specified with a 'length' attribute)
    * 'regExp' - A custom regular expression to be used to validate the field (specified with a 'pattern' attribute)
    * 'customMatcher' - A callback function to be used as the validation (see details below)
  * length: A number to designate the length for use with min and max length
  * pattern: A regular expression to match against
  * matcher: A function to use as the callback for a custom matcher
  * errorMessage: A string to represent a customs error message to display to the user when validation is false

## Usage

Download the forms.js file and add to your HTML form page.

Initialize a new form object and pass in your config file: form = new FormsJs.Form(config)

Call each of the following methods on your form object as necessary:

* populate() - populates the form with the default values from the config file
* isValid() - validates the form using the validations from the config and returns true or false
* serialize() - loops through all the form elements and returns an object with the names and values of every element
* errors() - Returns an object with the names of each errored element and the custom error message related to the error. Returns an empty object if no errors exist.

## Sample Configuration

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
                      pattern: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4},
                      errorMessage: "Please enter a valid phone number as ###-###-####"
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

