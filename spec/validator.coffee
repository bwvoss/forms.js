describe 'FormsJs.Validator', ->

  testData = [
    {
      type: 'text',
      elementSelector: '[name=lastName]',
      validations: [
        {
          type: 'minLength',
          length: 5,
          errorMessage: 'Please enter at least 5 characters'
        }
      ]
    },
    {
      type: 'radio',
      elementSelector: '[name=gender]',
      validations: [
        {
          type: 'required',
          errorMessage: 'Gender is required'
        }
      ]
    },
    {
      type: 'text',
      elementSelector: '[name=email]',
      validations: [
        {
          type: 'email',
          errorMessage: 'Please enter a valid email address'
        },
        {
          type: 'maxLength',
          length: 15
          errorMessage: 'Email cannot be longer than 15 characters'
        }
      ]
    },
    {
      type: 'text',
      elementSelector: '[name=phone]',
      validations: [
        {
          type: 'regExp',
          pattern: /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/,
          errorMessage: 'Please enter a valid phone number as ###-###-####'
        }
      ]
    },
    {
      type: 'text',
      elementSelector: '[name=phoneType]',
      validations: [
        {
          type: 'customMatcher',
          errorMessage: 'Phone type is required when phone is entered',
          matcher: (value) ->
            phoneValue = $('[name=phone]', '#form2').val()
            if phoneValue is ''
              true
            else if value isnt ''
              true
            else
              false
        }
      ]
    },
    {
      type: 'checkbox',
      elementSelector: '[name=interests]',
    },
    {
      type: 'select',
      elementSelector: '[name=browser]',
      value: 'Chrome',
      validations: [
        {
          type: 'required',
          errorMessage: 'Browser is required'
        }
      ]
    },
    {
      type: 'password',
      elementSelector: '[name=password]',
      validations: [
        {
          type: 'minLength',
          errorMessage: 'Password must be 8 or more characters',
          length: 8
        },
        {
          type: "regExp",
          pattern: /[0-9]/,
          errorMessage: "Password must contain a number"
        },
        {
          type: 'required',
          errorMessage: 'Password is required'
        }
     ]
    },
    {
      type: 'password',
      elementSelector: '[name=passwordConfirmation]',
      validations: [
        {
          type: 'matchingInput',
          errorMessage: 'Passwords must match',
          matchField: '[name=password]'
        },
        {
          type: 'required',
          errorMessage: 'Password confirmation is required'
        }
     ]
    }
  ]

  createTestValidator = (data, scope) ->
    new FormsJs.Validator(data, scope)

  it 'validates an empty form as false', ->
    testValidator = createTestValidator(testData)
    loadFixtures('emptyFormFixtures.html')

    expect(testValidator.isValid()).toBeFalsy()

  it 'validates a filled form as true within a scope', ->
    scope = '#form2'
    testValidator = createTestValidator(testData, scope)
    loadFixtures('filledFormFixturesWithScope.html')

    expect(testValidator.isValid()).toBeTruthy()

  it 'returns an empty object if all form elements are true', ->
    scope = '#form2'
    testValidator = createTestValidator(testData, scope)
    loadFixtures('filledFormFixturesWithScope.html')

    expect(testValidator.errors()).toEqual({ })

  it 'returns multiple error messages on fields that more than one error', ->
    setFixtures("<input type='password' name='password' value='pass' />")
    data = [
      {
        type: 'password',
        elementSelector: '[name=password]',
        validations: [
          {
            type: 'minLength',
            errorMessage: 'Password must be 8 or more characters',
            length: 8
          },
          {
            type: "regExp",
            pattern: /[0-9]/,
            errorMessage: "Password must contain a number"
          },
       ]
      }
    ]

    testValidator = createTestValidator(data)

    expect(testValidator.errors()).toEqual({ '[name=password]' : ["Password must be 8 or more characters", "Password must contain a number"] })

  it 'gets a list of all the errors from a form within a scope', ->
    scope = '#form2'
    testValidator = createTestValidator(testData, scope)
    loadFixtures('errorFormFixturesWithScope.html')

    expect(testValidator.errors()).toEqual(
      {
        '[name=lastName]': ['Please enter at least 5 characters'],
        '[name=gender]': ['Gender is required'],
        '[name=email]': ['Please enter a valid email address', 'Email cannot be longer than 15 characters'],
        '[name=phone]': ['Please enter a valid phone number as ###-###-####'],
        '[name=phoneType]': ['Phone type is required when phone is entered'],
        '[name=browser]': ['Browser is required'],
        '[name=password]': ['Password must be 8 or more characters', 'Password must contain a number', 'Password is required'],
        '[name=passwordConfirmation]': ['Passwords must match', 'Password confirmation is required']
      })
