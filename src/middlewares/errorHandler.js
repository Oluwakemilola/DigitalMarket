// Centralized Express error-handling middleware
 function errorHandler(err, req, res, next) {
  console.error("ERROR:", err);

  const statusCode = err.statusCode || err.status || 500;
  const message =
    err.message || "An unexpected error occurred on the server";

  res.status(statusCode).json({
    success: false,
    message,
    // Only expose stack trace in development
    ...(process.env.NODE_ENV === "development" && {
      stack: err.stack,
    }),
  });
}

export default errorHandler

