import React from 'react'

const Contactform = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder='name' />
        <br/>
        <input type="email" placeholder='Email' />
        <br/>
        <textarea placeholder='message'></textarea>
        <br/>
        <button type='submit'> submit</button>
      </form>
    </div>
  )
}

export default Contactform
