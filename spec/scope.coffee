describe 'FormsJs.Scope', ->

  afterEach ->
    FormsJs.Scope.set($(document))

  it 'sets the default scope to the document', ->
    expect(FormsJs.Scope.get()).toEqual($(document))

  it 'sets a custom scope for the form using a jquery selector', ->
    scope = 'div'
    FormsJs.Scope.set(scope)

    expect(FormsJs.Scope.get()).toEqual('div')

  it 'gets the value of a text box within the scope', ->
    setFixtures("<div id='outer'><input type='text' name='text' value='outer text'><div id='inner'><input type='text' name='text' value='inner text'></div></div>")
    scope = '#inner'
    data = { type: 'text', name: 'text' }

    FormsJs.Scope.set(scope)

    expect(FormsJs.Scope.getValue(data)).toEqual('inner text')

  it 'gets the value of a checked radio button within the scope', ->
    setFixtures("
    <div id='outer'>
      <input type='radio' name='text' value='outer text 1' checked>
      <input type='radio' name='text' value='outer text 2' >
      <div id='inner'>
        <input type='radio' name='text' value='inner text 1' checked>
        <input type='radio' name='text' value='inner text 2' >
      </div>
    </div>")
    scope = '#inner'
    data = { type: 'radio', name: 'text' }

    FormsJs.Scope.set(scope)

    expect(FormsJs.Scope.getCheckedRadioValue(data)).toEqual('inner text 1')

  it 'gets the values of checked checkboxes within the scope', ->
    setFixtures("
    <div id='outer'>
      <input type='checkbox' name='text' value='outer text 1' checked>
      <input type='checkbox' name='text' value='outer text 2' checked>
      <div id='inner'>
        <input type='checkbox' name='text' value='inner text 1' checked>
        <input type='checkbox' name='text' value='inner text 2' checked>
      </div>
    </div>")
    scope = '#inner'
    data = { type: 'checkbox', name: 'text' }

    FormsJs.Scope.set(scope)

    expect(FormsJs.Scope.getCheckedValues(data)).toEqual(['inner text 1', 'inner text 2'])

  it 'sets the value of a text box within the scope', ->
    setFixtures("<div id='outer'><input type='text' name='text' value='outer text'><div id='inner'><input type='text' name='text' value=''></div></div>")
    scope = '#inner'
    data = { type: 'text', name: 'text', value: 'inner text'}

    FormsJs.Scope.set(scope)
    expect($("[name=text]", scope).val()).toEqual('')

    FormsJs.Scope.setValue(data)
    expect($("[name=text]", scope).val()).toEqual('inner text')

  it 'checkes a radio button within the scope', ->
    setFixtures("
    <div id='outer'>
      <input type='radio' name='text' value='inner text 1' >
      <input type='radio' name='text' value='inner text 2' checked>
      <div id='inner'>
        <input type='radio' name='text' value='inner text 1' >
        <input type='radio' name='text' value='inner text 2' >
      </div>
    </div>")
    scope = '#inner'
    data = { type: 'radio', name: 'text', value: 'inner text 1' }

    FormsJs.Scope.set(scope)
    expect(FormsJs.Scope.getCheckedRadioValue(data)).toBeUndefined()

    FormsJs.Scope.setRadioChecked(data)
    expect(FormsJs.Scope.getCheckedRadioValue(data)).toEqual('inner text 1')

  it 'checks all checkboxes for given values within the scope', ->
    setFixtures("
    <div id='outer'>
      <input type='checkbox' name='text' value='outer text 1'>
      <input type='checkbox' name='text' value='outer text 2'>
      <div id='inner'>
        <input type='checkbox' name='text' value='inner text 1'>
        <input type='checkbox' name='text' value='inner text 2'>
      </div>
    </div>")
    scope = '#inner'
    data = { type: 'checkbox', name: 'text', value: ['inner text 1', 'inner text 2']}

    FormsJs.Scope.set(scope)
    expect(FormsJs.Scope.getCheckedValues(data)).toEqual([])

    FormsJs.Scope.setAllChecked(data)
    expect(FormsJs.Scope.getCheckedValues(data)).toEqual(['inner text 1', 'inner text 2'])

  it 'clears the value of a text box within the scope', ->
    setFixtures("<div id='outer'><input type='text' name='text' value='outer text'><div id='inner'><input type='text' name='text' value='inner text'></div></div>")
    scope = '#inner'
    data = { type: 'text', name: 'text' }

    FormsJs.Scope.set(scope)
    expect(FormsJs.Scope.getValue(data)).toEqual('inner text')

    FormsJs.Scope.clearValue(data)
    expect(FormsJs.Scope.getValue(data)).toEqual('')

  it 'clears all checked checkboxes within the scope', ->
    setFixtures("
    <div id='outer'>
      <input type='checkbox' name='text' value='outer text 1' checked>
      <input type='checkbox' name='text' value='outer text 2'checked>
      <div id='inner'>
        <input type='checkbox' name='text' value='inner text 1' checked>
        <input type='checkbox' name='text' value='inner text 2' checked>
      </div>
    </div>")
    scope = '#inner'
    data = { type: 'checkbox', name: 'text', value: ['inner text 1', 'inner text 2']}

    FormsJs.Scope.set(scope)
    expect(FormsJs.Scope.getCheckedValues(data)).toEqual(['inner text 1', 'inner text 2'])

    FormsJs.Scope.clearChecked(data)
    expect(FormsJs.Scope.getCheckedValues(data)).toEqual([])


