<template>
  <v-content>
    <v-layout>
			<v-container>
					<v-card class="cardify elevation-22">
						<v-img
              src='https://j6p9k2g4.stackpathcdn.com/wp-content/uploads/2017/10/ios_7_galaxy_wallpaper_for_desktop_by_iar7-d6av9ap-1.png'
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
									<span class="fontify colorize">My Projects</span>
									<v-icon large color="white">card_travel</v-icon>
								</v-tab>
                <v-tab-item>
                  <v-card class="elevation-18">
                    <v-card-text>
                      <span class="fontify_body"><p>You're looking at my first solo Vue build right now.  If you click the GitHub icon in the upper right, it will direct you to my GitHub repositories.</p></span>
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
  name: 'project'
}
</script>