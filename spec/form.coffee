describe 'Form', ->
  getValues = (data, scope) ->
    FormsJs.Values.get(data, scope)

  testData = [
    {
      type: 'text',
      elementSelector: '[name=lastName]',
      value: 'My Last Name',
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
      value: 'male',
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
      value: ['Ruby','JavaScript']
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
          matchField: 'password'
        },
        {
          type: 'required',
          errorMessage: 'Password confirmation is required'
        }
     ]
    }
  ]

  createTestForm = (data, scope) ->
    new FormsJs.Form(data, scope)

  it 'creates a new form object when given an array of data objects', ->
    testForm = createTestForm(testData)

    expect(testForm.data[0].type).toEqual('text')

  it 'creates a new form object with a default scope of the document', ->
    testForm = createTestForm(testData)

    expect(testForm.scope).toEqual($(document))

  it 'creates a new form object with a scope as a jQuery selector string', ->
    scope = '#form1'
    testForm = createTestForm(testData, scope)

    expect(testForm.scope).toEqual('#form1')

  it 'populates all form elements with their default values', ->
    testForm = createTestForm(testData)
    loadFixtures('emptyFormFixtures.html')
    testForm.populate()

    expect(getValues(testData[0])).toEqual('My Last Name')
    expect(getValues(testData[1])).toEqual('male')
    expect(getValues(testData[5])).toEqual(['JavaScript', 'Ruby'])
    expect(getValues(testData[6])).toEqual('Chrome')

   it 'populates all form elements with their default values within a given scope', ->
    inScope = '#form1'
    outScope = '#form2'
    testForm = createTestForm(testData, inScope)
    loadFixtures('emptyFormFixturesWithScope.html')
    testForm.populate()

    expect(getValues(testData[0], inScope)).toEqual('My Last Name')
    expect(getValues(testData[1], inScope)).toEqual('male')
    expect(getValues(testData[5], inScope)).toEqual(['JavaScript', 'Ruby'])
    expect(getValues(testData[6], inScope)).toEqual('Chrome')

    expect(getValues(testData[0], outScope)).toEqual('')
    expect(getValues(testData[1], outScope)).toEqual('')
    expect(getValues(testData[5], outScope)).toEqual([])
    expect(getValues(testData[6], outScope)).toEqual('')

  it 'validates an empty form as false', ->
    testForm = createTestForm(testData)
    loadFixtures('emptyFormFixtures.html')

    expect(testForm.isValid()).toBeFalsy()

  it 'validates a filled form as true within a scope', ->
    scope = '#form2'
    testForm = createTestForm(testData, scope)
    loadFixtures('filledFormFixturesWithScope.html')

    expect(testForm.isValid()).toBeTruthy()

  it 'gets a list of all the errors from a form within a scope', ->
    scope = '#form2'
    testForm = createTestForm(testData, scope)
    loadFixtures('errorFormFixturesWithScope.html')

    expect(testForm.errors()).toEqual(
      {
        '[name=lastName]': ['Please enter at least 5 characters'],
        '[name=gender]': ['Gender is required'],
        '[name=email]': ['Please enter a valid email address'],
        '[name=phone]': ['Please enter a valid phone number as ###-###-####'],
        '[name=phoneType]': ['Phone type is required when phone is entered'],
        '[name=browser]': ['Browser is required'],
        '[name=password]': ['Password is required'],
        '[name=passwordConfirmation]': ['Password confirmation is required']
      })

  it 'serializes a filled form within a given scope', ->
    scope = '#form2'
    testForm = createTestForm(testData, scope)
    loadFixtures('filledFormFixturesWithScope.html')

    expect(testForm.serialize()).toEqual(
      {
        lastName : 'My Last Name',
        gender : 'male',
        email: 'me@example.com',
        phone: '555-555-5555',
        phoneType: 'Cell',
        interests : [ 'JavaScript', 'Ruby' ],
        browser : 'Chrome',
        password: 'P@ssword',
        passwordConfirmation: 'P@ssword'
      })

  it 'clears the form within a scope', ->
    scope = '#form2'
    testForm = createTestForm(testData, scope)
    loadFixtures('filledFormFixturesWithScope.html')

    testForm.clear()

    expect($('[name=lastName]').val()).toEqual('')
