<template>
  <v-content>
    <v-layout>
			<v-container>
					<v-card class="cardify elevation-22">
						<v-img
              src='https://c1.staticflickr.com/6/5495/10217662945_18567b7b8b_b.jpg'
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
									<span class="fontify colorize">Home</span>
									<v-icon large color="white">home </v-icon> 
								</v-tab>
                <v-tab-item>
                  <v-card class="elevation-18">
                    <v-card-text>
                      <span class="fontify_body"><p>Ahhh... the Cleveland skyline, most famous for its inability to distinguish itself. </p></span>
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
  name: 'home'
}
</script>