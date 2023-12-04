<template>

<div class="banner">
    <div class="container">
      <div class="banner-content">
        <div class="main-banner">
          <div class="img-container">
            <img src="@/assets/images/banner1.jpg" alt="" />
            <div class="img-content">
              <span>  </span>
              <h3 @click="earbuds">Earbuds</h3>
            </div>
          </div>
        </div>
        <div class="category-banner">
          <div class="top">
            <div class="img-container">
              <img src="@/assets/images/banner2.jpg" alt="" />
              <div class="img-content">
                <h3>Headphone</h3>
              </div>
            </div>
            <div class="img-container">
              <img src="@/assets/images/banner3.jpg" alt="" />
              <div class="img-content">
                <h3>Speaker</h3>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="img-container">
              <img src="@/assets/images/banner4.jpg" alt="" />
              <div class="img-content">
                <h3>Neckbands</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
 </div>
</div>
</template>
<script>
import { defineComponent } from 'vue';
import router from '@/router'
export default defineComponent({
  setup(){
    const earbuds=()=>{
      router.push('')
    };
return {
earbuds
  }  
},
})
</script>

<style>
img {
  height: 50%;
}
.banner {
  border-bottom: 2px solid #f8f8f8;
  margin-bottom: 100px;
  margin-top: 115px;
}
.banner .container {
  max-width: calc(1440px - 130px);
  padding: 0 20px;
  width: 100%;
  margin: auto;
}
.banner-content {
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
}
.banner-content > div {
  flex: 0 0 calc(50% - 20px);
  max-width: calc(50% - 20px);
  width: 100%;
}
.img-container {
  position: relative;
  height: 100%;
  width: 100%;
}
.img-container img {
  width: 100%;
  object-fit: cover;
}
.img-container .img-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #ffffff;
  border-radius: 4px;
  padding: 10px 25px;
  text-align: center;
}
.img-content span {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
  color: #121212;
  opacity: 0.4;
  text-transform: uppercase;
}
.img-content h3 {
  font-weight: 600;
  font-size: 22px;
  line-height: 25px;
  color: #121212;
  text-transform: uppercase;
  margin-top: 5px;
}
.category-banner .top {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.category-banner .top > div {
  flex: 0 0 calc(50% - 20px);
  max-width: calc(50% - 20px);
  width: 100%;
}

.banner-servieces {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  align-items: center;
}
.banner-servieces > div {
  flex: 0 0 calc(33.33% - 20px);
  max-width: calc(33.33% - 20px);
  width: 100%;
  display: flex;
  align-items: center;
}
.service .details {
  margin-left: 10px;
}
.details h6 {
  font-weight: 600;
  font-size: 12px;
  line-height: 13px;
}
.details p {
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  opacity: 0.9;
}


@media (max-width: 969px) {
  .banner-content {
    flex-wrap: wrap;
  }
  .banner-content > div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
}
@media (max-width: 600px) {
  .category-banner .top > div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .category-banner .top {
    flex-wrap: wrap;
  }
  .img-content h3 {
    font-size: 16px;
    line-height: 20px;
  }
  .banner-servieces {
    flex-wrap: wrap;
  }
  .banner-servieces > div {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
}
  </style>