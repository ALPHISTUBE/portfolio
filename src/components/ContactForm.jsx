// components/ContactForm.jsx
import React from 'react';
import styled from 'styled-components';

const ContactForm = () => {
  return (
    <ContactSection>
      <h2>Contact Me</h2>
      <Form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </Form>
    </ContactSection>
  );
};

export default ContactForm;

const ContactSection = styled.section`
  padding: 50px;
  background-color: #333;
  color: white;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  input, textarea {
    padding: 15px;
    border-radius: 5px;
    border: none;
  }
  button {
    padding: 15px;
    background-color: #4caf50;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }
`;
