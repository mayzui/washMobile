<template>
  <ul class="comp_nav ly-flexc-sa txt-c fs-title">
    <li v-for="(nav,nIndex) in $site.navList" :key="`nav_${nIndex}`" class="h-btn comp_nav-btn">
      <router-link :to="nav.path" class="tip-primary">
        {{ nav.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LxNav'
}
</script>

<style lang="scss" scoped>
@include hover_underline(btn, $color_primary);
.comp_nav { width: 100%; height: $header_h; background-color: $bg_color_grey; margin-bottom: $divide;
  &-btn { display: inline-block; width: 80px; }
  .router-link-active { color: $color_error; }
}
</style>
