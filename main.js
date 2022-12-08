import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Hieesu's Blog",
  // description: "The blog description.",
  author: "Hieesu",
  avatar: "https://avatars.githubusercontent.com/u/68918968?v=4",
  avatarClass: "rounded-full",
  links: [
    { title: "Email", url: "mailto:hieesu.me@gmail.com" },
    { title: "GitHub", url: "https://github.com/hieesu-dev" },
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
