<template>
  <div class="container">
    <div class="sub-container1">
      <SideMenu></SideMenu>
    </div>
    <div class="sub-container2">
      <ListContent></ListContent>
    </div>
  </div>
</template>

<script>
  import SideMenu from "./SideMenu";
  import ListContent from "./ListContent";
  export default {
    name: "Home",
    components:{
      SideMenu,
      ListContent
    }
  }

</script>

<style scoped>
  .container {
    display: flex;
    heigth:620px;
    width: 1200px;
  }
  .sub-container1 {
    width:400px;
    heigth:620px;
    padding: 20px;
    margin-right: 30px;
    border: 1px solid #222;
  }
  .sub-container2 {
    width:800px;
    heigth:800px;
    border: 1px solid #222;
    padding: 50px;
  }
</style>