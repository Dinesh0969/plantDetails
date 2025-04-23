import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		if (validateUser(username, password)) {
			HttpSession session = request.getSession();
			session.setAttribute("username", username);
			session.setAttribute("isLoggedIn", true);
			response.sendRedirect("dashboard.jsp");
		} else {
			request.setAttribute("error", "Invalid username or password");
			request.getRequestDispatcher("login.jsp").forward(request, response);
		}
	}
	
	private boolean validateUser(String username, String password) {
		// This should be replaced with database validation
		return "admin".equals(username) && "password123".equals(password);
	}
}
