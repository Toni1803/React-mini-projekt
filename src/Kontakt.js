import React, { useState } from 'react'

function Kontakt() {
  const[formData, setFormData] = useState({
    ime:'',
    email:'',
    subjekt:'',
    poruka:'',
  });
  const handleSubmit = async () => {
    try{
      const response = await fetch('http://localhost/react-app/posalji-poruku.php',{
        method:'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData),
      });

      const data = await response.json();

      if(data.success) {
        console.log('Message sent successfully');
      } else {
        console.error('Failed to send message: ');
      }
    } catch (error){
      console.error('Error sending message: ', error);
    }
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  return (
    <>
    <h1 style={{textAlign:"center"}}>Kontaktiraj nas</h1>
    <div className='contact-box'>
        <form>
            <input type='text' className='input-field' placeholder='Vaše ime' name='ime' onChange={handleChange}/>
            <input type='text' className='input-field' placeholder='Vaše email' name='email' onChange={handleChange}/>
            <input type='text' className='input-field' placeholder='Subjekt' name='subjekt' onChange={handleChange}/>
            <textarea type='text' className='input-field textarea-field' placeholder='Poruka' name='poruka' onChange={handleChange}/>
            <button type='button' className='btn' onClick={handleSubmit}>Pošalji poruku</button>
        </form>
    </div>
    </>
  )
}

export default Kontakt