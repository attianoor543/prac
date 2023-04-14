import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper> 
    <h2>
      Contact page
    </h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53715.74617673668!2d73.91131412726507!3d32.70640558931652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f0976a9388329%3A0xb8a5131548b7b16a!2sLalamusa%2C%20Gujrat%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1680956085027!5m2!1sen!2s" 
    width="100%" height="450" style="border:0;
    " allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
<div className="container">
<div className="contact-us">
<form action="https://formspree.io/f/xgebpvjw" method="POST" className="contact-input">
  <input type="text" placeholder="username" name="username"
   required
   autoComplete="off"/>
 
<input type="email" placeholder="Email" name="Email"
   required
   autoComplete="off"/>
<textarea name="Message"cols="30" rows="10" 
required  
autoComplete="off" placeholder="Enter your message">

</textarea>
<input type="submit" value="send">
</input>

</form>
</div>
</div>
   
  </Wrapper>;
};

export default Contact;
