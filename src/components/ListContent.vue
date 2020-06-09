<template>
  <div>
    <h2><strong>{{tips}}</strong></h2>
    <div class="content">
      <span v-for="(item,index) in content" :key="index">
        <span v-for="(value,key,index) in item" :key="index">{{key}}: {{value}}</span>
        <br>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ListContent",
    data(){
      return{
        tips:'Select an Item',
        content:[]
      }
    },
    watch:{
      '$store.getters.getItem': function (newVal){
        let self = this
        if(typeof newVal.btnName != 'undefined'){
          self.tips = 'Loading'
          self.content = []
          setTimeout(function () {
            if(newVal.btnName === 'people'){
              self.tips = newVal.item.name
              self.content.push({'eye color':newVal.item.eye_color})
              self.content.push({'birth year':newVal.item.birth_year})
            }else{
              self.tips = newVal.item.name
              self.content.push({'model':newVal.item.model})
              self.content.push({'manufacturer':newVal.item.manufacturer})
              self.content.push({'starship class':newVal.item.starship_class})
            }
          },500)
        }else{
          self.tips = 'Select an Item'
          self.content = []
        }
      }
    }
  }
</script>

<style scoped>
  .content {
    margin-top: 10px;
  }
</style>