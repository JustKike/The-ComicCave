<template>
	<div style="mb-2 text-color:">
		<input type="checkbox" v-model="show">
		<select v-model="src" style="width: 30em; margin-left: 5px">
			<option v-for="item in pdfList" :value="item" v-text="item" v-bind:key="item.id"></option>
		</select>
		<input v-model.number="page" type="number" min="1" style="width: 5em; margin-left: 5px">
		<strong style="color: white;"> / {{numPages}} </strong>
		<button @click="rotate += 90">&#x27F3;</button>
		<button @click="rotate -= 90">&#x27F2;</button>
		<button @click="$refs.pdf.print()">print</button>
		<div style="width: 100%; align-items: center; margin-top: 3px;">
			<div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" 
            :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
			<pdf v-if="show" ref="pdf" style="display: inline-block; width: 100%; border: 1px solid red; margin-bottom: 2px;" 
            :src="src" :page="page" :rotate="rotate" @password="password" 
            @progress="loadedRatio = $event" @error="error" @num-pages="numPages = $event" 
            @link-clicked="page = $event"></pdf>
		</div>
	</div>
</template>
<script>
import pdf from 'vue-pdf'

export default {
    name: 'Comic',
	components: {
		pdf: pdf
	},
	data () {
		
		return {
			show: true,
			pdfList: [
				'../img/Superheroes/the-dark-night-return.pdf'
			],
			src: '',
			loadedRatio: 0,
			page: 1,
			numPages: 0,
			rotate: 0,
		}
	},
	methods: {
		password: function(updatePassword, reason) {

			updatePassword(prompt('password is "test"'));
		},
		error: function(err) {

			console.log(err);
		}
	}
}
</script>
