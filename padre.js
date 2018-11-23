// los props permiten hacer comunicacion entre los componentes

Vue.component("padre", {
  // numero va a ser una prop esta info pasara al hijo
  // esta prop debe estar registrada en el componente hijo
  //asi
  //props: ['numero']
  // se puede llamar a ese en el componente hijo por interpolacion

  // el :numero="padreNumero" --> con los puntos se hace un vue-bind del dato padreNumero
  template: `
  <div class="p-5 bg-dark text-white">
    <div>
      <h1>componente padre</h1>
      <hijo numero="5"></hijo>
    </div>
  
    <div>
      <h1>componente padre bind:{{padreNumero}}</h1>
      <button  @click="padreNumero++" > + </button>
     
      <hijo :numero="padreNumero"></hijo>
    </div>
  </div>`,
  data() {
    return {
      padreNumero: 0,
    };
  }
});
