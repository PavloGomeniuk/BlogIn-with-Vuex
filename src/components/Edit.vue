<template>
	<form @submit.prevent="edit" class="edit">
		<h3>Edit your post</h3>
		<input type="text" name="title" v-model="postBody.title" :placeholder="title">
		<textarea type="text" name="text" v-model="postBody.text" :placeholder="text">
		</textarea>
		<button type=submit>Put changes</button>
		<router-link :to="{ name: 'journal'}">
        	Back to journal
      	</router-link>
	</form>
</template>

<script>
	import {mapState, mapActions} from 'vuex';
  	export default {
	    props: ['id','title','text'],
	    data: ()=> ({ 
	    	postBody:{
	        title:"",
	        text:"",
	      }
        }),
 		methods:{
    		edit(){
    			let payload = {
				     title: this.postBody.title,
				     text: this.postBody.text,
				     id:this.id,
    			}
    			this.$store.dispatch('editPost', payload)
    		},
    	}
  	}
  	
</script>

<style lang="scss"scoped>
	.edit{
		display: flex;
	    flex-direction: column;
	    justify-content: center;
	    align-items: center;
	    h3{
	    	font-size: 40px;
    		margin-bottom: 20px;
	    }
	    input{
	    	width: 200px;
		    border: 0;
		    margin-bottom: 20px;
		    height: 20px;
	    }
	    textarea{
	    	width: 400px;
		    height: 200px;
		    margin-bottom: 20px;
	    }
	    button,a{
	    	width:90px;
	        text-align:center;
	        display:block;
	        font-family: arial;
	        text-decoration: none;
	        font-weight: 300;
	        font-size: 14px;
	        border: #1c673a 1px solid;
	        color: #2b332c;
	        background-color: white;
	        padding: 3px;
	        padding-left: 5px;
	        padding-right: 5px;
	        margin: 20px auto;
	        transition: .5s;
	        border-radius: 0px;
	        &:hover {
		        top: 5px;
		        transition: .5s;
		        color: #10FF58;
		        border: #10FF58 1px solid;
		        border-radius: 10px;
	        }
	        &:active {
		        color: #000;
		        border: #1A1A1A 1px solid;
		        transition: .07s;
		        background-color: #FFF;
	        }
	    }
	}
</style>