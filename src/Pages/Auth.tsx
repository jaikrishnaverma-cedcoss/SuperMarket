import { type } from '@testing-library/user-event/dist/type'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../features/DataSlice'

type MyType = {
  setLoggedIn: React.Dispatch<React.SetStateAction<{ loggedIn: boolean; userDetails: {}; }>>
}

type StateType = {
    Cart: {
      id: number
      image: string
      price: number
      quantity: number
      rating: number
      title: string
      total: number
      type: string
    }[],
    User: {
      username: string
      password: string
      mobile: number
    }[]
}
type TypeverifiedUser = {
    username: string
    password: string
    mobile: number
}
const Auth = (props: MyType) => {
  const state = useSelector((state: StateType) => state.User)
  const dispatch = useDispatch()
  const [mode, setMode] = useState(false)
  const [msg, setMsg] = useState('')
  const FormSubmitted = (e: any) => {
    e.preventDefault();
    // mode=login
    if (mode) {
      var verifiedUser: TypeverifiedUser = {
        username: '',
        password: '',
        mobile: 0
      }
      state.forEach((x) => {
        if (x.username === e.target.username.value && x.password === e.target.password.value)
          verifiedUser = x
      })
      console.log('first', verifiedUser.username)
      if (verifiedUser.username)
        props.setLoggedIn({ loggedIn: true, userDetails: { ...verifiedUser } })
      else
        setMsg('wrong Username or Password!')
    } else {
      setMsg('Sucessfully Registered.')
      setMode(true)
      dispatch(addUser({ username: e.target.username.value, password: e.target.password.value, mobile: e.target.mobile.value }))
    }
  }
  
  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
        <h4 className="text-danger text-center m-2">{msg}</h4>
        <form onSubmit={FormSubmitted} className="card p-3 bg-warning">
          <h2 className='text-center mt-2 mb-3'>{(mode) ? 'LogIn' : 'SignUp'}</h2>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Username</label>
            <div className="col-sm-9">
              <input required type="text" className="form-control" name='username' id="inputUsername" />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Password</label>
            <div className="col-sm-9">
              <input required type="password" name="password" className="form-control" id="inputPassword" />
            </div>
          </div>
          {!mode && <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Mobile</label>
            <div className="col-sm-9">
              <input required type="number" name="mobile" className="form-control" id="inputMobile" />
            </div>
          </div>}
          <div className="mb-3 row p-2">
            <button className='btn btn-primary' type='submit'>{(mode) ? 'LogIn' : 'SignUp'}</button>
          </div>
          <a href="#" className="link-dark" onClick={() => setMode(!mode)}>go to {(!mode) ? 'LogIn..?' : 'SignUp..?'}</a>
        </form>
      </div>
    </>
  )
}

export default Auth