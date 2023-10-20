import React from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import styles from './Formulario.module.css';

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          placeholder="eo"
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
    </form>
  );
};

export default Formulario;
