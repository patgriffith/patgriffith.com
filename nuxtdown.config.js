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
          page: "/project/_slug",
          permalink: "/project/:slug",
          isPost: false
        }
      ],
      [
        "words",
        {
          page: "/_slug",
          permalink: "/:slug",
          isPost: false
        }
      ],
      [
        "sections",
        {
          page: "/about/_slug",
          permalink: "/about/:slug",
          isPost: false
        }
      ],
      
    ]
  };
  