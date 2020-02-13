<template  lang="html">
    <div>
        <section  class="main-section" v-for="post in posts">
            <div class="main-section-img_1" :style="{backgroundImage: `url(${post.backgroundURL})`}"></div>
            <div class="main-section-text">
                <p>
                    {{post.title}}
                </p>
                <span>
                    {{post.text}}
                </span>
                <router-link 
                    :to="{ name: 'post', params: { id: post._id, title: post.title, text:post.text } }">
                    <button>
                        Continue Reading 
                        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                    </button> 
                </router-link>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    export default {
        computed: mapState(['posts']),
        methods: 
            mapActions(['fetchPosts']),
        created () {
            this.fetchPosts()
        }
    }
</script>

<style lang="scss">
  .main-section{
  display: flex;
  justify-content: center;
  margin-bottom: 4em;
  &-img_1{
    background: center/cover no-repeat;
    width: 26em;
    height: 17em;
  }
  &-text {
    width: 25em;
    padding-left: 2.27em;
    font-family: Lato;
    font-size: 1em;
    font-weight: 700;
    p{
      color: #4f4e4e;
      font-size: 28px;
      line-height: 30px;
      text-transform: uppercase;
      letter-spacing: 0.84px;
      margin-bottom: 1em;
    }
    span{
      display: block;
      color: #606060;
      font-weight: 400;
      line-height: 20px;
      letter-spacing: 0.48px;
      margin-bottom: 1.2em;
      height: 120px;
      overflow: hidden;
    }
    button{
      font-size: 1em;
      color: #c2c1c1;
      font-weight: 700;
      line-height: 20px;
      letter-spacing: 0.48px;
      border: 2px solid #c2c2c2;
      background-color: #ffffff;
      padding: 0.72em 1.38em;
      border-radius: 1.4em;
      svg{
        display: none;
      }
      &:hover{
        border: 2px solid #58c93a;
        color: #58c93a;
        svg{
          display: initial;
          fill: #58c93a;
          vertical-align: middle;
        }
      }
    }
  }
  &-bottom{
    &-line{
      width: 100%;
      height: 1px;
      background-color: #e1e0e0;
      margin-bottom: 30px;
    }
    &-btn{
      display: flex;
      justify-content: space-between;
      margin-bottom: 50px;
      padding: 0 34px;
      button{
        color: #818181;
        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.9px;
        border: 0px; 
        background: transparent;
        svg{
          vertical-align: middle;
          &.left{
          margin-right: 10px;
          }
          &.right{
          margin-left: 10px;
          }
        }
      }

    }
  }
}
</style>
