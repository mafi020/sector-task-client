import { useEffect, useState } from 'react';
import { EmployeeInterface } from '../interfaces/Employee.interface';
import { notifications } from '@mantine/notifications';

export const useEmployee = () => {
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [addEmployeeError, setAddEmployeeError] = useState({});
  const [updateEmployeeError, setUpdateEmployeeError] = useState({});

  const [allSectors, setAllSectors] = useState<string[]>([]);

  const toggleAddModal = (val: boolean) => {
    setShowAddModal(!val);
    setAddEmployeeError({});
  };
  const toggleUpdateModal = (val: boolean) => {
    setShowUpdateModal(!val);
    setUpdateEmployeeError({});
  };

  const addEmployee = async (employee: EmployeeInterface) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/employees`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(employee),
        }
      );

      const { data, err } = await response.json();

      if (response.ok) {
        setEmployees((prev) => [data, ...prev]);
        toggleAddModal(showAddModal);
        notifications.show({
          withCloseButton: true,
          message: 'Employee Added Successfully',
        });
      } else {
        setAddEmployeeError((prev) => ({ ...err }));
      }
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const updateEmployee = async (employee: EmployeeInterface) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/employees/${employee._id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(employee),
        }
      );

      const { data, err } = await response.json();

      if (response.ok) {
        setEmployees((prev) =>
          prev.map((employee) =>
            employee._id === data._id ? { ...data } : employee
          )
        );
        toggleUpdateModal(showUpdateModal);
        notifications.show({
          withCloseButton: true,
          message: 'Employee Updated Successfully',
        });
      } else {
        setUpdateEmployeeError((prev) => ({ ...err }));
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  useEffect(() => {
    !employees.length &&
      fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/employees`)
        .then((response) => response.json())
        .then(({ data }) => setEmployees(data))
        .catch((error) => console.error('Error fetching data:', error));
  }, [employees.length]);

  useEffect(() => {
    !allSectors.length &&
      fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/sectors`)
        .then((response) => response.json())
        .then(({ data }) => setAllSectors(data))
        .catch((error) => console.error('Error fetching data:', error));
  }, [allSectors.length]);

  return {
    employees,
    allSectors,
    showAddModal,
    showUpdateModal,
    addEmployeeError,
    updateEmployeeError,
    toggleAddModal,
    toggleUpdateModal,
    addEmployee,
    updateEmployee,
  };
};
