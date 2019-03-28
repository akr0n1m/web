<template>
  <div ref="tweet">
    
  </div>
</template>

<script>
export default {
  mounted() {
    let twitterScript = document.createElement("script");

    twitterScript.setAttribute("src", "https://platform.twitter.com/widgets.js");

    this.$refs.tweet.appendChild(twitterScript);
  }
};
</script>