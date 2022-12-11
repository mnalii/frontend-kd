import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { useFormContext, Controller, FieldError } from 'react-hook-form';

const Input = styled.input<{ error: FieldError | undefined }>`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.8rem;
  font-family: inherit;
  color: inherit;
  border: 1px solid ${(props) => (props.error ? 'red;' : 'gray;')};
  border-radius: 9px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);

  &:focus {
    box-shadow: 0 0 3px 0 var(--lightRed);
    outline: none;
    border-color: var(--lightRed);
  }
`;

type IProps = {
  name: string;
};

type Props = IProps & InputHTMLAttributes<HTMLInputElement>;

export default function RHFInput({ name, ...props }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Input
            error={error}
            {...field}
            value={
              typeof field.value === 'number' && field.value === 0
                ? ''
                : field.value
            }
            {...props}
          />
          <small
            style={{
              color: 'red',
              fontSize: '1.2rem',
              marginTop: '5px',
              display: 'block',
            }}
          >
            {error?.message}
          </small>
        </>
      )}
    />
  );
}
