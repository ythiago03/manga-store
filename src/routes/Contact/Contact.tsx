import InputForm from '../../components/InputForm/InputForm';

//Styles
import './Contact.css';

const Contact = () => {
  return (
    <main className="contact-container">
      <section className="contact-info">
        <h1 className="title">Contato</h1>
        <p>Olá, agradecemos o contato, responderemos o mais rápido que pudermos!</p>
        <span>Telefone: (88) 88888-8888</span>
        <span>Whatsapp: (99) 99999-9999</span>
        <span>E-mail: mangastore@mail.com.br</span>
      </section>

      <section className="contact-form">
        <form>
          <InputForm label="Nome Completo" type="text" name="name" placeholder="Digite o seu nome"/>
          <InputForm label="E-mail" type="email" name="email" placeholder="Email@mail.com"/>
          <InputForm label="Telefone" type="number" name="cellphone" placeholder="(__) _____-____ "/>
          <label className="form-message">
            Mensagem
            <textarea placeholder="Assunto..." name="message" cols={30} rows={10}></textarea>
          </label>
          <button className="form-btn">Enviar</button>
        </form>
      </section>
    </main>
  );
};

export default Contact;
