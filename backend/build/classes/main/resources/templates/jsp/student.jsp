<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<h1>Student data</h1>

<form:form action="student.d0" method="POST" commandName="student">
<table>
<tr>
	<td>Student Id</td>
	<td><form:input path="studentId"/></td>
</tr>
<tr>
	<td>First Name</td>
	<td><form:input path="firstname"/></td>
</tr>
<tr>
	<td>Last name</td>
	<td><form:input path="lastname"/></td>
</tr>
<tr>
	<td>Year level</td>
	<td><form:input path="yearLevel"/></td>
</tr>
<tr>
	<td colspan="2">
		<input type="submit" name="action" value="Add" />
		<input type="submit" name="action" value="Edit" />
		<input type="submit" name="action" value="Delete" />
		<input type="submit" name="action" value="Search" />
	</td>
</tr>
</table>
</form:form>
<br>
<table>
	<tr>
		<th>Id</th>
		<th>First name</th>
		<th>Last name</th>
		<th>Year level</th>
	</tr>
	<c:forEach items="${studentList}" var="student">
	<tr>
		<td>${student.studentId }</td>
		<td>${student.firstname }</td>
		<td>${student.lastname }</td>
		<td>${student.yearlevel }</td>
	</tr>
	</c:forEach>	
	
	</table>
</body>
</html>