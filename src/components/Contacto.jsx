import React from 'react'
import { useForm } from 'react-hook-form'

const Contacto = ({language}) => {

    const { register , handleSubmit , reset } = useForm()

    const submit = data => {

        if (data.email_contact != '') {

        console.log(data)

        const defaultForm = {
            name_contact : '' ,
            email_contact : '' ,
            message_contact : ''
        }

        const mail = 'mems2001code@gmail.com'
        const URL = `https://formsubmit.co/${mail}`

        window.fetch ( URL , {
            method: 'POST' ,
            headers: {
                'Content-Type': 'application/json' ,
                'Accept': 'application/json'
            } ,
            body: JSON.stringify(
                data
            )})
            .then (function (data) {
                console.log(data) ,
                reset (defaultForm)
            })
            .catch (function (err) {
                console.log(err)
            })

        }
         
    }

  return (
    <section id='contacto'>
      
      <div className='titles'>
       <h2>{language[5].title}</h2> 
      </div>

      <form className='formCont' onSubmit={handleSubmit(submit)}>
        <label className='cl7 formLabel' htmlFor='nameC'>{language[5].content.name.title} :</label>
        <input type="text" id='nameC' {...register('name_contact')} placeholder={language[5].content.name.placeholder} />
        <label className='cl7 formLabel' htmlFor='emailC'>{language[5].content.email.title} :</label>
        <input type='email' id='emailC' {...register('email_contact')} placeholder={language[5].content.email.placeholder} />
        <label className='cl7 formLabel' htmlFor='messageC'>{language[5].content.message.title} :</label>
        <textarea id='messageC' {...register('message_contact')} placeholder={language[5].content.message.placeholder} rows='10' />
        <input className='submitBtn' type='submit' value={language[5].content.submit} />
      </form>
      
    </section>
  )
}

export default Contacto