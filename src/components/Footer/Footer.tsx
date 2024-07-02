import React from 'react';
import './Footer.css';

import pix from '../../assets/paymentsMethods/pix.svg';
import visa from '../../assets/paymentsMethods/visa.svg';
import amex from '../../assets/paymentsMethods/amex.svg';
import boleto from '../../assets/paymentsMethods/boleto.svg';
import diners from '../../assets/paymentsMethods/diners.svg';
import mastercard from '../../assets/paymentsMethods/mastercard.svg';

import ebit from '../../assets/stamps/ebit.svg';
import reclameaqui from '../../assets/stamps/reclameaqui.svg';
import ssl from '../../assets/stamps/ssl.svg';
import vtex from '../../assets/stamps/vtex.svg';

const Footer = () => {
  return (
    <footer className="footer-container">
      <section className="footer-wrapper-top">
        <h2>Compre com tranquilidade</h2>
        <span>|</span>
        <p>Prezamos pela qualidade de nossos produtos, devido a isso trabalhamos somente com produtos <span>novos</span> e <span>lacrados</span></p>
      </section>
      <section className="footer-wrapper-bottom">
        <div className="atendimento-wrapper">
          <h3 className="footer-title">Atendimento</h3>
          <span>Telefone: &#40;88&#41; 8888-8888</span>
          <span>Whatsapp: &#40;88&#41; 8888-8888</span>
          <span>E-mail: mangastore@mail.com.br</span>
          <span className="line"></span>
          <span>Horário de atendimento:</span>
          <span>Seg à Sex das 09:00h às 17:30h</span>
          <span>Não temos loja física</span>
        </div>

        <div className="footer-payments-wrapper">
          <div className="safeBuy">
            <h3 className="footer-title">Compra Segura</h3>
            <div className="safeBuy-icons">
              <img src={vtex} alt="Método de pagamento pix logo" />
              <img src={ebit} alt="Método de pagamento pix logo" />
              <img src={ssl} alt="Método de pagamento pix logo" />
              <img src={reclameaqui} alt="Método de pagamento pix logo" />
            </div>
          </div>
          <div className="paymentsMethods">
            <h3 className="footer-title">Formas de pagamento</h3>
            <div className="payments-icons">
              <img src={pix} alt="Método de pagamento pix logo" />
              <img src={visa} alt="Método de pagamento pix logo" />
              <img src={amex} alt="Método de pagamento pix logo" />
              <img src={boleto} alt="Método de pagamento pix logo" />
              <img src={diners} alt="Método de pagamento pix logo" />
              <img src={mastercard} alt="Método de pagamento pix logo" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
