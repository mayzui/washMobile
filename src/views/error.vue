<template>
  <div class="page_home">
    <LxNav />

    <p class="txt-c char-placeholder">
      (这里是错误页)
    </p>

    <LxWelcome />
  </div>
</template>

<script>
import LxNav from '@comp/lxNav'
import LxWelcome from '@comp/lxWelcome'
export default {
  components: {
    LxNav,
    LxWelcome
  },
  data () {
    return {

    }
  }
}
</script>
