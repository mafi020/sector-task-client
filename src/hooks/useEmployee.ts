import { useEffect, useState } from 'react';
import { EmployeeInterface } from '../interfaces/Employee.interface';
import { notifications } from '@mantine/notifications';

export const useEmployee = () => {
  const [employees, setEmployees] = useState<EmployeeInterface[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [allSectors, setAllSectors] = useState([]);

  const toggleAddModal = (val: boolean) => {
    setShowAddModal(!val);
  };
  const toggleUpdateModal = (val: boolean) => {
    setShowUpdateModal(!val);
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

      if (response.ok) {
        const { data } = await response.json();
        setEmployees((prev) => [data, ...prev]);
        toggleAddModal(showAddModal);
        notifications.show({
          withCloseButton: true,
          message: 'Employee Added Successfully',
        });
      } else {
        console.error('Error adding data');
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

      if (response.ok) {
        const { data } = await response.json();
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
        console.error('Error updating data');
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  useEffect(() => {
    (async () => {
      fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/employees`)
        .then((response) => response.json())
        .then((employees) => setEmployees(employees.data))
        .catch((error) => console.error('Error fetching data:', error));
    })();
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/sectors')
      .then((response) => response.json())
      .then((sectors) => setAllSectors(sectors.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return {
    employees,
    showAddModal,
    showUpdateModal,
    toggleAddModal,
    toggleUpdateModal,
    updateEmployee,
    allSectors,
    addEmployee,
  };
};
