// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameErr: false,
    lastNameErr: false,
    isSubmitForm: false,
  }

  blurLastName = () => {
    const validName = this.validateLastName()

    this.setState({lastNameErr: !validName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({lastName: value})
  }

  renderLastName = () => {
    const {lastName, lastNameErr} = this.state
    const className = lastNameErr ? 'name-input error-field' : 'name-input'

    return (
      <div className="input-con">
        <label className="label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          className={className}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.blurLastName}
        />
      </div>
    )
  }

  blurFirstName = () => {
    const validFirstName = this.validateFirstName()

    this.setState({firstNameErr: !validFirstName})
  }

  changeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({firstName: value})
  }

  renderFirstName = () => {
    const {firstName, firstNameErr} = this.state

    const className = firstNameErr ? 'name-input error-field' : 'name-input'

    return (
      <div className="input-con">
        <label className="label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          className={className}
          placeholder="First name"
          onChange={this.changeFirstName}
          onBlur={this.blurFirstName}
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  isSubmit = event => {
    event.preventDefault()
    const validFirstName = this.validateFirstName()
    const validLastName = this.validateLastName()

    if (validFirstName && validLastName) {
      this.setState({isSubmitForm: true})
    } else {
      this.setState({
        firstNameErr: !validFirstName,
        lastNameErr: !validLastName,
        isSubmitForm: false,
      })
    }
  }

  renderRegisterForm = () => {
    const {firstNameErr, lastNameErr} = this.state

    return (
      <form className="form-con" onSubmit={this.isSubmit}>
        {this.renderFirstName()}
        {firstNameErr && <p className="err-msg">Required</p>}
        {this.renderLastName()}
        {lastNameErr && <p className="err-msg">Required</p>}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    )
  }

  onAnotherResponse = () => {
    this.setState(prevState => ({
      isSubmitForm: !prevState.isSubmitForm,
      firstName: '',
      lastName: '',
    }))
  }

  renderSuccessView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="image"
      />
      <p className="success">Submitted Successfully</p>

      <button
        type="button"
        className="submit-btn"
        onClick={this.onAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )

  render() {
    const {isSubmitForm} = this.state

    return (
      <div className="reg-con">
        <h1 className="heading">Registration</h1>
        <div className="view-con">
          {isSubmitForm ? this.renderSuccessView() : this.renderRegisterForm()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
