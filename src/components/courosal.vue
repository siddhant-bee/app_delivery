<template>
  <div class="carouse">
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide yuvraj"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://redcliffelabs.com/myhealth/wp-content/uploads/2022/03/90.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://c.ndtvimg.com/2021-04/umk8i7ko_pasta_625x300_01_April_21.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
src="../assets/image1.jpg"           class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "courosal",
};
</script>
<style scoped>
.carouse {
  display: flex;
  margin-top: 30px;
  margin-bottom: 50px;
  justify-content: center;
}
.yuvraj {
  width: 74%;
  border: 2px solid rgb(181, 189, 160);
  border-radius: 10px;
}
.d-block {
  padding: 10px;
  height: 420px;
  
}
</style>