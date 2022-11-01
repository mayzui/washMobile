<template>
  <div class="comp_welcome txt-c">
    <p>
      欢迎使用
      <a :href="$site.website" target="_blank" class="tip-primary comp_welcome-link">
        {{ $site.name }}
      </a>
    </p>

    <p>
      如有在使用中遇到疑问，请点击前往
      <a :href="$site.issues" target="_blank" class="tip-warning comp_welcome-link">
        这里我的【issues】
      </a>
      进行提问哟！
      <br>
      开源需要鼓励，好用请给个小星星哟！
    </p>
  </div>
</template>

<script>
export default {
  name: 'LxWelcome'
}
</script>

<style lang="scss" scoped>
.comp_welcome { padding: $divide * 2;
  &-link:hover { text-decoration: underline; }
}
</style>
