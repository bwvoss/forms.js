describe 'FormJs.Form.Clear', ->

  it 'clears the form', ->
    setFixtures(
      "<form action='#'>
        <input type='text' name='email' value='example@me.com'>
        <input type='radio' name='gender' value='male' checked>
        <input type='checkbox' name='interests' value='Java' checked>
        <select name='browser'>
          <option value=''></option>
          <option selected>Chrome</option>
        </select>
      </form>")

    FormsJs.Form.Clear.all()

    expect($('[name=email]').val()).toEqual('')
    expect($('[name=gender]:checked').val()).toBe(undefined)
    expect($('[name=interests]:checked').val()).toBe(undefined)
    expect($('[name=email]').val()).toEqual('')
