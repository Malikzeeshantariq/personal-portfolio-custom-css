import "../style/contact.css"
function Contact(){
    return (
        <main className="contact-main">
           <div className="form-container">
            <h1 className="con-title">Contact Us</h1>
            <form action="" className="form">
                <input type="text" placeholder="Enter Your Name"/>
                <input type="email" placeholder="abc@gmail.com"/>
                <input className="message" type="text" placeholder="Enter Your message"/>
            </form>
            <button className="button">Submit</button>
           </div>
        </main>
    )
}
export default Contact;