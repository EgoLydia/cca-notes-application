<template>
    <div class="loading-spinner-container">
        <div class="spinner">
            <div></div>
            <div>
                <div></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@keyframes spinner {
  0% { transform: rotate(0) }
  100% { transform: rotate(360deg) }
}
.loading-spinner-container{
    margin:0 auto;
}
.spinner div { box-sizing: border-box!important }
.spinner> div {
  position: absolute;
  width: 144px;
  height: 144px;
  top: 28px;
  left: 28px;
  border-radius: 50%;
  border: 16px solid #000;
  border-color: #e4fff3 transparent #e4fff3 transparent;
  animation: spinner 1s linear infinite;
}
.spinner > div:nth-child(2) { border-color: transparent }
.spinner > div:nth-child(2) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.spinner > div:nth-child(2) div:before, .ldio-ahvhnqozg5g > div:nth-child(2) div:after { 
  content: "";
  display: block;
  position: absolute;
  width: 16px;
  height: 16px;
  top: -16px;
  left: 48px;
  background: #e4fff3;
  border-radius: 50%;
  box-shadow: 0 128px 0 0 #e4fff3;
}
.spinner > div:nth-child(2) div:after { 
  left: -16px;
  top: 48px;
  box-shadow: 128px 0 0 0 #e4fff3;
}
.loading-spinner-container{
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: none;
}
.spinner {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; 
}
.spinner div { box-sizing: content-box; }
</style>