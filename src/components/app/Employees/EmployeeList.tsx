import {
  ActionIcon,
  Group,
  Modal,
  ScrollArea,
  Table,
  Text,
  Tooltip,
} from '@mantine/core';
import { EmployeeInterface } from '../../../interfaces/Employee.interface';
import { IconPencil } from '@tabler/icons-react';
import { UpdateEmployee } from './UpdateEmployee';
import { useState } from 'react';
import { useEmployee } from '../../../hooks/useEmployee';
import { EmployeeHeader } from './EmployeeHeader';

export const EmployeeList = () => {
  const {
    employees,
    updateEmployee,
    showUpdateModal,
    toggleUpdateModal,
    showAddModal,
    toggleAddModal,
    addEmployee,
  } = useEmployee();
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeInterface>();

  const handleSelectEmployee = (_id: number | undefined) => {
    setSelectedEmployee(
      employees.find((elem: EmployeeInterface) => elem._id === _id)
    );
    toggleUpdateModal(showUpdateModal);
  };

  const rows = employees.map((row) => {
    return (
      <tr key={row._id}>
        <td>{row.name}</td>
        <td>{row.sectors.join(', ')}</td>
        <td>{row.terms ? 'Yes' : 'No'}</td>
        <td>
          <Group>
            <Tooltip
              label='Edit'
              color='green'
              withArrow
              onClick={() => handleSelectEmployee(row._id)}
            >
              <ActionIcon variant='outline' color='green'>
                <IconPencil size='1rem' />
              </ActionIcon>
            </Tooltip>
          </Group>
        </td>
      </tr>
    );
  });
  return (
    <>
      <EmployeeHeader
        showAddModal={showAddModal}
        toggleAddModal={toggleAddModal}
        addEmployee={addEmployee}
      />
      <ScrollArea>
        <Table verticalSpacing='xs'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Sectors</th>
              <th>Terms</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows
            ) : (
              <tr>
                <td colSpan={4}>
                  <Text weight={500} align='center'>
                    Nothing found
                  </Text>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </ScrollArea>
      {selectedEmployee && (
        <>
          <Modal
            title='Update Employee'
            opened={showUpdateModal}
            onClose={() => toggleUpdateModal(showUpdateModal)}
            size='lg'
          >
            <UpdateEmployee
              employee={selectedEmployee}
              updateEmployee={updateEmployee}
            />
          </Modal>
        </>
      )}
    </>
  );
};

export default EmployeeList;
