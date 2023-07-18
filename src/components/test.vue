<template>
 <div class="bda">
   <div class="box">
    <div class="name">name </div>
    <div class="price">price </div>
  </div>
 </div>
</template>
<script>
  export default {
    name:"test"
  }
</script>
<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1000px;
  height: 80px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  padding: 4px;
}
.bda{
  display: flex;
  justify-content: center;
}
.name {
  font-weight: bold;
}

.price {
  font-weight: bold;
}
</style>