import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class loginServlet extends HttpServlet {
protected void 
doPost(HttpServletRequest request,HttpServletResponse response) 
throws ServletException,IOException{
	String username=request.getParameter("Username");
	String password=request.getParameter("password");
	if("admin".equals(username)&&"1234".equals(password)) { 
		request.getRequestDispatcher("welcome.jsp") .forward(request,response);
	}else {
		response.getWriter().println("Invalid login. try again");
	}
}
}
