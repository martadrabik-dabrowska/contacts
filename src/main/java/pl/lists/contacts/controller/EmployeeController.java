package pl.lists.contacts.controller;

import org.springframework.web.bind.annotation.*;
import pl.lists.contacts.model.Employee;
import pl.lists.contacts.repository.EmployeeRepository;

import java.util.EmptyStackException;
import java.util.List;

@RestController
@CrossOrigin
class EmployeeController {

    private final EmployeeRepository repository;

    EmployeeController(EmployeeRepository repository) {
        this.repository = repository;
    }


    @GetMapping("/employees")
    List<Employee> all() {
        System.out.println("all");
        return repository.findAll();
    }

    @GetMapping("/employeesList/{id}")
    List<Employee> employeesByCompany(@PathVariable Integer id) {
System.out.println("employeesByCompany");
        return repository.employeesByCompanyId(id);
    }

    @PostMapping("/employees")
    Employee newEmployee(@RequestBody Employee newEmployee) {
        System.out.println("newEmployee");
        return repository.save(newEmployee);
    }


    @GetMapping("/employees/{id}")
    Employee one(@PathVariable Integer id) {

        return repository.findById(id)
                .orElseThrow(() -> new EmptyStackException());
    }

    @PutMapping("/employees/{id}")
    Employee replaceEmployee(@RequestBody Employee newEmployee, @PathVariable Integer id) {

        return repository.findById(id)
                .map(employee -> {
                    employee.setFirstName(newEmployee.getFirstName());
                    employee.setLastName(newEmployee.getLastName());
                    employee.setActive(newEmployee.isActive());
                    employee.setPhoneNumber(newEmployee.getPhoneNumber());
                    employee.setCompany(newEmployee.getCompany());
                    employee.setPosition(newEmployee.getPosition());
                    return repository.save(employee);
                })
                .orElseGet(() -> {
                    newEmployee.setId(id);
                    return repository.save(newEmployee);
                });
    }

    @DeleteMapping("/employees/{id}")
    void deleteEmployee(@PathVariable Integer id) {
        repository.deleteById(id);
    }
}
