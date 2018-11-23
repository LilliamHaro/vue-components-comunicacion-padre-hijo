Vue.component('hijo',{
  template:`<div class="py-5 bg-success">
  <h4>{{hijoTittle}}</h4>
  <h5>{{numero}}</h5>
  </div>`,
  data(){
    return{
      hijoTittle:'saludos desde un compoennet hijo -componente dentro de un componente-'
    }
  },
  props:['numero'],
})