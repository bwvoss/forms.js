describe 'FormsJs.InputTypes', ->

  it 'returns text as a string for TEXT', ->
    expect(FormsJs.InputTypes.TEXT).toEqual('text')

  it 'returns radio as a string for RADIO', ->
    expect(FormsJs.InputTypes.RADIO).toEqual('radio')

  it 'returns checkbox as a string for CHECKBOX', ->
    expect(FormsJs.InputTypes.CHECKBOX).toEqual('checkbox')

  it 'returns select as a string for SELECT', ->
    expect(FormsJs.InputTypes.SELECT).toEqual('select')

