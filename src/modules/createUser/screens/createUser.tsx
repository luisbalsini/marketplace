import React from 'react';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/buttom/buttom';
import { ContainerCreateUser } from '../styles/createUser.style';
import { useCreateUser } from '../hooks/useCreateUser';

const CreateUser = () => {
  const { createUser, loading, disabled, handleOnChangeInput, handleCreateUser } = useCreateUser();

  return (
    <ContainerCreateUser>
      <Input
        value={createUser.name}
        onChange={(event) => {
          handleOnChangeInput(event, 'name');
        }}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Nome completo:"
      />
      <Input
        value={createUser.phone}
        onChange={(event) => {
          handleOnChangeInput(event, 'phone');
        }}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Telefone:"
        type="cel-phone"
      />
      <Input
        value={createUser.email}
        onChange={(event) => {
          handleOnChangeInput(event, 'email');
        }}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Email:"
      />
      <Input
        value={createUser.cpf}
        onChange={(event) => {
          handleOnChangeInput(event, 'cpf');
        }}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="CPF:"
        type="cpf"
      />
      <Input
        value={createUser.password}
        onChange={(event) => {
          handleOnChangeInput(event, 'password');
        }}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Senha:"
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(event) => {
          handleOnChangeInput(event, 'confirmPassword');
        }}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Confirmar senha:"
      />
      <Button
        onPress={handleCreateUser}
        loading={loading}
        margin="0px 0px 32px 0px"
        title="Criar Usuario"
        disabled={disabled}
      />
    </ContainerCreateUser>
  );
};

export default CreateUser;
