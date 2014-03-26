var config = [
  {
    type: "text",
    name: "firstName",
    value: "My First Name",
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
    name: "lastName",
    value: "My Last Name",
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
    name: "email",
    value: "me@example.com",
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
    type: 'select',
    name: 'phoneType',
    value: 'Cell',
    validations: [
      {
        type: 'customMatcher',
        errorMessage: 'Phone type is required when phone is entered',
        matcher: function(value) {
          var phoneValue = $('[name=phone]').val();
          if (phoneValue === '') {
            return true;
          } else if (value !== '') {
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
    type: "radio",
    name: "gender",
    value: "male",
    validations: [
      {
        type: "required",
        errorMessage: "Gender is Required"
      }
    ]
  },
  {
    type: "checkbox",
    name: "interests",
    value: ["Ruby","Python","Java"],
    validations: [
      {
        type: "required",
        errorMessage: "An interest is Required"
      }
    ]
  },
  {
    type: "select",
    name: "browser",
    value: "Chrome",
    validations: [
      {
        type: "required",
        errorMessage: "Browser is Required"
      }
    ]
  },
  {
    type: "radio",
    name: "contact",
    value: "Yes"
  }
]
