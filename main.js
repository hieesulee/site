import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Hieu Le",
  description: "Software Engineer.",
  author: "Hieesu",
  avatar: "https://avatars.githubusercontent.com/u/68918968?v=4",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:hieesu.me@gmail.com" },
    { title: "GitHub", url: "https://github.com/hieesume" },
    { title: "CV", url: "https://docs.google.com/document/d/1PiddifUvDXI2FAi022EcZmWhrv6IxxPYnmgVnAr2GH8/edit?usp=sharing" },
  ],
  background: "#fff",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
