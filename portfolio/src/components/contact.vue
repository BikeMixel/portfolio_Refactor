<template>
  <v-content>
    <v-layout>
			<v-container>
		
					<v-card class="cardify elevation-22">
						<v-img
              src='https://66.media.tumblr.com/3d64cc78b89c837714ceb4f2941ccf04/tumblr_pikga1J7co1xdm0hjo3_1280.jpg'
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
									<span class="fontify colorize">Contact Me</span>
									<v-icon large color="white">mail</v-icon>
								</v-tab>
                <v-tab-item>
                  <v-card class="elevation-18">
                    <v-container>
                        <v-form v-model="valid">
                          <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            :counter="10"
                            label="Name"
                            required
                          ></v-text-field>
                          <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                          ></v-text-field>
                          <v-text-area 
                            label="message"
                            name="message">
                          </v-text-area>
                        </v-form>
                    </v-container>
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
  .endarken {
    color: black
  }
</style>