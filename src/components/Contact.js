import { useState } from 'react' 
import emailjs from 'emailjs-com'

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [emailError, setEmailError] = useState(false);


    const submit = (e) => {
        e.preventDefault();
        if(name && email && message) {
            const serviceId = 'service_gq4iyci';
            const templateId = 'template_aiy4w9f';
            const userId = 'user_6SDYYr96jB3eRJolCxSM6';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));
            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            setEmailError(true)
        }
    }

    return (
        <div class="contact-container" id="contact">
            <h1>/contact</h1>
            <div className={emailError ? 'email-error' : 'invisible'}>Please fill out all fields</div>
            <form onSubmit={submit} className={emailSent ? 'invisible' : null}>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <textarea class="messagebox" placeholder="Message" value={message} rows="7" cols="33" onChange={e => setMessage(e.target.value)}></textarea> 
                <button onSubmit={submit} type="submit" class="submit-button">Submit</button>
            </form>
            <div className={emailSent ? 'confirm-email' : 'invisible'}>Thank you for your message! I'll be back with you shortly.</div>
        </div>
    )
}

export default Contact