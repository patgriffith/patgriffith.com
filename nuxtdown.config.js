module.exports = {
    api: function(isStatic) {
      const baseURL = "http://localhost:3000";
      const browserBaseURL = !isStatic ? "" : process.env.BASE_URL;
  
      return {
        baseURL,
        browserBaseURL
      };
    },
    content: [
      [
        "projects",
        {
          page: "/_project",
          permalink: "/:slug",
          isPost: false
        }
      ],
      
    ]
  };
  