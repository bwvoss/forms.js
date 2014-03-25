describe 'Form', ->
  getValues = (data) ->
    FormsJs.Form.Values.get(data)

  testData = [
    {
      type: 'text',
      name: 'lastName',
      value: 'My Last Name',
      validations: [
        {
          type: 'minLength',
          length: 5
        }
      ]
    },
    {
      type: 'radio',
      name: 'gender',
      value: 'male',
      validations: [
        {
          type: 'required',
        }
      ]
    },
    {
      type: 'checkbox',
      name: 'interests',
      value: ['Ruby','JavaScript']
    },
    {
      type: 'select',
      name: 'browser',
      value: 'Chrome',
      validations: [
        {
          type: 'required'
        }
      ]
    }
  ]

  it 'creates a new form object when given an array of data objects', ->
    testForm = new FormsJs.Form(testData)

    expect(testForm.data[0].type).toEqual('text')

  it 'populates all form elements with their default values', ->
    testForm = new FormsJs.Form(testData)
    loadFixtures('emptyFormFixtures.html')
    testForm.populate()

    expect(getValues(testData[0])).toEqual('My Last Name')
    expect(getValues(testData[1])).toEqual('male')
    expect(getValues(testData[2])).toEqual(['JavaScript', 'Ruby'])
    expect(getValues(testData[3])).toEqual('Chrome')

  it 'loops through all form elements and validates them', ->
    testForm = new FormsJs.Form(testData)
    loadFixtures('emptyFormFixtures.html')

    expect(testForm.isValid()).toBeFalsy()

  it 'loops through all form elements and serializes them', ->
    testForm = new FormsJs.Form(testData)
    loadFixtures('filledFormFixtures.html')

    expect(testForm.serialize()).toEqual({ lastName : 'My Last Name', gender : 'male', interests : [ 'JavaScript', 'Ruby' ], browser : 'Chrome' })
