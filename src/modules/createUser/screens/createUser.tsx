import React, { useRef } from 'react';
import Input from '../../../shared/components/input/input';
import Button from '../../../shared/components/buttom/buttom';
import { ContainerCreateUser } from '../styles/createUser.style';
import { useCreateUser } from '../hooks/useCreateUser';
import { TextInput } from 'react-native';

const CreateUser = () => {
  const { createUser, loading, disabled, handleOnChangeInput, handleCreateUser } = useCreateUser();

  const phoneInput = useRef<TextInput>(null);
  const emailInput = useRef<TextInput>(null);
  const cpfInput = useRef<TextInput>(null);
  const passwordInput = useRef<TextInput>(null);
  const confirmPasswordInput = useRef<TextInput>(null);

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
        onSubmitEditing={() => phoneInput?.current?.focus()}
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
        ref={phoneInput}
        onSubmitEditing={() => emailInput?.current?.focus()}
        keyboardType="number-pad"
      />
      <Input
        value={createUser.email}
        onChange={(event) => {
          handleOnChangeInput(event, 'email');
        }}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Email:"
        ref={emailInput}
        onSubmitEditing={() => cpfInput?.current?.focus()}
        keyboardType="email-address"
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
        ref={cpfInput}
        onSubmitEditing={() => passwordInput?.current?.focus()}
        keyboardType="number-pad"
      />
      <Input
        value={createUser.password}
        onChange={(event) => {
          handleOnChangeInput(event, 'password');
        }}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Senha:"
        secureTextEntry
        ref={passwordInput}
        onSubmitEditing={() => confirmPasswordInput?.current?.focus()}
      />
      <Input
        value={createUser.confirmPassword}
        onChange={(event) => {
          handleOnChangeInput(event, 'confirmPassword');
        }}
        margin="0px 0px 16px 0px"
        placeholder="Digite"
        title="Confirmar senha:"
        secureTextEntry
        ref={confirmPasswordInput}
        onSubmitEditing={handleCreateUser}
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
