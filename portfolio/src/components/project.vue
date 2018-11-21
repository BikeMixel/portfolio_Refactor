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
									color="grey lighten"
									hide-slider
									icons-and-text>
								<v-tab>
									<span class="fontify colorize">My Projects</span>
									<v-icon large color="white">card_travel</v-icon>
								</v-tab>
                <v-tab-item>
                  <v-card class="elevation-18">
                    <v-card-text>
                      <span class="fontify_body"><p>Here's where I'll put a carousel... showing different projects and a link to deployed and repo</p></span>
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