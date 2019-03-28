<template>
  <div ref="comments"></div>
  <!-- <script
    src="https://utteranc.es/client.js"
    repo="akr0n1m/web"
    issue-term="og:title"
    label="comment"
    theme="github-light"
    crossorigin="anonymous"
    async
  ></script> -->
</template>

<script>
export default {
  mounted() {
    let utterancesScript = document.createElement("script");
    
    utterancesScript.setAttribute(
      "src",
      "https://utteranc.es/client.js"
    );
    utterancesScript.setAttribute(
      "repo",
      "akr0n1m/web"
    );
    utterancesScript.setAttribute(
      "issue-term",
      "pathname"
    );
    utterancesScript.setAttribute(
      "label",
      "comment"
    );
    utterancesScript.setAttribute(
      "theme",
      "github-light"
    );
    utterancesScript.setAttribute(
      "crossorigin",
      "anonymous"
    );
    utterancesScript.setAttribute(
      "async",
      ""
    );

    this.$refs.comments.appendChild(utterancesScript);
  }
};
</script>