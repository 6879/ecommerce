<template>
  <div>
      <div class="ml-3 mt-3" v-for="allDistrict in allDistricts" v-if="$route.params.id==allDistrict.id">
          <div v-for="division in divisions" v-if="allDistrict.division_id==division.id">
    <p> <span>{{division.name}}</span> <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
<span>{{allDistrict.name}}</span> </p>
          </div>
  </div>
    <b-row class="ml-1 mr-1">
      <b-card-group
        class="col-6 col-md-2 col-xs-6 mt-3"
        v-for="thana in thanas"
        :key="thana.id"
      >
        <router-link
          :to="{ name: 'wardlocation', params: { id: thana.thanaId } }"
        >
          <b-card
            img-src="mapImage/location.jpg"
            img-alt="Img"
            img-top
            class="location"
          >
            <b-card-text align="center">
              {{ thana.thana.name }}
            </b-card-text>
          </b-card>
        </router-link>
      </b-card-group>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thanas: [],
      allDistricts: [],
       divisions:[],
    };
  },
  mounted() {
    this.viewThana();
    this.allDistrict();
    this.division();
  },
  methods: {
    viewThana() {
      axios
        .get(`deliveryLocationWeb/${this.$route.params.id}/edit`)
        .then((res) => {
          this.thanas = res.data;
        });
    },
         allDistrict(){
                axios.get('/allDistrict').then(res =>{
                 this.allDistricts = res.data.allDistrict ;
              })
         } , 
         division(){
                axios.get('/division').then(res =>{
                 this.divisions = res.data.division ;
              })
         } ,
  },
};
</script>


