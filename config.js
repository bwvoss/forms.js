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
      name: "lastName",
      value: "My Last Name",
      validations: [
        {
          type: "required",
          errorMessage: "This field is required"
        },
        {
          type: "maxLength",
          length: 15,
          errorMessage: "You cannot have more than 15 characters"
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
          errorMessage: "This field is required"
        },
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
      type: "radio",
      name: "gender",
      value: "male",
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
      validations: [
        {
          type: "required",
          errorMessage: "This field is required"
        }
      ]
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
    },
    {
      type: "radio",
      name: "contact",
      value: "Yes"
    }
  ]
