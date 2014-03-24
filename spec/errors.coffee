describe 'FormsJs.Form.Errors', ->
  it 'populates a span element with an error message', ->
    setFixtures("<span name='textError'></span>")
    data = { name: 'textError', errorMessage: 'This field is required' }

    FormsJs.Form.Errors.apply(data)

    expect($('span[name=textError]').text()).toEqual('This field is required')

