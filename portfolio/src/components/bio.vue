<template>
  <v-content>
    <v-layout>
			<v-container>

					<v-card class="cardify elevation-22">
						<v-img
              src='https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
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
                      <span class="fontify_body"><p>I am a 25 year old aspiring web developer. I have an interest in coding because I sincerely did not understand how it worked at all, although that is changing now. 
                      I'm particularly interested in web development because I've grown up in the age where the internet really took off, and with no signs of slowing down, 
                      I'm sure web developers are in pretty high demand, which helps because I'm looking to change careers.</p></span>
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

<style>
  .cardify {
    background-image: url('../assets/images/card_bg.jpg');
    background-size: cover
  }
  .fontify_body {
    font-family: 'Kanit', sans-serif
  }
</style>