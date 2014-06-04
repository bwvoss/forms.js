describe 'FormsJs.Scope', ->

  it 'gets the value of a text box within the scope', ->
    setFixtures("<div id='outer'><input type='text' name='text' value='outer text'><div id='inner'><input type='text' name='text' value='inner text'></div></div>")
    scope = '#inner'
    data = { type: 'text', name: 'text' }

    expect(FormsJs.Scope.getValue(data, scope)).toEqual('inner text')

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

    expect(FormsJs.Scope.getCheckedRadioValue(data, scope)).toEqual('inner text 1')

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

    expect(FormsJs.Scope.getCheckedValues(data, scope)).toEqual(['inner text 1', 'inner text 2'])

  it 'sets the value of a text box within the scope', ->
    setFixtures("<div id='outer'><input type='text' name='text' value=''><div id='inner'><input type='text' name='text' value=''></div></div>")
    scope = '#inner'
    data = { type: 'text', name: 'text', value: 'inner text'}

    expect($("[name=text]", scope).val()).toEqual('')

    FormsJs.Scope.setValue(data, scope)
    expect($("[name=text]", scope).val()).toEqual('inner text')
    expect($("[name=text]", '#outer').val()).toEqual('')

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

    expect(FormsJs.Scope.getCheckedRadioValue(data, scope)).toBeUndefined()

    FormsJs.Scope.setRadioChecked(data, scope)
    expect(FormsJs.Scope.getCheckedRadioValue(data, scope)).toEqual('inner text 1')

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

    expect(FormsJs.Scope.getCheckedValues(data, scope)).toEqual([])

    FormsJs.Scope.setAllChecked(data, scope)
    expect(FormsJs.Scope.getCheckedValues(data, scope)).toEqual(['inner text 1', 'inner text 2'])

  it 'clears the value of a text box within the scope', ->
    setFixtures("<div id='outer'><input type='text' name='text' value='outer text'><div id='inner'><input type='text' name='text' value='inner text'></div></div>")
    scope = '#inner'
    data = { type: 'text', name: 'text' }

    expect(FormsJs.Scope.getValue(data, scope)).toEqual('inner text')

    FormsJs.Scope.clearValue(data, scope)
    expect(FormsJs.Scope.getValue(data, scope)).toEqual('')

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

    expect(FormsJs.Scope.getCheckedValues(data, scope)).toEqual(['inner text 1', 'inner text 2'])

    FormsJs.Scope.clearChecked(data, scope)
    expect(FormsJs.Scope.getCheckedValues(data, scope)).toEqual([])

  it 'returns the value of the first option for a dropdown when there is no default value', ->
    setFixtures("
      <div id='inner'>
        <select name='text'>
          <option value='0'>-- Please Select --</option>
          <option value='1'>IL</option>
          <option value='2>'WI</option>
          <option value='3'>AR</option>
        </select>
      </div>")

    scope = '#inner'
    data = { type: 'select', name: 'text', value: undefined }
    FormsJs.Scope.setValue(data, scope)

    expect(FormsJs.Scope.getValue(data, scope)).toEqual('0')