<template lang="html">
    <div class="main-section-add">
        <h3 class="main-section-add-text_H3">Add to journal</h3>
        <form @submit.prevent="formSubmit" class="form-group">
            <label for="title">Title of your story</label>
            <input name="title" type="text" v-model="postBody.title" class="form-group-input"/>
            <label for="image">Download image for your story</label>
            <input name="image" type="text" v-model="postBody.backgroundURL" class="form-group-input"/>
            <label for="story">Describe your story</label>
            <textarea name="story" v-model="postBody.text" class="form-group-textarea"></textarea>
            <div class="btn-box">
                <input type="submit" class="btn_accept"/>
                <button class="btn_clear" @click.prevent="clearForm">Clear</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data: ()=> ({
        postBody:{
            title:"",
            text:"",
            backgroundURL:"",
        },
        errors:[]
    }),
    methods: {
        clearForm() {
            this.postBody.title="";
            this.postBody.text="";
            this.postBody.backgroundURL="";
    },
        formSubmit() {
            const PostData=this.postBody;
            axios.post("http://localhost:3000/posts/",PostData)
            .then(response => {
                this.resp = response;
                console.log("message added"); 
                this.clearForm();
            })
            .catch(e => {
                console.error(e);
            })
        }
    }
}   
</script>

<style lang="scss" scoped>
.main-section-add {
    text-align: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    &-text_H3{
        color: #3f8241;
        font-size: 40px;
        margin-bottom: 40px;
    }
    .form-group{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .form-group-input,.form-group-textarea{
        margin-bottom: 20px;
        label{
            margin-bottom: 15px;
        }
        textarea{
            width: 300px;
        }
    }
    .btn_accept,.btn_clear{
        width: 150px;
         height: 30px;
         text-decoration: none;
         color: #ffffff;
         text-align: center;
         line-height: 20px;
         display: block;
         margin: 0 15px 15px 0;
         font: normal 17px arial;
         &:not(.active) {
             box-shadow: inset 0 1px 1px rgba(111, 55, 125, 0.8),
                         inset 0 -1px 0px rgba(63, 59, 113, 0.2), 0 9px 16px 0
                         rgba(0, 0, 0, 0.3), 0 4px 3px 0 
                         rgba(0, 0, 0, 0.3), 0 0 0 1px #062d07;
             background-image: linear-gradient(#2e652d, #182d13);
             text-shadow: 0 0 21px rgba(223, 206, 228, 0.5), 0 -1px 0 #311d47;
             &:focus,&:hover{
                 transition: color 200ms linear, text-shadow 500ms linear;
                 color: #fff;
                 text-shadow: 0 0 21px rgba(223, 206, 228, 0.5),
                              0 0 10px rgba(223, 206, 228, 0.4),
                              0 0 2px #f1f1f1;
             }
        }
        &:not(:hover) {
            transition: 0.6s;
        }

    }

}

.btn-box{
    display: flex;
    justify-content: center;
}
</style>
