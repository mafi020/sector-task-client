import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import {
  TextInput,
  Button,
  Group,
  Grid,
  MultiSelect,
  Checkbox,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import { EmployeeInterface } from '../../../interfaces/Employee.interface';
import { useEmployee } from '../../../hooks/useEmployee';

interface UpdateEmployeeProps {
  employee: EmployeeInterface;
  updateEmployee: (data: EmployeeInterface) => void;
  updateEmployeeError: any;
}

export const UpdateEmployee = ({
  employee,
  updateEmployee,
  updateEmployeeError,
}: UpdateEmployeeProps) => {
  const { allSectors } = useEmployee();

  const form = useForm({
    initialValues: {
      id: '' as any,
      name: '',
      sectors: [] as string[],
      terms: true,
    },
    // validate: yupResolver(
    //   Yup.object().shape({
    //     name: Yup.string().required('Name is required'),
    //     sectors: Yup.array()
    //       .min(1, 'Sectors must not be empty')
    //       .required('Sectors is required'),
    //     terms: Yup.boolean()
    //       .oneOf([true], 'Terms must be agreed')
    //       .required('Terms must be agreed'),
    //   })
    // ),
  });

  const handleUpdate = (val: EmployeeInterface) => {
    updateEmployee(val);
  };

  useEffect(() => {
    form.setValues({ ...employee });
  }, [employee]);

  useEffect(() => {
    form.setErrors((prev: any) => ({ ...prev, ...updateEmployeeError }));
  }, [updateEmployeeError]);

  return (
    <>
      <form onSubmit={form.onSubmit((values) => handleUpdate(values))}>
        <Grid>
          <Grid.Col span={12}>
            <TextInput
              withAsterisk
              label='Name'
              placeholder='Enter your name'
              {...form.getInputProps('name')}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <MultiSelect
              label='Sector'
              placeholder='Pick one'
              searchable
              nothingFound='No options'
              data={allSectors}
              {...form.getInputProps('sectors')}
              value={form.values.sectors}
              onChange={(sectors) => form.setFieldValue('sectors', sectors)}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Checkbox
              mt='md'
              label='Agree to terms'
              {...form.getInputProps('terms', { type: 'checkbox' })}
            />
          </Grid.Col>
        </Grid>

        <Group position='right' mt='md'>
          <Button type='submit'>Submit</Button>
        </Group>
      </form>
    </>
  );
};
