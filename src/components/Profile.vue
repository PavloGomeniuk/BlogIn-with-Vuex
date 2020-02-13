<template >
	<div>
		<div v-if="isAuth" class="profile">
			<h3>Hello, {{username}}</h3>
			<section  class="main-section" v-for="post in posts">
				<p>{{post.title}}</p>
				<button  @click='deletePost(post._id)'>Delete</button>
				<router-link 
			       :to="{ name: 'edit', params: { id: post._id, title: post.title, text:post.text } }">
			       Edit
			    </router-link>
			</section>
		</div>
		<div v-else="isAuth" class="else">
			<h3>You need to </h3>
			<router-link 
		       :to="{ name: 'login' }">
		       Login
		    </router-link>
		</div>
	</div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
	props: ['isAuth','username'],
	computed: mapState(['posts']),
	methods: mapActions(['deletePost']),
}
</script>

<style lang="scss" scoped>
	.else {
		h3{
			text-align: center;
    		font-size: 40px;
		}
		a{
			display: flex;
		    justify-content: center;
		    font-size: 30px;
		    color: green;
		    margin-bottom: 40px
		}
	}
	.profile{
		h3{
			text-align: center;
    		font-size: 40px;
    		margin-bottom: 30px;
		}
		.main-section{
			margin-bottom: 30px;
			p{
				margin-right: 10px;
			}
			button,a{
				width:90px;
		        text-align:center;
		        background-color: white;
		        display:block;
		        font-family: arial;
		        text-decoration: none;
		        font-weight: 300;
		        font-size: 14px;
		        border: #1c673a 1px solid;
		        color: #2b332c;
		        padding: 3px;
		        padding-left: 5px;
		        padding-right: 5px;
		        margin-right: 10px;
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
	}
</style>