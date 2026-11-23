export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        status: "success",
        message: "YouTube Automation Backend is running"
      });
    }

    return Response.json({
      message: "YouTube Automation API"
    });
  }
};
