<template>
<!-- contenedor para el pdf o comic -->
	<div style="mb-2 text-color:">
		<!-- checkbox para mostra el pdf -->
		<input type="checkbox" v-model="show">
		<!-- selector del url del pdf o comic -->
		<select v-model="src" style="width: 30em; margin-left: 5px">
			<option v-for="item in pdfList" :value="item" v-text="item" v-bind:key="item.id"></option>
		</select>
		<!-- input para las paginas del pdf -->
		<input v-model.number="page" type="number" min="1" style="width: 5em; margin-left: 5px">
		<!-- numero total de paginas del pdf -->
		<strong style="color: white;"> / {{numPages}} </strong>
		<!-- botones para rotar el pdf 90 grados-->
		<button @click="rotate += 90">&#x27F3;</button>
		<button @click="rotate -= 90">&#x27F2;</button>
		<!-- boton imprimir pdf -->
		<button @click="$refs.pdf.print()">print</button>
		<!-- contenedor para el pdf -->
		<div style="width: 100%; align-items: center; margin-top: 3px;">
			<!-- barra de carga del pdf -->
			<div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" 
            :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>
			<!-- Cargamos el pdf -->
			<pdf v-if="show" ref="pdf" style="display: inline-block; width: 100%; border: 1px solid red; margin-bottom: 2px;" 
            :src="src" :page="page" :rotate="rotate" @password="password" 
            @progress="loadedRatio = $event" @error="error" @num-pages="numPages = $event" 
            @link-clicked="page = $event"></pdf>
		</div>
	</div>
</template>
<script>
// importamos la herramienta pdf
import pdf from 'vue-pdf'
// agregamos el componente pdf
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
