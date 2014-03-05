describe 'FormsJs.Form.InputTypes', ->

  it 'returns text as a string for TEXT', ->
    expect(FormsJs.Form.InputTypes.TEXT).toEqual('text')

  it 'returns radio as a string for RADIO', ->
    expect(FormsJs.Form.InputTypes.RADIO).toEqual('radio')

  it 'returns checkbox as a string for CHECKBOX', ->
    expect(FormsJs.Form.InputTypes.CHECKBOX).toEqual('checkbox')

  it 'returns select as a string for SELECT', ->
    expect(FormsJs.Form.InputTypes.SELECT).toEqual('select')

