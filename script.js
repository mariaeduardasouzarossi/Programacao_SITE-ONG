@WebServlet("/cadastro")
public class CadastroServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        // Recebendo os parâmetros do formulário
        String nome = request.getParameter("nome");
        String email = request.getParameter("email");
        String cpf = request.getParameter("cpf");
        String telefone = request.getParameter("telefone");
        String nascimento = request.getParameter("nascimento");

        // Aqui você pode salvar esses dados no banco de dados

        // Configurar a resposta
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();

        // Resposta simples para confirmar recebimento
        out.println("<html><body>");
        out.println("<h2>Cadastro recebido com sucesso!</h2>");
        out.println("<p>Nome: " + nome + "</p>");
        out.println("<p>Email: " + email + "</p>");
        out.println("<p>CPF: " + cpf + "</p>");
        out.println("<p>Telefone: " + telefone + "</p>");
        out.println("<p>Data de Nascimento: " + nascimento + "</p>");
        out.println("</body></html>");
    }
}