<template>
  <div>
    <div class="container-fluid mt-3 " >
      <div
        class="col-12 col-md-12 col-xs-12"
        v-for="offer in offers"
        :key="offer.id"
      >
        <div class="row">
          <div class="col-12 col-md-8 col-xs-12 offerMaindiv border">
            <div class="row">
              <div class="col-12 col-md-8 col-xs-12 p-2">
                <figure>
                  <img
                    class="img-fluid box1Image"
                    :src="'offerImage/' + offer.image"
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      offers: [],
    };
  },
  mounted() {
    this.viewOffer();
  },
  methods: {
    viewOffer() {
      axios.get("offer").then((res) => {
        this.offers = res.data.offer;
      });
    },
  },
};
</script>

