import { Button, Modal } from '@mantine/core';
import { TableTitleVariationOne } from '../../ui/Headers/TableTitleVariationOne';
import { AdddEmployee } from './AddEmployee';
import { useEmployee } from '../../../hooks/useEmployee';
import { EmployeeInterface } from '../../../interfaces/Employee.interface';

interface HeaderInterfcae {
  showAddModal: boolean;
  toggleAddModal: (data: boolean) => void;
  addEmployee: (data: EmployeeInterface) => void;
  addEmployeeError: any;
}
export const EmployeeHeader = ({
  showAddModal,
  toggleAddModal,
  addEmployee,
  addEmployeeError,
}: HeaderInterfcae) => {
  return (
    <TableTitleVariationOne title='Employees'>
      <>
        <Button onClick={() => toggleAddModal(showAddModal)}>
          Add Employee
        </Button>
        <Modal
          title='Add Employee'
          opened={showAddModal}
          onClose={() => toggleAddModal(showAddModal)}
          size='lg'
        >
          <AdddEmployee
            addEmployee={addEmployee}
            addEmployeeError={addEmployeeError}
          />
        </Modal>
      </>
    </TableTitleVariationOne>
  );
};
