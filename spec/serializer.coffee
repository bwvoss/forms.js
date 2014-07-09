describe 'FormsJs.Serializer', ->

  testData = [
    {
      type: 'text'
      elementSelector: '[name=lastName]'
      dataKey: 'last_name'
    },
    {
      type: 'radio',
      elementSelector: '[name=gender]',
    },
    {
      type: 'text',
      elementSelector: '[name=email]',
    },
    {
      type: 'text',
      elementSelector: '[name=phone]',
    },
    {
      type: 'text',
      elementSelector: '[name=phoneType]',
      dataKey: 'phone_type'
    },
    {
      type: 'checkbox',
      elementSelector: '[name=interests]',
    },
    {
      type: 'select',
      elementSelector: '[name=browser]',
    },
    {
      type: 'password',
      elementSelector: '[name=password]',
    },
    {
      type: 'password',
      elementSelector: '[name=passwordConfirmation]',
      dataKey: 'password_confirmation'
    }
  ]

  it 'uses the dataKey attribute if available when converting a text element to an object, otherwise uses name', ->
    setFixtures("<input type='text' name='text1' value='some value' /><input type='text' data-id='text2' name='text2' value='other value' />")
    data = [
      { type: 'text', elementSelector: '[name=text1]', dataKey: 'textData' },
      { type: 'text', elementSelector: '[data-id=text2]' }
    ]

    testSerializer = new FormsJs.Serializer(data)

    expect(testSerializer.serialize()).toEqual({ textData: "some value", text2: "other value"})

  it 'serializes a filled form within a given scope', ->
    scope = '#form2'
    testSerializer = new FormsJs.Serializer(testData, scope)
    loadFixtures('filledFormFixturesWithScope.html')

    expect(testSerializer.serialize()).toEqual(
      {
        last_name : 'My Last Name',
        gender : 'male',
        email: 'me@example.com',
        phone: '555-555-5555',
        phone_type: 'Cell',
        interests : [ 'JavaScript', 'Ruby' ],
        browser : 'Chrome',
        password: 'P@ssw0rd',
        password_confirmation: 'P@ssw0rd'
      })

