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
        type: "regExp",
        pattern: /[0-9]/,
        errorMessage: "Password must contain a number"
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
