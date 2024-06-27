<template>
  <custom-title icon="mdi-account-school-outline">
    <template #right>
      <div>
        <v-tooltip activator="parent" text="Import Excel" location="top">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="tonal"
              class="me-4 bg-secondary"
              size="small"
              icon="mdi-database-import"
            ></v-btn>
          </template>
        </v-tooltip>
      </div>
      <div>
        <v-tooltip activator="parent" text="Export Excel" location="top">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              variant="tonal"
              class="bg-green-darken-1"
              icon="mdi-database-export"
              size="small"
            ></v-btn>
          </template>
        </v-tooltip>
      </div>
      <v-btn
        variant="tonal"
        class="ms-4 bg-error"
        icon="mdi-delete-forever"
        size="small"
      ></v-btn>
      <v-btn
        variant="outlined"
        append-icon="mdi-filter-multiple-outline"
        class="text-none ms-4"
        color="primary"
      >
        {{ $t('btn.filter') }}
      </v-btn>
      <v-btn
        append-icon="mdi-plus"
        class="text-none ms-4"
        color="primary"
        :to="{ path: '/list-user' }"
      >
        {{ $t('btn.create') }}
      </v-btn>
    </template>
  </custom-title>
  <v-card class="mx-auto" hover>
    <v-card-item>
      <v-card-title>Card title</v-card-title>

      <v-card-subtitle>Card subtitle secondary text</v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </v-card-text>
  </v-card>

  <v-row align="center" justify="center" dense class="mt-1">
    <v-col cols="12" md="6">
      <v-card
        append-icon="mdi-check"
        class="mx-auto"
        prepend-icon="mdi-account"
        subtitle="prepend-icon and append-icon"
        title="Icons"
      >
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card class="mx-auto" subtitle="prepend and append" title="Icons">
        <template v-slot:prepend>
          <v-icon color="primary" icon="mdi-account"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon color="success" icon="mdi-check"></v-icon>
        </template>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
        class="mx-auto"
        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        subtitle="prepend-avatar and append-avatar"
        title="Avatars"
      >
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card class="mx-auto" subtitle="prepend and append" title="Avatars">
        <template v-slot:prepend>
          <v-avatar color="blue-darken-2">
            <v-icon icon="mdi-alarm"></v-icon>
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-avatar size="24">
            <v-img
              alt="John"
              src="https://cdn.vuetifyjs.com/images/john.png"
            ></v-img>
          </v-avatar>
        </template>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script></script>
