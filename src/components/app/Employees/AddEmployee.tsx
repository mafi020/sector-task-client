import * as Yup from 'yup';
import { useForm, yupResolver } from '@mantine/form';
import {
  TextInput,
  Checkbox,
  Button,
  Group,
  Text,
  Space,
  MultiSelect,
  Grid,
} from '@mantine/core';
import { useEmployee } from '../../../hooks/useEmployee';
import { EmployeeInterface } from '../../../interfaces/Employee.interface';
import { useEffect } from 'react';

interface AddEmployeeInteface {
  addEmployee: (data: EmployeeInterface) => void;
  addEmployeeError: any;
}

export const AdddEmployee = ({
  addEmployee,
  addEmployeeError,
}: AddEmployeeInteface) => {
  const { allSectors } = useEmployee();

  const form = useForm({
    initialValues: {
      name: '',
      sectors: [] as string[] | [],
      terms: false,
    },
    validate: yupResolver(
      Yup.object().shape({
        name: Yup.string().required('Name is required'),
        sectors: Yup.array()
          .min(1, 'Sectors must not be empty')
          .required('Sectors is required'),
        terms: Yup.boolean()
          .oneOf([true], 'Terms must be agreed')
          .required('Terms must be agreed'),
      })
    ),
  });

  useEffect(() => {
    form.setErrors((prev: any) => ({ ...prev, ...addEmployeeError }));
  }, [addEmployeeError]);

  return (
    <>
      <Text> Please enter your name and pick the Sectors.</Text>
      <Space></Space>
      <Space></Space>
      <form onSubmit={form.onSubmit((values) => addEmployee(values))}>
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
              withAsterisk
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

          <Group mt='md' align='right'>
            <Grid.Col span={12}>
              <Button type='submit'>Save</Button>
            </Grid.Col>
          </Group>
        </Grid>
      </form>
    </>
  );
};

export default AdddEmployee;
