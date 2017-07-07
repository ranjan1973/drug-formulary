package service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dao.StudentDao;
import model.Student;
import service.StudentService;
@Service
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	private StudentDao studentdao;

	@Transactional
	public void add(Student student) {
		// TODO Auto-generated method stub
		studentdao.add(student);

	}

	@Transactional
	public void edit(Student student) {
		// TODO Auto-generated method stub
		studentdao.edit(student);
		
	}

	@Transactional
	public void delete(int studentId) {
		// TODO Auto-generated method stub
		studentdao.delete(studentId);
	}

	@Transactional
	public Student getStudent(int studentId) {
		// TODO Auto-generated method stub
		return studentdao.getStudent(studentId);
	}

	@Transactional
	public List getAllStudent() {
		// TODO Auto-generated method stub
		return studentdao.getAllStudent();
	}

}
