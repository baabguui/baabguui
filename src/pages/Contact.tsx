import { useState } from "react";
import {
    ContactContainer,
    InputContainer,
    Label,
    InputEmail,
    InputContent,
    SubmitBtn,
} from "../styles/contact-style";

function Contact() {
    const [form, setForm] = useState({
        email: "",
        title: "",
        content: "",
    });

    const { email, title, content } = form;

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
        return;
    }

    return (
        <ContactContainer>
            9universe9th@gmail.com
            <br />
            +82 010 2672 4112
            <InputContainer style={{ marginTop: "10px" }}>
                <Label>Email</Label>
                <InputEmail
                    name="email"
                    value={email}
                    onChange={handleChange}
                ></InputEmail>
            </InputContainer>
            <InputContainer>
                <Label>Title</Label>
                <InputEmail
                    name="title"
                    value={title}
                    onChange={handleChange}
                ></InputEmail>
            </InputContainer>
            <InputContainer>
                <InputContent
                    name="content"
                    value={content}
                    onChange={handleChange}
                ></InputContent>
            </InputContainer>
            <InputContainer style={{ borderBottom: "1px solid" }}>
                <SubmitBtn style={{ borderLeft: "1px solid" }}>Send</SubmitBtn>
            </InputContainer>
        </ContactContainer>
    );
}

export default Contact;
