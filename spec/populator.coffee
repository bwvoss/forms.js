describe 'FormsJs.Populator', ->
  testData = [
    {
      type: 'text',
      elementSelector: '[name=lastName]',
      value: 'My Last Name',
    },
    {
      type: 'radio',
      elementSelector: '[name=gender]',
      value: 'male',
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
    }
  ]

  createPopulator = (data, scope) ->
    new FormsJs.Populator(data, scope)

  getValues = (data, scope) ->
    FormsJs.Values.get(data, scope)

  assertValueEquals = (elementSelector, value) ->
    expect($(elementSelector)).toHaveValue(value)

  assertChecked = (elementSelector, value) ->
    expect($("#{elementSelector}[value=#{value}]")).toBeChecked()

  it 'populates a text element with a default value', ->
    setFixtures("<input type='text' name='textName' value='' />")
    data = [ { type: 'text', elementSelector: '[name=textName]', value: 'Default Text' } ]

    createPopulator(data).populate()

    assertValueEquals(data[0].elementSelector, 'Default Text')

  it 'populates a radio button with a default value', ->
    setFixtures("<input type='radio' name='radioName' value='radio1' />")
    data = [ { type: 'radio', elementSelector: '[name=radioName]', value: 'radio1' } ]

    createPopulator(data).populate()

    assertChecked(data[0].elementSelector, 'radio1')

  it 'populates check boxes with default values', ->
    setFixtures(
      "<input type='checkbox' name='checkboxName' value='check1' />
       <input type='checkbox' name='checkboxName' value='check2' />
      ")
    data = [ { type: 'checkbox', elementSelector: '[name=checkboxName]', value: ['check1', 'check2'] } ]

    createPopulator(data).populate()

    assertChecked(data[0].elementSelector, 'check1')
    assertChecked(data[0].elementSelector, 'check2')

  it 'populates check boxes when default value is a string', ->
    setFixtures(
      "<input type='checkbox' name='checkboxName' value='check1' />
       <input type='checkbox' name='checkboxName' value='check2' />
      ")
    data = [ { type: 'checkbox', elementSelector: '[name=checkboxName]', value: 'check1' } ]

    createPopulator(data).populate()

    assertChecked(data[0].elementSelector, 'check1')

  it 'populates a select element with a default value', ->
    setFixtures("<select name='selectName' ><option>Select 1</option><option>Select 2</option></select>")
    data = [ { type: 'select', elementSelector: '[name=selectName]', value: 'Select 2' } ]

    createPopulator(data).populate()

    assertValueEquals(data[0].elementSelector, 'Select 2')

  it 'populates all form elements with their default values', ->
    populator = createPopulator(testData)
    loadFixtures('emptyFormFixtures.html')
    populator.populate()

    expect(getValues(testData[0])).toEqual('My Last Name')
    expect(getValues(testData[1])).toEqual('male')
    expect(getValues(testData[2])).toEqual(['JavaScript', 'Ruby'])
    expect(getValues(testData[3])).toEqual('Chrome')

   it 'populates all form elements with their default values within a given scope', ->
    inScope = '#form1'
    outScope = '#form2'
    populator = createPopulator(testData, inScope)
    loadFixtures('emptyFormFixturesWithScope.html')
    populator.populate()

    expect(getValues(testData[0], inScope)).toEqual('My Last Name')
    expect(getValues(testData[1], inScope)).toEqual('male')
    expect(getValues(testData[2], inScope)).toEqual(['JavaScript', 'Ruby'])
    expect(getValues(testData[3], inScope)).toEqual('Chrome')

    expect(getValues(testData[0], outScope)).toEqual('')
    expect(getValues(testData[1], outScope)).toEqual('')
    expect(getValues(testData[2], outScope)).toEqual([])
    expect(getValues(testData[3], outScope)).toEqual('')
