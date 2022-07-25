export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62defa5469d4670ff69ba2f1",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-a59dku8d",
                  apiId: "0c99b66d-bb65-45f3-8266-fe7864e57596",
                },
                {
                  buildHookId: "62defa55ace33f10b8d3338c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-cuvc2b1f",
                  apiId: "f161ab96-ebc7-4b04-8c59-5d67ebbb2230",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/patrickburnside/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-cuvc2b1f.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
