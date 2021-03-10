<template>
  <div>
  <div class="ml-3 mt-3" v-for="division in divisions" v-if="$route.params.id==division.id">
      <h5>{{division.name}}</h5>
  </div>
    <b-row class="ml-1 mr-1">
      <b-card-group
        class="col-6 col-md-2 col-xs-6 mt-3"
        v-for="district in districts"
        :key="district.id"
      >
        <router-link
          :to="{ name: 'thanalocation', params: { id: district.districtId } }"
        >
          <b-card
            img-src="mapImage/location.jpg"
            img-alt="Img"
            img-top
            class="location"
          >
            <b-card-text align="center">
              {{ district.district.name }}
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
        locationId:'',
      districts: [],
      divisions:[],
    };
  },
  mounted() {
    this.viewDistrict();
    this.division();
  },
   
  methods: {

    viewDistrict() {
      axios.get(`deliveryLocationWeb/${this.$route.params.id}`).then((res) => {
        this.districts = res.data;
      });
    },
    division(){
                axios.get('/division').then(res =>{
                 this.divisions = res.data.division ;
              })
         } ,
  },
   
  watch:{
       '$route' (to, from) {     
   this.viewDistrict();
    this.viewDistrict();
    this.division();
   this.$route.params.id=""

      },
  }
};
</script>


