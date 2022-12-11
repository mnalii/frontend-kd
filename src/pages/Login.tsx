import styled from 'styled-components';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import FormProvider from '../components/FormProvider';
import RHFInput from '../components/RHFInput';
import Button from '../components/Button';
import { redirect } from 'react-router-dom';

const FormContainer = styled.div`
  padding: 9.6rem 0;

  .login-form {
    max-width: 400px;
    margin: 0 auto;
    padding: 30px;
    background-color: #fafafa;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .login-form h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  .login-form label {
    display: block;
    margin-bottom: 40px;
  }

  .login-form input {
    margin-top: 10px;
  }

  @media (max-width: 500px) {
    .login-form {
      padding: 15px;
    }

    .login-form label {
      margin-bottom: 5px;
    }
  }
`;

type FormValuesProps = {
  password: string;
  email: string;
};

export default function Login() {
  const LoginSchema = Yup.object().shape({
    password: Yup.string().required('Password is required!'),
    email: Yup.string()
      .email('Email must be a valid email address')
      .required('Email address is required!'),
  });

  const defaultValues = {
    password: '',
    email: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
    shouldFocusError: false,
  });

  const { reset, handleSubmit } = methods;

  const handleLogin = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      alert('Success login');
      redirect('/');
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormContainer>
      <FormProvider
        methods={methods}
        onSubmit={handleSubmit(handleLogin)}
        className='login-form'
      >
        <h1>Login</h1>
        <label>
          Email
          <RHFInput name='email' placeholder='Your email address' />
        </label>
        <label>
          Password
          <RHFInput
            name='password'
            placeholder='Your password'
            type='password'
          />
        </label>
        <Button type='submit' fullWidth>
          Log in
        </Button>
      </FormProvider>
    </FormContainer>
  );
}
