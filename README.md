[![Build Status](https://travis-ci.org/MikeDanaher/forms.js.svg?branch=master)](https://travis-ci.org/MikeDanaher/forms.js)

# FormsJs

Working with entire HTML forms can be tedius and time consuming. Many of the tools that exist today are built for individual form elements (text boxes, radio buttons, check boxes, etc). FormsJs is the tool that works across the entire form. Using FormsJs, entire forms can be populated with default data, validated with errors for all fields, and serialized as an object to be passed to the server.

## Configuration

FormsJs is configured with an array of objects, with each object representing a different form element, and an optional scope parameter. Depending on your use case, each configuration object requires different information.

### Population

To populate an entire form at once, the configuration object takes the following options:

* **type**: Designates the type of the element. Current values can be: 'text', 'radio', 'checkbox', or 'select'.
* **elementSelector**: A string representing a jQuery selector (e.g. '[data-id=first-name]' or '#first-name').
* **value**: The default value you would like to use when pre-populating the form.

To create a new populator object, initialize it with the configuration object and an optional scope.

`populator = new FormsJs.Populator(populatorConfig, scope)`

Calling `populate()` on the populator will fill out the form.

### Serialization

To serialize an entire form at once, the configuration object takes the following options:

* **type**: Designates the type of the element. Current values can be: 'text', 'radio', 'checkbox', or 'select'.
* **elementSelector**: A string representing a jQuery selector (e.g. '[data-id=first-name]' or '#first-name').
* **dataKey** (optional): A string to use as the key in the new serialized object. If no dataKey is specified it will look for the name attribute on the form element.

To create a new serializer object, initialize it with the configuration object and an optional scope.

`serializer = new FormsJs.Serializer(serializerConfig, scope)`

Calling `serialize()` on the serializer will return a JSON object with the key being the dataKey (or element name) and the value being the element's current value.

### Validation

To validate an entire form at once, the configuration obejct takes the following options:

* **type**: Designates the type of the element. Current values can be: 'text', 'radio', 'checkbox', or 'select'.
* **elementSelector**: A string representing a jQuery selector (e.g. '[data-id=first-name]' or '#first-name').
* **validations**: An array of validation objects to specify how to validate each element. This can consist of one or more objects with each object consisting of the following:
  * **type**: The type of validation to be performed. Current options are:
    * 'required' - Field must be filled out in some way.
    * 'email' - Value must match the email regular expression.
    * 'minLength' - Characters must meet a minimum length (specified with a 'length' attribute, see below).
    * 'maxLength' - Characters must not exceed a maximum length (also specified with a 'length' attribute).
    * 'regExp' - A custom regular expression to be used to validate the field (specified with a 'pattern' attribute).
    * 'matchingInput' - A way to check whether two fields contain the same values (specified with a 'matchField' attribute).
    * 'customMatcher' - A custom function to be used for validation (specified with a 'matcher' attribute).
  * **length**: A number to designate the length for use with min and max length.
  * **pattern**: A regular expression to match against (see phone example below).
  * **matchField**: A string representing a jQuery selector for the field to match against (see password example below).
  * **matcher**: A function to use with a custom matcher. Will be passed the current value of the field and should return true or false (see phone type example below).
  * **errorMessage**: A string to represent a custom error message to display to the user when the field is invalid.

Calling `isValid()` - Validates the form within the given scope using the validations from the config and returns true or false.
Calling `errors()` - Returns an object with the field name and an array of error messages for each invalid field within the given scope. Returns an empty object if no errors exist.

### Scope

The scope parameter is a jQuery context which can either be a string representing the selector '#form' or a jQuery object $('form'). If no scope is specified, it defaults to the document.

## Usage

Download the forms.js file and add to the HTML form page.

Initialize a new objects with the appropriate config object and scope (see populator, serializer, and validators above).

FormsJs is also available as a Bower component.

## Dependencies

FormsJs currently requires jQuery and Underscore to be loaded.

## Sample Populator Configuration Object

````javascript
var populatorConfig = [
  {
    type: "text",
    elementSelector: "[name=firstName]",
    value: "My First Name",
  },
  {
    type: "text",
    elementSelector: "[name=lastName]",
    value: "My Last Name",
  },
  {
    type: "text",
    elementSelector: "[name=email]",
    value: "me@example.com",
  },
  {
    type: "select",
    elementSelector: "[name=phoneType]",
    value: "Cell",
  },
  {
    type: "text",
    elementSelector: "[name=phone]",
    value: "123-456-7890",
  },
  {
    type: "radio",
    elementSelector: "[name=gender]",
    value: "male",
  },
  {
    type: "checkbox",
    elementSelector: "[name=interests]",
    value: ["Ruby","Python","Java"],
  },
  {
    type: "select",
    elementSelector: "[name=browser]",
    value: "Chrome",
  },
  {
    type: "radio",
    elementSelector: "[name=contact]",
    value: "Yes"
  }
]
````

## Sample Serializer Configuration Object

````javascript
var serializerConfig = [
  {
    type: "text",
    elementSelector: "[name=firstName]",
    dataKey: "first_name"
  },
  {
    type: "text",
    elementSelector: "[name=lastName]",
    dataKey: "last_name"
  },
  {
    type: "text",
    elementSelector: "[name=email]",
    dataKey: "email"
  },
  {
    type: "select",
    elementSelector: "[name=phoneType]",
    dataKey: "phone_type"
  },
  {
    type: "text",
    elementSelector: "[name=phone]",
    dataKey: "phone"
  },
  {
    type: "radio",
    elementSelector: "[name=gender]",
    dataKey: "gender"
  },
  {
    type: "checkbox",
    elementSelector: "[name=interests]",
    dataKey: "interests"
  },
  {
    type: "select",
    elementSelector: "[name=browser]",
    dataKey: "browser"
  },
  {
    type: "radio",
    elementSelector: "[name=contact]",
    dataKey: "contact"
  },
  {
    type: "password",
    elementSelector: "[name=password]",
    dataKey: "password"
  },
  {
    type: "password",
    elementSelector: "[name=passwordConfirmation]",
    dataKey: "password_confirmation"
  }
]
````

## Sample Validator Configuration Object

````javascript
var validatorConfig = [
  {
    type: "text",
    elementSelector: "[name=firstName]",
    validations: [
      {
        type: "required",
        errorMessage: "Frist Name is Required"
      },
      {
        type: "minLength",
        length: 3,
        errorMessage: "First Name must have at least 3 characters"
      }
    ]
  },
  {
    type: "text",
    elementSelector: "[name=lastName]",
    validations: [
      {
        type: "required",
        errorMessage: "Last Name is Required"
      },
      {
        type: "maxLength",
        length: 15,
        errorMessage: "Last Name cannot have more than 15 characters"
      }
    ]
  },
  {
    type: "text",
    elementSelector: "[name=email]",
    validations: [
      {
        type: "required",
        errorMessage: "Email is Required"
      },
      {
        type: "email",
        errorMessage: "Please enter a valid email address"
      }
    ]
  },
  {
    type: "select",
    elementSelector: "[name=phoneType]",
    validations: [
      {
        type: "customMatcher",
        errorMessage: "Phone type is required when phone is entered",
        matcher: function(value) {
          var phoneValue = $("[name=phone]").val();
          if (phoneValue === "") {
            return true;
          } else if (value !== "") {
            return true;
          } else {
            return false;
          }
        }
      }
    ]
  },
  {
    type: "text",
    elementSelector: "[name=phone]",
    validations: [
      {
        type: "regExp",
        pattern: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/,
        errorMessage: "Please enter a valid phone number as ###-###-####"
      }
    ]
  },
  {
    type: "radio",
    elementSelector: "[name=gender]",
    validations: [
      {
        type: "required",
        errorMessage: "Gender is Required"
      }
    ]
  },
  {
    type: "checkbox",
    elementSelector: "[name=interests]",
    validations: [
      {
        type: "required",
        errorMessage: "An interest is Required"
      }
    ]
  },
  {
    type: "select",
    elementSelector: "[name=browser]",
    validations: [
      {
        type: "required",
        errorMessage: "Browser is Required"
      }
    ]
  },
  {
    type: "password",
    elementSelector: "[name=password]",
    validations: [
      {
        type: "minLength",
        errorMessage: "Password must be 8 or more characters",
        length: 8
      },
      {
        type: "required",
        errorMessage: "Password is required"
      }
   ]
  },
  {
    type: "password",
    elementSelector: "[name=passwordConfirmation]",
    validations: [
      {
        type: "matchingInput",
        errorMessage: "Passwords must match",
        matchField: "[name=password]"
      },
      {
        type: "required",
        errorMessage: "Password confirmation is required"
      }
   ]
  }
]
````

### License

Copyright (c) 2014 Ben Voss and Mike Danaher. See the LICENSE file for license rights and limitations (MIT).
