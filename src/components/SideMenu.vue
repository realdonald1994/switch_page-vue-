<template>
  <div id="sidebar">
    <button @click="loadData('starships',1,[])" :class="{active: selectBtn == 'starships'}" class="btn" type="button">Starships</button>
    <button @click="loadData('people',1,[])" :class="{active: selectBtn == 'people'}" class="btn" type="button">People</button>

    <p v-if="loading"><strong>{{tips}}</strong></p>
    <ul class="list">
      <li v-for="(item,index) in list" :key="index"  @click="selected(item)" :class="{active: itemName == item.name}">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "SideMenu",
    data(){
      return{
        list:[],
        loading:true,
        tips:'Select the Resource',
        itemName:'',
        selectBtn: ''
      }
    },
    methods:{
      loadData(name,count,arr){
        this.list = []
        this.loading = true
        this.tips = 'Loading'
        this.selectBtn = name
        this.$store.commit('SET_ITEM',{})
        this.$axios.get(`/${name}/?page=${count}`).then(res=>{
          if(res && res.status===200){
            if(res.data.next){
              arr = arr.concat(res.data.results)
              this.loadData(name,count+1,arr)
            }else{
              this.loading = false
              this.list = arr
            }
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      selected(item) {
        this.itemName = item.name
        let obj = {btnName:this.selectBtn,item:item}
        this.$store.commit('SET_ITEM',obj)
      }
    }
  }
</script>

<style scoped>
  #sidebar{
    height: 520px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  #sidebar::-webkit-scrollbar{
    display: none;
  }
  .active{
    background: #b7e0f9 !important;
  }
  .btn {
    height: 30px;
    margin-right: 5px;
    background: #fff;
    cursor:pointer;
  }
  ul li {
    list-style-type:none;
    font-weight: bold;
    cursor:pointer;
  }
  .list {
    padding-left:10px!important;
  }
</style>