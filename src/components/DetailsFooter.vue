<template>
  <div class="content">
    <div>
      <div class="details-footer flex text-center items-center">
        <div>
          <font-awesome-icon icon="book-open" />
          <span class="details-footer-options">Read</span>
        </div>
        <div>
          <font-awesome-icon icon="headphones" />
          <span class="details-footer-options">Listen</span>
        </div>
        <div>
          <font-awesome-icon icon="share-square" />
          <span class="details-footer-options">Share</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailsFooter.vue'
}
</script>

<style lang="scss">
.details-footer {
  position: fixed;
  width: calc(100% - 40px);
  max-width: 460px;
  bottom: 0;
  margin-bottom: 53px;
  height: 56px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);

  div {
    width: 33.333%;
    cursor: pointer;
    height: 56px;
    padding: 18px 0;
  }

  .details-footer-options {
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 1px;
    margin-left: 7px;
  }
}
</style>