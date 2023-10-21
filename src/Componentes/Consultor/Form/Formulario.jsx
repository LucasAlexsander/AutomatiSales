import React from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import styles from './Formulario.module.css';
import { useNavigate } from 'react-router-dom';

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));

    const text = `
    Nome: ${data.name}
    <br />
    Email: ${data.email}
    <br />
    Telefone: ${data.telefone}
    <br />
    CRM: ${data.crm}
    <br />
    Empresa: ${data.empresa}
    <br />
    Cargo: ${data.cargo}
    `;

    const config = {
      Username: 'lucaslucaslucas655@gmail.com',
      Password: 'D354229D760404F6D2F5FB255E5DF0295D83',
      Host: 'smtp.elasticemail.com',
      Port: '2525',
      // secureToken: 'd9b28d97-d832-4d5b-b91d-4bf59c6c26a6',
      To: 'lucas.alexsander@ufvjm.edu.br',
      From: 'lucaslucaslucas655@gmail.com',
      Subject: 'Novo Lead!',
      Body: text,
    };

    window.Email.send(config).then(navigate('/agradecimento'));

    console.log(text);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action="https://formsubmit.co/julio.braz@automatisales.com.br"
      method="POST"
    >
      <div className={styles.formGroup}>
        <label>Nome *</label>
        <input
          className={errors?.name && styles.inputError}
          type="text"
          autoFocus
          placeholder="Digite seu nome"
          {...register('name', { required: true })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>E-mail Corporativo *</label>
        <input
          className={errors?.email && styles.inputError}
          type="email"
          placeholder="Digite seu e-mail coroporativo"
          {...register('email', {
            required: true,
            validate: (value) => validator.isEmail(value),
          })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Telefone *</label>
        <input
          className={errors?.telefone && styles.inputError}
          type="numeric"
          placeholder="Entre com seu número de telefone"
          {...register('telefone', {
            required: true,
            validate: (value) => validator.isMobilePhone(value, 'pt-BR'),
          })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Cargo *</label>
        <select
          className={errors?.cargo && styles.inputError}
          {...register('cargo', {
            validate: (value) => value !== '0',
          })}
        >
          <option value="0">Selecione um Cargo</option>
          <option value="DirSocClevel">Diretor / Sócio / C-Level</option>
          <option value="cordenGerent">Cordenador / Gerente</option>
          <option value="vendedor">Vendedor</option>
          <option value="sdr">SDR</option>
          <option value="analista">Analista</option>
          <option value="assistEstag">Assistente / Estagiário</option>
          <option value="estudante">Estudante</option>
          <option value="outros">Outros cargos</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Empresa *</label>
        <input
          className={errors?.empresa && styles.inputError}
          type="text"
          placeholder="Entre com sua empresa"
          {...register('empresa', { required: true })}
        />
      </div>

      <div className={styles.formGroup}>
        <label>Qual CRM utiliza? *</label>
        <select
          className={errors?.crm && styles.inputError}
          {...register('crm', {
            validate: (value) => value !== '0',
          })}
        >
          <option value="0">Selecione um CRM</option>
          <option value="salesforce">Salesforce</option>
          <option value="dynamics">Dynamics</option>
          <option value="pipedrive">Pipedrive</option>
          <option value="hubspot">Hubspot</option>
          <option value="station">RD Station CRM</option>
          <option value="outro">Utilizo outra CRM</option>
          <option value="nenhum">Ainda não utilizo nenhum CRM</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <button type="submit">Cadastrar</button>
      </div>

      <input type="hidden" name="_subject" value="Novo Lead!" />
    </form>
  );
};

export default Formulario;
