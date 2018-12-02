<template>
  <v-content>
    <v-layout>
			<v-container>
					<v-card class="cardify elevation-22">
						<v-img
              src='https://66.media.tumblr.com/cfe2bf74bf006d6e73c449a8f36ab939/tumblr_pikga1J7co1xdm0hjo1_1280.png'
              aspect-ratio="2.75"
              class="elevation-25">
            </v-img>
              <v-container>							
								<v-tabs
									centered
									color="grey darken-3"
									hide-slider
									icons-and-text>
								<v-tab>
									<span class="fontify colorize">About Me</span>
									<v-icon large color="white">fingerprint</v-icon>
								</v-tab>
                <v-tab-item>
                  <v-card class="elevation-18">
                    <v-card-text>
                      <span class="fontify_body"><p>I am a 25 year old aspiring web developer. Currently I am taking a full stack web development bootcamp course.  
                      Coding is a recent hobby, but it can prove to be pretty addicting.  I am comfortable with HTML, CSS, SQL, Vanilla JavaScript and a few JavaScript libraries/frameworks including VueJS, Express, and Node.
                      Primarily I feel my skills are best suited for front-end development but I'm eager to continue becoming better with back-end technologies. </p></span>
                    </v-card-text>
                  </v-card>
                  <v-card>
                  <v-card-text>
                    <h1>Hey</h1>
                  </v-card-text>
                  </v-card>
                </v-tab-item>
                </v-tabs>
              </v-container>
          </v-card>
      </v-container>
    </v-layout>
   </v-content> 
</template>

<script>
export default {
  name: 'bio'
}
</script>

<style>
  .cardify {
    background-image: url('../assets/images/argyle.jpg');
    background-size: cover;
    margin-bottom: 40px;
  }
  .fontify_body {
    font-family: 'Aref Ruqaa', serif;
    font-weight: bold;
    font-size: 14px;
  }
</style>