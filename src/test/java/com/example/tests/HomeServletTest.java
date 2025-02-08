package com.example.tests;

import com.example.servlets.HomeServlet;
import org.junit.jupiter.api.Test;
// import org.mockito.Mockito;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.*;

class HomeServletTest {
    @Test
    void testDoGet() throws IOException, ServletException {
        // Mock HttpServletRequest and HttpServletResponse
        HttpServletRequest request = mock(HttpServletRequest.class);
        HttpServletResponse response = mock(HttpServletResponse.class);

        // Capture the output written to the response
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);

        // Mock the response to return the PrintWriter
        when(response.getWriter()).thenReturn(printWriter);

        // Instantiate the servlet
        HomeServlet servlet = new HomeServlet();

        // Call the doGet method of the servlet
        servlet.doGet(request, response);

        // Flush the PrintWriter to ensure all output is written
        printWriter.flush();

        // Verify that the expected output is contained in the response
        assertTrue(stringWriter.toString().contains("Welcome to the Maven Web App!"));
    }
}
