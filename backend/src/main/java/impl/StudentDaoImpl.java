package impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import dao.StudentDao;
import model.Student;

public class StudentDaoImpl implements StudentDao {
	@Autowired
	private SessionFactory session;

	@Override
	public void add(Student student) {
		session.getCurrentSession().save(student);
		// TODO Auto-generated method stub

	}

	@Override
	public void edit(Student student) {
		session.getCurrentSession().update(student);
		// TODO Auto-generated method stub

	}

	@Override
	public void delete(int studentId) {
		// TODO Auto-generated method stub
		session.getCurrentSession().delete(getStudent(studentId));
	}

	@Override
	public Student getStudent(int studentId) {
		// TODO Auto-generated method stub
		return (Student)session.getCurrentSession().get(Student.class,studentId);
	
	}

	@Override
	public List getAllStudent() {
		// TODO Auto-generated method stub
		return session.getCurrentSession().createQuery("from Student").list();
	}

}
