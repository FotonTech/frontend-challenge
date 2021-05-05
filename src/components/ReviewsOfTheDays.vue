<template>
  <div class="reviews-of-the-days content">
    <div class="flex justify-between">
      <span class="section-title">Reviews of The Days</span>
      <a>All Video</a>
    </div>
    <div class="mt-2">
      <div>
        <div>
          <a href="https://www.youtube.com/watch?v=vBzBgewl4ac" target="_blank">
            <div class="reviews">
              <img class="video-thumb" src="@/assets/maxresdefault.jpeg">
              <img class="oval-details" src="@/assets/oval-curr-reading.png">
            </div>
          </a>
        </div>
        <div class="mt-2">
          <a href="https://www.youtube.com/watch?v=f5d9zWdUr18" target="_blank">
            <div class="reviews">
              <img class="video-thumb" src="@/assets/clean-code.jpg">
              <img class="oval-details" src="@/assets/oval-curr-reading.png">
            </div>
          </a>
        </div>
        <div class="mt-2">
          <a href="https://www.youtube.com/watch?v=rhCifsvEIkQ" target="_blank">
            <div class="reviews">
              <img class="video-thumb" src="@/assets/pragmatic-programmer.jpg">
              <img class="oval-details" src="@/assets/oval-curr-reading.png">
            </div>
          </a>    
        </div>   
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewsOfTheDays'
}
</script>

<style lang="scss">
.reviews-of-the-days {
  .video-thumb {
    background-image: url('~@/assets/oval-curr-reading.png');
    background-position: 50% 50%;
    background-repeat: no-repeat;
    width: 100%;
    height: auto;
    border-radius: 5px;
  }

  .reviews {
    position: relative;
    overflow: hidden;
  }

  .oval-details {
    position: absolute;
    top: -20px;
    right: -30px;
  }

  @media only screen and (min-width : 850px) {
    .reviews {
      max-width: 500px;
    }
  }
}
</style>