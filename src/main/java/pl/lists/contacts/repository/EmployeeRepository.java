package pl.lists.contacts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import pl.lists.contacts.model.Employee;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {

    @Query("SELECT emp FROM Employee emp WHERE emp.company.id = ?1")
    List<Employee> employeesByCompanyId(Integer companyId);
}
