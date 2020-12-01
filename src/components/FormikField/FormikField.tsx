import React from 'react';
import { ErrorMessage, Field } from 'formik';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

const FieldWrapper = styled.div`
  margin: 40px 0;
`;

interface Props {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}

const FormikField: React.FC<Props> = ({ name, label, type = 'text', required = false }) => {
  return (
    <FieldWrapper className="FormikField">
      <Field
        required={required}
        autoComplete="off"
        as={TextField}
        label={label}
        name={name}
        fullWidth
        type={type}
        FormHelperTextProps={{
          className: 'error',
        }}
      />
      <ErrorMessage name={name} render={(msg) => <div style={{ color: '#dc6767' }}>{msg}</div>} />
    </FieldWrapper>
  );
};

export default FormikField;
