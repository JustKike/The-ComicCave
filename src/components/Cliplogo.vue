<template>
     <div>
        <!--Carousel Wrapper-->
        <div id="video-carousel-example2" class="carousel slide carousel-fade" data-ride="carousel">
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
            <!-- First slide -->
            <div class="carousel-item active">
            <!--Mask color-->
            <div class="view">
                <!--Video source-->
                <video class="video-fluid" autoplay loop muted>
                <source src="@/assets/Batman.mp4" type="video/mp4" />
                </video>
                <div class="mask rgba-indigo-light"></div>
            </div>
            </div>
            <!-- /.First slide -->
        </div>
        <!--/.Slides-->
        </div>
        <!--Carousel Wrapper-->
     </div>
</template>

<script>
export default {
  name: "Cliplogo",
};
</script>

 